import styled from "styled-components";

const Title = styled.p`
  font-size: 1.5rem;
  font-weight: 700;
  text-align: center;
`;

const StyledLi = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const StyledSection = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 3em;
`;

const School = styled.span`
  font-size: 1.2rem;
  font-weight: 700;
  color: var(--color-base-250);
  text-align: center;
  margin: 0.5em 0;
`;

const Image = styled.img`
  max-width: 90vw;
  border-radius: 1em;
  margin: 1em;

  @media (min-width: 840px) {
    max-width: 70vw;
  }
`;

const Date = styled.span`
  font-size: 1.1rem;
  font-weight: 300;
  color: var(--color-base-050);
  text-align: center;
`;

function EducationItem({ educationItem }) {
  const { id, title, school, date, show, certificatePath } = educationItem;
  if (!show) return;

  return (
    <StyledLi>
      <Image src={`../images/${certificatePath}`} alt={title} />
      <Title>{title}</Title>
      <StyledSection>
        <School>{school}</School>
        <Date>{date}</Date>
      </StyledSection>
    </StyledLi>
  );
}

export default EducationItem;
