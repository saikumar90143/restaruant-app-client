import React from "react";
import { MDBContainer, MDBNavbar, MDBTypography } from "mdb-react-ui-kit";
import btnOverlay from "../../Images/cardoverlay.svg";
import styled from "styled-components";

const Header = () => {
  return (
    <Wrapper>
      <MDBNavbar
        style={{ width: "100%", height: "auto", backgroundColor: "#35b8be" }}
        className="overlay"
      >
        <MDBContainer
          fluid
          className="d-flex justify-content-center align-items-center"
        >
          <MDBTypography
            className="text-center fs-8"
            style={{ color: "rgba(255, 255, 255, 0.8)" }}
          >
            We're open and available for takeaway & delivery. Order Now.
          </MDBTypography>
        </MDBContainer>
      </MDBNavbar>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .overlay {
    background-image: url("${btnOverlay}");
    background-size: auto;
    background-position: center;
  }
`;

export default Header;
