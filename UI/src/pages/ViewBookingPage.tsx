// import { Title } from '@mui/icons-material'
import Footer from "../components/Footer/Footer";
import TabNavigation from "../components/TabNavigation/TabNavigation";
import Title from "../components/Title/Title";

type Props = {};

const ViewBookingPage = (props: Props) => {
  return (
    <>
      <div
        style={{
          flexGrow: "1",
          display: "flex",
          flexDirection: "column",
          // width: "70%",
        }}
      >
        {/* <Title titleText="Your Bookings" /> */}
        <TabNavigation />
      </div>
      {/* <Footer /> */}
    </>
  );
};

export default ViewBookingPage;
