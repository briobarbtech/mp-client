import React from "react";
import styled from "styled-components";

function NavBar() {
  return (
    <>
      <NavbarContainer>
        <div className="navbar"></div>
      </NavbarContainer>
    </>
  );
}

export default NavBar;

const NavbarContainer = styled.div`
  .navbar {
    width: 100%;
    height: 60px;
    background: rgb(255, 146, 0);
    background: linear-gradient(
      180deg,
      rgba(255, 146, 0, 1) 0%,
      rgba(255, 206, 46, 1) 43%,
      rgba(255, 181, 0, 1) 100%
    );
  }
`;
