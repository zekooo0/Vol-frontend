import { Link } from 'react-router-dom';
import useLogout from '../hooks/useLogout';
import Logo from '../assets/logo2_without_bg.png';

const Header = () => {
  const { logout, isAuthenticated } = useLogout();

  return (
    <div className=" flex flex-row items-center w-full h-20 text-black">
      <header className="container flex items-center justify-between">
        <div className=" flex items-center gap-10">
          <div>
            <img src={Logo} alt="logo" className="w-40" />
          </div>
          <ul className="md:flex hidden gap-10 text-lg font-medium">
            <li>
              <a href="#landing">الصفحة الرئيسية</a>
            </li>

            <li>
              <Link to="">الفرص التطوعية</Link>
            </li>
            <li>
              <a href="#about">من نحن</a>
            </li>
          </ul>
        </div>
        <div>
          {isAuthenticated ? (
            <button onClick={logout} className="text-neutral-200 rounded-3xl  p-3 bg-[#003478]">
              تسجيل خروج
            </button>
          ) : (
            <Link to="/login" className="text-neutral-200 rounded-3xl p-3 bg-[#003478]">
              تسجيل الدخول
            </Link>
          )}
        </div>
      </header>
    </div>
  );
};

export default Header;
