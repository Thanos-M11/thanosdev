import { useEffect, useState } from "react";
import styled from "styled-components";
import { about } from "../data/data-about";

import Certificates from "../components/Certificates";
import Subtitle from "../components/Subtitle";
import Education from "../components/Education";
import Work from "../components/Work";
import BusinessDev from "../components/BusinessDev";

import PageTitle from "../components/PageTitle";

const Intro = styled.p`
  font-size: 1.3rem;
  font-weight: 400;
  text-align: justify;
  line-height: calc(1.3rem * 1.5);
  margin: 1em 0;
`;

const Occupation = styled.p`
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--color-base-250);
  margin-top: 0.2em;
  padding-bottom: 0.3em;
  border-bottom: 5px solid var(--color-base-500);
`;

function About() {
  const { intro, certificates, education, work, businessDev } = about;

  return (
    <>
      <PageTitle>About</PageTitle>
      <h1>Thanos Kalaitzis</h1>
      <Occupation>Web Application Developer</Occupation>
      <Intro>{intro}</Intro>
      <Subtitle>certificates</Subtitle>
      <Certificates certificates={certificates} />
      <Subtitle>work experience</Subtitle>
      <Work work={work} />
      <Subtitle>academic education</Subtitle>
      <Education education={education} />
      <Subtitle>business development projects</Subtitle>
      <BusinessDev businessDev={businessDev} />
    </>
  );
}

export default About;
