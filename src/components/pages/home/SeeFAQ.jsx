import {
  MDBBtn,
  MDBCardImage,
  MDBCol,
  MDBRow,
  MDBTypography,
} from "mdb-react-ui-kit";
import React from "react";
import styled from "styled-components";
import OrderOnline from "../../../Images/orderonline.png";
import btnoverlay from "../../../Images/cardoverlay.svg";
import { useNavigate } from "react-router-dom";
import paymentCover from "../../../Images/payment cover.svg";
const SeeFAQ = () => {
  const navigate = useNavigate();
  return (
    <Wrapper>
      <MDBRow className="my-5">
        {/* image */}
        <MDBCol md="6" sm="12" className="image-wrap">
          <MDBCardImage
            src={OrderOnline}
            alt="orderonline"
            fluid
            className="image"
          />
          <MDBCardImage className="svg" src={paymentCover} alt="cover" fluid />
        </MDBCol>
        {/* content */}
        <MDBCol
          md="6"
          sm="12"
          className="text-start d-flex flex-column align-item-center justify-content-center"
        >
          <h1 className="fw-bolder" style={{ color: "#35b8be" }}>
            Order online with your simple checkout.
          </h1>
          <MDBTypography>
            Online ordering systems operate similarly to an online takeaway.
            Your customer orders online, completes their payment and can then
            get their food delivered or pick it up at your store. The ordering
            process is easy: Your customer browses your online menu on their
            laptop or mobile phone.
          </MDBTypography>
          <MDBBtn
            className="rounded btn mt-4 align-self-md-start align-self-sm-center"
            style={{
              backgroundColor: "#35b8be",
              minHeight: "60px",
              width: "200px",
              fontSize: "15px",
            }}
            onClick={() => navigate("/faqpage")}
          >
            See FAQ
          </MDBBtn>
        </MDBCol>
      </MDBRow>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .image-wrap {
    position: relative;
    display: inline-block;
    .image {
      display: block;
      max-width: 100%;
      height: auto;
    }
    .svg {
      position: absolute;
      top: 0;
      left: 0;
      width: min(200px, 50vw);
    }
  }

  .btn {
    background-image: url("${btnoverlay}");
    background-repeat: no-repeat;
    background-position: left;
  }
`;
export default SeeFAQ;
