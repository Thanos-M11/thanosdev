import styled from "styled-components";
import Subtitle from "./Subtitle";

const FeaturesContainer = styled.section`
  /* padding: 2em; */
  /* display: flex; */
  /* justify-content: center; */
  /* border: 1px solid; */
  /* width: 50vw; */
`;

const FeatureList = styled.ul`
  width: 60vw;
  margin: 0 auto;
`;

const StyledLi = styled.li`
  font-size: 1.4rem;
  letter-spacing: 1px;
  line-height: calc(1.4rem * 1.5);
  color: var(--color-base-050);
  font-weight: 300;
  list-style-type: circle;
`;

const StyledP = styled.p`
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
  display: inline-block;
  margin-left: 1em;
`;

function Features({ features }) {
  return (
    <>
      <Subtitle>Features</Subtitle>

      <FeaturesContainer>
        <FeatureList>
          {features.map((feature) => (
            <FeatureItem key={feature} feature={feature}></FeatureItem>
          ))}
        </FeatureList>
      </FeaturesContainer>
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
