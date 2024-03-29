import Container from "../components/Container";
import { Link } from "react-router-dom";
import Spinner from "../components/spinner/Spinner";
import useResetPassword from "../hooks/useResetPassword";
import { useForm } from "react-hook-form";
import resetPasswordSchema from "../shema/resetPasswordSchema";
import { zodResolver } from "@hookform/resolvers/zod";

const ResetPassword = () => {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(resetPasswordSchema),
  });
  console.log(errors);
  const { onSubmit } = useResetPassword(setError, errors);

  return (
    <Container>
      <div className="min-h-dvh flex items-center justify-center">
        <div className="md:p-5 md:shadow-2xl md:max-w-md flex flex-col w-full max-w-sm">
          <h1 className="mb-4 text-4xl font-bold">اختيار كلمة مرور جديدة</h1>
          <small>
            لتأمين حسابك، اختر كلمة مرور قوية لم تستخدمها من قبل وتتألف من ٨
            أحرف على الأقل.
          </small>
          <form className=" pt-5 space-y-5" onSubmit={handleSubmit(onSubmit)}>
            <div className="flex flex-col justify-start px-1 rounded-md">
              <input
                type="password"
                placeholder="كلمة المرور الجديدة"
                id="password"
                {...register("password")}
                className=" p-3 mb-1 border rounded-lg outline-none"
              />
              {errors.password && (
                <div className="text-red-500">{errors.password.message}</div>
              )}
              <input
                type="password"
                placeholder="إعادة كتابة كلمة المرور الجديدة"
                id="confirmPassword"
                {...register("confirmPassword")}
                className="p-3 mt-5 mb-1 border rounded-lg outline-none"
              />
              {errors.confirmPassword && (
                <div className="text-red-500">
                  {errors.confirmPassword.message}
                </div>
              )}
            </div>

            {errors.root && (
              <div className="text-red-500">{errors.root.message}</div>
            )}

            <button
              type="submit"
              className="rounded-3xl hover:bg-[#003478]  w-full py-3 text-lg font-semibold bg-[#00c2cd] text-white"
            >
              {isSubmitting ? <Spinner /> : "إرسال"}
            </button>
          </form>
        </div>
      </div>
    </Container>
  );
};

export default ResetPassword;
