import CallOutlinedIcon from "@mui/icons-material/CallOutlined";
import { LoadingButton } from "@mui/lab";
import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./Style.css";
type Props = {
  Drawer?: boolean;
};
type SelectorType = {
  user: {
    isAdmin: boolean;
  };
};

const Footer = ({ Drawer }: Props) => {
  const { isAdmin } = useSelector((state: SelectorType) => state?.user);
  return (
    <Box className="FooterContainer">
      {!Drawer && !isAdmin && (
        <Box className="FooterContainerTop">
          <Box className="FooterContainerTopLeft ">
            <Box className="FooterContainerTopLeftHeader">
              <p style={{ margin: 0, padding: 0 }}>Do You Have Any Questions</p>
              <p style={{ margin: 0, padding: 0 }}>Regarding Our Pricing?</p>
              <Box className="FooterButtonContainer">
                <LoadingButton
                  variant="contained"
                  sx={{
                    width: "50%",
                    color: "#fff",
                    backgroundColor: "#4056C8 !important",
                    marginTop: "20px",
                  }}
                >
                  Send Query
                </LoadingButton>
              </Box>
            </Box>
            <Box
              sx={{
                color: "#ffffff4f",
              }}
            >
              Our team will respond to your inquiries within 48 hours
            </Box>
          </Box>
          <Box className="FooterContainerTopRight ">
            <Box className="FooterContainerTopRightHeader">
              <p style={{ margin: 0, padding: 0 }}>Do You Have Any Queries</p>
              <p style={{ margin: 0, padding: 0 }}>And Want To Contact Us?</p>
              <Box className="FooterContactContainer">
                <Box sx={{ color: "#4056C8" }}>Feel Free To Call Us</Box>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexDirection: "row",
                  }}
                >
                  <CallOutlinedIcon
                    sx={{
                      fontSize: "2rem",
                      marginRight: "5px",
                      color: "#4056C8",
                    }}
                  />
                  <Box sx={{ color: "#4056C8" }}>+92-322 522 1122</Box>
                </Box>
              </Box>
            </Box>
            <Box
              sx={{
                color: "#ffffff4f",
              }}
            >
              Our team will respond to your inquiries within 48 hours
            </Box>
          </Box>
        </Box>
      )}
      <Typography
        variant="body2"
        align="center"
        style={{
          padding: "25px",
          backgroundColor: "#1A1A1A",
          color: "#fff",
        }}
      >
        {"Copyright © "}
        <Link to={"/Login"} style={{ color: "inherit" }}>
          <span>Park</span>
          <span>ea</span>
        </Link>{" "}
        {new Date().getFullYear()}
        {"."}
      </Typography>
    </Box>
  );
};

export default Footer;
