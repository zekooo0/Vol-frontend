import { Link } from "react-router-dom";
import useLogout from "../hooks/useLogout";

const Header = () => {
  const { logout, isAuthenticated } = useLogout();

  return (
    <div className="flex items-center w-full h-16 px-20 bg-gray-600">
      {isAuthenticated ? (
        <button
          onClick={logout}
          className="text-neutral-200 rounded-3xl p-3 bg-indigo-800 border border-indigo-800"
        >
          تسجيل خروج
        </button>
      ) : (
        <Link
          to="/login"
          className="text-neutral-200 rounded-3xl p-3 bg-indigo-800 border border-indigo-800"
        >
          تسجيل الدخول
        </Link>
      )}
    </div>
  );
};

export default Header;
