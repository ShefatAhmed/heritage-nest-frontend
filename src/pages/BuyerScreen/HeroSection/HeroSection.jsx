import { useState } from "react";
import { AiFillDollarCircle } from "react-icons/ai";
import { CiLocationOn } from "react-icons/ci";
import { FaAngleDown, FaHouseUser } from "react-icons/fa";

const HeroSection = () => {
  const [activeTab, setActiveTab] = useState("buy");
  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };

  return (
    <div className="relative">
      <img
        className="w-full h-[200px] sm:h-[309px] object-cover"
        src="https://i.postimg.cc/C5qzChSS/45695cd57effe1b761974bb6a32be2c1.jpg"
        alt="Hero Image"
      />
      <div className="w-full sm:w-[75%] mx-auto bg-white p-5  absolute top-[135px] left-0 right-0">
        <div>
          <div className="w-full mx-auto relative">
            <div className="flex gap-2 sm:gap-5 font-bold relative z-10 overflow-x-auto">
              <button
                className={` ${
                  activeTab === "buy"
                    ? "text-[#0059B1] border-b-4 border-[#0059B1]"
                    : "text-[#4B5563]"
                } pb-1 whitespace-nowrap`}
                onClick={() => handleTabClick("buy")}
              >
                Buy
              </button>
              <button
                className={` ${
                  activeTab === "rent"
                    ? "text-[#0059B1] border-b-4 border-[#0059B1]"
                    : "text-[#4B5563]"
                } pb-1 whitespace-nowrap`}
                onClick={() => handleTabClick("rent")}
              >
                Rent
              </button>
              <button
                className={` ${
                  activeTab === "pg"
                    ? "text-[#0059B1] border-b-4 border-[#0059B1]"
                    : "text-[#4B5563]"
                } pb-1 whitespace-nowrap`}
                onClick={() => handleTabClick("pg")}
              >
                PG
              </button>
              <button
                className={` ${
                  activeTab === "plot"
                    ? "text-[#0059B1] border-b-4 border-[#0059B1]"
                    : "text-[#4B5563]"
                } pb-1 whitespace-nowrap`}
                onClick={() => handleTabClick("plot")}
              >
                Plot
              </button>
              <button
                className={` ${
                  activeTab === "commercial"
                    ? "text-[#0059B1] border-b-4 border-[#0059B1]"
                    : "text-[#4B5563]"
                } pb-1 whitespace-nowrap`}
                onClick={() => handleTabClick("commercial")}
              >
                Commercial
              </button>
            </div>
            <hr
              className="absolute left-0 right-0 bottom-0 h-1 border-0"
              style={{ backgroundColor: "#ECF5FF", marginTop: "5px" }}
            />
          </div>
        </div>
        <div className="relative my-5">
          <i className="fa-solid fa-magnifying-glass absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500"></i>
          <input
            type="text"
            placeholder="Search properties"
            className="w-full p-1 pl-10 border-2 border-[#E5E7EB] rounded focus:outline-none focus:border-[#0059B1]"
          />
        </div>
        <div className="grid grid-cols-12">
          <div className="col-span-12 md:mx-0 mx-auto md:col-span-4">
            <h1 className="flex items-center gap-2 font-semibold"><CiLocationOn className="text-[#EE6611] font-bold" />
            Your Location</h1>
            <div className="relative w-[285px]">
              <select className="block appearance-none w-full h-[48px] bg-[#ECF5FF] rounded px-5 pr-12">
                <option value=""></option>
                <option value="north">North</option>
                <option value="south">South</option>
                <option value="east">East</option>
                <option value="west">West</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-[#EE6611]">
                <FaAngleDown className="h-6 w-6" />
              </div>
            </div>
          </div>
          <div className="col-span-12 md:mx-0 mx-auto md:col-span-4">
            <h1 className="flex items-center gap-2 font-semibold"><FaHouseUser className="text-[#EE6611]" />
            Property Type</h1>
            <div className="relative w-[285px]">
              <select className="block appearance-none w-full h-[48px] bg-[#ECF5FF] rounded px-5 pr-12">
                <option value=""></option>
                <option value="land">Land</option>
                <option value="flat">Flat</option>
                <option value="bunglow">Bunglow</option>
                <option value="Pond">Pond</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-[#EE6611]">
                <FaAngleDown className="h-6 w-6" />
              </div>
            </div>
          </div>
          <div className="col-span-12 md:mx-0 mx-auto md:col-span-4">
            <h1 className="flex items-center gap-2 font-semibold">
              <AiFillDollarCircle className="text-[#EE6611]" />
              Budget
            </h1>
            <div className="relative w-[285px]">
              <select className="block appearance-none w-full h-[48px] bg-[#ECF5FF] rounded px-5 pr-12">
                <option value=""></option>
                <option value="north">250000</option>
                <option value="south">200000</option>
                <option value="east">300000</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-[#EE6611]">
                <FaAngleDown className="h-6 w-6" />
              </div>
            </div>
          </div>
        </div>
        <div>
        <button
          className="bg-[#005EAE] text-white px-5 py-3 flex gap-3 items-center justify-center rounded-md mt-5 font-semibold w-full text-center"
        >
          <i className="fa-solid fa-magnifying-glass"></i>Find Property
        </button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
