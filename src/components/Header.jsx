import { Link } from 'react-router-dom';
import useLogout from '../hooks/useLogout';
import Logo from '../assets/logo2_without_bg.png';

const Header = () => {
  const { logout, isAuthenticated } = useLogout();
  const role = localStorage.getItem('role');
  return (
    <div className=" flex flex-row items-center w-full h-20 text-black shadow">
      <header className="container flex items-center justify-between">
        <div className=" flex items-center gap-10">
          <Link to="/">
            <img src={Logo} alt="logo" className="w-40" />
          </Link>
          <ul className="md:flex hidden gap-10 text-lg font-medium">
            <li>
              <Link to="/">الصفحة الرئيسية</Link>
            </li>

            <li>
              <Link to="/opportunities">الفرص التطوعية</Link>
            </li>
            {isAuthenticated && role === 'vol' && (
              <li>
                <Link to="/volunteer/dashboard">التقديمات</Link>
              </li>
            )}
            {isAuthenticated && role === 'org' && (
              <li>
                <Link to="/organization-dashboard">التقديمات</Link>
              </li>
            )}
            <li>
              <Link to="/about">من نحن</Link>
            </li>
          </ul>
        </div>
        <div>
          {isAuthenticated ? (
            <button
              onClick={logout}
              className="text-neutral-200 rounded-3xl  p-3 bg-[#003478] hover:bg-[#00c2cd]"
            >
              تسجيل خروج
            </button>
          ) : (
            <Link
              to="/login"
              className="text-neutral-200 rounded-3xl p-3 bg-[#003478] hover:bg-[#00c2cd]"
            >
              تسجيل الدخول
            </Link>
          )}
        </div>
      </header>
    </div>
  );
};

export default Header;
