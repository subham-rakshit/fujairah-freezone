import mongoose from "mongoose";

const languageTranslationSchema = new mongoose.Schema(
  {
    referenceType: {
      type: String,
      required: true,
    },
    referenceId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      refPath: "referenceType", // Picks the value of referenceType dynamically
    },
    lang: {
      type: String,
      required: true,
    }, // Language Code ("en" || "ar")
    title: {
      type: String,
      required: true,
    },
    shortDescription: {
      type: String,
      default: "",
    },
    description: {
      type: String,
      default: "",
    },
  },
  {
    timestamps: true,
  }
);

const LanguageTranslationModel =
  mongoose.models.lang_translation ||
  mongoose.model("lang_translation", languageTranslationSchema);

export default LanguageTranslationModel;
