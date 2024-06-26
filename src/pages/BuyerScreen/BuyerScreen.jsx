import HeroSection from "./HeroSection/HeroSection";
import NewProperty from "./NewProperty/NewProperty";
import PopularProperty from "./PopularProperty/PopularProperty";
import PostProperty from "./PostProperty/PostProperty";
import Propertys from "./Propertys/Propertys";
import Testimonial from "./Testimonial/Testimonial";

const BuyerScreen = () => {
  return (
    <div>
      <HeroSection />
      <Propertys />
      <PopularProperty />
      <NewProperty />
      <Testimonial />
      <PostProperty />
    </div>
  );
};

export default BuyerScreen;
