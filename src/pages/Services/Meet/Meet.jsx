const Meet = () => {
  return (
    <div className="px-16 py-10 grid grid-cols-12">
      <div className="col-span-12 md:col-span-8">
        <div className="flex items-center gap-3 font-bold">
          <hr className="line-property" />
          <h1 className="text-[#F06711] text-xl ">
            Meet the Team For Book Consultation
          </h1>
        </div>
        <h1 className="text-4xl font-bold my-5">
          Meet the stewards of your <br /> heritage journey
        </h1>
        <p className="text-[#6B7280]">
          each member an embodiment of expertise and warmth, dedicated to
          guiding you <br /> home, every step of the way.
        </p>
        <p className="bg-[#0059B1] w-fit px-3 p-1 text-white mt-16 font-semibold mb-5 md:mb-0">Book Consultation Now</p>
      </div>
      <img className="w-[384px] h-[304px] col-span-12 md:col-span-4" src="https://i.postimg.cc/TPx5zNGW/eae1a2bee8fa1daa04a0de5e4afe2673.jpg" alt="" />
    </div>
  );
};

export default Meet;
