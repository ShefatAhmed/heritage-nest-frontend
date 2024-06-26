const Banner = () => {
  return (
    <div className="relative w-full h-[320px]">
      <img
        className="w-full h-full object-cover"
        src="https://i.postimg.cc/HxfHNCdB/76dc4331eae0ba3a9e500723579065ca.jpg"
        alt="Image"
      />
      <div
        className="absolute top-0 left-0 w-full h-full"
        style={{
          background:
            "linear-gradient(to top, rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0) 80%)",
        }}
      ></div>
    </div>
  );
};

export default Banner;
