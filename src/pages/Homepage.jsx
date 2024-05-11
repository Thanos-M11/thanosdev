import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div``;

const StyledUl = styled.ul`
  position: absolute;
  top: 30%;
  left: 50%;
  transform: translate(-50%, -50%);

  display: flex;
  gap: 2rem;
  align-items: center;
  justify-content: center;
`;

const StyledLi = styled.li`
  color: var(--color-base-250);
  font-size: 1.3rem;
  font-weight: 400;

  @media (min-width: 1280px) {
    font-size: 1.4rem;
  }
`;

const AnimationContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const StyledLogo = styled.p`
  font-size: 4rem;
  text-align: center;
  animation: zoomOut 3s ease-out;

  @keyframes zoomOut {
    0% {
      transform: scale(0);
    }
    100% {
      transform: scale(1);
    }
  }

  @media (min-width: 1280px) {
    font-size: 6rem;
  }

  @media (min-width: 1536px) {
    font-size: 8rem;
  }
`;

const StyledDescription = styled.p`
  position: absolute;
  bottom: 10%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 1.2rem;
  font-weight: 300;
  letter-spacing: 1.5px;
  text-align: center;

  @media (min-width: 1280px) {
    font-size: 1.1rem;
    bottom: 30%;
  }
`;

function Homepage() {
  const [zoomedIn, setZoomedIn] = useState(false);

  function handleAnimation() {
    setZoomedIn(true);
  }

  return (
    <Container>
      {zoomedIn && (
        <>
          <nav>
            <StyledUl>
              <StyledLi>
                <Link to="/projects">projects</Link>
              </StyledLi>
              <StyledLi>
                <Link to="/contact">contact</Link>
              </StyledLi>
              <StyledLi>
                <Link to="/about">about</Link>
              </StyledLi>
            </StyledUl>
          </nav>
          <StyledDescription>
            Building web applications with metrics for Enterpreneurs &
            Freelancers
          </StyledDescription>
        </>
      )}
      <AnimationContainer>
        <StyledLogo onAnimationEnd={handleAnimation}>ThanosDev</StyledLogo>
      </AnimationContainer>
    </Container>
  );
}

export default Homepage;
