import { styled } from "../../stitches.config";

export const Card = styled("card", {
  fontFamily: "$system",
  backgroundColor: "$green700",
  color: "$dark",
  padding: "$1",
  margin: "$1",
  border: "none",
  borderRadius: "$2",
  display: "grid",
  justifyContent: "center",
  alignItems: "center",
  gridTemplateAreas: "'title title' 'poster poster' 'remove remove'",

  "& h3": {
    gridArea: "title",
    color: "$yellow500",
  },
  "& img": {
    gridArea: "poster",
    maxWidth: "100%",
  },
  "& span": {
    gridArea: "date",
  },
  "& button": {
    gridArea: "remove",
    backgroundColor: "$red600",
    color: "$dark",
    padding: "$1",
    margin: "$1",
    border: "none",
    borderRadius: "$2",
    "&:hover": {
      backgroundColor: "$dark",
      color: "$red500",
    },
  },
});
