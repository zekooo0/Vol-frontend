import React from 'react';
import Container from '../components/Container';
import { Link } from 'react-router-dom';

const ForgotPassword = () => {
  const handleSubmit = e => {
    // e.preventDefault();
  };
  return (
    <Container>
      <div className=" md:pt-40 flex items-center justify-center h-full pt-20">
        <div className="md:p-5 md:shadow-2xl md:max-w-md flex flex-col w-full max-w-sm">
          <h1 className="mb-4 text-4xl font-bold">هل نسيت كلمة المرور؟</h1>
          <form className=" pt-5 space-y-5" onSubmit={e => handleSubmit(e)}>
            <div className="flex flex-col justify-start px-1 border border-gray-800 rounded-md">
              <label htmlFor="email">البريد الإلكترونى</label>
              <input
                type="email"
                placeholder="example@example.com"
                id="email"
                name="email"
                className="bg-[#111827]  rounded-lg outline-none  p-3"
              />
            </div>
            <p>
              سنرسل رمز تحقق إلى هذا البريد الإلكتروني أو رقم الهاتف إذا كان
              يتطابق مع حساب موجود.
            </p>
            <button
              type="submit"
              className="rounded-3xl hover:bg-indigo-800 w-full py-3 text-lg font-semibold bg-indigo-700"
            >
              <Link to="/checkout">التالى</Link>
            </button>
          </form>
          <button
            type="submit"
            className="rounded-3xl hover:bg-gray-600 w-full py-3 my-5 text-lg font-semibold"
          >
            <Link to="/login">رجوع</Link>
          </button>
        </div>
      </div>
    </Container>
  );
};

export default ForgotPassword;
