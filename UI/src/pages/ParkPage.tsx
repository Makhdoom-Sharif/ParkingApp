import { useSelector } from "react-redux";
import Footer from "../components/Footer/Footer";
import AreaView from "../components/ParkingView/AreaView";
import DateTimeRangeView from "../components/ParkingView/DateTimeRangeView";
import PlaceView from "../components/ParkingView/PlaceView";
import SlotsView from "../components/ParkingView/SlotsView";

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
      <div style={{ flexGrow: "1", display: "flex", flexDirection: "column" }}>
        {ComponentChange === "AreaView" ? (
          <AreaView />
        ) : ComponentChange === "PlaceView" ? (
          <PlaceView />
        ) : ComponentChange === "DateTimeRangeView" ? (
          <DateTimeRangeView />
        ) : (
          <SlotsView />
        )}
      </div>
      <Footer />
    </>
  );
};

export default ParkPage;
