"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { ClipLoader } from "react-spinners";

import { resetPassword } from "@/actions/authActions";
import { globalStyleObj } from "@/app/assets/styles";
import ROUTES from "@/constants/routes";
import { useErrorToast, useSuccessToast } from "@/lib/hooks";
import { ResetPasswordSchema } from "@/schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { LabelText, PasswordInputFiled } from "..";

const ResetPasswordForm = () => {
  const [isCodeVisible, setIsCodeVisible] = useState(false);
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [isConfirmPasswordVisible, setIsConfirmPasswordVisible] =
    useState(false);

  const {
    control,
    handleSubmit,
    formState: { errors, isSubmitting },
    setError,
    reset,
  } = useForm({ resolver: zodResolver(ResetPasswordSchema) });

  const router = useRouter();

  // Error handling function
  const handleZodValidationErrors = (errors) => {
    Object.keys(errors).forEach((field) => {
      setError(field, {
        type: "server",
        message: errors[field].message,
      });
    });
  };

  const onSubmit = async (data) => {
    const response = await resetPassword(data);

    if (response.success) {
      useSuccessToast(response.message);
      reset();
      router.push(ROUTES.LOGIN); // Redirect to Login page
    } else {
      if (response.errors) {
        handleZodValidationErrors(response.errors);
      } else {
        useErrorToast(response.message);
      }
    }
  };

  return (
    <>
      {/* Form Element */}
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* Password Reset Code Input */}
        <div className="mb-5">
          <LabelText
            text="CODE"
            htmlForId="pass-reset-code"
            star={true}
            darkTheme="NO_DARK"
          />

          <PasswordInputFiled
            fieldName="resetPasswordCode"
            fieldId="pass-reset-code"
            control={control}
            errors={errors}
            errorsType={errors?.resetPasswordCode}
            placeholderText="Enter your reset code"
          />
        </div>

        {/* New Password Input */}
        <div className="mb-5">
          <LabelText
            text="New Password"
            htmlForId="new-password"
            star={true}
            darkTheme="NO_DARK"
          />

          <PasswordInputFiled
            fieldName="newPassword"
            fieldId="new-password"
            control={control}
            errors={errors}
            errorsType={errors?.newPassword}
            placeholderText="Enter your new password"
          />
        </div>

        {/* Confirm New Password Input */}
        <div className="mb-5">
          <LabelText
            text="Confirm Password"
            htmlForId="confirm-new-password"
            star={true}
            darkTheme="NO_DARK"
          />

          <PasswordInputFiled
            fieldName="confirmNewPassword"
            fieldId="confirm-new-password"
            control={control}
            errors={errors}
            errorsType={errors?.confirmNewPassword}
            placeholderText="Confirm your password"
          />
        </div>

        {/* Sign up Button */}
        <button
          type="submit"
          disabled={isSubmitting}
          className={`${globalStyleObj.authButton} mt-3 w-full ${
            isSubmitting ? "cursor-not-allowed" : ""
          }`}
        >
          {isSubmitting ? (
            <span className="flex items-center gap-4">
              <ClipLoader color="#ffffff" size={16} />
              <span className="text-light-weight-850">Processing...</span>
            </span>
          ) : (
            "Submit"
          )}
        </button>
      </form>
    </>
  );
};

export default ResetPasswordForm;
