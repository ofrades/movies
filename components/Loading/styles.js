import { styled } from "../../stitches.config";

export const Container = styled("div", {
  display: "flex",
  backgroundColor: "$light",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  "& svg": {
    padding: "2rem",
  },
  "& span": { display: "flex", width: "100%" },
  "& canvas": {},
});
