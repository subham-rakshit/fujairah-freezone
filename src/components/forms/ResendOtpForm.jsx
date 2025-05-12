"use client";

import { useRouter } from "next/navigation";
import { ClipLoader } from "react-spinners";

import { resendOtp } from "@/actions/authActions";
import { globalStyleObj } from "@/app/assets/styles";
import ROUTES from "@/constants/routes";
import { useErrorToast, useSuccessToast } from "@/lib/hooks";
import { EmailSchema } from "@/schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { LabelText, TextInputField } from "..";

const ResendOtpForm = () => {
  const {
    control,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
    setError,
  } = useForm({ resolver: zodResolver(EmailSchema) });
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
    const response = await resendOtp(data);

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

  return (
    <>
      {/* Form Element */}
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* Fogot Password Email Input */}
        <div className="mb-5">
          <LabelText
            text="Email"
            htmlForId="resend-otp-email"
            star={true}
            darkTheme="NO_DARK"
          />

          <TextInputField
            fieldName="email"
            fieldType="email"
            fieldId="resend-otp-email"
            control={control}
            errors={errors}
            errorsType={errors?.email}
            placeholderText="Enter email address"
          />
        </div>

        {/* Sign in Button */}
        <button
          type="submit"
          disabled={isSubmitting}
          className={`${globalStyleObj.authButton} w-full ${
            isSubmitting ? "cursor-not-allowed" : ""
          }`}
        >
          {isSubmitting ? (
            <span className="flex items-center gap-4">
              <ClipLoader color="#ffffff" size={16} />
              <span className="text-light-weight-850">Processing...</span>
            </span>
          ) : (
            "Send OTP"
          )}
        </button>
      </form>
    </>
  );
};

export default ResendOtpForm;
