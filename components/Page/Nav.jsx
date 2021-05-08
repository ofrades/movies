import React from "react";
import { Container, Button } from "./styles";
import Link from "next/link";
import { useSelector } from "react-redux";

const Nav = () => {
  const likesIds = useSelector((state) => state.likes);
  const dislikesIds = useSelector((state) => state.dislikes);
  return (
    <Container>
      <Link href="/">
        <Button>
          Home
          <span> 🏠</span>
        </Button>
      </Link>
      <Link href="/likes">
        <Button>
          Likes
          <span> 👍 {likesIds.length}</span>
        </Button>
      </Link>
      <Link href="/dislikes">
        <Button>
          Dislikes
          <span> 👎 {dislikesIds.length}</span>
        </Button>
      </Link>
    </Container>
  );
};

export default Nav;
