import {
  MDBCardFooter,
  MDBCardImage,
  MDBCol,
  MDBContainer,
  MDBIcon,
  MDBRow,
  MDBTypography,
} from "mdb-react-ui-kit";
import React from "react";
import logopng from "../../Images/logopng.png";
import pattern from "../../Images/footer pattern.svg";
import styled from "styled-components";
const Footer = () => {
  return (
    <Wrapper className="pt-5">
      <MDBContainer className="overlay">
        <MDBRow>
          {/* footer left */}
          <MDBCol md="5" className="text-start">
            <MDBCardImage src={logopng} alt="logo" />
            <MDBTypography>
              Takeway & Delivery template for small-medium business.
            </MDBTypography>
          </MDBCol>
          {/* footer-right */}
          <MDBCol md="7">
            <MDBRow>
              {/* company */}
              <MDBCol sm="4">
                <h6>COMPANY</h6>
                <MDBTypography>Home</MDBTypography>
                <MDBTypography>Order</MDBTypography>
                <MDBTypography>FAQ</MDBTypography>
                <MDBTypography>Contact</MDBTypography>
              </MDBCol>
              {/* templete */}
              <MDBCol sm="4">
                <h6>TEMPLATE</h6>
                <MDBTypography>Style Guide</MDBTypography>
                <MDBTypography>Changelog</MDBTypography>
                <MDBTypography>Licence</MDBTypography>
                <MDBTypography>MR Tandoor</MDBTypography>
              </MDBCol>
              {/* flow */}
              <MDBCol sm="4">
                <h6>FLOW</h6>
                <MDBTypography>More Cloneables</MDBTypography>
              </MDBCol>
            </MDBRow>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <MDBCardFooter>
        <MDBRow className="d-flex align-item-center">
          <MDBCol md="6">
            <MDBTypography>
              Built by <span>Saikumar</span> .Powered by <span>MR Tandoor</span>
            </MDBTypography>
          </MDBCol>
          <MDBCol md="6" className="d-flex justify-content-center gap-4">
            {/* insta */}
            <div className="icon">
              <MDBIcon icon="instagram" fab className="fs-4" />
            </div>
            {/* twitter */}
            <div className="icon">
              <MDBIcon icon="twitter" fab />
            </div>
            {/* youtube */}
            <div className="icon">
              <MDBIcon icon="youtube" fab />
            </div>
          </MDBCol>
        </MDBRow>
      </MDBCardFooter>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  box-shadow: 0 1px 1px 2px gray;
  .overlay {
    background-image: url("${pattern}");
    background-size: 40%;
    background-repeat: no-repeat;
    background-position: left;
  }
  p {
    color: "#546285";
  }
  h6 {
    color: black;
    font-weight: 900;
  }
  .icon {
    border-radius: 50%;
    border: 1px solid gray;
    width: 40px;
    height: 40px;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export default Footer;
