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
const SubHeading = styled("div")({
  fontSize: "2rem",
  margin: "2rem 0  !important",
  fontWeight: 500,
});

const ImageContainer = styled("div")({
  //   display: "flex",
  //   justifyContent: "center",
  //   flexDirection: "column",
  //   alignItems: "center",
  //   maxWidth: "1100px",
  //   backgroundColor: "red",
});
const SelectCompanionHeding = styled("p")({
  fontSize: "2.5rem",
  //   display: "flex",
  //   justifyContent: "center",
  //   flexDirection: "column",
  //   alignItems: "center",
});
const SelectorAddCompanionHeding = styled("p")({
  fontSize: "1.4rem",
  fontWeight: 300,
  //   display: "flex",
  //   justifyContent: "center",
  //   flexDirection: "column",
  //   alignItems: "center",
});
const DetailsContent = styled("div")({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  //   textAlign: "center",
  //   margin: "1rem 0",
});
const DetailsHeading = styled("p")({
  // display: "flex",
  // justifyContent: "center",
  // flexDirection: "column",
  // alignItems: "center",
  fontSize: "1.6rem",
  margin: "0 !important",
});
const DetailsPara = styled("p")({
  fontSize: "1.3rem",
  fontWeight: 300,

  //   margin: "0 !important",
  margin: "0 0.5rem 0 0 !important",
  // display: "flex",
  // justifyContent: "center",
  // flexDirection: "column",
  // alignItems: "center",
});
export {
  MainContainer,
  DetailsHeading,
  DetailsPara,
  DetailsContent,
  SelectorAddCompanionHeding,
  LoginHeading,
  ImageContainer,
  SubHeading,
  SelectCompanionHeding,
};