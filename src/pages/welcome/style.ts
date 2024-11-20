import { styled } from "@mui/material/styles";

const MainContainer = styled("div")({
  display: "flex",
  justifyContent: "center",
  flexDirection: "column",
  alignItems: "center",
  // height: "100vh",
  padding: "2rem",
});
const LoginHeading = styled("div")({
  fontSize: "2rem",
  // margin: "4rem 0 !important",
  fontWeight: 500,
  textAlign: "center",
  width: "400px",
});
const SuccessHeading = styled("p")({
  fontSize: "2rem",
  //   display: "flex",
  //   justifyContent: "center",
  //   flexDirection: "column",
  //   alignItems: "center",
});
export { MainContainer, LoginHeading, SuccessHeading };
