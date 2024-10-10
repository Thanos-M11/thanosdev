import styled from "styled-components";
import Subtitle from "./Subtitle";

const FeatureList = styled.ul`
  width: 60vw;
  margin: 0 auto;
`;

const StyledLi = styled.li`
  list-style-type: circle;
  display: list-item;
  color: var(--color-base-050);
  font-weight: 300;
  margin-bottom: 2px;
  font-size: 1.4rem;
  padding-left: 20px;
`;

const StyledP = styled.p`
  margin: 0;
  display: flex;
  flex-direction: column;
`;

const StyledSpan1 = styled.span`
  color: var(--color-base-050);
  font-weight: 300;
`;

const StyledSpan2 = styled.span`
  color: var(--color-base-250);
  font-weight: 300;
  margin-left: 1em;
`;

function Features({ features }) {
  return (
    <>
      <Subtitle>Features</Subtitle>
      <FeatureList>
        {features.map((feature) => (
          <FeatureItem key={feature} feature={feature}></FeatureItem>
        ))}
      </FeatureList>
    </>
  );
}

function FeatureItem({ feature }) {
  const [feature1, feature2] = feature.split(":");

  return (
    <StyledLi>
      {feature2 !== undefined ? (
        <StyledP>
          <StyledSpan1>{feature1}:</StyledSpan1>
          <StyledSpan2>{feature2}</StyledSpan2>
        </StyledP>
      ) : (
        <StyledSpan2>{feature1}</StyledSpan2>
      )}
    </StyledLi>
  );
}

export default Features;
