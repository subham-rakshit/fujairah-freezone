import { EmailSchema } from "./authSchemas/emailSchema";
import { RegistrationSchema } from "./authSchemas/registrationSchema";
import { ResetPasswordSchema } from "./authSchemas/resetPassword";
import { SignInSchema } from "./authSchemas/signInSchema";
import { AllBlogsSchema } from "./pagesSchema/blogSystem/allBlogsSchema";
import { CategorySchema } from "./pagesSchema/blogSystem/categorySchema";
import { HeaderMenuSchema } from "./pagesSchema/headerMenuSchema";
import { AllLanguagesSchema } from "./pagesSchema/languageSchema";
import {
  AdminStaffSchema,
  UserUpdateSchema,
} from "./pagesSchema/user/adminStaffSchema";
import { AllPermissionsSchema } from "./pagesSchema/user/userPermissionsSchema";
import { AllUserRolesSchema } from "./pagesSchema/user/userRoleSchema";
import { HeaderSettingSchema } from "./pagesSchema/website-settings/headerSettingsSchema";

export {
  AdminStaffSchema,
  AllBlogsSchema,
  AllLanguagesSchema,
  AllPermissionsSchema,
  AllUserRolesSchema,
  CategorySchema,
  EmailSchema,
  HeaderMenuSchema,
  HeaderSettingSchema,
  RegistrationSchema,
  ResetPasswordSchema,
  SignInSchema,
  UserUpdateSchema,
};
