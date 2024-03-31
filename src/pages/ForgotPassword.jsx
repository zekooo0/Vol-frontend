import Container from "../components/Container";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import useForgetPassword from "../hooks/useForgetPassword";
import Spinner from "../components/spinner/Spinner";
import { zodResolver } from "@hookform/resolvers/zod";
import forgetPasswordSchema from "../shema/forgetPasswordSchema";

const ForgotPassword = () => {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(forgetPasswordSchema),
  });
  const { onSubmit } = useForgetPassword(setError, errors);

  return (
    <Container>
      <div className="min-h-dvh flex items-center justify-center pt-20">
        <div className="md:p-5 md:shadow-2xl md:max-w-md flex flex-col w-full max-w-sm">
          <h1 className="mb-4 text-4xl font-bold">هل نسيت كلمة المرور؟</h1>
          <form className=" pt-5 space-y-5" onSubmit={handleSubmit(onSubmit)}>
            <div className="flex flex-col justify-start px-1">
              <label htmlFor="email">البريد الإلكترونى</label>
              <input
                type="email"
                placeholder="example@example.com"
                {...register("email")}
                id="email"
                className=" rounded-xl focus:border-indigo-950 px-2 py-4 mt-2 border border-gray-800 outline-none"
              />
              {errors.email && (
                <div className="text-red-500">{errors.email.message}</div>
              )}
            </div>

            {errors.root && (
              <div className="text-red-500">{errors.root.message}</div>
            )}

            <p>
              سنرسل رمز تحقق إلى هذا البريد الإلكتروني أو رقم الهاتف إذا كان
              يتطابق مع حساب موجود.
            </p>
            <button
              type="submit"
              className="rounded-3xl hover:bg-[#003478] text-white  w-full py-3 text-lg font-semibold bg-[#00c2cd]"
            >
              {isSubmitting ? <Spinner /> : "التالي"}
            </button>
          </form>
          <Link to="/login">
            <button className="rounded-3xl hover:bg-gray-600 w-full py-3 my-5 text-lg font-semibold text-white bg-gray-500">
              رجوع
            </button>
          </Link>
        </div>
      </div>
    </Container>
  );
};

export default ForgotPassword;
