import { useNavigate } from "react-router-dom";
import axios, { AxiosError } from "axios";
import Cookies from "js-cookie";
import { toast } from "react-toastify";

const BASE_URL = import.meta.env.VITE_BASE_URL;

function useVolApply() {
  const navigate = useNavigate();

  const userToken = Cookies.get("_auth");

  const handleVolApply = async (oppId) => {
    try {
      if (userToken) {
        const res = await axios.post(
          `${BASE_URL}/opportunities/vol/apply`,
          { oppId },
          {
            headers: {
              Authorization: `Bearer ${userToken}`,
            },
          }
        );
        console.log(res.data);
        if (res.status == 200) {
          toast.success(
            "شكرًا لتطوعك لهذه الفرصة. سيتم التواصل معك في حال تم اختيارك."
          );
        }
      } else {
        toast.warning("يرجى تسجيل الدخول أولًا.");
        navigate(`/login`);
      }
    } catch (err) {
      console.log(err);
      const error = err.response?.data;
      if (err instanceof AxiosError && error) {
        toast.error(error.message);
      } else {
        toast.error("Something went wrong");
      }
    }
  };

  return { handleVolApply };
}

export default useVolApply;
