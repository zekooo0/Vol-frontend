import React from "react";
import Container from "../components/Container";
import { Link, useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import useVerifyCode from "../hooks/useVerifyCode";
import { zodResolver } from "@hookform/resolvers/zod";
import verifyCodeSchema from "../shema/verifyCodeSchema";

const VerifyCode = () => {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(verifyCodeSchema),
  });
  const { email } = useParams();
  const { onSubmit, resendCode } = useVerifyCode(setError, email);

  return (
    <Container>
      <div className=" md:pt-40 flex items-center justify-center h-full pt-20">
        <div className="md:p-5 md:shadow-2xl md:max-w-md flex flex-col w-full max-w-sm">
          <h1 className="mb-4 text-4xl font-bold">
            إدخال الرمز المؤلف من 6 أرقام
          </h1>
          <form className=" pt-5 space-y-5" onSubmit={handleSubmit(onSubmit)}>
            <div className="flex flex-col justify-start px-1">
              <input
                type="number"
                placeholder="رمز من 6 أرقام"
                {...register("code")}
                id="code"
                className=" rounded-xl focus:border-indigo-950 p-2 border border-gray-800 outline-none"
              />
            </div>
            {errors.code && (
              <div className="text-red-500">{errors.code.message}</div>
            )}
            {errors.root && (
              <div className="text-red-500">{errors.root.message}</div>
            )}

            <div
              className="text-lg font-semibold text-indigo-800 underline cursor-pointer"
              onClick={(e) => resendCode(email)}
            >
              إعادة إرسال الرمز
            </div>
            <button
              type="submit"
              className="rounded-3xl hover:bg-[#003478]  w-full py-3 text-lg font-semibold bg-[#00c2cd] text-white"
            >
              <Link to="/reset-password">إرسال</Link>
            </button>
            <button
              type="submit"
              className="rounded-3xl hover:bg-[#003478] hover:text-white w-full py-3 text-lg font-semibold"
            >
              <Link to="/login">الرجوع</Link>
            </button>
            <p>
              إذا كنت لا ترى رمزًا في بريدك الوارد، فتحقق من مجلد البريد غير
              المرغوب فيه. إذا لم يكن موجودًا، فقد لا يتم تأكيد عنوان البريد
              الإلكتروني أو قد لا يتطابق مع حساب موجود.
            </p>
          </form>
        </div>
      </div>
    </Container>
  );
};

export default VerifyCode;
