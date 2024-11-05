import { Container, Nav, Navbar, Tab, TabContainer } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Outlet } from 'react-router-dom';
import styled from "styled-components";

const StyledNavBar = styled(Navbar)`
  background-color: #323234;
`;

const StyledContainer = styled.div`
  background-color: #202528;
  height: 100vh;
  margin-top: 1rem;
  margin-left: 1.8rem;
  margin-right: 1.8rem;
`;


export const Contact = () => {
  return (
    <div>
      <StyledNavBar data-bs-theme="light">
        <Nav variant="tabs" style={{
        width: "100%",
        paddingLeft: "2rem",
      }}>
          <Nav.Item>
            <Nav.Link
              as={Link}
              to="/contact/new"
              style={{
                color: "#a2a2a4",
              }}
            >
              New Contact
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link
              as={Link}
              to="/contact/view"
              style={{
                color: "#a2a2a4",
              }}
            >
              View Contact
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link
              as={Link}
              to="/contact/update"
              style={{
                color: "#a2a2a4",
              }}
            >
              Update Contact
            </Nav.Link>
          </Nav.Item>
        </Nav>
      </StyledNavBar>
      <StyledContainer>
        <Outlet />
      </StyledContainer>
    </div>
  );
}