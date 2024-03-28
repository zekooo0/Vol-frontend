import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot, faLaptop } from "@fortawesome/free-solid-svg-icons";
import useVolApply from "../hooks/useVolApply";

const BASE_URL_IMG = import.meta.env.VITE_BASE_URL_IMG;

const OpportunityItem = ({ opportunity }) => {
  let {
    _id,
    title,
    desc,
    status,
    type,
    skills,
    photo,
    country,
    requestedVolunteersCount,
  } = opportunity;
  photo = BASE_URL_IMG + photo;
  console.log(photo);
  const { handleVolApply } = useVolApply();

  return (
    <div className="my-10 max-w-4xl flex flex-row bg-white rounded-lg shadow-md overflow-hidden">
      <div
        className={`p-6 ${
          photo ? "w-2/3" : "w-11/12"
        } flex flex-col justify-between`}
      >
        <Link to={`/opportunities/${_id}`}>
          <div>
            <h2 className="text-xl font-bold mb-5">{title}</h2>
            <p className="text-gray-700">
              {desc?.length > 50 ? desc?.substring(0, 180) + "...." : desc}
            </p>
            <Link
              to={`/opportunities/${_id}`}
              className="underline inline-block pt-1 font-bold"
            >
              تفاصيل أكثر
            </Link>
          </div>

          <div className="max-w-fit h-8 mt-3  flex flex-row border-2 text-[#003478] border-[#003478] rounded-lg ">
            <div className=" p-1 pl-2 leading-tight bg-[#003478] text-white">
              {type == "on-site" ? (
                <FontAwesomeIcon icon={faLocationDot} className="ml-1" />
              ) : (
                <FontAwesomeIcon icon={faLaptop} className="ml-1" />
              )}
              {type == "on-site" ? "الموقع" : "أونلاين"}
            </div>
            <div className=" p-1 pr-2 pl-4 leading-tight ">
              {type == "on-site" ? country : "أي مكان"}
            </div>
          </div>
        </Link>
        <button
          className="w-44 text-neutral-200 rounded-3xl mt-8 mb-1 p-3 bg-[#00c2cd] hover:bg-[#003478]"
          onClick={() => handleVolApply(_id)}
        >
          يمكنك المساعدة ؟
        </button>
      </div>

      {photo && (
        <div className="w-1/3 max-h-72">
          <img
            className="ml-2 max-w-full inline-block rounded-lg object-cover"
            src={photo}
            alt={title}
          />
        </div>
      )}
    </div>
  );
};

export default OpportunityItem;
