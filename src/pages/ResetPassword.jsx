import React from 'react';
import Container from '../components/Container';
import { Link } from 'react-router-dom';

const ResetPassword = () => {
  return (
    <Container>
      <div className="h-dvh  flex items-center justify-center">
        <div className="md:p-5 md:shadow-2xl md:max-w-md flex flex-col w-full max-w-sm">
          <h1 className="mb-4 text-4xl font-bold">اختيار كلمة مرور جديدة</h1>
          <small>
            لتأمين حسابك، اختر كلمة مرور قوية لم تستخدمها من قبل وتتألف من ٨ أحرف على الأقل.
          </small>
          <form className=" pt-5 space-y-5">
            <div className="flex flex-col justify-start px-1 space-y-5 rounded-md">
              <input
                type="password"
                placeholder="كلمة المرور الجديدة"
                id="password"
                name="password"
                className="bg-[#111827]  rounded-lg outline-none border  p-3"
              />
              <input
                type="password"
                placeholder="إعادة كتابة كلمة المرور الجديدة"
                id="confirmPassword"
                name="confirmPassword"
                className="bg-[#111827]  rounded-lg outline-none border  p-3"
              />
            </div>

            <button
              type="submit"
              className="rounded-3xl hover:bg-indigo-800 w-full py-3 text-lg font-semibold bg-indigo-700"
            >
              <Link to="/checkout">إرسال</Link>
            </button>
          </form>
        </div>
      </div>
    </Container>
  );
};

export default ResetPassword;
