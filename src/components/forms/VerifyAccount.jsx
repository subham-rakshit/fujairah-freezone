"use client";

import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { ClipLoader } from "react-spinners";

import { getAccountVerify } from "@/actions/authActions";
import { globalStyleObj } from "@/app/assets/styles";
import ROUTES from "@/constants/routes";
import { useErrorToast, useSuccessToast } from "@/lib/hooks";

const VerifyAccount = () => {
  const [otpInputs, setOtpInputs] = useState(new Array(4).fill(""));
  const inputBoxRef = useRef([]); // All input box elem will store here as ref
  const [isProcessing, setIsProcessing] = useState(false);

  const router = useRouter();

  // NOTE: Initial set the focus on the first input box
  useEffect(() => {
    if (inputBoxRef.current[0]) {
      inputBoxRef.current[0].focus();
    }
  }, []);

  // NOTE: Handle OnChange
  const handleOnChange = (e, index) => {
    const value = e.target.value;

    // Check value isNaN
    if (isNaN(value)) {
      useErrorToast("Enter a valid number");
    }

    // Destructure the existing array a store in to a variable
    const newOtpArray = [...otpInputs];

    // Take only the last digit entered in each box and store it at the same index in the array as the box's position
    newOtpArray[index] = value.substring(value.length - 1);

    setOtpInputs(newOtpArray);

    // Handle the next auto focus event
    if (
      value &&
      index < otpInputs.length - 1 &&
      inputBoxRef.current[index + 1]
    ) {
      inputBoxRef.current[newOtpArray.indexOf("")].focus();
    }
  };

  // NOTE: Handle Backspace key event
  const handleKeyDown = (e, index) => {
    if (
      e.key === "Backspace" &&
      !otpInputs[index] &&
      index > 0 &&
      inputBoxRef.current[index - 1]
    ) {
      inputBoxRef.current[index - 1].focus();
    }
  };

  // NOTE: Handle Verify Button clicks
  const handleVerifyAccount = async (e) => {
    e.preventDefault();

    const otp = otpInputs.join("");

    if (otp && otp.length === 4) {
      setIsProcessing(true);

      const response = await getAccountVerify(otp);

      if (response.success) {
        useSuccessToast(response.message);
        setOtpInputs(new Array(4).fill(""));
        inputBoxRef.current[0].focus();
        router.push(ROUTES.LOGIN); // Redirect to login page
      } else {
        useErrorToast(data.message);
        setOtpInputs(new Array(4).fill(""));
        inputBoxRef.current[0].focus();
      }

      setIsProcessing(false);
    } else {
      setOtpInputs(new Array(4).fill(""));
      inputBoxRef.current[0].focus();

      useErrorToast("Please fill the inputs value properly");
    }
  };

  return (
    <>
      <form onSubmit={handleVerifyAccount} className="w-full">
        <div className="my-5 flex w-full items-center justify-center gap-4">
          {otpInputs.map((value, index) => {
            return (
              <input
                key={`box${index + 1}`}
                type="text"
                value={value}
                onChange={(e) => handleOnChange(e, index)}
                onKeyDown={(e) => handleKeyDown(e, index)}
                ref={(input) => (inputBoxRef.current[index] = input)}
                className="size-10 rounded-md border border-gray-400 bg-[#F3F6F9] text-center text-dark-weight-500 font-poppins-md shadow-light"
              />
            );
          })}
        </div>

        <button
          type="submit"
          disabled={isProcessing}
          className={`${globalStyleObj.authButton} w-full ${
            isProcessing ? "cursor-not-allowed" : ""
          }`}
        >
          {isProcessing ? (
            <span className="flex items-center gap-4">
              <ClipLoader color="#ffffff" size={16} />
              <span className="text-light-weight-850">Processing...</span>
            </span>
          ) : (
            "Confirm"
          )}
        </button>
      </form>
    </>
  );
};

export default VerifyAccount;
