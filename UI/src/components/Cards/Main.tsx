import { LoadingButton } from "@mui/lab";
import {
  Card,
  CardActions,
  CardContent,
  CircularProgress,
  CssBaseline,
  Grid,
  Typography,
} from "@mui/material";
import { Container } from "@mui/system";
import React, { useState } from "react";
import "./style.css";
import { createTheme, ThemeProvider } from "@mui/material/styles";

type Props = {
  Data?: {
    _id?: String;
    AreaName?: String;
    TotalPlaces?: Number;
    placeName?: string;
    totalSlots?: Number;
    AreaID?: String;
  }[];

  handleSelect: Function;
  area: boolean;
  place: boolean;
};
const theme = createTheme();

const Main = (props: Props) => {
  const { Data, handleSelect, area, place } = props;
  // const [data, setData] = useState(area ? AreaData : place ? PlaceData : null);
  console.log("==>", Data);
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <main>
        <Container sx={{ py: 8 }} maxWidth="md">
          <Grid container spacing={4}>
            {Data?.map((item, index) => (
              <Grid item key={index} xs={12} sm={6} md={4}>
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
                      <>
                        {!area && !place && `Slot No:`}{" "}
                        {area ? item.AreaName : place ? item.placeName : item}
                      </>
                    </Typography>
                    {(area || place) && (
                      <Typography sx={{ wordBreak: "break-all" }}>
                        <>
                          Total {area ? "Places" : "Slots"}:{" "}
                          {area ? item.TotalPlaces : item.totalSlots}
                        </>
                      </Typography>
                    )}
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
                      onClick={() => handleSelect(item)}
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
};

export default Main;
