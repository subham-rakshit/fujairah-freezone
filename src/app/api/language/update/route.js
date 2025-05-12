import { PERMISSIONS } from "@/constants/permissions";
import dbConnect from "@/lib/db/dbConnect";
import LanguagesModel from "@/model/Language";
import LanguageTranslationModel from "@/model/LanguageTranslation";
import { AllLanguagesSchema } from "@/schemas";
import { checkAuthorization } from "@/utils/permissionHandler";
import { errorResponse, successResponse } from "@/utils/responseHandler";
import { validateSchema } from "@/utils/validateSchemaHandler";
import mongoose from "mongoose";

export async function PUT(request) {
  await dbConnect();

  try {
    const body = await request.json();
    const { userId, targetId, name, code, app_lang_code } = body;

    // Check validate requested IDs
    if (
      !userId ||
      !targetId ||
      !mongoose.Types.ObjectId.isValid(userId) ||
      !mongoose.Types.ObjectId.isValid(targetId)
    ) {
      return errorResponse({
        message: "Invalid request. Please try again later.",
        status: 400,
      });
    }

    // Authentication Check
    const authCheck = await checkAuthorization({
      targetId: userId,
      requiredPermissions: [PERMISSIONS.LANGUAGE.EDIT_LANGUAGE],
    });
    if (!authCheck.success) {
      return errorResponse({ message: authCheck.message, status: 403 });
    }

    // VALIDATE the request data
    const validatedFields = validateSchema(AllLanguagesSchema, {
      name,
      code,
      app_lang_code,
    });
    if (!validatedFields.success) {
      return errorResponse({ status: 400, errors: validatedFields.errors });
    }

    // Check if language exists
    const existsLanguage = await LanguagesModel.findById(targetId).exec();
    if (!existsLanguage) {
      return errorResponse({
        message: "Language not found.",
        status: 404,
      });
    }

    // Default language cannot be updated
    if (existsLanguage.default) {
      return errorResponse({
        message: "Default language cannot be updated.",
        status: 400,
      });
    }

    // Check if language name and code is already in use
    const existingLanguageDetails = await LanguagesModel.findOne({
      $or: [{ code }, { name }],
      _id: { $ne: targetId },
    }).exec();
    if (existingLanguageDetails) {
      return errorResponse({
        message: `Language ${
          name === existingLanguageDetails.name ? "name" : "code"
        } is already in use.`,
        status: 400,
      });
    }

    // Set language updated values object
    const updatedLangObj = {
      name: name || existsLanguage.name,
      code: code || existsLanguage.code,
      app_lang_code: app_lang_code || existsLanguage.app_lang_code,
    };

    // Update the Language
    const updatedLang = await LanguagesModel.findOneAndUpdate(
      { _id: targetId },
      { $set: updatedLangObj },
      { new: true }
    ).exec();
    if (!updatedLang) {
      return errorResponse({
        message: "Falid to update the post. Please try again later.",
        status: 500,
      });
    }

    if (code !== existsLanguage.code) {
      // Update All Translations Data lang filed
      await LanguageTranslationModel.updateMany(
        {
          lang: existsLanguage.code,
        },
        {
          $set: {
            lang: code,
          },
        }
      );
    }

    return successResponse({
      message: `${updatedLang.name} language updated successfully. Refreshing the page...`,
      status: 200,
    });
  } catch (error) {
    console.log(`Error in updating the language SERVER: ${error}`);
    return errorResponse({
      message: "An unexpected error occurred. Internal server error.",
      status: 500,
    });
  }
}
