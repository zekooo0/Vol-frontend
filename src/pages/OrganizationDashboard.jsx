import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';
import Cookies from 'js-cookie';
import Modal from '../components/Modal';
import Spinner from '../components/Spinner';
import styles from '../styles';

const BASE_URL = import.meta.env.VITE_BASE_URL;
const token = Cookies.get('_auth');
const OrganizationDashboard = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isOpen, setIsOpen] = useState(false);

  const fetchData = async () => {
    try {
      const res = await axios.get(`${BASE_URL}/opportunities/org`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setData(res.data.data);
      console.log(res.data.data);
      setIsLoading(false);
    } catch (err) {
      console.log(err);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`${BASE_URL}/opportunities/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    fetchData();
  }, [token, data]);
  return (
    <div className="container flex flex-col mt-10 text-lg">
      {isLoading ? (
        <Spinner color={'#00c2cd'} size={20} apiSpinner={styles.homeApiSpinner} />
      ) : (
        <>
          <div className="mb-5">
            <button
              onClick={() => setIsOpen((e) => !e)}
              className="bg-[#00c2cd] text-white rounded-md py-3 px-6"
            >
              إضافة فرصة تطوعية
            </button>
          </div>
          <Modal isOpen={isOpen} setIsOpen={setIsOpen} fetchData={fetchData} />

          <table>
            <thead>
              <tr>
                <td className=" p-4 font-bold border border-black">العنوان</td>
                <td className="p-4 font-bold border border-black">الوصف</td>
                <td className="p-4 font-bold border border-black">عدد المطلوب</td>
                <td className="p-4 font-bold border border-black">عدد المتقدمين</td>
                <td className="p-4 font-bold border border-black">الحالة</td>
              </tr>
            </thead>
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
                    <td className=" p-4 text-center border border-black">
                      {opp.requestedVolunteersCount}
                    </td>
                    <td className=" p-4 text-center border border-black">
                      {opp.appliedVolunteers.length}
                    </td>
                    <td
                      className={`p-4 border border-black text-white ${
                        opp.status === 'open' ? 'bg-green-800 ' : 'bg-red-800'
                      }`}
                    >
                      {opp.status}
                    </td>
                    <td>
                      {' '}
                      <button onClick={() => handleDelete(opp._id)}>حذف</button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </>
      )}
    </div>
  );
};

export default OrganizationDashboard;
