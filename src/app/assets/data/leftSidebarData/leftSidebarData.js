import { PERMISSIONS } from "@/constants/permissions";
import ROUTES from "@/constants/routes";
import { CgMenuRound } from "react-icons/cg";
import { FaNewspaper, FaUsersCog } from "react-icons/fa";
import { MdOutlineArticle, MdOutlineFolder, MdSettings } from "react-icons/md";
import { RiDashboard2Fill } from "react-icons/ri";

const leftSidebarData = [
  {
    tabCategory: "Menu",
    tabNameList: [
      {
        id: "Dashboard",
        tabName: "Dashboards",
        tabIcon: <RiDashboard2Fill />,
        tabDropdownList: [
          {
            id: "dashboard-analytics",
            parentTabId: "Dashboard",
            tabName: "Analytics",
            pathName: ROUTES.ADMIN_DASHBOARD_ANALYTICS,
            tabDropdownList: [],
          },
          {
            id: "dashboard-crm",
            parentTabId: "Dashboard",
            tabName: "CRM",
            pathName: ROUTES.ADMIN_DASHBOARD_CRM,
            tabDropdownList: [],
          },
          {
            id: "dashboard",
            parentTabId: "Dashboard",
            tabName: "Ecommerce",
            pathName: ROUTES.ADMIN_DASHBOARD_ECOMMERCE,
            tabDropdownList: [],
          },
        ],
      },

      {
        id: "Blog",
        tabName: "Blog System",
        tabIcon: <MdOutlineArticle />,
        required_permissions: [
          PERMISSIONS.POST.VIEW_ALL_POSTS,
          PERMISSIONS.POST.ADD_POST,
          PERMISSIONS.POST.EDIT_POST,
          PERMISSIONS.CATEGORY.VIEW_ALL_CATEGORIES,
          PERMISSIONS.CATEGORY.ADD_CATEGORY,
          PERMISSIONS.CATEGORY.EDIT_CATEGORY,
        ],
        tabDropdownList: [
          {
            id: "blog-post",
            parentTabId: "Blog",
            tabName: "Posts",
            pathName: "#",
            required_permissions: [
              PERMISSIONS.POST.VIEW_ALL_POSTS,
              PERMISSIONS.POST.ADD_POST,
              PERMISSIONS.POST.EDIT_POST,
            ],
            tabDropdownList: [
              {
                id: "blog-post-view",
                parentTabId: "Blog",
                firstChildId: "blog-post",
                tabName: "All Posts",
                pathName: ROUTES.ADMIN_BLOG_ALL_POSTS,
                required_permission: PERMISSIONS.POST.VIEW_ALL_POSTS,
                tabDropdownList: [],
              },
              {
                id: "blog-post-create",
                parentTabId: "Blog",
                firstChildId: "blog-post",
                tabName: "Create Post",
                pathName: ROUTES.ADMIN_BLOG_CREATE_POST,
                required_permission: PERMISSIONS.POST.ADD_POST,
                tabDropdownList: [],
              },
            ],
          },

          {
            id: "blog-category",
            parentTabId: "Blog",
            tabName: "Categories",
            pathName: "#",
            required_permissions: [
              PERMISSIONS.CATEGORY.VIEW_ALL_CATEGORIES,
              PERMISSIONS.CATEGORY.ADD_CATEGORY,
              PERMISSIONS.CATEGORY.EDIT_CATEGORY,
            ],
            tabDropdownList: [
              {
                id: "blog-category-view",
                parentTabId: "Blog",
                firstChildId: "blog-category",
                tabName: "All Categories",
                pathName: ROUTES.ADMIN_BLOG_ALL_CATEGORY,
                required_permission: PERMISSIONS.CATEGORY.VIEW_ALL_CATEGORIES,
                tabDropdownList: [],
              },
              {
                id: "blog-category-create",
                parentTabId: "Blog",
                firstChildId: "blog-category",
                tabName: "Create Category",
                pathName: ROUTES.ADMIN_BLOG_CREATE_CATEGORY,
                required_permission: PERMISSIONS.CATEGORY.ADD_CATEGORY,
                tabDropdownList: [],
              },
            ],
          },
        ],
      },

      {
        id: "News",
        tabName: "News System",
        tabIcon: <FaNewspaper />,
        required_permissions: [
          PERMISSIONS.NEWS.VIEW_ALL_NEWS_ARTICLES,
          PERMISSIONS.NEWS.ADD_NEWS_ARTICLE,
          PERMISSIONS.NEWS.EDIT_NEWS_ARTICLE,
          PERMISSIONS.NEWS.VIEW_ALL_NEWS_CATEGORIES,
          PERMISSIONS.NEWS.ADD_NEWS_CATEGORY,
          PERMISSIONS.NEWS.EDIT_NEWS_CATEGORY,
        ],
        tabDropdownList: [
          {
            id: "news-article",
            parentTabId: "News",
            tabName: "News Articles",
            pathName: "#",
            required_permissions: [
              PERMISSIONS.NEWS.VIEW_ALL_NEWS_ARTICLES,
              PERMISSIONS.NEWS.ADD_NEWS_ARTICLE,
              PERMISSIONS.NEWS.EDIT_NEWS_ARTICLE,
            ],
            tabDropdownList: [
              {
                id: "news-article-view",
                parentTabId: "News",
                firstChildId: "news-article",
                tabName: "All News",
                pathName: ROUTES.ADMIN_ALL_NEWS_ARTICLES,
                required_permission: PERMISSIONS.NEWS.VIEW_ALL_NEWS_ARTICLES,
                tabDropdownList: [],
              },
              {
                id: "news-article-create",
                parentTabId: "News",
                firstChildId: "news-article",
                tabName: "Create News",
                pathName: ROUTES.ADMIN_CREATE_NEWS_ARTICLE,
                required_permission: PERMISSIONS.NEWS.ADD_NEWS_ARTICLE,
                tabDropdownList: [],
              },
            ],
          },

          {
            id: "news-category",
            parentTabId: "News",
            tabName: "News Categories",
            pathName: "#",
            required_permissions: [
              PERMISSIONS.NEWS.VIEW_ALL_NEWS_CATEGORIES,
              PERMISSIONS.NEWS.ADD_NEWS_CATEGORY,
              PERMISSIONS.NEWS.EDIT_NEWS_CATEGORY,
            ],
            tabDropdownList: [
              {
                id: "news-category-view",
                parentTabId: "News",
                firstChildId: "news-category",
                tabName: "All News Categories",
                pathName: ROUTES.ADMIN_ALL_NEWS_CATEGORIES,
                required_permission: PERMISSIONS.NEWS.VIEW_ALL_NEWS_CATEGORIES,
                tabDropdownList: [],
              },
              {
                id: "news-category-create",
                parentTabId: "News",
                firstChildId: "news-category",
                tabName: "Create News Category",
                pathName: ROUTES.ADMIN_CREATE_NEWS_CATEGORY,
                required_permission: PERMISSIONS.NEWS.ADD_NEWS_CATEGORY,
                tabDropdownList: [],
              },
            ],
          },
        ],
      },

      {
        id: "File",
        tabName: "Files Console",
        tabIcon: <MdOutlineFolder />,
        required_permissions: [
          PERMISSIONS.FILE.VIEW_ALL_FILES,
          PERMISSIONS.FILE.ADD_FILE,
        ],
        tabDropdownList: [
          {
            id: "file-view",
            parentTabId: "File",
            tabName: "File Lists",
            pathName: ROUTES.ADMIN_ALL_FILES,
            required_permission: PERMISSIONS.FILE.VIEW_ALL_FILES,
            tabDropdownList: [],
          },
          {
            id: "file-create",
            parentTabId: "File",
            tabName: "Create File",
            pathName: ROUTES.ADMIN_CREATE_FILE,
            required_permission: PERMISSIONS.FILE.ADD_FILE,
            tabDropdownList: [],
          },
        ],
      },

      {
        id: "Menu",
        tabName: "Menu Management",
        tabIcon: <CgMenuRound />,
        required_permissions: [
          PERMISSIONS.MENU_MANAGEMENT.VIEW_ALL_MENUS,
          PERMISSIONS.MENU_MANAGEMENT.ADD_MENU,
        ],
        tabDropdownList: [
          {
            id: "menu-view",
            parentTabId: "Menu",
            tabName: "All Menus",
            pathName: ROUTES.ADMIN_MENU_LISTS,
            required_permission: PERMISSIONS.MENU_MANAGEMENT.VIEW_ALL_MENUS,
            tabDropdownList: [],
          },

          {
            id: "menu-create",
            parentTabId: "Menu",
            tabName: "Create Menu",
            pathName: ROUTES.ADMIN_ADD_NEW_MENU,
            required_permission: PERMISSIONS.MENU_MANAGEMENT.ADD_MENU,
            tabDropdownList: [],
          },
        ],
      },

      // {
      //   id: "Website",
      //   tabName: "Website Setup",
      //   tabIcon: <MdDisplaySettings />,
      //   required_permissions: [PERMISSIONS.WEBSITE_SETUP.HEADER_SETUP],
      //   tabDropdownList: [
      //     {
      //       id: "website-general",
      //       parentTabId: "Website",
      //       tabName: "General Settings",
      //       pathName: ROUTES.ADMIN_WEBSITE_GENERAL_SETTINGS,
      //       required_permission: PERMISSIONS.WEBSITE_SETUP.GENERAL_SETTINGS,
      //       tabDropdownList: [],
      //     },
      //     {
      //       id: "website-footer",
      //       parentTabId: "Website",
      //       tabName: "Footer",
      //       pathName: ROUTES.ADMIN_WEBSITE_FOOTER_SETTINGS,
      //       required_permission: PERMISSIONS.WEBSITE_SETUP.FOOTER_SETUP,
      //       tabDropdownList: [],
      //     },
      //   ],
      // },

      {
        id: "Configurations",
        tabName: "Setup & Configurations",
        tabIcon: <MdSettings />,
        required_permissions: [
          PERMISSIONS.LANGUAGE.VIEW_ALL_LANGUAGES,
          PERMISSIONS.LANGUAGE.ADD_LANGUAGE,
          PERMISSIONS.LANGUAGE.EDIT_LANGUAGE,
        ],
        tabDropdownList: [
          {
            id: "configurations-language",
            parentTabId: "Configurations",
            tabName: "Languages",
            pathName: "#",
            required_permissions: [
              PERMISSIONS.LANGUAGE.VIEW_ALL_LANGUAGES,
              PERMISSIONS.LANGUAGE.ADD_LANGUAGE,
              PERMISSIONS.LANGUAGE.EDIT_LANGUAGE,
            ],
            tabDropdownList: [
              {
                id: "configurations-language-view",
                parentTabId: "Configurations",
                firstChildId: "configurations-language",
                tabName: "All Languages",
                pathName: ROUTES.ADMIN_ALL_LANGUAGES,
                required_permission: PERMISSIONS.LANGUAGE.VIEW_ALL_LANGUAGES,
                tabDropdownList: [],
              },
              {
                id: "configurations-language-create",
                parentTabId: "Configurations",
                firstChildId: "configurations-language",
                tabName: "Create Language",
                pathName: ROUTES.ADMIN_CREATE_LANGUAGE,
                required_permission: PERMISSIONS.LANGUAGE.ADD_LANGUAGE,
                tabDropdownList: [],
              },
            ],
          },
          {
            id: "configurations-appearance",
            parentTabId: "Configurations",
            tabName: "Appearance",
            pathName: ROUTES.ADMIN_WEBSITE_APPEARANCE_SETUP,
            required_permission: PERMISSIONS.WEBSITE_SETUP.GENERAL_SETTINGS,
            tabDropdownList: [],
          },
          {
            id: "configurations-footer",
            parentTabId: "Configurations",
            tabName: "Footer",
            pathName: ROUTES.ADMIN_WEBSITE_FOOTER_SETUP,
            required_permission: PERMISSIONS.WEBSITE_SETUP.FOOTER_SETUP,
            tabDropdownList: [],
          },
        ],
      },

      {
        id: "Staff",
        tabName: "Staff Management",
        tabIcon: <FaUsersCog />,
        required_permissions: [
          PERMISSIONS.STAFF.VIEW_ALL_STAFFS,
          PERMISSIONS.STAFF.EDIT_STAFF,
          PERMISSIONS.STAFF.VIEW_STAFF_ROLES,
          PERMISSIONS.STAFF.ADD_STAFF_ROLE,
          PERMISSIONS.STAFF.EDIT_STAFF_ROLE,
        ],
        tabDropdownList: [
          {
            id: "staff-view",
            parentTabId: "Staff",
            tabName: "All Staff",
            pathName: ROUTES.ADMIN_ALL_STAFF,
            required_permission: PERMISSIONS.STAFF.VIEW_ALL_STAFFS,
            tabDropdownList: [],
          },
          {
            id: "staff-role",
            parentTabId: "Staff",
            tabName: "Roles",
            pathName: "#",
            required_permissions: [
              PERMISSIONS.STAFF.VIEW_STAFF_ROLES,
              PERMISSIONS.STAFF.ADD_STAFF_ROLE,
              PERMISSIONS.STAFF.EDIT_STAFF_ROLE,
            ],
            tabDropdownList: [
              {
                id: "staff-role-view",
                parentTabId: "Staff",
                firstChildId: "staff-role",
                tabName: "All Roles",
                pathName: ROUTES.ADMIN_STAFF_ALL_ROLES,
                required_permission: PERMISSIONS.STAFF.VIEW_STAFF_ROLES,
                tabDropdownList: [],
              },
              {
                id: "staff-role-create",
                parentTabId: "Staff",
                firstChildId: "staff-role",
                tabName: "Create Role",
                pathName: ROUTES.ADMIN_STAFF_CREATE_ROLE,
                required_permission: PERMISSIONS.STAFF.ADD_STAFF_ROLE,
                tabDropdownList: [],
              },
            ],
          },
        ],
      },
    ],
  },
];

export default leftSidebarData;
