const OurTeam = () => {
  return (
    <div className="px-16">
      <div className="flex items-center gap-3 font-bold">
        <hr className="line-property" />
        <h1 className="text-[#F06711] text-xl ">Our Teem</h1>
      </div>
      <h1 className="text-2xl font-semibold">
        Discover the Faces Behind Our Success
      </h1>
      <div className="grid grid-cols-3 gap-5 mt-5">
        <img
          className="w-[384px] h-[417px] col-span-3 md:col-span-1 "
          src="https://i.postimg.cc/MGBwSs59/e33705b95ec67efe39a75e6ac022b5f6.jpg"
          alt=""
        />
        <img
          className="w-[384px] h-[417px] col-span-3 md:col-span-1 "
          src="https://i.postimg.cc/JncWyG9J/4236d7c6460a848fde8728fa70050139.jpg"
          alt=""
        />
        <img
          className="w-[384px] h-[417px] col-span-3 md:col-span-1 "
          src="https://i.postimg.cc/MT8SKyrq/b807f913d81785380a11f14345367b5f.jpg"
          alt=""
        />
      </div>
    </div>
  );
};

export default OurTeam;
