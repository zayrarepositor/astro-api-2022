//======LIBRARIES & DEPENDENCIES
import { useState, useEffect } from "react";
//======OUR COMPONENTS
import Header from "./components/Header";
import Form from "./components/Form";
import Info from "./components/Info";
import Modal from "./components/Modal";
import Loading from "./components/Loading";
//======OUR FUNCTIONS

//======STYLE & IMAGES
import styled from "@emotion/styled";

const Label = styled.label`
  color: #fff;
  display: block;
  font-family: "Lato", sans-serif;
  font-size: 24px;
  font-weight: 700;
  text-align: center;
  margin-top: 50px;
  margin-bottom: 15px;
  &::after {
    content: "";
    width: 100px;
    height: 6px;
    background-color: #66a2fe;
    display: block;
    margin: 10px auto 0 auto;
  }
`;

const Text = styled.p`
  color: #fff;
  display: block;
  font-family: "Lato", sans-serif;
  font-size: 22px;
  font-weight: 400;
  text-align: justify;
  margin-bottom: 20px;
`;

const Heading = styled.h1`
  font-family: "Lato", sans-serif;
  color: #fff;
  text-align: center;
  margin-top: 80px;
  font-weight: 700;
  margin-bottom: 50px;
  font-size: 34px;

  &::after {
    content: "";
    width: 100px;
    height: 6px;
    background-color: #66a2fe;
    display: block;
    margin: 10px auto 0 auto;
  }
`;

const Container = styled.div`
  max-width: 990px;
  margin: 0 auto;
  width: 95%;
  @media (min-width: 992px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 1.5rem;
  }
`;

const Image = styled.img`
  max-width: 400px;
  height: 320px;
  width: 320px;
  margin: 50px auto 0 auto;
  display: block;
  border-radius: 50%;
`;

function App() {
  const [picture, setPicture] = useState("");
  const [title, setTitle] = useState("");
  const [explanation, setExplanation] = useState("");

  const [planetInfo, setPlanetInfo] = useState({});
  const [planetImg, setPlanetImg] = useState("");
  const [planetImgDesc, setPlanetImgDesc] = useState("");
  const [moonInfo, setMoonInfo] = useState({});
  const [moonImg, setMoonImg] = useState("");
  const [moonImgDesc, setMoonImgDesc] = useState("");

  const [modal, setModal] = useState(false);
  const [modalAnimation, setModalAnimation] = useState(false);
  const [loader, setLoader] = useState(false);

  const openModal = () => {
    setModal(true);
    setTimeout(() => {
      setModalAnimation(true);
    }, 500);
  };

  const handleCloseMoon = () => {
    setMoonInfo({});
    setMoonImg("");
    setMoonImgDesc("");
  };
  const handleClosePlanet = () => {
    setPlanetInfo({});
    setPlanetImg("");
    setPlanetImgDesc("");
  };
  useEffect(() => {
    //APOD
    const apiRequest = async () => {
      const url = "https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY";
      const response = await fetch(url);
      const jsonResponse = await response.json();

      setTitle(jsonResponse.title);
      setPicture(jsonResponse.hdurl);
      setExplanation(jsonResponse.explanation);
    };
    apiRequest();
  }, []);

  return (
    <>
      <Header openModal={openModal}></Header>
      {modal && (
        <Modal
          setModalAnimation={setModalAnimation}
          setModal={setModal}></Modal>
      )}
      <Container>
        <div>
          <Heading>Picture of the Day</Heading>
          <Image src={picture} alt="astro img" />
          <Label>{title}</Label>
          <Text>{explanation}</Text>
        </div>
        <div>
          <Heading>Astro Info</Heading>
          <Form
            setPlanetInfo={setPlanetInfo}
            setPlanetImg={setPlanetImg}
            setPlanetImgDesc={setPlanetImgDesc}
            setLoader={setLoader}
          />
          {loader && <Loading></Loading>}
          {planetInfo.name && (
            <Info
              img={planetImg}
              description={planetImgDesc}
              info={planetInfo}
              close={handleClosePlanet}></Info>
          )}
          <Form
            setMoonInfo={setMoonInfo}
            setMoonImg={setMoonImg}
            setMoonImgDesc={setMoonImgDesc}
            setLoader={setLoader}
          />
          {loader && <Loading></Loading>}
          {moonInfo.name && (
            <Info
              img={moonImg}
              description={moonImgDesc}
              info={moonInfo}
              close={handleCloseMoon}></Info>
          )}
        </div>
      </Container>
    </>
  );
}

export default App;
