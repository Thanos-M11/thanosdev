import styled from "styled-components";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { HiArrowLeft } from "react-icons/hi2";

const StyledNav = styled.nav`
  width: 65vw;
  margin: 1em auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1em;
`;

const StyledSpan = styled.span`
  color: inherit;
  font-size: 1.35rem;
  & :hover {
    cursor: pointer;
  }
`;

const StyledUl = styled.ul`
  display: flex;
  gap: 2rem;
  align-items: center;
  justify-content: space-around;
`;

const StyledLi = styled.li`
  color: var(--color-base-250);
  font-size: 1.2rem;
  font-weight: 400;

  @media (min-width: 1280px) {
    font-size: 1.3rem;
  }
`;

function NavBar() {
  const navigate = useNavigate();

  function handleArrowClick(e) {
    e.preventDefault();
    navigate(-1);
  }

  return (
    <StyledNav>
      <StyledSpan onClick={handleArrowClick}>
        <HiArrowLeft />
      </StyledSpan>

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
    </StyledNav>
  );
}

export default NavBar;
