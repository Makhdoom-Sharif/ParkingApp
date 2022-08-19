import { useDispatch, useSelector } from "react-redux";
import { GetAllPlaces } from "../../apiCalls";
import { ChangeStep } from "../../redux/action";
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
  const { allAreas, accessToken, StepNo } = useSelector(
    (state: SelectorType) => state?.user
  );
  const handleAreaSelect = (item: itemType) => {
    console.log(item._id);
    GetAllPlaces(dispatch, accessToken, item._id)
      .then(() => {
        dispatch(ChangeStep(1));
        console.log(item);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <Main
      Data={allAreas}
      handleSelect={handleAreaSelect}
      area={true}
      place={false}
    />
  );
}
