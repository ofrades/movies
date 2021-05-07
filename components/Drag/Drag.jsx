import React from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";

const Drag = ({ img, setLike }) => {
  const x = useMotionValue(0);
  const tickPath = useTransform(x, [10, 100], [0, 1]);
  const crossPathA = useTransform(x, [-10, -55], [0, 1]);
  const crossPathB = useTransform(x, [-50, -100], [0, 1]);

  return (
    <motion.div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <motion.img
        style={{
          maxWidth: "80%",
          maxHeight: "50%",
          margin: "auto",
          right: 0,
          left: 0,
          position: "absolute",
          x,
        }}
        src={img}
        drag="x"
      />
      <motion.div
        style={{ x }}
        drag="x"
        dragConstraints={{ left: 0, right: 0 }}
        onDragEnd={() => {
          console.log(x.current);
          if (x.current > 25) {
            console.log("Like!");
            //setCorrectWords(add(correctWords, color));
            setLike(true);
          }
          if (x.current < -25) {
            console.log("Dislike!");
            setLike(false);
          }
        }}
      >
        <svg className="progress-icon" viewBox="0 0 50 50">
          <motion.path
            fill="none"
            strokeWidth="2"
            stroke="green"
            d="M14,26 L 22,33 L 35,16"
            strokeDasharray="0 1"
            style={{ pathLength: tickPath }}
          />
          <motion.path
            fill="none"
            strokeWidth="2"
            stroke="red"
            d="M17,17 L33,33"
            strokeDasharray="0 1"
            style={{ pathLength: crossPathA }}
          />
          <motion.path
            fill="none"
            strokeWidth="2"
            stroke="red"
            d="M33,17 L17,33"
            strokeDasharray="0 1"
            style={{ pathLength: crossPathB }}
          />
        </svg>
      </motion.div>
    </motion.div>
  );
};
export default Drag;
