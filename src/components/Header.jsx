import { Link } from 'react-router-dom';
const Header = () => {
  return (
    <div className="flex items-center w-full h-16 px-20 bg-gray-600">
      <button className="text-neutral-200 rounded-3xl p-3 bg-indigo-800 border border-indigo-800">
        <Link to="/login">تسجيل الدخول</Link>
      </button>
    </div>
  );
};

export default Header;
