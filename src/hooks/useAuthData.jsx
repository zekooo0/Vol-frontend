import { useState, useEffect } from 'react';
import useAuthUser from 'react-auth-kit/hooks/useAuthUser';

const useAuthData = () => {
  const auth = useAuthUser();
  const [authData, setAuthData] = useState({});

  useEffect(() => {
    setAuthData(auth);
  }, [auth]);

  return authData;
};

export default useAuthData;
