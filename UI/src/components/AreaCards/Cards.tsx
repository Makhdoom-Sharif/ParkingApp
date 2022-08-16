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
import { ComponentChange } from "../../redux/action";
import "./style.css";
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
  };
};
const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const theme = createTheme();

export default function Cards() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { allAreas, accessToken } = useSelector(
    (state: SelectorType) => state?.user
  );
  const handleAreaSelect = (AreaID: String) => {
    console.log(AreaID);
    GetAllPlaces(dispatch, accessToken, AreaID)
      .then(() => {
        // console.log("object");
        // navigate("/places");
        dispatch(ComponentChange("PlaceView"));
      })
      .catch((e) => {
        console.log(e);
      });
  };
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <main>
        <Container sx={{ py: 8 }} maxWidth="md">
          <Grid container spacing={4}>
            {allAreas?.map((item, index) => (
              <Grid item key={item._id} xs={12} sm={6} md={4}>
                <Card
                  className="cards"
                  sx={{
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography
                      gutterBottom
                      variant="h5"
                      component="h2"
                      sx={{ wordBreak: "break-all" }}
                    >
                      {item.AreaName}
                    </Typography>
                    <Typography sx={{ wordBreak: "break-all" }}>
                      <>Total Places: {item.TotalPalces}</>
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <LoadingButton
                      variant="contained"
                      // color="secondary"
                      fullWidth
                      loadingIndicator={
                        <CircularProgress style={{ color: "#fff" }} size={16} />
                      }
                      className="Cardsbutton"
                      sx={{
                        textTransform: "none",
                      }}
                      type="submit"
                      disabled={false}
                      loading={false}
                      onClick={() => handleAreaSelect(item._id)}
                    >
                      Select
                    </LoadingButton>
                    {/* <Button size="small">Edit</Button> */}
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
    </ThemeProvider>
  );
}
