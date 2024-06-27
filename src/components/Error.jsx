import { Link, useRouteError } from "react-router-dom";
import styled from "styled-components";
import Button from "./Button";

const StyledDiv = styled.div`
  width: fit-content;
  margin: 3em auto;
  padding: 5em;
  border: 1px solid var(--color-base-500);
  border-radius: 2em;
  text-align: center;
  color: var(--color-base-050);
`;

const ErrorStatus = styled.p`
  color: var(--color-base-050);
  font-size: 4rem;
  font-weight: 700;
`;

const ErrorData = styled.p`
  color: var(--color-base-250);
  margin: 2em;
  font-size: 2rem;
  font-weight: 500;
`;

function Error() {
  const { data, status } = useRouteError();
  if (!status === 404) return;
  const msg = data.slice(data.indexOf(":") + 1).trim();

  return (
    <StyledDiv>
      <ErrorStatus>{status}</ErrorStatus>
      <ErrorData>{msg}</ErrorData>
      <Button as={Link} to="/">
        Return to Homepage
      </Button>
    </StyledDiv>
  );
}

export default Error;
