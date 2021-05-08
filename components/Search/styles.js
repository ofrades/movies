import { styled, keyframes } from "../../stitches.config";
import { motion } from "framer-motion";
import AsyncSelect from "react-select/async";

export const InputContainer = styled("div", {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "0.5rem",
});

export const Input = styled(AsyncSelect, {
  width: "100%",
  padding: "$2",
  fontWeight: "bold",
  marginLeft: "1px",
  fontFamily: "$system",
  "&:hover": {
    backgroundColor: "$dark",
  },
});

export const AddMovie = styled("div", {
  position: "relative",
  backgroundColor: "$green700",
  color: "$dark",
  outline: "none",
  "& a": {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "$2",
    minHeight: "2rem",
    height: "2rem",
    minWidth: "2rem",
    width: "2rem",
    border: "none",
    cursor: "pointer",
  },
  "&:hover": {
    backgroundColor: "$green500",
    color: "$dark",
  },
});

const rotate = keyframes({
  from: { transform: "rotate(0deg)" },
  to: { transform: "rotate(360deg)" },
});

export const LoadingIcon = styled("i", {
  position: "absolute",
  fontStyle: "normal",
  animation: `${rotate} 2s linear infinite`,
});
