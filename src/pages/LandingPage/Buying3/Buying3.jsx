const Buying3 = () => {
    return (
        <div className="grid grid-cols-12 px-16 pt-12">
      <div className="main col-span-12 lg:col-span-6">
        <img
          className="w-[458px] h-[400px] image-1 rounded-lg"
          src="https://i.postimg.cc/1zFq9cRY/2dfadb483096b037f45ce243cf2b5200.jpg"
          alt=""
        />
        <img
          className="w-[452px] h-[240px] image-2 rounded-lg"
          src="https://i.postimg.cc/K8RTWh6b/847abc7ef0d06ba122e220d7339df1e8.jpg"
          alt=""
        />
        <div className="div-3">
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
      <div className="col-span-12 lg:col-span-6">
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
    </div>
    );
};

export default Buying3;