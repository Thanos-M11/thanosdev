import { useLocation } from "react-router-dom";
import styled from "styled-components";

const StyledDiv = styled.div`
  width: 40vw;
  margin: 3em auto;
  padding: 5em;
  border: 1px solid var(--color-base-500);
  border-radius: 1em;
  text-align: center;
  color: var(--color-base-050);
`;

function PageNotFound() {
  const { pathname } = useLocation();

  return (
    <StyledDiv>
      <h1>The location {pathname} can not be Found</h1>
    </StyledDiv>
  );
}

export default PageNotFound;
