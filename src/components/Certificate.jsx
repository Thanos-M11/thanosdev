import styled from "styled-components";

const FlexRow = styled.li`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  gap: 1em;
  justify-content: space-between;
  align-items: center;
`;

const StyledImg = styled.img`
  width: 100%;
  border-radius: 0.7em;
`;

const CertificateDetails = styled.section`
  width: 100%;
  /* padding: 1.5em; */
  text-align: center;
`;

const Title = styled.p`
  font-size: 1.3rem;
  font-weight: 400;
  text-align: center;
`;

const School = styled.p`
  font-size: 1.1rem;
  font-weight: 400;
  color: var(--color-base-250);
  text-align: center;
  margin: 0.5em 0;
`;

const Date = styled.p`
  font-size: 1.1rem;
  font-weight: 300;
  color: var(--color-base-050);
  text-align: center;
`;

function Certificate({ certificate }) {
  const { id, title, school, date, status, show, certificatePath } =
    certificate;

  if (!show) return;

  return (
    <FlexRow>
      <StyledImg src={`../images/${certificatePath}`} />
      <CertificateDetails>
        <Title>{title}</Title>
        <School>{school}</School>
        <Date>{date}</Date>
      </CertificateDetails>
    </FlexRow>
  );
}

export default Certificate;
