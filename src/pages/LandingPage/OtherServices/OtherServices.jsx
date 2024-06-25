import { RiHome6Line } from "react-icons/ri";

/* eslint-disable react/no-unknown-property */
const OtherServices = () => {
  return (
    <div className="px-16">
      <h1 className="text-center text-3xl font-semibold">Other Services</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 mt-10 pb-10 gap-5">
        <div className="col-span-1 bg-[#ECF5FF] p-5 flex justify-center gap-5">
          <div className="bg-[#EE6611] w-fit h-fit p-2 rounded text-[#ECF5FF]">
            <RiHome6Line />
          </div>
          <div>
            <h1 className="text-2xl font-bold">Advanced Property Search</h1>
            <p className="mt-5 font-semibold text-[#6B7280]">
              Effortlessly find your dream property with advanced search
              filters.
            </p>
          </div>
        </div>
        <div className="col-span-1 bg-[#ECF5FF] p-5 flex justify-center gap-5">
          <div className="bg-[#EE6611] w-fit h-fit p-2 rounded text-[#ECF5FF]">
            <RiHome6Line />
          </div>{" "}
          <div>
            <h1 className="text-2xl font-bold">Virtual Tours and Multimedia</h1>
            <p className="mt-5 font-semibold text-[#6B7280]">
              Explore properties through immersive virtual tours and HD photos.
            </p>
          </div>
        </div>
        <div className="col-span-1 bg-[#ECF5FF] p-5 flex justify-center gap-5">
          <div className="bg-[#EE6611] w-fit h-fit p-2 rounded text-[#ECF5FF]">
            <RiHome6Line />
          </div>{" "}
          <div>
            <h1 className="text-2xl font-bold">Secure Online Transactions</h1>
            <p className="mt-5 font-semibold text-[#6B7280]">
              Ensure secure transactions and e-sign documents seamlessly online.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OtherServices;
