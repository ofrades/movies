import { styled } from "../../stitches.config";
import { motion } from "framer-motion";

export const NavContainer = styled("nav", {
  gridArea: "nav",
  display: "flex",
  justifyContent: "space-around",
});

export const NavButton = styled("button", {
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

export const Container = styled("div", {
  display: "flex",
  flexDirection: "column",
  "@sm": {
    justifyContent: "start",
  },
  "@md": {
    justifyContent: "center",
    backgroundColor: "$light",
    padding: "4rem",
  },
  alignItems: "center",
  height: "100%",
  minHeight: "100%",
});

export const Card = styled(motion.div, {
  display: "flex",
  flexDirection: "column",
  "@sm": {
    maxWidth: "100vw",
  },
  "@md": {
    maxWidth: "50vw",
  },
  backgroundColor: "$grey800",
  width: "100%",
  padding: 0,
  height: "50%",
  boxShadow:
    "0 1rem 1rem 0 rgba(0, 0, 0, 0.1), 0 1rem 1rem 0 rgba(0, 0, 0, 0.1)",
});

export const Status = styled("div", {
  display: "flex",
  backgroundColor: "$grey800",
  justifyContent: "center",
  alignItemss: "center",
  variants: {
    status: {
      error: { backgroundColor: "$red600", color: "$grey100" },
      loading: { backgroundColor: "$blue600", color: "$grey100" },
      success: { backgroundColor: "$gree600", color: "$grey100" },
    },
  },
});
