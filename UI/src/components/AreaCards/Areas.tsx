import { LoadingButton } from "@mui/lab";
import { CircularProgress } from "@mui/material";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { GetAllPlaces } from "../../apiCalls";
import { ChangeStep, ComponentChange } from "../../redux/action";
import Main from "../Cards/Main";
// import "./style.css";
const Data = [
  {
    AreaID: "1",
    AreaName: "ABC",
    TotalPalces: 5,
  },
  {
    AreaID: "2",
    AreaName: "ABC1",
    TotalPalces: 6,
  },
  {
    AreaID: "3",
    AreaName: "ABC2",
    TotalPalces: 20,
  },
  {
    AreaID: "4",
    AreaName: "ABC3",
    TotalPalces: 10,
  },
  {
    AreaID: "5",
    AreaName: "ABC4",
    TotalPalces: 10,
  },
  {
    AreaID: "6",
    AreaName: "ABC5",
    TotalPalces: 10,
  },
  {
    AreaID: "7",
    AreaName: "ABC6",
    TotalPalces: 10,
  },
];
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
const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const theme = createTheme();

export default function Areas() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { allAreas, accessToken, StepNo } = useSelector(
    (state: SelectorType) => state?.user
  );
  const handleAreaSelect = (item: itemType) => {
    console.log(item._id);
    GetAllPlaces(dispatch, accessToken, item._id)
      .then(() => {
        console.log("step=====>", StepNo);
        dispatch(ComponentChange("PlaceView"));
        dispatch(ChangeStep(1));
      })
      .catch((e) => {
        console.log(e);
      });
  };
  console.log("Area==>", allAreas);

  return (
    <Main
      Data={allAreas}
      handleSelect={handleAreaSelect}
      area={true}
      place={false}
    />
  );
}
