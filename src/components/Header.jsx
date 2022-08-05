//======STYLE & IMAGES
import styled from "@emotion/styled";
import icon from "../assets/icons8-telescopio-96.png";

const Container = styled.div`
  max-width: 990px;
  margin: 30px auto;
  width: 95%;
  text-align: center;
`;
const TitleContainer = styled.div`
  display: block;
  width: 100%;
  margin: 0 auto;
`;
const Image = styled.img`
  width: 40px;
  height: 40px;
  &:hover {
    cursor: pointer;
  }
`;

const Heading = styled.h1`
  font-family: "Lato", sans-serif;
  color: #fff;
  width: 250px;
  font-weight: 700;
  font-size: 34px;
  margin: 5px auto;
  &::after {
    content: "";
    width: 210px;
    height: 6px;
    background-color: #66a2fe;
    display: block;
    margin: 10px auto;
  }
  &:hover {
    cursor: pointer;
  }
`;

const Header = ({ openModal }) => {
  return (
    <Container>
      <TitleContainer>
        <Image src={icon} alt="icon" onClick={openModal} />{" "}
        <Heading onClick={openModal}>Astro Api</Heading>
      </TitleContainer>
    </Container>
  );
};

export default Header;
