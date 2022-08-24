import { Box } from "@mui/system";
import AuthNavigation from "../components/TabNavigation/AuthNavigation";
type Props = {};

const LoginPage = (props: Props) => {
  return (
    <>
      <Box
        component={"div"}
        sx={{
          height: "100%",
          display: "flex",
          justifyContent: "center",
          alignContent: "center",
          alignItems: "center",
          width: "50%",
        }}
      >
        <Box
          component={"img"}
          sx={{ width: "100%", height: "100%" }}
          src="https://i.ibb.co/3cZ8sGR/Login.png"
        ></Box>
      </Box>
      <Box sx={{ width: "50%", minHeight: "80vh" }}>
        <AuthNavigation />
      </Box>
    </>
  );
};

export default LoginPage;
