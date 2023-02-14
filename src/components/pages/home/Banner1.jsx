import {
  MDBBtn,
  MDBCardImage,
  MDBCol,
  MDBContainer,
  MDBRow,
  MDBTypography,
} from "mdb-react-ui-kit";
import React from "react";
import styled from "styled-components";
import Banner from "../../../Images/banner cover.svg";
import BannerImage from "../../../Images/bannerimage.png";
import BtnCover from "../../../Images/cardoverlay.svg";
import { BsFillStarFill } from "react-icons/bs";
import { useNavigate } from "react-router";

const Banner1 = () => {
  const navigate = useNavigate();
  return (
    <Wrapper>
      <MDBContainer>
        {/* banner1 */}
        <MDBRow className="py-5">
          {/* content */}
          <MDBCol className="d-flex flex-column p-2" md="6" sm="12">
            <MDBTypography
              tag="h1"
              style={{ color: "#08090a", textAlign: "start" }}
              className="fs-1 fw-bolder"
              data-aos="fade-right"
              data-aos-duration="1500"
            >
              Mouth Watering food & takeaway,
              <span style={{ color: "#35b8be" }}>delivered</span> to your door.
            </MDBTypography>
            <MDBTypography
              style={{
                color: "#546285",
                fontSize: "18px",
                textAlign: "start",
              }}
              data-aos="fade-right"
              data-aos-delay="100"
              data-aos-duration="1000"
            >
              Restaurants know the importance of a strong first impression. It's
              why they invest in exterior design, decorate their entranceways
              and train hosts to welcome guests with a warm smile.{" "}
            </MDBTypography>
            {/* button */}
            <MDBBtn
              className="btn mt-4 align-self-md-start align-self-sm-center"
              onClick={() => navigate("/orderpage")}
              style={{
                backgroundColor: "#35b8be",
                minHeight: "60px",
                width: "250px",
                fontSize: "15px",
              }}
              data-aos-delay="300"
              data-aos="fade-right"
              data-aos-duration="1000"
              data-aos-offset="0"
            >
              Place an Order
            </MDBBtn>
            {/* trust tag */}
            <div
              className="text-start mt-3 d-flex align-self-md-start align-self-sm-center"
              data-aos-delay="500"
              data-aos="fade-right"
              data-aos-duration="1000"
              data-aos-offset="0"
            >
              <BsFillStarFill style={{ fontSize: "1.7rem", color: "green" }} />
              <MDBTypography
                className="ms-2"
                style={{ fontSize: "18px", fontWeight: "800", color: "#333" }}
              >
                TrustPilot
              </MDBTypography>
            </div>
            {/* rating */}
            <MDBTypography
              className="text-start align-self-md-start align-self-sm-center"
              data-aos-delay="500"
              data-aos="fade-right"
              data-aos-duration="1000"
              data-aos-offset="0"
            >
              <span style={{ color: "#35b8be" }}>4.8 out of 5</span> based on
              2000+ reviews
            </MDBTypography>
          </MDBCol>
          {/* image */}
          <MDBCol
            md="6"
            className="mx-auto"
            sm="12"
            data-aos="zoom-in"
            data-aos-duration="2000"
            data-aos-delay="100"
          >
            <MDBCardImage src={BannerImage} alt="bannerimage" fluid />
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  background-image: url("${Banner}");
  background-repeat: no-repeat;
  background-position: top right;
  /* background-size: contain; */

  .btn {
    background-image: url("${BtnCover}");
    background-repeat: no-repeat;
  }
`;
export default Banner1;
