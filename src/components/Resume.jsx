import { Link } from "react-router-dom";
import styled from "styled-components";
import Button from "./Button";

const ResumeRow = styled.section`
  margin-top: 1em;
  margin-left: auto;
`;

// latest resume link
// https://drive.google.com/file/d/1ZC4TH_etCdxuc6gJpokKjSfySRXSNXnh/view?usp=sharing
// https://drive.google.com/file/d/1Mt9KEbDAHh-eKvZ8t08Ae9bBB1TfDPly/view?usp=sharing

function Resume() {
  const resumeLink =
    "https://drive.google.com/file/d/1QVuobRc4RML9KnEI2l5hXCenn655m1gC/view?usp=sharing";

  return (
    <ResumeRow>
      <Button as={Link} to={resumeLink} target="_blank">
        Resume
      </Button>
    </ResumeRow>
  );
}

export default Resume;
