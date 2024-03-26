import React from 'react';
import Container from '../components/Container';
import { Link } from 'react-router-dom';

const Checkout = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <Container>
      <div className="h-dvh flex items-center justify-center">
        <div className="md:p-5 md:shadow-2xl md:max-w-md flex flex-col w-full max-w-sm">
          <h1 className="mb-4 text-4xl font-bold">إدخال الرمز المؤلف من 6 أرقام</h1>
          <form className=" pt-5 space-y-5" onSubmit={(e) => handleSubmit(e)}>
            <div className="flex flex-col justify-start px-1 border border-gray-800 rounded-md">
              <input
                type="number"
                placeholder="رمز من 6 أرقام"
                id="checkout"
                name="checkout"
                className=" p-3 rounded-lg outline-none"
              />
            </div>
            <div className="decoration-white text-lg font-semibold text-[#00c2cd] underline cursor-pointer">
              إعادة إرسال الرمز
            </div>
            <button
              type="submit"
              className="rounded-3xl hover:bg-[#003478] text-white  w-full py-3 text-lg font-semibold bg-[#00c2cd]"
            >
              <Link to="/reset-password">إرسال</Link>
            </button>
            <button
              type="submit"
              className="rounded-3xl hover:bg-gray-700 w-full py-3 text-lg font-semibold text-white bg-gray-500"
            >
              <Link to="/login">الرجوع</Link>
            </button>
            <p>
              إذا كنت لا ترى رمزًا في بريدك الوارد، فتحقق من مجلد البريد غير المرغوب فيه. إذا لم يكن
              موجودًا، فقد لا يتم تأكيد عنوان البريد الإلكتروني أو قد لا يتطابق مع حساب موجود.
            </p>
          </form>
        </div>
      </div>
    </Container>
  );
};

export default Checkout;
