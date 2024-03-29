import { useNavigate } from 'react-router-dom';
import useSignOut from 'react-auth-kit/hooks/useSignOut';
import useIsAuthenticated from 'react-auth-kit/hooks/useIsAuthenticated';

const useLogout = () => {
  const signOut = useSignOut();
  const isAuthenticated = useIsAuthenticated();
  const navigate = useNavigate();

  const logout = () => {
    signOut();
    localStorage.clear();
    navigate('/login');
  };

  return { logout, isAuthenticated };
};

export default useLogout;
