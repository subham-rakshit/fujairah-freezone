"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { ClipLoader } from "react-spinners";

import { addUserByRegistration } from "@/actions/authActions";
import { globalStyleObj } from "@/app/assets/styles";
import ROUTES from "@/constants/routes";
import { useErrorToast, useSuccessToast } from "@/lib/hooks";
import { RegistrationSchema } from "@/schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { LabelText, PasswordInputFiled, TextInputField } from "..";

const RegistrationForm = () => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [isConfirmPasswordVisible, setIsConfirmPasswordVisible] =
    useState(false);

  const {
    control,
    handleSubmit,
    formState: { errors, isSubmitting },
    setError,
    reset,
  } = useForm({
    resolver: zodResolver(RegistrationSchema),
  });

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

  // Handle form onSubmit function
  const onSubmit = async (data) => {
    const response = await addUserByRegistration(data);

    if (response.success) {
      useSuccessToast(response.message);
      reset();
      router.push(ROUTES.AUTH_TWO_STEP);
    } else {
      if (response.errors) {
        handleZodValidationErrors(response.errors);
      } else {
        useErrorToast(response.message);
      }
    }
  };

  const commonInputClass =
    "w-full rounded-md border border-gray-400 px-3 py-2 font-poppins-rg text-[13px] text-dark-weight-400 focus:outline-none focus:ring-0 mt-2 bg-transparent";
  const commonInputErrorClass = "text-red-500 text-[12px] font-poppins-rg";

  return (
    <>
      {/* Form Element */}
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* Username Input */}
        <div className="mb-5">
          <LabelText
            text="Name"
            htmlForId="signup-username"
            star={true}
            darkTheme="NO_DARK"
          />

          <TextInputField
            fieldName="username"
            fieldType="text"
            fieldId="signup-username"
            control={control}
            errors={errors}
            errorsType={errors?.username}
            placeholderText="Enter your full name"
          />
        </div>

        {/* Email Input */}
        <div className="mb-5">
          <LabelText
            text="Email"
            htmlForId="signup-email"
            star={true}
            darkTheme="NO_DARK"
          />

          <TextInputField
            fieldName="email"
            fieldType="email"
            fieldId="signup-email"
            control={control}
            errors={errors}
            errorsType={errors?.email}
            placeholderText="Enter email address"
          />
        </div>

        {/* Password Input */}
        <div className="mb-5">
          <LabelText
            text="Password"
            htmlForId="signup-password"
            star={true}
            darkTheme="NO_DARK"
          />

          <PasswordInputFiled
            fieldName="password"
            fieldId="signup-password"
            control={control}
            errors={errors}
            errorsType={errors?.password}
            placeholderText="Enter your password"
          />
        </div>

        {/* Confirm Password Input */}
        <div className="mb-5">
          <LabelText
            text="Confirm Password"
            htmlForId="signup-confirm-password"
            star={true}
            darkTheme="NO_DARK"
          />

          <PasswordInputFiled
            fieldName="confirmPassword"
            fieldId="signup-confirm-password"
            control={control}
            errors={errors}
            errorsType={errors?.confirmPassword}
            placeholderText="Confirm your password"
          />
        </div>

        <p className={`${globalStyleObj.formDescription} mt-2 italic`}>
          By registering you agree to the Velzon{" "}
          <Link href="#">
            <span className="font-poppins-md not-italic text-[#405189] underline">
              Terms of Use
            </span>
          </Link>
        </p>

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
            "Sign Up"
          )}
        </button>
      </form>
    </>
  );
};

export default RegistrationForm;
