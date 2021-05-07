import React from "react";
import { styled } from "../../stitches.config.js";
import Link from "next/link";

const Container = styled("nav", {
  gridArea: "nav",
  display: "flex",
  justifyContent: "space-around",
});

const Button = styled("button", {
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

const Nav = () => {
  return (
    <Container>
      <Link href="/">
        <Button>Home</Button>
      </Link>
      <Link href="/likes">
        <Button>Likes</Button>
      </Link>
      <Link href="/dislikes">
        <Button>Dislikes</Button>
      </Link>
    </Container>
  );
};

export default Nav;
