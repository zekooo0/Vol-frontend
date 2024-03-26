import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import Image from '../assets/register-img.jpg';
import Container from '../components/Container';
import useSignup from '../hooks/useSignup';

export default function Signup() {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
  } = useForm();
  const { onSubmit } = useSignup(setError, errors);
  console.log(errors);

  return (
    <Container>
      <div className="h-dvh flex items-center justify-center gap-4 py-10">
        <div className=" lg:w-1/2 flex flex-col items-center justify-center w-full">
          <h1 className="lg:text-4xl mb-10 text-2xl font-bold">إنشاء حساب</h1>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className=" flex flex-col items-center justify-center w-full max-w-sm space-y-5 rounded"
          >
            <div className="xl:flex-row xl:space-x-2 xl:space-y-0 flex flex-col w-full gap-1">
              <div className="xl:w-1/2 flex flex-col w-full space-y-2">
                <label htmlFor="fName">الإسم الأول</label>
                <input
                  type="text"
                  {...register('firstName', {
                    required: 'يرجى إدخال الإسم الأول',
                  })}
                  id="fName"
                  className="bg-[#111827] border rounded-xl outline-none border-gray-800 focus:border-indigo-950 p-2 "
                />
                {errors.firstName && <div className="text-red-500">{errors.firstName.message}</div>}
              </div>

              <div className="xl:w-1/2 flex flex-col w-full space-y-2">
                <label htmlFor="lName">الإسم الأخير</label>
                <input
                  type="text"
                  {...register('lastName', {
                    required: 'يرجى إدخال الإسم الأخير',
                  })}
                  id="lName"
                  className="bg-[#111827] border rounded-xl outline-none border-gray-800 focus:border-indigo-950 p-2 "
                />
                {errors.lastName && <div className="text-red-500">{errors.lastName?.message}</div>}
              </div>
            </div>

            <div className=" flex flex-col w-full space-y-2">
              <label htmlFor="phoneNumber">رقم التلفون</label>
              <input
                type="tel"
                {...register('mobile', { required: 'يرجى إدخال رقم الموبايل' })}
                id="phoneNumber"
                className="bg-[#111827] border rounded-xl outline-none border-gray-800 focus:border-indigo-950 p-2"
              />
              {errors.mobile && <div className="text-red-500">{errors.mobile.message}</div>}
            </div>

            <div className=" flex flex-col w-full space-y-2">
              <label htmlFor="email">البريد الإلكترونى</label>
              <input
                type="email"
                placeholder="example@example.com"
                {...register('email', {
                  required: 'يرجى إدخال البريد الإلكتروني',
                  pattern: {
                    value: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
                    message: 'Invalid email',
                  },
                })}
                id="email"
                className="bg-[#111827] border rounded-xl outline-none border-gray-800 focus:border-indigo-950 p-2"
              />
              {errors.email && <div className="text-red-500">{errors.email.message}</div>}
            </div>

            <div className=" flex flex-col w-full space-y-2">
              <label htmlFor="password">كلمة السر</label>
              <input
                type="password"
                {...register('password', {
                  required: 'يرجى إدخال كلمة المرور',
                  minLength: {
                    value: 8,
                    message: 'كلمة المرور يجب ألا تقل عن 8',
                  },
                  maxLength: {
                    value: 16,
                    message: 'كلمة المرور يجب ألا تزيد عن 16',
                  },
                })}
                id="password"
                className="bg-[#111827] border rounded-xl outline-none border-gray-800 focus:border-indigo-950 p-2"
              />
              {errors.password && <div className="text-red-500">{errors.password.message}</div>}
            </div>

            <div className=" flex flex-col w-full space-y-2">
              <label htmlFor="cPassword">تأكيد كلمة المرور</label>
              <input
                type="password"
                {...register('confirmPassword', {
                  required: 'يرجى إعادة إدخال كلمة المرور',
                  minLength: {
                    value: 8,
                    message: 'كلمة المرور يجب ألا تقل عن 8',
                  },
                  maxLength: {
                    value: 16,
                    message: 'كلمة المرور يجب ألا تزيد عن 16',
                  },
                })}
                id="cPassword"
                className="bg-[#111827] border rounded-xl outline-none border-gray-800 focus:border-indigo-950 p-2"
              />
              {errors.confirmPassword && (
                <div className="text-red-500">{errors.confirmPassword.message}</div>
              )}
            </div>

            <div>
              <p>
                لديك حساب بالفعل ؟
                <Link to="/login" className="pr-2 text-indigo-700 underline">
                  سجل الدخول
                </Link>
              </p>
            </div>

            {errors.root && <div className="text-red-500">{errors.root.message}</div>}
            <button
              type="submit"
              className="rounded-3xl hover:bg-indigo-800 w-full py-3 text-lg font-semibold bg-indigo-700"
            >
              {isSubmitting ? 'loading...' : 'إنشاء حساب'}
            </button>
          </form>
        </div>
        <div className="lg:flex items-center justify-center hidden  rounded-lg overflow-hidden flex-1  max-h-[637px] ">
          <img src={Image} alt="volunteeres image" className=" w-min h-auto rounded-lg" />
        </div>
      </div>
    </Container>
  );
}
