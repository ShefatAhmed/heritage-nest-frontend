import "./OurStory.css";
const OurStory = () => {
  return (
    <div className="our-s-main ps-20 pe-16 h-[75vh]">
      <div className="our-s-main-image">
        <img
          className=" w-[904px] h-[455px]"
          src="https://i.postimg.cc/KYj2vYY0/1b2d231bb5d4acfdeb28cf94fa48053c.jpg"
          alt=""
        />
      </div>
      <div className="our-s-div bg-[#ECF5FF] w-[595px] h-[270px] flex flex-col justify-center gap-5 p-10">
        <div className="flex items-center gap-3 font-bold ">
          <hr className="line-property" />
          <h1 className="text-[#F06711] text-xl ">Our Story</h1>
        </div>
        <h1 className="text-3xl font-bold">
          Efficient and Transparent <br />
          Home Buying Solutions
        </h1>
        <p className="text-[#6B7280]">
          In the symphony of bustling markets and serene landscapes, <br />
          Heritage-Nest was born—a vision to
        </p>
      </div>
      <img
        className="w-[252px] h-[235px] our-s-last-image"
        src="https://i.postimg.cc/KYj2vYY0/1b2d231bb5d4acfdeb28cf94fa48053c.jpg"
        alt=""
      />
    </div>
  );
};

export default OurStory;
