import { styled } from "../../stitches.config";

export const Container = styled("nav", {
  gridArea: "nav",
  display: "flex",
  justifyContent: "space-around",
});

export const Button = styled("button", {
  fontFamily: "$mono",
  fontWeight: "700",
  fontSize: "1.25rem",
  padding: "1rem",
  width: "100%",
  backgroundColor: "$grey900",
  color: "$green500",
  border: "none",
  borderBottom: "5px solid $dark",
  cursor: "pointer",
  "&:hover": {
    color: "$green600",
  },
  "&:focus": {
    outline: "0",
    color: "$yellow500",
  },
});
