import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import useSignIn from "react-auth-kit/hooks/useSignIn";
import useIsAuthenticated from "react-auth-kit/hooks/useIsAuthenticated";
import axios, { AxiosError } from "axios";

const BASE_URL = import.meta.env.VITE_BASE_URL;

function useSignup(setError, errors) {
  const signIn = useSignIn();
  const isAuthenticated = useIsAuthenticated();
  const navigate = useNavigate();

  const confirmPassword = (password, confirmPassword) => {
    if (password !== confirmPassword) {
      setError("confirmPassword", {
        message: "يرجى التأكد من مطابقة كلمتي المرور",
      });
    }
  };

  const onSubmit = async (data) => {
    console.log(data);
    confirmPassword(data.password, data.confirmPassword);

    if (!errors) {
      try {
        const res = await axios.post(
          `${BASE_URL}/volunteers/auth/signup`,
          data
        );
        console.log(res.data);
        // if () {
        //   navigate("/");
        // } else {
        //   console.log("Error");
        //   //Throw error
        // }
      } catch (err) {
        console.log(err);
        if (err instanceof AxiosError) {
          const error = err.response?.data;
          if (error) {
            if (error.message == "Validation server") {
              const validationErrors = error.data;
              validationErrors?.forEach((err) => {
                setError(err.path, {
                  message: err.msg,
                });
              });
            } else {
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
    }
  };

  return { onSubmit };
}

export default useSignup;
