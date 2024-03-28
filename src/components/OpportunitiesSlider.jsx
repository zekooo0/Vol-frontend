import { useState, useEffect } from 'react';
import axios from 'axios';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import SwiperCore from 'swiper';
import 'swiper/css/bundle';

import { opportunities } from '../data/data';

SwiperCore.use([Autoplay]);

const BASE_URL = import.meta.env.VITE_BASE_URL;

const OpportunitiesSlider = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setData(opportunities);
    setLoading(false);
  }, []);
  //   useEffect(() => {
  //     const fetchData = async () => {
  //       const result = await axios.get(`${BASE_URL}/opportunities`);
  //       setData(result.data.data);
  //       console.log(result.data.data);
  //       setLoading(false);
  //     };
  //     fetchData();
  //   }, []);
  return (
    <>
      {!loading && (
        <div>
          <Swiper
            slidesPerView={1}
            slidesPerGroup={1}
            loop={true}
            autoplay={{
              delay: 2500,
            }}
          >
            {data.map((opp, i) => (
              <SwiperSlide key={i}>
                <div className="flex items-center gap-5">
                  <div className="w-1/3">
                    <h1 className="pb-2 text-lg font-medium">{opp.title}</h1>
                    <p>{opp.desc}</p>
                  </div>
                  <div className="h-60 w-[1px] bg-gray-300"></div>
                  <div className="w-1/3">
                    <p>{`${opp.country}, ${opp.city}`}</p>
                    <p>{opp.type}</p>
                    <p>{` عدد المتطوعين المطلوبين: ${opp.requestedVolunteersCount}`}</p>
                    <p>{` عدد المتقدمين : ${opp.appliedVolunteers.length}`}</p>
                  </div>
                  <div className="h-60 w-[1px] bg-gray-300"></div>

                  <div className="w-1/3">
                    <img
                      src={opp.photo}
                      className="aspect-square h-60 w-auto bg-cover rounded-md"
                    />
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      )}
    </>
  );
};

export default OpportunitiesSlider;
