import { Nav, Navbar } from "react-bootstrap";
import { Link, matchPath, useLocation } from "react-router-dom";
import { Outlet } from 'react-router-dom';
import styled from "styled-components";
import { ContactList } from "../../components/ContactList";

const StyledNavBar = styled(Navbar)`
  background-color: #323234;
`;

const StyledNavTabs = styled(Nav.Item)`
  color: var(--secondary-text-color);
  padding: 0.4rem 0.1rem 0.4rem 0.1rem;
  margin-top: 0.5rem;
  &:hover {
    color: var(--main-text-color);
  }
`;

const StyledNavLinks = styled(Nav.Link)<{ active: boolean }>`
  color: var(--secondary-text-color);
  text-decoration: none;
  border: 1px solid var(--secondary-text-color);
  border-radius: 0.5rem 0.5rem 0 0;
  padding: 0.5rem 1rem;
  &:hover {
    color: var(--primary-text-color);
  }
  ${({ active }) => active && `
    color: var(--main-text-color);
    background-color: var(--secondary-bg-color);
    border: 1px solid var(--main-text-color);
  `}
`;

const StyledContainer = styled.div`
  background-color: var(--secondary-bg-color);
  height: 100vh;
  margin-top: 1rem;
  margin-left: 1.8rem;
  margin-right: 1.8rem;
  padding: 2rem;
  overflow: scroll;
`;

export const Contact = () => {
  const location = useLocation();

  // Check if the current URL matches any of the child routes
  const isChildRoute = matchPath("/contact/new", location.pathname) ||
                       matchPath("/contact/view", location.pathname) ||
                       matchPath("/contact/update", location.pathname);
  
  const isContactList = !!matchPath("/contact", location.pathname);
  const isContactNew = !!matchPath("/contact/new", location.pathname);
  const isContactView = !!matchPath("/contact/view", location.pathname);
  const isContactUpdate = !!matchPath("/contact/update", location.pathname);

  return (
    <div>
      <StyledNavBar data-bs-theme="light">
        <Nav variant="tabs" style={{
          width: "100%",
          paddingLeft: "2rem",
        }}>
          <StyledNavTabs>
            <StyledNavLinks
              as={Link}
              to="/contact/new"
              active={isContactNew}
            >
              New Contact
            </StyledNavLinks>
          </StyledNavTabs>
          <StyledNavTabs>
            <StyledNavLinks
              as={Link}
              to="/contact/view"
              active={isContactView}
            >
              View Contact
            </StyledNavLinks>
          </StyledNavTabs>
          <StyledNavTabs>
            <StyledNavLinks
              as={Link}
              to="/contact/update"
              active={isContactUpdate}
            >
              Update Contact
            </StyledNavLinks>
          </StyledNavTabs>
        </Nav>
      </StyledNavBar>
      <StyledContainer>
        { isChildRoute && <Outlet /> }
        { !isChildRoute && <ContactList /> }
      </StyledContainer>
    </div>
  );
}