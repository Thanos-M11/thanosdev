import { Link } from "react-router-dom";
import styled from "styled-components";

const ResumeRow = styled.section`
  margin-top: 1em;
  margin-left: auto;
`;

const Button = styled.button`
  background-color: inherit;
  border: 1px solid var(--color-base-500);
  border-radius: 0.7em;
  padding: 0.5em 1.5em;
  color: var(--color-base-250);
  font-size: 1.2rem;

  &:hover {
    border: 1px solid var(--color-base-050);
    color: var(--color-base-050);
  }
`;

function Resume() {
  const resumeLink =
    "https://app.enhancv.com/share/12a69229/?utm_medium=growth&utm_campaign=share-resume&utm_source=dynamic";
  return (
    <ResumeRow>
      <Button as={Link} to={resumeLink} target="_blank">
        Resume
      </Button>
    </ResumeRow>
  );
}

export default Resume;
