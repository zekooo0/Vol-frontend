import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios, { AxiosError } from "axios";
import { toast } from "react-toastify";

const BASE_URL = import.meta.env.VITE_BASE_URL;

function useResetPassword(setError) {
  const navigate = useNavigate();

  const query = new URLSearchParams(location.search);
  const role = query.get("role");
  const token = query.get("token");

  const onSubmit = async (data) => {
    data.token = token;
    console.log(data);
    try {
      const res = await axios.post(
        `${BASE_URL}/${role}s/auth/set-new-password`,
        data
      );
      console.log(res.data);
      if (res.status == 200) {
        toast.success("تم تغيير كلمة المرور بنجاح");
        navigate(`/login?role=${role}`);
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

export default useResetPassword;
