import styled from "styled-components";
import PageTitle from "../components/PageTitle";
import { Link, useNavigate } from "react-router-dom";
import { projects } from "../data/data-projects";

const StyledUl = styled.ul`
  display: grid;
  grid-template-columns: 1fr;
  gap: 0.5em;

  @media (min-width: 1280px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 0.5em;
  }

  @media (min-width: 1536px) {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 0.5em;
  }
`;

const StyledLi = styled.li`
  border: 2px solid var(--color-base-750);
  border-left: 5px solid var(--color-base-750);
  border-radius: 0.75em;
  padding: 3em;
  margin-bottom: 1em;

  &:hover {
    /* border: 1px solid var(--color-base-250); */
    border-left: 5px solid green;
    cursor: pointer;
  }
`;

const Title = styled.p`
  font-weight: 700;
  font-size: 2rem;
  color: var(--color-base-050);
  margin-bottom: 0.5em;
`;

const Description = styled.p`
  font-weight: 400;
  font-size: 1.3rem;
  color: var(--color-base-250);
  letter-spacing: 0.5pt;
  line-height: calc(1.3rem * 1.5);
  text-align: justify;
`;

function Projects() {
  return (
    <div>
      <PageTitle>Projects</PageTitle>
      <StyledUl>
        {projects.map((item) => (
          <ProjectHeading item={item} key={item.id} />
        ))}
      </StyledUl>
    </div>
  );
}

function ProjectHeading({ item }) {
  const { id, title, description } = item;
  const navigate = useNavigate();

  function handleClick() {
    navigate(`${id}`);
  }

  return (
    <StyledLi onClick={handleClick}>
      <Title>{title}</Title>
      <Description>{description}</Description>
    </StyledLi>
  );
}

export default Projects;
