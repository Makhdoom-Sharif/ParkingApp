import { useSelector } from "react-redux";
import Footer from "../components/Footer/Footer";
import ParkingStepper from "../components/ParkingStepper/ParkingStepper";
// import AreaView from "../components/ParkingStepper/ParkingView/AreaView";
// import DateTimeRangeView from "../components/ParkingStepper/ParkingView/DateTimeRangeView";
// import PlaceView from "../components/ParkingStepper/ParkingView/PlaceView";
// import SlotsView from "../components/ParkingStepper/ParkingView/SlotsView";
import Title from "../components/Title/Title";

type Props = {};
type SelectorType = {
  user: {
    accessToken: string;
    contactNo: string;
    email: string;
    errorMessage: string;
    isAdmin: boolean;
    loading: boolean;
    loginStatus: boolean;
    uid: string;
    username: string;
    allAreas: {
      _id: string;
      AreaName: string;
      TotalPalces: Number;
    }[];
    ComponentChange: string;
  };
};
const ParkPage = (props: Props) => {
  const { allAreas, accessToken, ComponentChange } = useSelector(
    (state: SelectorType) => state?.user
  );
  return (
    <>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <Title titleText="New Booking" />

        <ParkingStepper />
        {/* {ComponentChange === "AreaView" ? (
          <AreaView />
        ) : ComponentChange === "PlaceView" ? (
          <PlaceView />
        ) : ComponentChange === "DateTimeRangeView" ? (
          <DateTimeRangeView />
        ) : (
          <SlotsView />
        )} */}
      </div>
      <Footer />
    </>
  );
};

export default ParkPage;
