import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useEffect, useState } from "react";
import { CiLocationOn } from "react-icons/ci";
import { FaDollarSign } from "react-icons/fa";
import { Link } from "react-router-dom";

const NewProperty = () => {
  const [data, setdata] = useState([]);
  useEffect(() => {
    fetch("https://heritage-nest-backend.vercel.app/recent-property")
      .then((res) => res.json())
      .then((result) => setdata(result));
  });

  return (
    <div className="p-20">
      <div className="flex justify-between items-center md:text-left text-center  mb-4">
        <h1 className="md:text-2xl font-semibold">New Listed Properties</h1>
        <p className="text-[#0059B1] font-semibold underline">
          See all propeety
        </p>
      </div>
      <div>
        <Carousel>
          <CarouselContent className="flex">
            {data.map((item) => (
              <CarouselItem
                key={item._id}
                className="flex-none  w-[385px] h-[385px]"
              >
                <div className="relative">
                  <img
                    src={item.image}
                    alt=""
                    className="w-[385px] h-[200px]"
                  />
                  <div className="bg-[#FDF0E7] w-[55px] h-[28px] flex gap-2 p-1 justify-center items-center font-semibold absolute bottom-5 left-5 rounded">
                    <img
                      src="https://i.postimg.cc/htbdXqkf/Gallery.png"
                      alt=""
                    />
                    <p>20</p>
                  </div>
                </div>
                <div className="p-4 bg-[#ECF5FF]">
                  <div className="flex justify-between">
                    <h1 className="bg-[#C5E2FF] w-fit px-3">{item.type}</h1>
                    <div className="flex items-center gap-2">
                      <hr className="line-property2" />
                      <p className="font-semibold">Ready to Move</p>
                    </div>
                  </div>
                  <hr className="mt-2" />
                  <Link to={`/property/${item._id}`} className="hover:underline">
                    <h1 className="text-lg font-semibold mt-1">{item.name}</h1>
                  </Link>
                  <div className="flex items-center gap-2 mt-1">
                    <CiLocationOn className="text-xl text-[#EE6611] font-extrabold" />
                    <p className="text-[#6B7280]">{item.location}</p>
                  </div>
                  <div className="flex text-lg items-center font-semibold mt-6">
                    <FaDollarSign />
                    <p>{item.price}</p>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="text-black" />
          <CarouselNext className="text-black" />
        </Carousel>
      </div>
      <hr className="md:w-[65%] mt-5" />
    </div>
  );
};

export default NewProperty;
