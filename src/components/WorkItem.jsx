import styled from "styled-components";

const WorkDetails = styled.section`
  margin-bottom: 1.5em;
  padding-bottom: 1em;
  border-bottom: 1px solid var(--color-base-500);
`;

const Title = styled.p`
  font-size: 1.5rem;
  font-weight: 700;
  text-align: left;
  text-align: center;
  margin-bottom: 0.3em;
`;

const Place = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Company = styled.p`
  font-size: 1.2rem;
  font-weight: 700;
  color: var(--color-base-250);
  text-align: center;
  margin: 0.5em 0;
`;

const Date = styled.span`
  font-size: 1.1rem;
  font-weight: 300;
  color: var(--color-base-050);
  text-align: center;
`;

const StyledUl = styled.ul`
  padding: 0.5em 0;
  width: 60vw;
  margin: 0 auto;
`;

const Achievements = styled.li`
  font-size: 1.4rem;
  font-weight: 300;
  line-height: calc(1.4rem * 1.5);
  color: var(--color-base-050);
  list-style-type: circle;
`;

function WorkItem({ workItem }) {
  const { id, title, company, date, achievements, show } = workItem;
  if (!show) return;

  return (
    <WorkDetails>
      <Title>{title}</Title>
      <Place>
        <Company>{company}</Company>
        <Date>{date}</Date>
      </Place>

      <StyledUl>
        {achievements.map((achievement) => (
          <Achievements key={achievement}>{achievement}</Achievements>
        ))}
      </StyledUl>
    </WorkDetails>
  );
}

export default WorkItem;
