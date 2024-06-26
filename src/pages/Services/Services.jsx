import Testimonial from "../BuyerScreen/Testimonial/Testimonial";
import Banner from "./Banner/Banner";
import Meet from "./Meet/Meet";
import MissionStatement from "./MissionStatement/MissionStatement";
import OurStory from "./OurStory/OurStory";
import OurTeam from "./OurTeam/OurTeam";
import Propertys from "./Propertys/Propertys";

const Services = () => {
  return (
    <div className="bg-white">
      <Banner />
      <Propertys />
      <OurStory />
      <MissionStatement />
      <OurTeam />
      <Meet />
      <div className="pb-10">
        <Testimonial />
      </div>
    </div>
  );
};

export default Services;
