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
import ModalDisplay from "../Modal/Modal";
import { useSelector } from "react-redux";
import Button from "../Button/Button";

type Props = {
  Data?: {
    _id?: String;
    AreaName?: String;
    TotalPlaces?: Number;
    placeName?: string;
    totalSlots?: Number;
    AreaID?: String;
    slotNo?: String;
    parkingPlaceID?: String;
  }[];
  // openModal?: boolean;
  // handleSelect: Function;
  area: boolean;
  place: boolean;
};

type SelectorType = {
  user: {
    loading: boolean;
  };
};
const theme = createTheme();

const Main = (props: Props) => {
  const { Data, area, place } = props;
  const { loading } = useSelector((state: SelectorType) => state?.user);
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
                        {area
                          ? item.AreaName
                          : place
                          ? item.placeName
                          : item.slotNo}
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
                    <Button area={area} place={place} item={item} />
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
        <ModalDisplay />
      </main>
    </ThemeProvider>
  );
};

export default Main;
