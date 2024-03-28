import OpportunitiesSlider from '../components/OpportunitiesSlider';

const HomeOpportunites = () => {
  return (
    <div className="container flex flex-col mt-20">
      <hr className="mb-5" />

      <h1 className="mx-auto pb-10 text-[#00c2cd] text-4xl font-bold ">فرص التطوع</h1>
      <OpportunitiesSlider />
      <button className="rounded-xl mx-auto text-white hover:bg-[#003478] w-1/4 mt-5 py-3 text-lg font-semibold bg-[#00c2cd]">
        المزيد ...
      </button>
      <hr className="mt-5" />
    </div>
  );
};

export default HomeOpportunites;
