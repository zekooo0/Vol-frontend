import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot, faLaptop } from "@fortawesome/free-solid-svg-icons";

const opprType = ({ type, country }) => {
  console.log(type);
  return (
    <div className="max-w-fit h-8 mt-3  flex flex-row border-2 text-[#003478] border-[#003478] rounded-lg ">
      <div className=" p-1 pl-2 leading-tight bg-[#003478] text-white">
        {type == "on-site" ? (
          <FontAwesomeIcon icon={faLocationDot} className="ml-1" />
        ) : (
          <FontAwesomeIcon icon={faLaptop} className="ml-1" />
        )}
        {type == "on-site" ? "الموقع" : "أونلاين"}
      </div>
      <div className=" p-1 pl-4 pr-2 leading-tight">
        {type == "on-site" ? country : "أي مكان"}
      </div>
    </div>
  );
};

export default opprType;
