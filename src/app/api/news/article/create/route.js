import { PERMISSIONS } from "@/constants/permissions";
import dbConnect from "@/lib/db/dbConnect";
import { useGenerateSlug } from "@/lib/hooks";
import LanguageTranslationModel from "@/model/LanguageTranslation";
import AllNewsArticleModel from "@/model/news/NewsArticle";
import { AllNewsArticleSchema } from "@/schemas/pagesSchema/newsSystem/newsArticleSchema";
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
      requiredPermissions: [PERMISSIONS.NEWS.ADD_NEWS_ARTICLE],
    });
    if (!authCheck.success) {
      return errorResponse({ message: authCheck.message, status: 403 });
    }

    // VALIDATE the request data
    const validatedFields = validateSchema(AllNewsArticleSchema, {
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

    // Create a new news article and save into DB
    const newNewsArticle = new AllNewsArticleModel({
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
    const savedNewsArticle = await newNewsArticle.save();

    // Store title, shortDescription and description in the LanguageTranslation collection with lang = "en" default
    const createResponse = await updateTranslation(
      LanguageTranslationModel,
      "News Article",
      savedNewsArticle._id.toString(),
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
      message: "News Article created successfully.",
      status: 201,
    });
  } catch (error) {
    console.log("Error in creating news article SERVER: ", error);
    return errorResponse({
      message: "An unexpected error occurred. Internal server error.",
      status: 500,
    });
  }
}
