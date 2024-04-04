import { useState, useEffect } from 'react';
import axios from 'axios';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import SwiperCore from 'swiper';
import 'swiper/css/bundle';
import { Link } from 'react-router-dom';
import Spinner from './Spinner';
import styles from '../styles';
import OpprType from '../components/OpprType';

SwiperCore.use([Autoplay]);

const BASE_URL = import.meta.env.VITE_BASE_URL;
const BASE_URL_IMG = import.meta.env.VITE_BASE_URL_IMG;

const OpportunitiesSlider = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get(`${BASE_URL}/opportunities`);
      setData(result.data.data);
      setLoading(false);
    };
    fetchData();
  }, []);
  return (
    <>
      {!loading ? (
        <div>
          <Swiper
            slidesPerView={1}
            slidesPerGroup={1}
            loop={true}
            autoplay={{
              delay: 2500,
            }}
          >
            {data.map((opp) => {
              const {
                _id,
                title,
                desc,
                status,
                type,
                skills,
                photo,
                country,
                requestedVolunteersCount,
                appliedVolunteers,
              } = opp;

              return (
                <SwiperSlide key={_id}>
                  <div className="flex items-center gap-5">
                    <div
                      className={`${photo ? 'md:w-1/3' : 'md:w-1/2'} flex flex-col items-center`}
                    >
                      <h1 className="pb-2 text-xl font-medium">{title}</h1>
                      <p>{desc}</p>{' '}
                      <button className="rounded-xl md:hidden text-white hover:bg-[#003478] mt-5 py-3 w-3/4 text-lg font-semibold bg-[#00c2cd]">
                        <Link to={`/opportunities/${_id}`}>التفاصيل ...</Link>
                      </button>
                    </div>
                    <div className="h-72 w-[1px] bg-gray-300 hidden md:block"></div>
                    <div className={`md:block hidden ${photo ? 'md:w-1/3' : 'md:w-1/2'} text-lg`}>
                      {/* <p>{`الموقع: ${
                        !country && !city ? "Online" : `${country}, ${city}`
                      }`}</p> */}

                      <p>{` عدد المتطوعين المطلوبين: ${requestedVolunteersCount}`}</p>
                      <p>{` عدد المتقدمين : ${appliedVolunteers.length}`}</p>
                      <OpprType type={type} country={country} />

                      {appliedVolunteers.length === requestedVolunteersCount ? (
                        <button
                          disabled
                          className="rounded-xl mx-auto text-white bg-[#003478] w-1/4 mt-5 py-3 text-lg font-semibold "
                        >
                          مكتمل.
                        </button>
                      ) : (
                        <Link to={`/opportunities/${_id}`}>
                          <button className="rounded-xl mx-auto text-white hover:bg-[#003478] w-fit px-3 mt-6 py-3 text-lg font-semibold bg-[#00c2cd]">
                            التفاصيل ...
                          </button>
                        </Link>
                      )}
                    </div>

                    {opp.photo && (
                      <>
                        <div className="h-60 w-[1px] bg-gray-300 md:block hidden"></div>

                        <div className="md:block hidden w-1/3">
                          <img
                            src={`${BASE_URL_IMG}/${opp.photo}`}
                            className="aspect-square h-60 w-auto bg-cover rounded-md"
                          />
                        </div>
                      </>
                    )}
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      ) : (
        <Spinner color={'#00c2cd'} size={20} apiSpinner={styles.homeApiSpinner} />
      )}
    </>
  );
};

export default OpportunitiesSlider;
