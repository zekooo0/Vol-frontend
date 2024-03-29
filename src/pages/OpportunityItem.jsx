import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot, faLaptop } from '@fortawesome/free-solid-svg-icons';
import useVolApply from '../hooks/useVolApply';

const BASE_URL_IMG = import.meta.env.VITE_BASE_URL_IMG;

const OpportunityItem = ({ opportunity }) => {
  let { _id, title, desc, status, type, skills, photo, country, requestedVolunteersCount } =
    opportunity;

  const photoURL = BASE_URL_IMG + photo;
  const { handleVolApply } = useVolApply();

  return (
    <div className="md:flex-row flex flex-col max-w-4xl p-6 my-10 overflow-hidden bg-white rounded-lg shadow-md">
      {photo && (
        <div className="md:hidden flex items-center justify-center mb-5">
          <img className="aspect-video h-auto max-w-full rounded-md" src={photoURL} alt={title} />
        </div>
      )}

      <div className={` ${photo ? 'md:w-2/3' : 'md:w-full'} flex flex-col justify-between`}>
        <Link to={`/opportunities/${_id}`}>
          <div>
            <h2 className="mb-5 text-xl font-bold">{title}</h2>
            <p className="text-gray-700">
              {desc?.length > 50 ? desc?.substring(0, 180) + '....' : desc}
            </p>
            <Link to={`/opportunities/${_id}`} className="inline-block pt-1 font-bold underline">
              تفاصيل أكثر
            </Link>
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
        </Link>
        <button
          className="w-44 text-neutral-200 rounded-3xl mt-8 mb-1 p-3 bg-[#00c2cd] hover:bg-[#003478]"
          onClick={() => handleVolApply(_id)}
        >
          يمكنك المساعدة ؟
        </button>
      </div>
      {/* className="inline-block object-cover max-w-full ml-2 rounded-lg" */}

      {photo && (
        <div className="md:flex items-center justify-center hidden w-1/3 h-full">
          <img className="aspect-square h-auto max-w-full rounded-md" src={photoURL} alt={title} />
        </div>
      )}
    </div>
  );
};

export default OpportunityItem;
