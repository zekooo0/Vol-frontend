import { useNavigate } from 'react-router-dom';
import axios, { AxiosError } from 'axios';
import { useEffect } from 'react';

const BASE_URL = import.meta.env.VITE_BASE_URL;

function useSignup(role, selectedImages, setError) {
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    console.log(data);
    data.papers = selectedImages;
    console.log(data);
    try {
      const res = await axios.post(`${BASE_URL}/${role}s/auth/signup`, data);
      console.log(res.data);
      if (res.status == 201) {
        navigate(`/verify-code/${data.email}?from=signup&role=${role}`);
      }
    } catch (err) {
      console.log(err);
      if (err instanceof AxiosError) {
        const error = err.response?.data;
        if (error) {
          if (error.message == 'Validation server') {
            const validationErrors = error.data;
            validationErrors?.forEach((err) => {
              setError(err.path, {
                message: err.msg,
              });
            });
          } else {
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

export default useSignup;
