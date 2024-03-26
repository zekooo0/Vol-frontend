import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./pages/Layout";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Home from "./pages/Home";
import ForgotPassword from "./pages/ForgotPassword";
import VerifyCode from "./pages/VerifyCode";
import ResetPassword from "./pages/ResetPassword";
import createStore from "react-auth-kit/createStore";
import AuthProvider from "react-auth-kit";
import RequireAuth from "@auth-kit/react-router/RequireAuth";

const store = createStore({
  authName: "_auth",
  authType: "cookie",
  cookieDomain: window.location.hostname,
  cookieSecure: window.location.protocol === "https:",
});

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: (
          // <RequireAuth fallbackPath={"/login"}>
          <Home />
          // </RequireAuth>
        ),
      },
    ],
  },
  { path: "/register", element: <Signup /> },
  { path: "/login", element: <Login /> },
  { path: "/forgot-password", element: <ForgotPassword /> },
  { path: "/verify-code/:email", element: <VerifyCode /> },
  { path: "/reset-password", element: <ResetPassword /> },
]);

// className="font-poppins text-base bg-[#111827]  text-neutral-200 min-h-screen container"
const App = () => {
  return (
    <div className="bg-[#111827] ">
      <AuthProvider store={store}>
        <RouterProvider router={router} />
      </AuthProvider>
    </div>
  );
};

export default App;
