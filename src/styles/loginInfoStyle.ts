import { styled } from "@mui/material/styles";

const MainContainer = styled("div")({
  display: "flex",
  justifyContent: "center",
  flexDirection: "column",
  alignItems: "center",
  // height: "100vh",
  padding: "2rem",
  // backgroundColor: "blueviolet",
});
const LoginHeading = styled("div")({
  fontSize: "2rem",
  // margin: "4rem 0 !important",
  fontWeight: 500,
  textAlign: "center",
  // width: "400px",
});
const SubHeading = styled("div")({
  fontSize: "2rem",
  margin: "2rem 0  !important",
  fontWeight: 500,
});

const ImageContainer = styled("div")({
  display: "flex",
  justifyContent: "center",
  flexDirection: "column",
  alignItems: "center",
  backgroundColor: "red",
  minWidth: "600px",
  // padding: "2rem",
});

const DetailsContent = styled("div")({
  display: "flex",
  alignItems: "center",
  margin: "1rem 0",
});
const DetailsHeading = styled("p")({
  // display: "flex",
  // justifyContent: "center",
  // flexDirection: "column",
  // alignItems: "center",
  fontSize: "1.6rem",
});
const DetailsPara = styled("p")({
  margin: "0 1rem !important",
  fontSize: "1.6rem",
  // display: "flex",
  // justifyContent: "center",
  // flexDirection: "column",
  // alignItems: "center",
});

export {
  DetailsHeading,
  DetailsPara,
  MainContainer,
  LoginHeading,
  ImageContainer,
  SubHeading,
  DetailsContent,
};
