import styled from "styled-components";

const StyledDiv = styled.div`
  margin: 3em auto;
  border: 1px solid;
`;

const StyledP = styled.p`
  color: var(--color-base-250);
  font-size: 2.7rem;
  font-weight: 700;
  border-bottom: 1px solid var(--color-base-750);
  letter-spacing: 2px;
  text-align: center;
`;

function Subtitle({ children }) {
  return (
    <StyledDiv>
      <StyledP>{children}</StyledP>
    </StyledDiv>
  );
}

export default Subtitle;
