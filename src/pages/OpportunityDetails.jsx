import { useEffect, useState } from 'react';
import Container from '../components/Container';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot, faLaptop } from '@fortawesome/free-solid-svg-icons';
import styles from '../styles';
import Spinner from '../components/Spinner';
import useVolApply from '../hooks/useVolApply';

const BASE_URL = import.meta.env.VITE_BASE_URL;
const BASE_URL_IMG = import.meta.env.VITE_BASE_URL_IMG;

const OpportunityDetails = () => {
  const [opportunity, setOpportunity] = useState('');
  const { id } = useParams();

  let { _id, title, desc, status, type, skills, photo, country, requestedVolunteersCount } =
    opportunity;

  const photoURL = BASE_URL_IMG + photo;

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
    <div className="md:flex-row min-h-dvh container flex flex-col items-center">
      {photo && (
        <div className="md:hidden flex items-center justify-center">
          <img className="aspect-video h-auto max-w-full rounded-md" src={photoURL} alt={title} />
        </div>
      )}
      {opportunity ? (
        <div className="flex flex-row max-w-5xl my-10 overflow-hidden bg-white">
          <div className={`p-6 ${photo ? 'md:w-2/3' : 'md:w-full'} flex flex-col justify-between`}>
            <div>
              <h2 className="mb-5 text-xl font-bold">{title}</h2>
              <p className="text-gray-700">{desc} </p>
            </div>

            <div className="max-w-fit h-8 mt-3  flex flex-row border-2 text-[#003478] border-[#003478] rounded-lg ">
              <div className=" p-1 pl-2 leading-tight bg-[#003478] text-white">
                {type == 'on-site' ? (
                  <FontAwesomeIcon icon={faLocationDot} className="ml-1" />
                ) : (
                  <FontAwesomeIcon icon={faLaptop} className="ml-1" />
                )}
                {type == 'on-site' ? 'الموقع' : 'أونلاين'}
              </div>
              <div className=" p-1 pl-4 pr-2 leading-tight">
                {type == 'on-site' ? country : 'أي مكان'}
              </div>
            </div>

            {skills.length > 0 && (
              <div className=" flex flex-col">
                <div className="mt-5 font-bold text-[#003478]">المهارات المطلوبة</div>
                <div className="flex-wrap gap-2  mt-3 flex flex-row text-[#003478]">
                  {skills.map((skill, index) => (
                    <span
                      key={index}
                      className="py-1 px-3 ml-2  border-2  border-[#003478] rounded-lg"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            )}

            <button
              className="w-44 text-neutral-200 rounded-3xl mt-8 mb-1 p-3 bg-[#00c2cd] hover:bg-[#003478] "
              onClick={() => handleVolApply(_id)}
            >
              يمكنك المساعدة ؟
            </button>
          </div>

          {photo && (
            <div className="max-h-96 md:flex hidden w-4/12 max-w-sm">
              <img
                className="object-cover max-w-full max-h-full mr-auto rounded-lg"
                src={photoURL}
                alt={title}
              />
            </div>
          )}
        </div>
      ) : (
        <Spinner color={'#00c2cd'} size={24} apiSpinner={styles.apiSpinner} />
      )}
    </div>
  );
};

export default OpportunityDetails;
