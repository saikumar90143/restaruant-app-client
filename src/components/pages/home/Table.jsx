import { MDBBtn, MDBCardImage, MDBCol, MDBRow } from "mdb-react-ui-kit";
import React from "react";
import styled from "styled-components";
import TableImage from "../../../Images/table.png";
import Overlay from "../../../Images/payment cover.svg";
import { useNavigate } from "react-router";

const Table = () => {
  const navigate = useNavigate();
  return (
    <Wrapper>
      <MDBRow className="my-5 g-4">
        {/* image */}
        <MDBCol md="6">
          <MDBCardImage
            className="rounded"
            src={TableImage}
            alt="tableimage"
            style={{ minHeight: "400px" }}
            fluid
          />
        </MDBCol>
        {/* background */}
        <MDBCol
          md="6"
          style={{ backgroundColor: "#35b8be", minHeight: "400px" }}
          className="overlay d-flex justify-content-center flex-column text-center rounded"
        >
          <MDBCardImage src={Overlay} alt="overlay" className="svg" fluid />
          <h1 className="fw-bolder" style={{ color: "white" }}>
            <span style={{ color: "#0c756b" }}>Support</span> good food and
            local business.
          </h1>
          <MDBBtn
            className="rounded py-3 ms-2 fs-5"
            onClick={() => navigate("/orderpage")}
            style={{
              color: "#35b8be",
              width: "200px",
              backgroundColor: "white",
            }}
          >
            Order Now
          </MDBBtn>
        </MDBCol>
      </MDBRow>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .overlay {
    position: relative;
    overflow: hidden;
    .svg {
      position: absolute;
      top: 50%;
      left: 30%;
      opacity: 0.7;
      translate: -50% -50%;

      mix-blend-mode: color-burn;
      width: 80%;
    }
  }
`;

export default Table;
