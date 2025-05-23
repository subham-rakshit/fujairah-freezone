"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import setLanguageAction from "@/i18n/set-language-action";
import Image from "next/image";

const LanguageSwitcher = ({ pathname, currentLanguage = "en" }) => {
  const languageList = [
    {
      _id: "lang-en",
      name: "English",
      code: "en",
      app_lang_code: "en",
      rtl: false,
      status: true,
    },
    {
      _id: "lang-ar",
      name: "عربي",
      code: "ar",
      app_lang_code: "ar",
      rtl: true,
      status: true,
    },
  ];

  return (
    <div className="flex items-center gap-2">
      {/* Lang Logo */}
      <div className="size-[25px] rounded-full border border-grey relative overflow-hidden">
        <Image
          src={`/assets/flags/${currentLanguage || "en"}.svg`}
          alt={currentLanguage || "en"}
          fill
          priority={false}
        />
      </div>
      {/* Lang Select */}
      {languageList.length > 0 && (
        <Select
          key="language-selection"
          // defaultOpen={false}
          open={false}
          // disabled={true}
          value={currentLanguage || "en"}
          onValueChange={(value) => setLanguageAction(value)}
        >
          <SelectTrigger
            className={`size-fit p-0 body2 text-dark-white font-poppins-rg font-[500] border-none outline-none focus:ring-0 focus:outline-none gap-1 shadow-none`}
          >
            <SelectValue placeholder="Lanugage" />
          </SelectTrigger>
          <SelectContent align="end" className="text-3 bg-white z-[999]">
            {languageList.map(
              (eachLang) =>
                eachLang.status && (
                  <SelectItem key={eachLang._id} value={eachLang.code}>
                    {eachLang.name[0].toUpperCase() + eachLang.name.slice(1)}
                  </SelectItem>
                )
            )}
          </SelectContent>
        </Select>
      )}
    </div>
  );
};

export default LanguageSwitcher;
