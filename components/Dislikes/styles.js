import { styled } from "../../stitches.config";

export const List = styled("div", {
  padding: "$2",
  "& div": {
    display: "flex",
    justifyContent: "space-between",
    margin: "0.5rem",
  },
});

export const AddButton = styled("button", {
  fontFamily: "$system",
  backgroundColor: "$green700",
  color: "$dark",
  padding: "$1",
  margin: "$1",
  border: "none",
  width: "100%",
  borderRadius: "$2",
  "&:hover": {
    backgroundColor: "$dark",
    color: "$green700",
  },
});

export const RemoveButton = styled("button", {
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
});
