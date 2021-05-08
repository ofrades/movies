import { styled } from "../../stitches.config";
import { motion } from "framer-motion";

export const Container = styled("div", {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
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
