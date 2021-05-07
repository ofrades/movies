import { styled } from "../../stitches.config.js";
import { useRouter } from "next/router";

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
  const router = useRouter();
  return (
    <Container>
      <Button onClick={() => router.push("/")}>Home</Button>
      <Button onClick={() => router.push("/likes")}>Likes</Button>
      <Button onClick={() => router.push("/dislikes")}>Dislikes</Button>
    </Container>
  );
};

export default Nav;
