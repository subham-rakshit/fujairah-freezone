import { FaLongArrowAltRight } from "react-icons/fa";
import { FontResizerWrapper } from "..";

const BackgroundRevealButton = ({
  btnLabel = "",
  textColor = "text-[#fff]",
  customFontSize = {
    0: "body-0-1",
    1: "body1",
    2: "body-1-1",
  },
  btnHeight = "h-14",
  innerBtnContainerWidth = "w-14",
  iconSize = 20,
}) => {
  return (
    <button
      className={`${btnHeight} group relative bg-transparent transition-all duration-500 ease-in-out rounded-full`}
    >
      <div
        className={`absolute top-0 left-0 rounded-full bg-[#E4E419] ${innerBtnContainerWidth} h-full group-hover:bg-[#005b78] group-hover:w-full transition-all duration-500 ease-in-out`}
      />

      <span className="relative z-[99] flex items-center justify-center px-[30px]">
        <FontResizerWrapper
          as="span"
          fontClasses={customFontSize}
          className={`${textColor} group-hover:text-dark-white font-family-secondary font-[500] transition-all duration-500 ease-in-out uppercase`}
        >
          {btnLabel}
        </FontResizerWrapper>
        <FaLongArrowAltRight
          size={iconSize}
          className={`${textColor} ml-2 z-[99] group-hover:bg-[#fff] group-hover:text-[#005b78] group-hover:p-[3px] group-hover:rounded-full transition-all duration-500 ease-in-out`}
        />
      </span>
    </button>
  );
};

export default BackgroundRevealButton;
