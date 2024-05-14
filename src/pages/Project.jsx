import { Link, useParams } from "react-router-dom";
import { projects } from "../data/data-projects";
import styled from "styled-components";
import PageNotFound from "./PageNotFound";
import { splitCamelCase } from "../utils/helpers";
import Subtitle from "../components/Subtitle";
import ProjectSummary from "../components/ProjectSummary";
import Features from "../components/Features";
import TechStack from "../components/TechStack";
import Snapshots from "../components/Snapshots";

function Project() {
  const { id } = useParams();
  const projectIds = projects.map((project) => project.id);

  const isValid = projectIds.includes(id);
  if (!isValid) return <PageNotFound />;

  const currentProject = projects.find((project) => project.id === id);

  const {
    title,
    description,
    github,
    url,
    attribute,
    features,
    techStack,
    images,
  } = currentProject;

  return (
    <div>
      <ProjectSummary
        title={title}
        description={description}
        github={github}
        url={url}
        attribute={attribute}
      />
      {features.length > 0 && <Features features={features} />}
      <TechStack techStack={techStack} />
      <Snapshots images={images} />
    </div>
  );
}

export default Project;
