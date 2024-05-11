import styled from "styled-components";
import { VscGithub } from "react-icons/vsc";
import { Link, useNavigate } from "react-router-dom";
import { AiOutlineLinkedin } from "react-icons/ai";
import { MdOutlineAlternateEmail } from "react-icons/md";

const Container = styled.div`
  height: 70vh;
  margin-top: 20vh;
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-auto-rows: 30vh;
  gap: 1em;

  @media (min-width: 1280px) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-auto-rows: 50vh;
    gap: 1em;
  }
`;

const Box = styled.div`
  border: 1px solid var(--color-base-750);
  border-radius: 0.8em;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  &:hover {
    border: 1px solid var(--color-base-250);
    cursor: pointer;
  }
`;

const Icon = styled.span`
  color: var(--color-base-050);
  font-size: 3rem;
`;

const Name = styled.span`
  color: var(--color-base-250);
  font-weight: 900;
  font-size: 1.4rem;
`;

const Description = styled.span`
  color: var(--color-base-050);
  font-weight: 300;
  font-size: 1.2rem;
`;

function Contact() {
  const links = {
    mail: "mailto:kalaitzisa@gmail.com",
    github: "https://github.com/Thanos-M11",
    linkedin: "https://www.linkedin.com/in/thanoskalaitzis",
  };

  return (
    <Container>
      <Box as={Link} to={links.github} target="_blank">
        <Icon>
          <VscGithub />
        </Icon>
        <Name>Thanos-M11</Name>
        <Description>GitHub</Description>
      </Box>

      <Box as={Link} to={links.mail} target="_blank">
        <Icon>
          <MdOutlineAlternateEmail />
        </Icon>
        <Name>kalaitzisa@gmail.com</Name>
        <Description>Email</Description>
      </Box>

      <Box as={Link} to={links.linkedin} target="_blank">
        <Icon>
          <AiOutlineLinkedin />
        </Icon>
        <Name>@thanoskalaitzis/</Name>
        <Description>Linkedin</Description>
      </Box>
    </Container>
  );
}

export default Contact;
