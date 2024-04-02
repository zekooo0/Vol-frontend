import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Layout from "./pages/Layout";
import About from "./pages/About";
import { lazy, Suspense } from "react";
const Signup = lazy(() => import("./pages/Signup"));
const Login = lazy(() => import("./pages/Login"));
const ForgotPassword = lazy(() => import("./pages/ForgotPassword"));
const VerifyCode = lazy(() => import("./pages/VerifyCode"));
const ResetPassword = lazy(() => import("./pages/ResetPassword"));
const Privacy = lazy(() => import("./pages/Privacy"));
const Opportunities = lazy(() => import("./pages/Opportunities"));
const OpportunityDetails = lazy(() => import("./pages/OpportunityDetails"));
const VolDashboard = lazy(() => import("./pages/volDashboard"));
const OrganizationDashboard = lazy(() =>
  import("./pages/OrganizationDashboard")
);
import SmoothScroll from "./components/SmothScroll";
import AuthProvider from "react-auth-kit";
import createStore from "react-auth-kit/createStore";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./app.css";

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
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/privacy",
        element: (
          <Suspense>
            <Privacy />
          </Suspense>
        ),
      },
      {
        path: "/opportunities",
        element: (
          <Suspense>
            <Opportunities />
          </Suspense>
        ),
      },
      {
        path: "/opportunities/:id",
        element: (
          <Suspense>
            <OpportunityDetails />
          </Suspense>
        ),
      },
      {
        path: "/organization-dashboard",
        element: (
          <Suspense>
            <OrganizationDashboard />
          </Suspense>
        ),
      },
      {
        path: "/volunteer/dashboard",
        element: (
          <Suspense>
            <VolDashboard />
          </Suspense>
        ),
      },
    ],
  },
  {
    path: "/register",
    element: (
      <Suspense>
        <Signup />
      </Suspense>
    ),
  },
  {
    path: "/login",
    element: (
      <Suspense>
        <Login />
      </Suspense>
    ),
  },
  {
    path: "/forgot-password",
    element: (
      <Suspense>
        <ForgotPassword />
      </Suspense>
    ),
  },
  {
    path: "/verify-code/:email",
    element: (
      <Suspense>
        <VerifyCode />
      </Suspense>
    ),
  },
  {
    path: "/reset-password",
    element: (
      <Suspense>
        <ResetPassword />
      </Suspense>
    ),
  },
]);

const App = () => {
  return (
    <div className="font-cairo ">
      <SmoothScroll>
        <AuthProvider store={store}>
          <RouterProvider router={router} />
        </AuthProvider>
      </SmoothScroll>

      <ToastContainer
        position="top-right"
        autoClose={4000}
        hideProgressBar={false}
        newestOnTop={true}
        rtl={true}
        closeOnClick
        pauseOnFocusLoss
        pauseOnHover
        draggable
        style={{ top: "80px", fontWeight: "bold" }}
      />
      {/* <Analytics /> */}
    </div>
  );
};

export default App;
