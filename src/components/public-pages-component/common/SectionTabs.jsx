import { FontResizerWrapper } from "..";

const SectionTabs = ({ tabs = [], activeTab = "" }) => {
  if (tabs.length === 0) return null;

  return (
    <ul className="flex flex-wrap items-center gap-5 mb-[24px]">
      {tabs.map((tab, index) => (
        <li
          key={`tab-${index + 1}`}
          className={`px-5 py-4 rounded-[60px] ${
            activeTab === tab.name.toLowerCase().split(" ").join("-")
              ? "bg-primary-400"
              : "bg-white dark:bg-[#ffffff20] border border-[#00587E]"
          }`}
        >
          <FontResizerWrapper
            as="span"
            fontClasses={{
              0: "body-0-1",
              1: "body1",
              2: "body-1-1",
            }}
            className={`dark:text-dark-white font-family-secondary font-[500] ${
              activeTab === tab.name.toLowerCase().split(" ").join("-")
                ? "text-dark-white"
                : "text-primary-400"
            }`}
          >
            {tab.name}
          </FontResizerWrapper>
        </li>
      ))}
    </ul>
  );
};

export default SectionTabs;
