//======STYLE & IMAGES
import styled from "@emotion/styled";
import closeIcon from "../assets/icons8-cancelar-50.png";

const Overlay = styled.div`
  position: absolute;
  height: 100vh;
  width: 100vp;
  background-color: rgb(0 0 0 / 0.96);
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const ModalContainer = styled.div`
  position: relative;
  width: 500px;
  min-height: 100px;
  background-color: #1a2535cf;
  border-radius: 10px;
  box-shadow: rgba(100, 100, 111, 0.2) 8px 7px 29px 0px;
  padding: 20px;
`;
const CloseBtn = styled.img`
  width: 30px;
  transition: background-color 0.3s ease;
  &:hover {
    cursor: pointer;
  }
`;

const Label = styled.label`
  color: #fff;
  display: block;
  font-family: "Lato", sans-serif;
  font-size: 24px;
  font-weight: 700;
  text-align: center;
  margin-top: 10px;
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
const Heading = styled.h1`
  font-family: "Lato", sans-serif;
  color: #fff;
  text-align: center;
  margin-top: 10px;
  font-weight: 700;
  margin-bottom: 20px;
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
const Text = styled.p`
  color: #fff;
  display: block;
  font-family: "Lato", sans-serif;
  font-size: 18px;
  font-weight: 400;
  text-align: justify;
  margin-bottom: 10px;
`;

const Link = styled.a`
  color: #fff;
  text-decoration: none;
`;

const Modal = ({ setModalAnimation, setModal }) => {
  const closeModal = () => {
    setModalAnimation(false);
    setTimeout(() => {
      setModal(false);
    }, 500);
  };
  return (
    <Overlay>
      <ModalContainer>
        <div className="close-modal">
          <CloseBtn src={closeIcon} alt="close" onClick={closeModal} />
        </div>
        <Label>about project</Label>
        <div className="text-box">
          <Heading>astro-api-2022</Heading>
        </div>
        <Text>
          ❤ Epa, Zayra Velasco again, developer in proccess with a small front
          project with <span>Styled components</span> and <span>Vite</span>.
        </Text>
        <Text>
          ☑ Astro Api was thought to find information about Planets and Moons.
          Also you can see tha astronomic picture of the day from Nasa.
        </Text>
        <Label>✉ More info:</Label>
        <ul>
          <Text>
            github <span>☞</span>{" "}
            <Link
              href="https://github.com/zayrarepositor"
              target="_blank"
              rel="noopener noreferrer">
              zayrarepositor
            </Link>
          </Text>
          <Text>
            linkedIn <span> ☞ </span>{" "}
            <Link
              href="https://www.linkedin.com/in/zayra-velasco"
              target="_blank"
              rel="noopener noreferrer">
              Zayra Velasco
            </Link>
          </Text>
          <Text>
            mail<span> ☞ </span>{" "}
            <Link
              href="mailto:zayra.contacto@gmail.com"
              target="_blank"
              rel="noopener noreferrer">
              zayra.contacto@gmail.com
            </Link>
          </Text>
        </ul>
        <Text>
          <span>Good Life!</span> ( ͡~ ͜ʖ ͡°)
        </Text>
      </ModalContainer>
    </Overlay>
  );
};

export default Modal;
