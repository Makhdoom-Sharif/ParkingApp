import { useDispatch, useSelector } from "react-redux";
import { GetAllPlaces } from "../../apiCalls";
import { ChangeStep, NewBookingData } from "../../redux/action";
import Main from "../Cards/Main";
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
    StepNo: Number;
  };
};
type itemType = {
  AreaName: String;
  TotalPlaces: Number;
  _id: String;
};

export default function Areas() {
  const dispatch = useDispatch();
  const { allAreas, accessToken } = useSelector(
    (state: SelectorType) => state?.user
  );
  // const handleAreaSelect = (item: itemType) => {
  //   const Data = { AreaName: item.AreaName };
  //   GetAllPlaces(dispatch, accessToken, item._id)
  //     .then(() => {
  //       dispatch(NewBookingData(Data));
  //       dispatch(ChangeStep(1));
  //     })
  //     .catch((e) => {
  //       console.log(e);
  //     });
  // };

  return (
    <Main
      Data={allAreas}
      // handleSelect={handleAreaSelect}
      area={true}
      place={false}
    />
  );
}
