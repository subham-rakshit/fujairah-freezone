import dbConnect from "@/lib/db/dbConnect";
import LanguagesModel from "@/model/Language";
import LanguageTranslationModel from "@/model/LanguageTranslation";
import AllNewsCategoryModel from "@/model/news/NewsCategory";
import { errorResponse, successResponse } from "@/utils/responseHandler";

export async function GET(request) {
  await dbConnect();

  try {
    const categoryList = await AllNewsCategoryModel.find()
      .select("-__v -createdAt -updatedAt")
      .exec();

    // Fetch all active languages
    const languages = await LanguagesModel.find({
      status: true,
    }).exec();

    // Fetch translations in one query
    const categoryIds = categoryList.map((category) => category._id);
    const translations = await LanguageTranslationModel.find({
      referenceId: { $in: categoryIds },
      referenceType: "News Category",
    }).exec();

    // Map translations by category ID
    const translationMap = {};
    translations.forEach(({ referenceId, lang, title }) => {
      if (!translationMap[referenceId]) {
        translationMap[referenceId] = {};
      }
      translationMap[referenceId][lang] = title;
    });

    // Process categories and attach translations
    const formattedCategoryList = categoryList.map((eachCategory) => {
      const categoryData = eachCategory.toObject();
      categoryData.name = translationMap[eachCategory._id] || {};
      return categoryData;
    });

    return successResponse({
      status: 200,
      categories: formattedCategoryList,
    });
  } catch (error) {
    console.log(
      `Error in getting all news categories FE SERVER: ${error.stack || error}`
    );
    return errorResponse({
      message: "An unexpected error occurred. Internal server error.",
      status: 500,
    });
  }
}
