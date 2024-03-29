import { Link } from 'react-router-dom';
import Logo from '../assets/logo2_without_bg.png';

const year = new Date().getFullYear();

const Footer = () => {
  return (
    <div className="container flex flex-col w-full pb-10 border-t">
      <div className="flex items-center justify-between">
        <div>
          <ul className="flex gap-10 text-lg font-medium">
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/privacy">Privacy Policy</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>
        <div>
          <Link to="/">
            <img src={Logo} alt="logo" className="w-20" />
          </Link>
        </div>
      </div>
      <div className="w-full h-[1px] bg-gray-300"></div>
      <div className="mx-auto mt-10 font-bold">
        {`@ ${year} `} <span className="text-[#00c2cd]">عضد</span>
      </div>
    </div>
  );
};

export default Footer;
