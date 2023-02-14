import {
  MDBBtn,
  MDBCardImage,
  MDBCol,
  MDBRow,
  MDBTypography,
} from "mdb-react-ui-kit";
import React from "react";
import { useNavigate } from "react-router";
import styled from "styled-components";
import banner2 from "../../../Images/banner2 cover.svg";
import banner2image from "../../../Images/banner2.png";
const Banner2 = () => {
  const navigate = useNavigate();
  return (
    <Wrapper>
      <MDBRow className="banner2 py-5 my-5">
        {/* content */}
        <MDBCol
          sm="12"
          md="6"
          className="text-start d-flex pb-5  flex-column justify-content-center"
        >
          <MDBTypography
            tag="h1"
            className="fw-bolder fs-1"
            style={{ color: "#35b8be" }}
          >
            The Home of Hygienic Products
          </MDBTypography>
          <MDBTypography>
            The authentic taste comes from family recipes and from fresh, simple
            and tasteful ingredients straight from home. In every taco from{" "}
            <span style={{ color: "#35b8be" }}>MR Tandoor</span> No. 1 there is a
            bit of true Mexican culture and flavor.
          </MDBTypography>
          {/* btn */}
          <MDBBtn
            className="btn mt-4 text-md-center align-self-sm-center align-self-md-start"
            onClick={() => navigate("/companypage")}
            style={{
              backgroundColor: "#35b8be",
              minHeight: "60px",
              paddingInline: "30px",
              width: "250px",
              fontSize: "15px",
            }}
          >
            Learn About Us
          </MDBBtn>
        </MDBCol>
        {/* image */}
        <MDBCol sm="12" md="6">
          <MDBCardImage
            src={banner2image}
            alt="banner2"
            className="banner2image"
          />
        </MDBCol>
      </MDBRow>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .banner2 {
    background-image: url("${banner2}");
    background-position: top right;
    .banner2image {
      width: min(500px, 100%);
    }
  }
`;

export default Banner2;
