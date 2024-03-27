import { useNavigate } from "react-router-dom";
import useSignIn from "react-auth-kit/hooks/useSignIn";
import axios, { AxiosError } from "axios";

const BASE_URL = import.meta.env.VITE_BASE_URL;

function useLogin(setError) {
  const signIn = useSignIn();
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    console.log(data);
    try {
      const res = await axios.post(`${BASE_URL}/volunteers/auth/login`, data);

      if (
        signIn({
          auth: {
            token: res.data.token,
            type: "Bearer",
            expiresIn: 3600,
          },
          userState: {
            role: "volunteer",
            // name: "",
          },
        })
      ) {
        navigate("/");
      }
    } catch (err) {
      console.log(err, err instanceof AxiosError);
      if (err instanceof AxiosError) {
        const error = err.response?.data;
        console.log(error);
        if (error) {
          if (error.message == "Validation server") {
            const validationErrors = error.data;
            validationErrors?.forEach((err) => {
              setError(err.path, {
                message: err.msg,
              });
            });
          } else {
            console.log(error.message);
            setError("root", {
              message: error.message,
            });
          }
        } else {
          setError("root", {
            message: err.message,
          });
        }
      } else {
        setError("root", {
          message: "Something went wrong",
        });
      }
    }
  };

  return { onSubmit };
}

export default useLogin;
