import { Container, Nav, Navbar } from "react-bootstrap";
import { Outlet } from "react-router-dom";
import { styled } from "styled-components";

const StyledNavBar = styled(Navbar)`
  background-color: #323234;
`;

const StyledContainer = styled.div`
  background-color: #323234;
  height: 100vh;
`;

export const Home = () => {
  return (
    <StyledContainer className="Home">
      <StyledNavBar data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="/">Contact App</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/contact">Contact</Nav.Link>
          </Nav>
        </Container>
      </StyledNavBar>
      <div>
        <Outlet />
      </div>
    </StyledContainer>
  );
};