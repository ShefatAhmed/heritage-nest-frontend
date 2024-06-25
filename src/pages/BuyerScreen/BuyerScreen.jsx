import HeroSection from "./HeroSection/HeroSection";
import NewProperty from "./NewProperty/NewProperty";
import PopularProperty from "./PopularProperty/PopularProperty";
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
    </div>
  );
};

export default BuyerScreen;
