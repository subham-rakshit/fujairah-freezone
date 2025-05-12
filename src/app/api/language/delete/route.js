import { PERMISSIONS } from "@/constants/permissions";
import dbConnect from "@/lib/db/dbConnect";
import LanguagesModel from "@/model/Language";
import LanguageTranslationModel from "@/model/LanguageTranslation";
import { checkAuthorization } from "@/utils/permissionHandler";
import { errorResponse, successResponse } from "@/utils/responseHandler";
import mongoose from "mongoose";

export async function DELETE(request) {
  await dbConnect();

  try {
    const { searchParams } = new URL(request.url);
    const userId = searchParams.get("userId");
    const targetId = searchParams.get("targetId");

    // Handle not getting request data
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
      requiredPermissions: [PERMISSIONS.LANGUAGE.DELETE_LANGUAGE],
    });
    if (!authCheck.success) {
      return errorResponse({ message: authCheck.message, status: 403 });
    }

    // Get the language details
    const language = await LanguagesModel.findById(targetId).exec();
    if (!language) {
      return errorResponse({
        message: "Language does not exists.",
        status: 404,
      });
    }

    // IF language is a default language, return an error message
    if (language.default) {
      return errorResponse({
        message:
          "You cannot delete a default language. Please choose a different language to delete.",
        status: 400,
      });
    }

    // Delete the language
    const deletedLanguage = await LanguagesModel.findByIdAndDelete(
      language._id
    ).exec();
    if (!deletedLanguage) {
      return errorResponse({
        message: "Unable to delete the language. Please try again later.",
        status: 500,
      });
    }

    // Also delete all translations according to deleted language code
    await LanguageTranslationModel.deleteMany({
      lang: deletedLanguage.code,
    }).exec();

    return successResponse({
      message: `${deletedLanguage.name} language deleted successfully. Refreshing...`,
      status: 200,
    });
  } catch (error) {
    console.log(`Error in deleting the language SERVER: ${error}`);

    return errorResponse({
      message: "An unexpected error occurred. Internal server error.",
      status: 500,
    });
  }
}
