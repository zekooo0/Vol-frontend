import { Link } from 'react-router-dom';
import useLogout from '../hooks/useLogout';
import Logo from '../assets/logo2_without_bg.png';

const Header = () => {
  const { logout, isAuthenticated } = useLogout();

  return (
    <div className=" flex flex-row items-center w-full h-20 text-black">
      <header className="container flex items-center justify-between">
        <div>
          <img src={Logo} alt="logo" className="w-40" />
        </div>
        <ul className="md:flex hidden gap-4">
          <li>
            <a href="#landing">الصفحة الرئيسية</a>
          </li>
          <li>
            <a href="#about">عنا</a>
          </li>
          <li>
            <Link to="">الفرص التطوعية</Link>
          </li>
          <li>
            {isAuthenticated ? (
              <button onClick={logout} className="text-neutral-200 rounded-3xl  p-3 bg-[#003478]">
                تسجيل خروج
              </button>
            ) : (
              <Link to="/login" className="text-neutral-200 rounded-3xl p-3 bg-[#003478]">
                تسجيل الدخول
              </Link>
            )}
          </li>
        </ul>
      </header>
    </div>
  );
};

export default Header;

/**
 * {isAuthenticated ? (
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
 * 
 */
