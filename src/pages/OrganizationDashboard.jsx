import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';
import Cookies from 'js-cookie';
import Modal from '../components/Modal';

const BASE_URL = import.meta.env.VITE_BASE_URL;
const token = Cookies.get('_auth');
const OrganizationDashboard = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`${BASE_URL}/opportunities/org`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        setData(res.data.data);
        setIsLoading(false);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, [token]);

  return (
    <div className="container flex flex-col mt-10 text-lg">
      <div className="mb-5">
        <button
          onClick={() => setIsOpen((e) => !e)}
          className="bg-[#00c2cd] text-white rounded-md py-3 px-6"
        >
          إضافة فرصة تطوعية
        </button>
      </div>
      <Modal isOpen={isOpen} setIsOpen={setIsOpen} />
      <table>
        <thead>
          <tr>
            <td className=" p-4 font-bold border border-black">العنوان</td>
            <td className="p-4 font-bold border border-black">الوصف</td>
            <td className="p-4 font-bold border border-black">الحالة</td>
          </tr>
        </thead>
        {!isLoading && (
          <tbody>
            {data.map((opp) => {
              return (
                <tr
                  className="hover:cursor-pointer p-4 border border-black"
                  key={opp._id}
                  onClick={() => console.log(opp._id)}
                >
                  <td className=" p-4 border border-black">{opp.title}</td>
                  <td className=" p-4 border border-black">{opp.desc}</td>
                  <td
                    className={`p-4 border border-black text-white ${
                      opp.status === 'open' ? 'bg-green-800 ' : 'bg-red-800'
                    }`}
                  >
                    {opp.status}
                  </td>
                  <td>
                    {' '}
                    <button>حذف</button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        )}
      </table>
    </div>
  );
};

export default OrganizationDashboard;
