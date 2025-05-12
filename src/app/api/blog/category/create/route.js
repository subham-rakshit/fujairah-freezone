import { PERMISSIONS } from "@/constants/permissions";
import dbConnect from "@/lib/db/dbConnect";
import { useGenerateSlug } from "@/lib/hooks";
import AllBlogsCategoryModel from "@/model/blog/BlogsCategory";
import LanguageTranslationModel from "@/model/LanguageTranslation";
import { CategorySchema } from "@/schemas";
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
      name,
      slug,
      description,
      parentCategoryId,
      metaTitle,
      metaImage,
      metaDescription,
    } = body;

    // Check invalid inputs
    if (!userId || !mongoose.Types.ObjectId.isValid(userId)) {
      return errorResponse({
        message: "Invalid request. Please try again later.",
        status: 400,
      });
    }

    // Authentication Check
    const authCheck = await checkAuthorization({
      targetId: userId,
      requiredPermissions: [PERMISSIONS.CATEGORY.ADD_CATEGORY],
    });
    if (!authCheck.success) {
      return errorResponse({ message: authCheck.message, status: 403 });
    }

    // VALIDATE the request data
    const validatedFields = validateSchema(CategorySchema, {
      name,
      slug,
      description,
      parentCategoryId,
      metaTitle,
      metaImage,
      metaDescription,
    });
    if (!validatedFields.success) {
      return errorResponse({ status: 400, errors: validatedFields.errors });
    }

    // Set new category object
    const newCategory = {
      userId: authCheck.user._id.toString(),
      name,
      slug: slug || useGenerateSlug(name),
      description,
      parentCategoryId: parentCategoryId
        ? parentCategoryId === "none"
          ? null
          : parentCategoryId
        : null,
      metaTitle,
      metaImage: metaImage || null,
      metaDescription,
    };

    // Create new category
    const newCategoryItem = new AllBlogsCategoryModel(newCategory);
    const savedCategory = await newCategoryItem.save();

    // Store name and description in language translations as initial lang = "en"
    const languageTranslation = await updateTranslation(
      LanguageTranslationModel,
      "Category",
      savedCategory._id.toString(),
      "en",
      {
        title: savedCategory?.name || "",
        shortDescription: savedCategory?.description || "",
      }
    );
    if (!languageTranslation.success) {
      return errorResponse({
        message: languageTranslation.message,
        status: languageTranslation.status,
      });
    }

    return successResponse({
      message: `The ${savedCategory?.name || "Anonymous"}category is successfully created.`,
      status: 201,
    });
  } catch (error) {
    console.log(`Error in creating new category SERVER: `, error);

    return errorResponse({
      message: "An unexpected error occurred. Internal server error.",
      status: 500,
    });
  }
}
