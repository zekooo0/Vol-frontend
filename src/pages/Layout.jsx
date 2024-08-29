import Container from "../components/Container";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { Outlet } from "react-router-dom";
import { useEffect } from "react";

const Layout = () => {
  useEffect(() => {
    loadScript(
      "https://storage.googleapis.com/multisync/interworky/production/interworkyassistant.js",
      "ZTljOGU5NTAtZDU1ZC00ZjI5LThiNWMtZDYyMDQ3NzI4NjJlOmFzc3RfazZCdXFtdHVvMzhzanZyTkUwY1Rjb3hn"
    );
  }, []);
  return (
    <div className="min-h-dvh flex flex-col">
      <Header />
      <Outlet />
      <Footer />
      {/* <Footer /> */}
    </div>
  );
};
function loadScript(src, dataApiKey) {
  const script = document.createElement("script");
  script.src = src;
  script.setAttribute("data-api-key", dataApiKey);
  script.async = true;
  document.body.appendChild(script);
}
export default Layout;
