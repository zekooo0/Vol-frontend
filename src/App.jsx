import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Signup from './pages/Signup';
import Login from './pages/Login';
import ForgotPassword from './pages/ForgotPassword';
import VerifyCode from './pages/VerifyCode';
import ResetPassword from './pages/ResetPassword';
import Layout from './pages/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Privacy from './pages/Privacy';
import SmoothScroll from './components/SmothScroll';
import Opportunities from './pages/Opportunities';
import OpportunityDetails from './pages/OpportunityDetails';
import createStore from 'react-auth-kit/createStore';
import AuthProvider from 'react-auth-kit';
import { ToastContainer } from 'react-toastify';
import { Analytics } from '@vercel/analytics/react';
import 'react-toastify/dist/ReactToastify.css';
import './app.css';
import { VolDashboard } from './pages/volDashboard';

const store = createStore({
  authName: '_auth',
  authType: 'cookie',
  cookieDomain: window.location.hostname,
  cookieSecure: window.location.protocol === 'https:',
});

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/privacy',
        element: <Privacy />,
      },
      {
        path: '/about',
        element: <About />,
      },
      {
        path: '/opportunities',
        element: <Opportunities />,
      },
      {
        path: '/opportunities/:id',
        element: <OpportunityDetails />,
      },
      {
        path: '/volunteer/dashboard',
        element: <VolDashboard />,
      },
    ],
  },
  { path: '/register', element: <Signup /> },
  { path: '/login', element: <Login /> },
  { path: '/forgot-password', element: <ForgotPassword /> },
  { path: '/verify-code/:email', element: <VerifyCode /> },
  { path: '/reset-password', element: <ResetPassword /> },
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
        style={{ top: '80px', fontWeight: 'bold' }}
      />
      {/* <Analytics /> */}
    </div>
  );
};

export default App;
