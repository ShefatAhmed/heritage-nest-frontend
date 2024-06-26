import { useEffect, useState } from "react";
import { CiLocationOn } from "react-icons/ci";
import { FaDollarSign } from "react-icons/fa";
import { useParams } from "react-router-dom";
import {
  MdBalcony,
  MdOutlineBathtub,
  MdOutlineKingBed,
  MdShelves,
} from "react-icons/md";
import ReactSlider from "react-slider";
import "../../lib/Style/PropertyDetails.css";

const PropertyDetails = () => {
  const { id } = useParams();
  const [property, setProperty] = useState(null);
  const [priceRange, setPriceRange] = useState([0, 305]);

  useEffect(() => {
    fetch(`https://heritage-nest-backend.vercel.app/property/${id}`)
      .then((response) => response.json())
      .then((data) => setProperty(data));
  }, [id]);

  const handlePriceChange = (values) => {
    setPriceRange(values);
  };

  if (!property) {
    return <div>Loading...</div>;
  }
  return (
    <div className="px-16 py-5 h-screen mb-[800px]">
      <div>
        <div className="flex gap-96 items-start first-pd-cr">
          <div>
            <h1 className="text-xl font-bold title-pd">{property.name}</h1>
            <div className="flex items-center gap-2 mt-1">
              <CiLocationOn className="text-xl text-[#EE6611] font-extrabold" />
              <p className="text-[#6B7280]">{property.location}</p>
            </div>
          </div>
          <h1 className="flex items-center font-extrabold text-2xl">
            <FaDollarSign />
            {property.price}K
          </h1>
        </div>
        <hr className="w-[0px] md:w-[80vh]" />
        <div className="grid grid-cols-12 mt-5 gap-5">
          <div className="col-span-12 md:col-span-8">
            <img className="w-[800px] h-[400px]" src={property.image} alt="" />
            <div className="flex justify-between mt-5 max-w-[800px] pd-img">
              <img
                className="w-[290px] h-[160px]"
                src="https://i.postimg.cc/2ynt3JM5/1e036746489dbee6907d97f3535ff19b.jpg"
                alt=""
              />
              <img
                className="w-[290px] h-[160px]"
                src="https://i.postimg.cc/W3BKNj9K/7fb7d9f102bb483cdbf1bbec4a8cc5eb.jpg"
                alt=""
              />
              <div className="relative">
                <img
                  className="w-[188px] h-[160px]"
                  src="https://i.postimg.cc/bJDWfdRk/a128d7eb55c12d9603e4d65121d68148.jpg"
                  alt=""
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                  <p className="text-center text-white font-semibold text-lg">
                    View More
                  </p>
                </div>
              </div>
            </div>
            <div className="max-w-[800px] h-[356px] bg-slate-50 my-5 p-5 rounded border">
              <h1 className="text-xl font-bold">Overview</h1>
              <div className="bg-white shadow-xl flex py-2 mt-5 px-5 gap-5">
                <div className="flex items-center gap-1">
                  <MdOutlineBathtub />
                  <p>2 Beds</p>
                </div>
                <div className="flex items-center gap-1">
                  <MdOutlineKingBed />
                  <p>2 Bath</p>
                </div>
                <div className="flex items-center gap-1">
                  <MdBalcony />
                  <p>2 Balcony</p>
                </div>
                <div className="flex items-center gap-1">
                  <MdShelves />
                  <p>Fully Furnished</p>
                </div>
              </div>
              <div className="grid grid-cols-12 py-16">
                <div className="col-span-2">
                  <p className="text-[#5C5C5C]">Carpet Area</p>
                  <p className="font-semibold">2000 sqft</p>
                  <p className="text-[#535353]">$ 225/sqft</p>
                  <p className="text-[#5C5C5C] mt-5">Facing</p>
                  <p className="font-semibold">North - East</p>
                </div>
                <div className="col-span-5">
                  <p className="text-[#5C5C5C]">Floor</p>
                  <p className="font-semibold">Second (Out of 6th floor)</p>
                  <p className="text-[#5C5C5C] mt-10">Additional Rooms</p>
                  <p className="font-semibold">1 servant room & 1 gust room</p>
                </div>
                <div className="col-span-4">
                  <p className="text-[#5C5C5C]">Transaction Type</p>
                  <p className="font-semibold">Ready to move</p>
                  <p className="text-[#5C5C5C] mt-10">Age of construction</p>
                  <p className="font-semibold">New Construction</p>
                </div>
                <div className="col-span-1">
                  <p className="text-[#5C5C5C]">Lift</p>
                  <p className="font-semibold">1</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-12 md:col-span-4 mx-auto">
            <div className=" w-[385px] h-[492px] bg-[#ECF5FF] p-5">
              <p className="text-[#6B7280] text-lg">Property Value</p>
              <p className="text-xl font-bold mt-5">$ {property.price}</p>
              <p className="my-5">
                Your bid cannot be less than 10% of the propertys minimum value.
              </p>
              <form>
                <div className="mb-4">
                  <div>
                    <p>Min</p>
                    <p className="bg-white p-2">${priceRange[0]}K</p>
                  </div>
                  <div>
                    <p>Max</p>
                    <p className="bg-white p-2">${priceRange[1]}K</p>
                  </div>
                  <ReactSlider
                    className="horizontal-slider"
                    thumbClassName="example-thumb"
                    trackClassName="example-track"
                    defaultValue={[280, 305]}
                    ariaLabel={["Lower thumb", "Upper thumb"]}
                    ariaValuetext={(state) => `Thumb value ${state.valueNow}`}
                    min={280}
                    max={305}
                    value={priceRange}
                    onChange={handlePriceChange}
                    // eslint-disable-next-line no-unused-vars
                    renderThumb={(props, state) => <div {...props} />}
                  />
                </div>
                <div className="flex items-center justify-center mt-24">
                  <button
                    type="submit"
                    className="bg-[#0059B1] text-white font-bold py-3 px-5 rounded focus:outline-none focus:shadow-outline"
                  >
                    Bid Property
                  </button>
                </div>
              </form>
            </div>
            <div className="mt-10">
              <img
                className="w-[384px] h-[422px]"
                src="https://i.postimg.cc/tRKBNtQf/Rectangle-27-2.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
      <div className="bg-slate-50 border p-4 mb-10">
        <h1 className="text-xl font-bold">Amenities </h1>
        <div className="grid grid-cols-12 mt-5">
          <div className="col-span-3 flex items-center gap-3 mx-auto">
            <img src="https://i.postimg.cc/XvBYNR95/Capa-1.png" alt="" />
            <p>Power Back Up</p>
          </div>
          <div className="col-span-3 flex items-center gap-3">
            <img src="https://i.postimg.cc/BZYkNXrq/Beds-1.png" alt="" />
            <img src="https://i.postimg.cc/Kzsf7gRw/Beds-3.png" alt="" />
          </div>
          <div className="col-span-6 mx-auto">
            <img src="https://i.postimg.cc/9FFFQTz4/Beds-6.png" alt="" />
          </div>
        </div>
        <div className="flex flex-col gap-5">
          <img className="mx-auto" src="https://i.postimg.cc/Qxy2pWNn/Frame-154-1.png" alt="" />
          <img className="mx-auto" src="https://i.postimg.cc/SN1nCVMF/Frame-155-1.png" alt="" />
          <img className="mx-auto" src="https://i.postimg.cc/x8rWWwhD/Frame-156-1.png" alt="" />
          <img className="mx-auto" src="https://i.postimg.cc/rpK3zyL2/Frame-157.png" alt="" />
          <img className="mx-auto" src="https://i.postimg.cc/rFjPJRVL/Frame-158-1.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default PropertyDetails;
