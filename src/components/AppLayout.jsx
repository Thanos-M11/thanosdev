import styled from "styled-components";
import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";

const StyledAppLayout = styled.div`
  display: grid;
  grid-template-rows: auto 1fr;
  gap: 1em;
  height: 100vh;
`;

const Main = styled.main`
  width: 65vw;
  margin: 0 auto;
`;

const Container = styled.div`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
`;

function AppLayout() {
  return (
    <StyledAppLayout>
      <NavBar />
      <Main>
        <Container>
          <Outlet />
        </Container>
      </Main>
    </StyledAppLayout>
  );
}

export default AppLayout;
