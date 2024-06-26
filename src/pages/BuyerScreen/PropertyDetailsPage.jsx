import OtherServices from "../LandingPage/OtherServices/OtherServices";
import NearbyProperty from "./NearbyProperty";
import PropertyDetails from "./PropertyDetails";

const PropertyDetailsPage = () => {
  return (
    <div>
      <PropertyDetails />
      <OtherServices />
      <NearbyProperty />
    </div>
  );
};

export default PropertyDetailsPage;
