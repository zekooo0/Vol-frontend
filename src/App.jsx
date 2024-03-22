import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './pages/Layout';
import Register from './pages/Register';
import Login from './pages/Login';
import Home from './pages/Home';
import ForgotPassword from './pages/ForgotPassword';
import Checkout from './pages/Checkout';
import ResetPassword from './pages/ResetPassword';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [{ path: '/', element: <Home /> }],
  },
  { path: '/register', element: <Register /> },
  { path: '/login', element: <Login /> },
  { path: '/forgot-password', element: <ForgotPassword /> },
  { path: '/checkout', element: <Checkout /> },
  { path: '/reset-password', element: <ResetPassword /> },
]);

// className="font-poppins text-base bg-[#111827]  text-neutral-200 min-h-screen container"
const App = () => {
  return (
    <div className="bg-[#111827] ">
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
