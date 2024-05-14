import styled from "styled-components";
import { Link } from "react-router-dom";

const Project = styled.div`
  border-radius: 1em;
  padding: 2em 4em;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.p`
  font-size: 3rem;
  color: var(--color-base-050);
  font-weight: 700;
  margin-bottom: 1em;
  text-align: center;
`;
const Description = styled.p`
  font-size: 1.4rem;
  color: var(--color-base-250);
  font-weight: 400;
  line-height: 1.3;
  letter-spacing: 1px;
  text-align: justify;
  margin-bottom: 2em;
`;
const SummaryFooter = styled.section`
  display: flex;
  gap: 4em;
`;

const FooterLink = styled.span`
  color: var(--color-base-050);
  font-size: 1.2rem;
  font-weight: 700;
`;

const StyledDiv = styled.div`
  margin-top: 2em;
`;

const LicenseLink = styled.span`
  color: var(--color-base-250);
  font-size: 0.9rem;
  font-weight: 300;
`;

function ProjectSummary({ title, description, github, url, attribute }) {
  return (
    <Project>
      <Title>{title}</Title>
      <Description>{description}</Description>

      <SummaryFooter>
        {github && (
          <FooterLink>
            <Link to={github} target="_blank">
              GitHub &rarr;{" "}
            </Link>
          </FooterLink>
        )}

        {url && (
          <FooterLink>
            <Link to={url} target="_blank">
              Website &rarr;{" "}
            </Link>
          </FooterLink>
        )}
      </SummaryFooter>

      {attribute && (
        <StyledDiv>
          <LicenseLink>
            <Link to={attribute.link} target="_blank">
              {attribute.description} &rarr;{" "}
            </Link>
          </LicenseLink>
        </StyledDiv>
      )}
    </Project>
  );
}

export default ProjectSummary;
