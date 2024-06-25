import HeroSection from "./HeroSection/HeroSection";
import NewProperty from "./NewProperty/NewProperty";
import PopularProperty from "./PopularProperty/PopularProperty";
import Propertys from "./Propertys/Propertys";

const BuyerScreen = () => {
  return (
    <div>
      <HeroSection />
      <Propertys />
      <PopularProperty />
      <NewProperty />
    </div>
  );
};

export default BuyerScreen;
