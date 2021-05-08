import React from "react";
import { NavContainer, NavButton } from "./styles";
import Link from "next/link";
import { useSelector } from "react-redux";

const Nav = () => {
  const likesIds = useSelector((state) => state.likes);
  const dislikesIds = useSelector((state) => state.dislikes);
  return (
    <NavContainer>
      <Link href="/">
        <NavButton>
          Home
          <span> 🏠</span>
        </NavButton>
      </Link>
      <Link href="/likes">
        <NavButton>
          Likes
          <span> 👍 {likesIds.length}</span>
        </NavButton>
      </Link>
      <Link href="/dislikes">
        <NavButton>
          Dislikes
          <span> 👎 {dislikesIds.length}</span>
        </NavButton>
      </Link>
    </NavContainer>
  );
};

export default Nav;
