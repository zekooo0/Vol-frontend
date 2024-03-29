import { Link } from 'react-router-dom';
const Home = () => {
  return (
    <div className="text-neutral-200 landing-image relative">
      <div className="absolute inset-0 bg-black opacity-50"></div>

      {/* <Container> */}
      <div className="min-h-dvh container flex items-center justify-center">
        <div className="md:w-3/4 xl:w-1/2 z-10 flex flex-col items-center justify-center h-full">
          <h1 className="lg:text-7xl md:text-right md:text-6xl p-2 text-4xl font-black text-center">
            منصة <span className="text-[#00c2cd]">عضد </span> للتطوع في العالم العربي
          </h1>
          <button className="bg-neutral-200 md:ml-auto text-[#003478] hover:bg-[#00c2cd] hover:text-white font-extrabold text-xl  rounded-md mt-10 py-4 px-16 ">
            <Link to="/opportunities">كن متطوعًا</Link>
          </button>
        </div>
        <div className="md:block lg:w-1/2 md:w-1/4 hidden"></div>
      </div>
      {/* </Container>. */}
    </div>
  );
};

export default Home;
