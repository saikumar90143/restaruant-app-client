import {
  MDBBtn,
  MDBCardImage,
  MDBCol,
  MDBRow,
  MDBTypography,
} from "mdb-react-ui-kit";
import React from "react";
import styled from "styled-components";
import btnOverlay from "../../../Images/cardoverlay.svg";
import store from "../../../Images/calltostore.png";
import banner2 from "../../../Images/banner2 cover.svg";
const CallOurStore = () => {
  return (
    <Wrapper>
      <MDBRow className="g-5">
        {/* content */}
        <MDBCol
          sm="12"
          md="6"
          className="d-flex flex-column justify-content-center text-start"
        >
          <h1 className="fw-bolder" style={{ color: "#35b8be" }}>
            Call our Store and takeway when it suits you best.
          </h1>
          <MDBTypography>
            Feel free to call our store to make order our choice and get door
            delivery within short time.
          </MDBTypography>
          <MDBBtn
            style={{
              backgroundColor: "#35b8be",
              paddingBlock: "15px",
              width: "250px",
            }}
            className="btn"
          >
            <a
              href="tel:9014386620"
              style={{ color: "white", fontSize: "15px", fontWeight: "700" }}
            >
              Ph:+91 9014386620
            </a>
          </MDBBtn>
        </MDBCol>
        {/* image */}
        <MDBCol sm="12" md="6">
          <MDBCardImage src={store} alt="store" fluid />
        </MDBCol>
      </MDBRow>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  background-image: url("${banner2}");
  .btn {
    background-image: url("${btnOverlay}");
    background-repeat: no-repeat;
  }
`;

export default CallOurStore;
