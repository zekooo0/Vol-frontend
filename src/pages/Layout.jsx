import { Outlet } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Container from '../components/Container';
const Layout = () => {
  return (
    <div className="min-h-dvh flex flex-col">
      <Header />
      <Outlet />
      <Footer />
      {/* <Footer /> */}
    </div>
  );
};

export default Layout;
