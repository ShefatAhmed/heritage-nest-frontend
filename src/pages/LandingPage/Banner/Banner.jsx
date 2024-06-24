/* eslint-disable react/no-unescaped-entities */
import videoBg from "../../../assets/videoBg.mp4";
import "../Banner/Banner.css";

const Banner = () => {
  return (
    <div className="main">
      <div className="overlay"></div>
      <video src={videoBg} autoPlay loop muted />
      <div className="content">
        <h1 className="font-extrabold text-3xl md:text-6xl text-center">
          Your Portal to India's <br /> Exquisite Real Estate
        </h1>
        <p className="text-[#F9FAFB] mt-5 text-center">
          Seamlessly connecting you to the heartbeat of India's prime
          properties.
        </p>
        <button
          className="bg-[#005EAE] text-white px-5 py-3 flex gap-3 items-center rounded-md mt-5 font-semibold"
        >
          <i className="fa-solid fa-magnifying-glass"></i>Find Property
        </button>
      </div>
    </div>
  );
};

export default Banner;
