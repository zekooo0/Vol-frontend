import { useState } from 'react';
import { Dialog } from '@headlessui/react';
import axios from 'axios';
import Cookies from 'js-cookie';

const BASE_URL = import.meta.env.VITE_BASE_URL;
const token = Cookies.get('_auth');

const initalState = {
  title: '',
  desc: '',
  requestedVolunteersCount: 1,
  type: 'virtual',
  status: 'open',
};
const orgId = localStorage.getItem('id');

const Modal = ({ isOpen, setIsOpen, fetchData }) => {
  const [modalData, setModalData] = useState(initalState);

  const handleSubmit = async () => {
    const oppData = {
      title: modalData.title,
      desc: modalData.desc,
      type: modalData.type,
      requestedVolunteersCount: modalData.requestedVolunteersCount,
      organization: orgId,
      status: 'open',
    };

    const res = await axios.post(`${BASE_URL}/opportunities`, oppData, {
      headers: { Authorization: `Bearer ${token}` },
    });
    setModalData(initalState);
    setIsOpen(false);
    fetchData();
  };

  return (
    <Dialog open={isOpen} onClose={() => setIsOpen(false)} className=" relative z-50">
      {/* The backdrop, rendered as a fixed sibling to the panel container */}
      <div className="bg-black/30 fixed inset-0" aria-hidden="true" />

      {/* Full-screen container to center the panel */}
      <div className="fixed inset-0 flex items-center justify-center w-screen p-4">
        {/* The actual dialog panel  */}
        <Dialog.Panel className="flex flex-col w-full max-w-sm p-4 mx-auto space-y-4 bg-white rounded">
          <Dialog.Title className="text-lg font-bold">إضافة فرصة تطوعية</Dialog.Title>
          <div className="flex flex-col space-y-2">
            <label htmlFor="title">العنوان</label>
            <input
              name="title"
              type="text"
              id="title"
              value={modalData.title}
              onChange={(e) => setModalData({ ...modalData, title: e.target.value })}
              className="p-2 border rounded"
            />
          </div>
          <div className="flex flex-col space-y-2">
            <label htmlFor="desc">الوصف</label>
            <textarea
              name="desc"
              type=""
              id="desc"
              className=" p-2 border rounded"
              value={modalData.desc}
              onChange={(e) => setModalData({ ...modalData, desc: e.target.value })}
            />
          </div>
          <div className="flex flex-col space-y-2">
            <label htmlFor="requestedVolunteersCount">عدد المتطوعين المطلوب</label>
            <input
              name="requestedVolunteersCount"
              type="number"
              id="requestedVolunteersCount"
              value={modalData.requestedVolunteersCount}
              onChange={(e) =>
                setModalData({ ...modalData, requestedVolunteersCount: e.target.value })
              }
              className="p-2 border rounded"
            />
          </div>
          <div className="flex flex-col space-y-2">
            <label htmlFor="type">النوع</label>
            <select
              id="type"
              name="type"
              className="p-2 border rounded"
              value={modalData.type}
              onChange={(e) => setModalData({ ...modalData, type: e.target.value })}
            >
              <option className="p-2" value={'on-site'}>
                on-site
              </option>
              <option className="p-2" value={'virtual'}>
                virtual
              </option>
            </select>
          </div>
          <div className="flex justify-between gap-2">
            <button
              className="bg-rose-500 w-full px-4 py-2 text-white rounded-md"
              onClick={() => setIsOpen(false)}
            >
              إلغاء
            </button>
            <button
              className="bg-sky-500 w-full px-4 py-2 text-white rounded-md"
              onClick={handleSubmit}
            >
              إنشاء
            </button>
          </div>
        </Dialog.Panel>
      </div>
    </Dialog>
  );
};
export default Modal;
