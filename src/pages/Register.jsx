import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import Image from '../assets/register-img.jpg';
import Container from '../components/Container';
export default function Register() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = data => console.log(data);
  console.log(errors);

  return (
    <Container>
      <div className=" flex items-center justify-center gap-4 py-10">
        <div className=" lg:w-1/2 flex flex-col items-center justify-center w-full">
          <h1 className="lg:text-4xl mb-10 text-2xl font-bold">إنشاء حساب</h1>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className=" flex flex-col items-center justify-center w-full max-w-sm space-y-5 rounded"
          >
            {/*  */}
            <div className=" xl:flex-row xl:space-x-2 xl:space-y-0 flex flex-col items-center justify-center w-full gap-1 space-y-5">
              <div className=" xl:w-1/2 flex flex-col w-full">
                <label htmlFor="fName">الإسم الأول</label>
                <input
                  type="text"
                  {...register('First-Name', { required: true })}
                  id="fName"
                  className="bg-[#111827] border rounded-xl outline-none border-gray-800 focus:border-indigo-950 p-2 "
                />
              </div>
              <div className=" xl:w-1/2 flex flex-col w-full">
                <label htmlFor="lName">الإسم الأخير</label>
                <input
                  type="text"
                  {...register('Last-Name', { required: true })}
                  id="lName"
                  className="bg-[#111827] border rounded-xl outline-none border-gray-800 focus:border-indigo-950 p-2 "
                />
              </div>
            </div>
            <div className=" flex flex-col w-full">
              <label htmlFor="phoneNumber">رقم التلفون</label>
              <input
                type="tel"
                {...register('Phone-Number', { required: true })}
                id="phoneNumber"
                className="bg-[#111827] border rounded-xl outline-none border-gray-800 focus:border-indigo-950 p-2"
              />
            </div>
            <div className=" flex flex-col w-full">
              <label htmlFor="email">البريد الإلكترونى</label>

              <input
                type="email"
                placeholder="example@example.com"
                {...register('Email-Address', { required: true })}
                id="email"
                className="bg-[#111827] border rounded-xl outline-none border-gray-800 focus:border-indigo-950 p-2"
              />
            </div>
            <div className=" flex flex-col w-full">
              <label htmlFor="password">كلمة السر</label>
              <input
                type="password"
                {...register('password', { required: true, min: 8 })}
                id="password"
                className="bg-[#111827] border rounded-xl outline-none border-gray-800 focus:border-indigo-950 p-2"
              />
            </div>
            <div className=" flex flex-col w-full">
              <label htmlFor="cPassword">تأكيد كلمة السر</label>
              <input
                type="password"
                {...register('confirm-Password', { required: true, min: 8 })}
                id="cPassword"
                className="bg-[#111827] border rounded-xl outline-none border-gray-800 focus:border-indigo-950 p-2"
              />
            </div>
            <div>
              <p>
                لديك حساب بالفعل ؟
                <Link to="/login" className="pr-2 text-indigo-700 underline">
                  سجل الدخول
                </Link>
              </p>
            </div>
            <button
              type="submit"
              className="rounded-3xl hover:bg-indigo-800 w-full py-3 text-lg font-semibold bg-indigo-700"
            >
              إنشاء حساب
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
