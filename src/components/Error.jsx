import styled from "@emotion/styled";

const Errortext = styled.div`
  color: #b7322c;
  padding: 15px 5px;
  font-size: 20px;
  font-family: "Lato", sans-serif;
  font-weight: 700;
`;
const Error = ({ children }) => {
  return <Errortext>{children}</Errortext>;
};

export default Error;
