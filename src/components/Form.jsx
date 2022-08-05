//======LIBRARIES & DEPENDENCIES
import { useEffect, useState } from "react";
//======OUR COMPONENTS
import useSelectInput from "../hook/useSelectInput.jsx";
import Error from "./Error.jsx";
//======OUR FUNCTIONS

//======STYLE & IMAGES
import styled from "@emotion/styled";

const InputSubmit = styled.input`
  background-color: #9497ff;
  border: none;
  width: 50%;
  padding: 10px;
  color: #fff;
  font-weight: 700;
  text-transform: uppercase;
  font-size: 20px;
  border-radius: 5px;
  transition: background-color 0.3s ease;
  &:hover {
    background-color: #7a7dfe;
    cursor: pointer;
  }
`;
const Form = ({
  setMoonInfo,
  setPlanetInfo,
  setPlanetImg,
  setPlanetImgDesc,
  setMoonImg,
  setMoonImgDesc,
  setLoader,
}) => {
  const [planets, setPlanets] = useState([]);
  const [moons, setMoons] = useState([]);
  const [planetsNames, setPlanetsNames] = useState([]);
  const [moonsNames, setMoonsNames] = useState([]);
  const [planet, SelectPlanet] = useSelectInput("Planets", planetsNames);
  const [moon, SelectMoon] = useSelectInput("Moons", moonsNames);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (planets.length < 1) {
      const apiRequest = async () => {
        const url = "https://api.le-systeme-solaire.net/rest/bodies";

        const response = await fetch(url);
        const jsonResponse = await response.json();

        const arrayInfoPlanets = jsonResponse.bodies.filter(
          (e) => e.bodyType === "Planet"
        );
        setPlanets(arrayInfoPlanets);

        const arrayPlanetsNames = arrayInfoPlanets.map((e) => {
          const obj = {
            id: e.id,
            name: e.englishName,
          };
          return obj;
        });
        setPlanetsNames(arrayPlanetsNames);

        const arrayInfoMoons = jsonResponse.bodies.filter(
          (e) => e.bodyType === "Moon"
        );
        setMoons(arrayInfoMoons);

        const arrayMoonsNames = arrayInfoMoons.map((e) => {
          const obj = {
            id: e.id,
            name: e.englishName,
          };
          return obj;
        });
        setMoonsNames(arrayMoonsNames);
      };
      apiRequest();
    }
  }, []);

  const imgPlanetRequest = async (astro) => {
    const requestUrl = `https://images-api.nasa.gov/search?q=${astro}&page=1&media_type=image`;
    const response = await fetch(requestUrl);
    const jsonResponse = await response.json();
    const url = jsonResponse.collection.items[0].links[0].href;
    const description = jsonResponse.collection.items[0].data[0].title;

    setPlanetImg(url);
    setPlanetImgDesc(description);
  };

  const imgMoonRequest = async (astro) => {
    const requestUrl = `https://images-api.nasa.gov/search?q=${astro}&page=1&media_type=image`;
    const response = await fetch(requestUrl);
    const jsonResponse = await response.json();
    const url = jsonResponse.collection.items[0]?.links[0].href;
    const description = jsonResponse.collection.items[0].data[0].title;
    setMoonImg(url);
    setMoonImgDesc(description);
  };

  const planetInfoObjMaker = (planet) => {
    setError(false);

    imgPlanetRequest(planet);

    const planetInfo = planets.filter((e) => e.id === planet);
    const obj = {
      name: planetInfo[0].englishName,
      moons: planetInfo[0].moons?.map((m) => m.moon),
      perihelion: planetInfo[0].perihelion,
      aphelion: planetInfo[0].aphelion,
      inclination: planetInfo[0].inclination,
      massValue: planetInfo[0].mass.massValue,
      massExponent: planetInfo[0].mass.massExponent,
      density: planetInfo[0].density,
      gravity: planetInfo[0].gravity,
      equaRadius: planetInfo[0].equaRadius,
      discoveredBy: planetInfo[0].discoveredBy,
      discoveryDate: planetInfo[0].discoveryDate,
      avgTemp: planetInfo[0].avgTemp,
    };

    setPlanetInfo(obj);
  };

  const moonInfoObjMaker = (moon) => {
    setError(false);
    imgMoonRequest(moon);
    const moonInfo = moons.filter((e) => e.id === moon);
    const obj = {
      name: moonInfo[0].englishName,
      perihelion: moonInfo[0].perihelion,
      aphelion: moonInfo[0].aphelion,
      inclination: moonInfo[0].inclination,
      massValue: moonInfo[0].mass.massValue,
      massExponent: moonInfo[0].mass.massExponent,
      density: moonInfo[0].density,
      gravity: moonInfo[0].gravity,
      equaRadius: moonInfo[0].equaRadius,
      aroundPlanet: moonInfo[0].aroundPlanet.planet,
      discoveredBy: moonInfo[0].discoveredBy,
      discoveryDate: moonInfo[0].discoveryDate,
      avgTemp: moonInfo[0].avgTemp,
    };

    setMoonInfo(obj);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (moon) {
      setLoader(true);
      setMoonInfo({});
      setMoonImg("");
      setMoonImgDesc("");
      moonInfoObjMaker(moon);
      setLoader(false);
    } else if (planet) {
      setLoader(true);
      setPlanetInfo({});
      setPlanetImg("");
      setPlanetImgDesc("");
      planetInfoObjMaker(planet);
      setLoader(false);
    } else {
      setError(true);
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      {error && <Error>Select a planet or a moon</Error>}
      {setPlanetInfo && <SelectPlanet />}
      {setMoonInfo && <SelectMoon />}
      <InputSubmit type="submit" value="More Info" />
    </form>
  );
};

export default Form;
