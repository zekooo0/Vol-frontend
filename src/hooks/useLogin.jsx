import { useNavigate } from 'react-router-dom';
import useSignIn from 'react-auth-kit/hooks/useSignIn';
import axios, { AxiosError } from 'axios';

const BASE_URL = import.meta.env.VITE_BASE_URL;

function useLogin(role, setError) {
  const signIn = useSignIn();
  const navigate = useNavigate();

  const query = new URLSearchParams(location.search);
  role = query.get('role');

  const onSubmit = async (data) => {
    try {
      const res = await axios.post(`${BASE_URL}/${role}s/auth/login`, data);
      if (
        signIn({
          auth: {
            token: res.data.token,
            type: 'Bearer',
            expiresIn: 60 * 60 * 24,
          },
          userState: {
            role: res.data.role,
            id: res.data.id,
          },
        })
      ) {
        navigate('/');
        localStorage.setItem('role', res.data.role);
        localStorage.setItem('id', res.data.id);
      }
    } catch (err) {
      console.log(err, err instanceof AxiosError);
      if (err instanceof AxiosError) {
        const error = err.response?.data;
        console.log(error);
        if (error) {
          if (error.message == 'Validation server') {
            const validationErrors = error.data;
            validationErrors?.forEach((err) => {
              setError(err.path, {
                message: err.msg,
              });
            });
          } else {
            console.log(error.message);
            setError('root', {
              message: error.message,
            });
          }
        } else {
          setError('root', {
            message: err.message,
          });
        }
      } else {
        setError('root', {
          message: 'Something went wrong',
        });
      }
    }
  };

  return { onSubmit };
}

export default useLogin;
