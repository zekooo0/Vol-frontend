import { useEffect, useState } from "react";
import Container from "../components/Container";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot, faLaptop } from "@fortawesome/free-solid-svg-icons";
import styles from "../styles";
import Spinner from "../components/spinner/Spinner";
import useVolApply from "../hooks/useVolApply";

const BASE_URL = import.meta.env.VITE_BASE_URL;
const BASE_URL_IMG = import.meta.env.VITE_BASE_URL_IMG;

const OpportunityDetails = () => {
  const [opportunity, setOpportunity] = useState("");
  const { id } = useParams();

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

  useEffect(() => {
    const res = axios
      .get(`${BASE_URL}/opportunities/${id}`)
      .then((res) => {
        setOpportunity(res.data.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const { handleVolApply } = useVolApply();

  return (
    <div className="flex flex-row items-center w-full pt-20">
      <Container>
        {opportunity ? (
          <div className="my-10 max-w-5xl flex flex-row bg-white overflow-hidden">
            <div
              className={`p-6 ${
                photo ? "w-8/12" : "w-11/12"
              } flex flex-col justify-between`}
            >
              <div>
                <h2 className="text-xl font-bold mb-5">{title}</h2>
                <p className="text-gray-700">{desc} </p>
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

              {skills.length > 0 && (
                <>
                  <div className="mt-5 font-bold text-[#003478]">
                    المهارات المطلوبة
                  </div>
                  <div className="max-w-fit h-8 mt-3 flex flex-row text-[#003478]">
                    {skills.map((skill, index) => (
                      <span
                        key={index}
                        className="py-1 px-3 ml-2  border-2  border-[#003478] rounded-lg"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </>
              )}

              <button
                className="w-44 text-neutral-200 rounded-3xl mt-8 mb-1 p-3 bg-[#00c2cd] hover:bg-[#003478]"
                onClick={() => handleVolApply(_id)}
              >
                يمكنك المساعدة ؟
              </button>
            </div>

            {photo && (
              <div className="w-4/12 max-w-sm max-h-96">
                <img
                  className="max-w-full max-h-full object-cover rounded-lg mr-auto"
                  src={photo}
                  alt={title}
                />
              </div>
            )}
          </div>
        ) : (
          <Spinner color={"#00c2cd"} size={24} apiSpinner={styles.apiSpinner} />
        )}
      </Container>
    </div>
  );
};

export default OpportunityDetails;
