import "./MissionStatement.css";
const MissionStatement = () => {
  return (
    <div className="ms-top">
      <div className="md:ps-16 ms-main h-[75vh]">
        <img
          className="w-[710px] h-[455px] ms-image"
          src="https://i.postimg.cc/CLRr1fCB/ab0b2f8de43b350fe4a321ac3136abaf.jpg"
          alt=""
        />
        <div className="bg-[#FDF0E7] w-[595px] h-[270px] flex flex-col justify-center gap-5 p-10 ms-div">
          <div className="flex items-center gap-3 font-bold ">
            <hr className="line-property" />
            <h1 className="text-[#F06711] text-xl ">Mission Statement</h1>
          </div>
          <h1 className="text-3xl font-bold">
            Efficient and Transparent <br />
            Home Buying Solutions
          </h1>
          <p className="text-[#6B7280]">
            To bridge the miles with smiles, Heritage-Nest pledges to be the{" "}
            <br />
            golden thread connecting NRIs to their homeland, through trust,{" "}
            <br />
            transparency, and tailored real estate solutions.
          </p>
        </div>
      </div>
      <img className="ms-vector" src="https://i.postimg.cc/rs4VG384/Vector.png" alt="" />
    </div>
  );
};

export default MissionStatement;
