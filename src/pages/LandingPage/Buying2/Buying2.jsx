import "./Buying2.css";
const Buying2 = () => {
  return (
    <div className="grid grid-cols-12 px-16 pt-12  h-[100vh] md:h-[70vh]">
      <div className="col-span-12 md:col-span-12 lg:col-span-6">
        <div className="flex items-center gap-3 font-bold ">
          <hr className="line-property" />{" "}
          <h1 className="text-[#F06711] text-xl ">Property buying</h1>
        </div>
        <h1 className="text-4xl font-bold mt-6">
          Efficient and Transparent <br /> Home Buying Solutions
        </h1>
        <p className="text-[#667085] mt-8 font-semibold">
          It is a long established fact that a reader will be distracted by the
          readable <br /> content of a page when looking at its layout.
        </p>
        <button className="bg-[#E6EFF7] px-5 py-3 flex gap-3 items-center rounded-md mt-10 font-semibold text-[#00437C] mb-5 md:mb-0">
          <i className="fa-solid fa-magnifying-glass"></i>Find Property
        </button>
      </div>
      <div className="col-span-12 md:col-span-12 lg:col-span-6 main-i">
        <img
          className="w-[458px] h-[400px] i-1 rounded-lg"
          src="https://i.postimg.cc/63s3XxG5/75a940c81bd1fda908651c2402b95104.jpg"
          alt=""
        />
        <img
          className="w-[452px] h-[240px] i-2 rounded-lg"
          src="https://i.postimg.cc/rmSpyZSG/ea2d4881b8eaa682cca5ff6e03feb34f.jpg"
          alt=""
        />
        <div className="play-button">
          <button className="bg-blue-700 text-white font-bold rounded-full">
            <svg
              className="w-16 h-16"
              fill="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill="currentColor"
                d="M14.752 11.168l-5.197-3.073A1 1 0 008 8.999v6.002a1 1 0 001.555.832l5.197-3.073a1 1 0 000-1.664z"
              ></path>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Buying2;
