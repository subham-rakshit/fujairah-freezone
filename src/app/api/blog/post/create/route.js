import { PERMISSIONS } from "@/constants/permissions";
import dbConnect from "@/lib/db/dbConnect";
import { useGenerateSlug } from "@/lib/hooks";
import AllBlogsModel from "@/model/blog/AllBlogs";
import LanguageTranslationModel from "@/model/LanguageTranslation";
import { AllBlogsSchema } from "@/schemas";
import { checkAuthorization } from "@/utils/permissionHandler";
import { errorResponse, successResponse } from "@/utils/responseHandler";
import { updateTranslation } from "@/utils/translation-helper";
import { validateSchema } from "@/utils/validateSchemaHandler";
import mongoose from "mongoose";

export async function POST(request) {
  await dbConnect();

  try {
    const body = await request.json();
    const {
      userId,
      title,
      category,
      slug,
      bannerImage,
      shortDescription,
      description,
      tags,
      source,
      metaTitle,
      metaImage,
      metaDescription,
    } = body;

    // NOTE Check invalid inputs
    if (!userId || !mongoose.Types.ObjectId.isValid(userId)) {
      return errorResponse({
        message: "Invalid request. Please try again later.",
        status: 400,
      });
    }

    // Authentication Check
    const authCheck = await checkAuthorization({
      targetId: userId,
      requiredPermissions: [PERMISSIONS.POST.ADD_POST],
    });
    if (!authCheck.success) {
      return errorResponse({ message: authCheck.message, status: 403 });
    }

    // VALIDATE the request data
    const validatedFields = validateSchema(AllBlogsSchema, {
      title,
      category,
      slug,
      bannerImage,
      shortDescription,
      description,
      tags,
      source,
      metaTitle,
      metaImage,
      metaDescription,
    });
    if (!validatedFields.success) {
      return errorResponse({ status: 400, errors: validatedFields.errors });
    }

    // Create a new blog post and save into DB
    const newBlogPost = new AllBlogsModel({
      userId: authCheck.user._id.toString(),
      title,
      category,
      slug: slug || useGenerateSlug(title),
      bannerImage: bannerImage || null,
      shortDescription,
      description,
      tags,
      source,
      metaTitle,
      metaImage: metaImage ? metaImage : bannerImage ? bannerImage : null,
      metaDescription,
    });
    const savedBlogPost = await newBlogPost.save();

    // Store title, shortDescription and description in the LanguageTranslation collection with lang = "en" default
    const createResponse = await updateTranslation(
      LanguageTranslationModel,
      "Blog",
      savedBlogPost._id.toString(),
      "en",
      {
        title,
        shortDescription,
        description,
      }
    );
    if (!createResponse.success) {
      return errorResponse({
        message: createResponse.message,
        status: createResponse.status,
      });
    }

    return successResponse({
      message: "Blog post created successfully.",
      status: 201,
    });
  } catch (error) {
    console.log("Error in creating the blog post SERVER: ", error);
    return errorResponse({
      message: "An unexpected error occurred. Internal server error.",
      status: 500,
    });
  }
}
