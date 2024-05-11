import styled from "styled-components";

const BusinessDevDetails = styled.section`
  margin-bottom: 1.5em;
  padding-bottom: 1em;
  border-bottom: 1px solid var(--color-base-500);
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledSection = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1em;
`;

const Title = styled.p`
  font-size: 1.6rem;
  font-weight: 700;
  text-align: center;
`;

const Date = styled.span`
  font-size: 1.1rem;
  font-weight: 300;
  color: var(--color-base-050);
`;

const StyledUl = styled.ul`
  padding: 0.5em 2em;
`;

const Achievements = styled.li`
  font-size: 1.4rem;
  font-weight: 300;
  line-height: calc(1.4rem * 1.5);
  color: var(--color-base-050);
  list-style-type: circle;
`;

const StyledSpan = styled.span`
  font-size: 1.3rem;
  font-weight: 400;
  color: var(--color-base-500);
  text-align: center;
  margin: 0.5em 0;
`;

function BusinessDevItem({ businessDevItem }) {
  const { title, industry, concept, date, area, customer, achievements, show } =
    businessDevItem;

  if (!show) return;

  return (
    <BusinessDevDetails>
      <StyledSection>
        <Title>
          {title} &bull; {industry}
        </Title>
      </StyledSection>

      <StyledSection>
        <StyledSpan>{customer}</StyledSpan>
        <StyledSpan>&bull;</StyledSpan>
        <StyledSpan>{area}</StyledSpan>
        <StyledSpan>&bull;</StyledSpan>
        <StyledSpan>{date}</StyledSpan>
      </StyledSection>

      <StyledUl>
        {achievements.map((achievement) => (
          <Achievements key={achievement}>{achievement}</Achievements>
        ))}
      </StyledUl>
    </BusinessDevDetails>
  );
}

export default BusinessDevItem;
