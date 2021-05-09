import React from "react";
import { styled, keyframes } from "../../stitches.config";
import { motion, useMotionValue, useTransform } from "framer-motion";

const Drag = ({ img, handleLike, handleDislike }) => {
  const x = useMotionValue(0);
  const like = useTransform(x, [10, 100], [0, 1]);
  const dislike = useTransform(x, [-10, -100], [0, 1]);
  const Wrapper = styled("div", {
    // background: "$green500",
    width: "200px",
    height: "250px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "80px",
    textShadow: "0 10px 10px #d1d5db",
    boxShadow: "0 0 20px rgba(0, 0, 0, 0.15)",
    borderRadius: "8px",
    transform: `rotate(${Math.random() * (5 - -5) + -5}deg)`,
  });
  const Item = styled(motion.div, {
    position: "absolute",
    background: `url(${img})`,
    backgroundRepeat: "no-repeat",
    backgroundAttachment: "initial",
    backgroundSize: "cover",
    width: "100%",
    height: "100%",
  });

  return (
    <Wrapper>
      <Item
        style={{ x }}
        drag="x"
        dragConstraints={{ left: 0, right: 0 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 1.1 }}
        onDragEnd={() => {
          console.log(x.current);
          if (x.current > 25) {
            handleLike();
          }
          if (x.current < -25) {
            handleDislike();
          }
        }}
      >
        <motion.span
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
          }}
        >
          <motion.h1
            style={{
              opacity: like,
              position: "absolute",
              top: 0,
              left: 0,
              transform: "translateY(-50%)",
            }}
          >
            👍
          </motion.h1>
          <motion.h1
            style={{
              opacity: dislike,
              position: "absolute",
              top: 0,
              left: 0,
              transform: "translateY(-50%)",
            }}
          >
            👎
          </motion.h1>
        </motion.span>
      </Item>
    </Wrapper>
  );
};

export default Drag;
