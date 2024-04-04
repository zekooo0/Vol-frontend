import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import Image from "../assets/register-img.jpg";
import Container from "../components/Container";
import useSignup from "../hooks/useSignup";
import { zodResolver } from "@hookform/resolvers/zod";
import volSignupSchema from "../shema/volSignupSchema";
import RoleRadio from "../components/RoleRadio";
import { useState } from "react";
import orgSignupSchema from "../shema/orgSignupSchema";
import Spinner from "../components/spinner/Spinner";

export default function Signup() {
  const [role, setRole] = useState("volunteer");
  const onSelectRole = (selectedVal) => {
    setRole(selectedVal);
  };

  const signupSchema = role == "volunteer" ? volSignupSchema : orgSignupSchema;
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(signupSchema),
  });

  const [selectedImages, setSelectedImages] = useState([]);
  const { onSubmit } = useSignup(role, selectedImages, setError);

  return (
    <Container>
      <div className="min-h-dvh flex items-center justify-center gap-4 py-10">
        <div className=" lg:w-1/2 flex flex-col items-center justify-center w-full">
          <h1 className="lg:text-4xl mb-10 text-2xl font-bold">إنشاء حساب</h1>
          <form
            onSubmit={handleSubmit(onSubmit)}
            encType="multipart/form-data"
            className=" flex flex-col items-center justify-center w-full max-w-sm space-y-5 rounded"
          >
            {role == "volunteer" && (
              <div className="xl:flex-row xl:space-x-2 xl:space-y-0 flex flex-col w-full gap-1">
                <div className="xl:w-1/2 flex flex-col w-full space-y-1">
                  <label htmlFor="fName">الإسم الأول</label>
                  <input
                    type="text"
                    {...register("firstName")}
                    id="fName"
                    className=" rounded-xl focus:border-indigo-950 p-2 border border-gray-800 outline-none"
                  />
                  {errors.firstName && (
                    <div className="text-red-500">
                      {errors.firstName.message}
                    </div>
                  )}
                </div>

                <div className="xl:w-1/2 flex flex-col w-full space-y-1">
                  <label htmlFor="lName">الإسم الأخير</label>
                  <input
                    type="text"
                    {...register("lastName")}
                    id="lName"
                    className=" rounded-xl focus:border-indigo-950 p-2 border border-gray-800 outline-none"
                  />
                  {errors.lastName && (
                    <div className="text-red-500">
                      {errors.lastName?.message}
                    </div>
                  )}
                </div>
              </div>
            )}

            {role == "organization" && (
              <div className=" flex flex-col w-full space-y-1">
                <label htmlFor="name">اسم المؤسسة</label>
                <input
                  type="text"
                  {...register("name")}
                  id="name"
                  className=" rounded-xl focus:border-indigo-950 p-2 border border-gray-800 outline-none"
                />
                {errors.name && (
                  <div className="text-red-500">{errors.name.message}</div>
                )}
              </div>
            )}

            <div className=" flex flex-col w-full space-y-1">
              <label htmlFor="phoneNumber">رقم التلفون</label>
              <input
                type="tel"
                {...register("mobile")}
                id="phoneNumber"
                className=" rounded-xl focus:border-indigo-950 p-2 border border-gray-800 outline-none"
              />
              {errors.mobile && (
                <div className="text-red-500">{errors.mobile.message}</div>
              )}
            </div>

            <div className=" flex flex-col w-full space-y-1">
              <label htmlFor="email">البريد الإلكترونى</label>
              <input
                type="email"
                placeholder="example@example.com"
                {...register("email")}
                id="email"
                className=" rounded-xl focus:border-indigo-950 p-2 border border-gray-800 outline-none"
              />
              {errors.email && (
                <div className="text-red-500">{errors.email.message}</div>
              )}
            </div>

            <div className=" flex flex-col w-full space-y-1">
              <label htmlFor="password">كلمة السر</label>
              <input
                type="password"
                {...register("password")}
                id="password"
                className=" rounded-xl focus:border-indigo-950 p-2 border border-gray-800 outline-none"
              />
              {errors.password && (
                <div className="text-red-500">{errors.password.message}</div>
              )}
            </div>

            <div className=" flex flex-col w-full space-y-1">
              <label htmlFor="cPassword">تأكيد كلمة المرور</label>
              <input
                type="password"
                {...register("confirmPassword")}
                id="cPassword"
                className=" rounded-xl focus:border-indigo-950 p-2 border border-gray-800 outline-none"
              />
              {errors.confirmPassword && (
                <div className="text-red-500">
                  {errors.confirmPassword.message}
                </div>
              )}
            </div>

            {role == "organization" && (
              <div className=" flex flex-col w-full space-y-1">
                <label htmlFor="papers">أوراق التوثيق</label>
                <input
                  type="file"
                  multiple
                  name="papers"
                  {...register("file")}
                  onChange={(e) => {
                    setSelectedImages(e.target.files);
                    console.log(e.target.files);
                  }}
                  id="papers"
                  className=" rounded-xl focus:border-indigo-950 p-2 border border-gray-800 outline-none"
                />
                {errors.papers && (
                  <div className="text-red-500">{errors.papers.message}</div>
                )}
              </div>
            )}

            {errors.root && (
              <div className="text-red-500">{errors.root.message}</div>
            )}

            <div>
              <p>
                لديك حساب بالفعل ؟
                <Link
                  to={`/login?role=${role}`}
                  className="pr-2 text-[#00c2cd] underline"
                >
                  سجل الدخول
                </Link>
              </p>
            </div>

            <RoleRadio onSelectRole={onSelectRole} />

            <button
              type="submit"
              className="rounded-3xl hover:bg-[#003478]  w-full py-3 text-lg font-semibold bg-[#00c2cd] text-white"
            >
              {isSubmitting ? <Spinner color={"#fff"} /> : "إنشاء حساب"}
            </button>
          </form>
        </div>
        <div className="lg:flex items-center justify-center hidden  rounded-lg overflow-hidden flex-1  max-h-[637px] ">
          <img
            src={Image}
            alt="volunteeres image"
            className=" w-min h-auto rounded-lg"
          />
        </div>
      </div>
    </Container>
  );
}
