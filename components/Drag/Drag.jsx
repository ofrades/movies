import React from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";

const Drag = ({ img, handleLike, handleDislike }) => {
  const x = useMotionValue(0);
  const like = useTransform(x, [10, 100], [0, 1]);
  const dislike = useTransform(x, [-10, -100], [0, 1]);

  return (
    <motion.div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        cursor: "move",
      }}
    >
      <motion.img
        style={{
          x,
          maxWidth: "80%",
          maxHeight: "50%",
          position: "absolute",
        }}
        src={img}
        drag="x"
        whileTap={{ scale: 1.1 }}
      />
      <motion.div
        style={{ x, textAlign: "center" }}
        dragConstraints={{ left: 0, right: 0 }}
        onDragEnd={() => {
          if (x.current > 25) {
            handleLike();
          }
          if (x.current < -25) {
            handleDislike();
          }
        }}
        drag="x"
      >
        <svg viewBox="-15 -15 50 50">
          <motion.path
            fill="darkGreen"
            stroke="green"
            d="M2 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6zM6 10.333v5.43a2 2 0 001.106 1.79l.05.025A4 4 0 008.943 18h5.416a2 2 0 001.962-1.608l1.2-6A2 2 0 0015.56 8H12V4a2 2 0 00-2-2 1 1 0 00-1 1v.667a4 4 0 01-.8 2.4L6.8 7.933a4 4 0 00-.8 2.4z"
            strokeDasharray="0 1"
            style={{ pathLength: like, opacity: like }}
          />
          <motion.path
            fill="darkRed"
            stroke="red"
            d="M18 9.5a1.5 1.5 0 11-3 0v-6a1.5 1.5 0 013 0v6zM14 9.667v-5.43a2 2 0 00-1.105-1.79l-.05-.025A4 4 0 0011.055 2H5.64a2 2 0 00-1.962 1.608l-1.2 6A2 2 0 004.44 12H8v4a2 2 0 002 2 1 1 0 001-1v-.667a4 4 0 01.8-2.4l1.4-1.866a4 4 0 00.8-2.4z"
            strokeDasharray="0 1"
            style={{ pathLength: dislike, opacity: dislike }}
          />
        </svg>
      </motion.div>
    </motion.div>
  );
};
export default Drag;
