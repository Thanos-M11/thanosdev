import styled from "styled-components";
import Subtitle from "./Subtitle";
import { splitCamelCase } from "../utils/helpers";

const StyledSection = styled.section``;
const StyledUl = styled.ul``;
const StyledLi = styled.li``;

const StyledP = styled.p`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2em;
  font-size: 1.2rem;
  line-height: calc(1.2rem * 1.5);
`;

const StyledSpanKey = styled.span`
  display: inline-block;
  width: 35vw;
  text-align: right;
  color: var(--color-base-250);
`;

const StyledSpanValue = styled.span`
  display: inline-block;
  width: 35vw;
  font-weight: 700;
`;

const StyledSpan = styled.span`
  margin-right: 0.5em;
`;

function TechStack({ techStack }) {
  return (
    <>
      <Subtitle>Technology Stack</Subtitle>
      <StyledSection>
        <StyledUl>
          {Object.entries(techStack).map((element) => (
            <StyledLi key={element.at(0)}>
              <StyledP>
                <StyledSpanKey>{splitCamelCase(element.at(0))} :</StyledSpanKey>

                <StyledSpanValue>
                  {typeof element.at(1) === "object"
                    ? element
                        .at(1)
                        .map((el) => <StyledSpan key={el}>{el}</StyledSpan>)
                    : element.at(1)}
                </StyledSpanValue>
              </StyledP>
            </StyledLi>
          ))}
        </StyledUl>
      </StyledSection>
    </>
  );
}

export default TechStack;
