import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Typography from "@mui/material/Typography";

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
const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const theme = createTheme();

export default function Cards() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <main>
        <Container sx={{ py: 8 }} maxWidth="md">
          <Grid container spacing={4}>
            {Data.map((item, index) => (
              <Grid item key={item.AreaID} xs={12} sm={6} md={4}>
                <Card
                  sx={{
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  {/* <CardMedia
                    component="img"
                    sx={{
                      // 16:9
                      pt: "56.25%",
                    }}
                    image="https://source.unsplash.com/random"
                    alt="random"
                  ></CardMedia> */}
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h2">
                      {item.AreaName}
                    </Typography>
                    <Typography>
                      This is a media card. You can use this section to describe
                      the content.
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small">View</Button>
                    <Button size="small">Edit</Button>
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
