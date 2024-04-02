import { useEffect, useState } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';

const BASE_URL = import.meta.env.VITE_BASE_URL;

const getStatusMessage = (isAccepted, isApplied, status) => {
  if (isAccepted) {
    return (
      <p
        style={{
          backgroundColor: '#03943da6',
          padding: '0.4rem',
          fontWeight: 'bold',
          color: 'white',
          textAlign: 'center',
        }}
      >
        مقبول
      </p>
    );
  } else if (isApplied && status === 'مفتوحة') {
    return (
      <p
        style={{
          backgroundColor: '#ffeb838f',
          padding: '0.4rem',
          fontWeight: 'bold',
          color: 'white',
          textAlign: 'center',
        }}
      >
        معلق
      </p>
    );
  } else if (isApplied && status !== 'مفتوحة') {
    return (
      <p
        style={{
          backgroundColor: '#ff33338f',
          padding: '0.4rem',
          fontWeight: 'bold',
          color: 'white',
          textAlign: 'center',
        }}
      >
        مرفوض
      </p>
    );
  }
};

const mapOpportunity = (opp, userId) => ({
  ...opp,
  type: opp.type === 'on-site' ? 'بالموقع' : 'عن بعد',
  status: opp.status === 'open' ? 'مفتوحة' : opp.status === 'archived' ? 'مؤرشفة' : 'مغلفة',
  isAccepted: opp.acceptedVolunteers.includes(userId),
  isApplied: opp.appliedVolunteers.includes(userId),
});

export const VolDashboard = () => {
  const [opportunities, setOpportunities] = useState([]);
  const userToken = Cookies.get('_auth');
  const userId = localStorage.getItem('id');

  useEffect(() => {
    const fetchOpportunities = async () => {
      try {
        const res = await axios.get(`${BASE_URL}/opportunities/vol`, {
          headers: {
            Authorization: `Bearer ${userToken}`,
          },
        });

        const updated = res.data.data.map((opp) => mapOpportunity(opp, userId));
        setOpportunities(updated);
      } catch (error) {
        console.error(error);
      }
    };

    fetchOpportunities();
  }, [userToken, userId]);

  return (
    <>
      {/* <section className="sm:p-5 p-5 antialiased" style={{ minHeight: '65vh' }}>
        <div className="lg:px-12 max-w-screen-xl px-4 mx-auto">
          <div className="dark:bg-gray-800 sm:rounded-lg relative overflow-hidden bg-white shadow-md">
            <div className="overflow-x-auto">
              <table className="dark:text-gray-400 w-full text-sm text-left text-gray-500">
                <thead
                  className="bg-gray-50 dark:bg-gray-700 dark:text-gray-400 text-xs text-gray-700 uppercase"
                  style={{ textAlign: 'right' }}
                >
                  <tr>
                    <th scope="col" className="px-4 py-4">
                      الفرصة
                    </th>
                    <th scope="col" className="px-4 py-3">
                      النوع
                    </th>
                    <th scope="col" className="px-4 py-3">
                      حالة الفرصة
                    </th>
                    <th scope="col" className="px-4 py-3">
                      حالة الطلب
                    </th>
                  </tr>
                </thead>
                <tbody style={{ textAlign: 'right' }}>
                  {opportunities.map((opp) => (
                    <tr className="dark:border-gray-700 border-b" key={opp._id}>
                      <th
                        scope="row"
                        className="whitespace-nowrap dark:text-white px-4 py-3 font-medium text-gray-900"
                      >
                        <a href={`/opportunities/${opp._id}`}>{opp.title}</a>
                      </th>
                      <td className="px-4 py-3">{opp.type}</td>
                      <td className="px-4 py-3">{opp.status}</td>
                      <td className="px-4 py-3 max-w-[12rem] truncate">
                        {getStatusMessage(
                          opp.isAccepted,
                          opp.isApplied,
                          opp.status
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section> */}
    </>
  );
};
