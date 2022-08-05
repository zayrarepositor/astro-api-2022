import styled from "@emotion/styled";
import closeIcon from "../assets/icons8-cancelar-50.png";

const Container = styled.div`
  font-family: "Lato", sans-serif;
  color: #fff;
  display: grid;
  grid-template-rows: repeat(1, 1fr);
  align-items: center;
  margin-top: 30px;
`;

const Header = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  align-items: center;
`;

const Figure = styled.figure`
  display: block;
  width: 130px;
  height: 160px;
`;

const Img = styled.img`
  width: 120px;
  height: 120px;
  border-radius: 50%;
`;

const Imgdesc = styled.figcaption`
  display: block;
  text-align: center;
  font-size: 12px;
  font-weight: 400;
  margin: 8px 0;
`;

const Label = styled.label`
  text-align: center;
  display: block;
  font-size: 24px;
  font-weight: 700;
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

const CloseBtn = styled.img`
  width: 30px;
  position: relative;
  margin-left: 90px;
  transition: background-color 0.3s ease;
  &:hover {
    cursor: pointer;
  }
`;

const Text = styled.p`
  display: block;
  text-align: start;
  font-size: 20px;
  font-weight: 400;
  margin-bottom: 5px;
`;

const Info = ({ info, img, description, close }) => {
  const {
    name,
    moons,
    perihelion,
    aphelion,
    inclination,
    massValue,
    massExponent,
    density,
    gravity,
    equaRadius,
    aroundPlanet,
    discoveredBy,
    discoveryDate,
    avgTemp,
  } = info;

  return (
    <Container>
      <Header>
        <Figure>
          <Img src={img} title={description} alt="image not found" />
          <Imgdesc>{description}</Imgdesc>
        </Figure>
        <Label>{name}</Label>
        <Figure>
          <CloseBtn src={closeIcon} title="close" alt="close" onClick={close} />
        </Figure>
      </Header>
      <div>
        {aroundPlanet && (
          <Text>It gravitates around {aroundPlanet} planet.</Text>
        )}
        {perihelion ? (
          <Text>
            Its perihelion is at {perihelion} km and its aphelion is at{" "}
            {aphelion}
            km.
          </Text>
        ) : (
          <></>
        )}
        {moons && (
          <>
            <Text> Moons:</Text>
            <Text>
              {moons.map((m) => {
                return <span key={m}>- {m} </span>;
              })}
            </Text>
          </>
        )}
        {equaRadius ? <Text>Equatorial radius: {equaRadius} km.</Text> : <></>}
        {massValue && (
          <Text>
            Mass: {massValue}
            <sup>{massExponent}</sup> kg .
          </Text>
        )}
        {density && (
          <Text>
            Density: {density} g.cm<sup>3</sup>.
          </Text>
        )}
        {gravity ? (
          <Text>
            Gravity: {gravity} m.s<sup>-2</sup>.
          </Text>
        ) : (
          <></>
        )}
        {inclination ? <Text>Inclination: {inclination}°.</Text> : <></>}
        {avgTemp ? <Text>Average Temperature: {avgTemp} K.</Text> : <></>}
        {discoveredBy && <Text>Discovered by: {discoveredBy}.</Text>}
        {discoveryDate && <Text>Discovery Date: {discoveryDate}.</Text>}
      </div>
    </Container>
  );
};

export default Info;
