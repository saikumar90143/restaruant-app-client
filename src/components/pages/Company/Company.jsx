import React from "react";
import {
  MDBBtn,
  MDBCard,
  MDBCardImage,
  MDBCol,
  MDBRow,
  MDBTypography,
} from "mdb-react-ui-kit";
import overlay from "../../../Images/banner cover.svg";
import burger from "../../../Images/burger.png";
import wave1 from "../../../Images/wavecolured.svg";
import styled from "styled-components";
import table from "../../../Images/table.png";
import { useNavigate } from "react-router";
const Company = () => {
  const navigate = useNavigate();
  return (
    <Wrapper id="#companypage">
      <MDBCard className="card d-flex justify-content-center align-items-center px-3">
        <h1 className="fw-bolder" data-aos="fade-up" data-aos-duration="2000">
          Our Company focuses <br />
          <span style={{ color: "#35b8be" }}>on food and people.</span>
        </h1>
      </MDBCard>

      {/* banner */}
      <MDBRow
        className="align-items-center py-5 g-5 px-4"
        style={{ backgroundColor: "white" }}
      >
        {/* content */}
        <MDBCol className="text-start" md="6" size="12">
          <h1 className="fw-bolder" style={{ color: "#35b8be" }}>
            The home of <br /> fresh products
          </h1>
          <MDBTypography className="lh-2 ls-wide">
            Fresh food is food which has not been preserved and has not spoiled
            yet. For vegetables and fruits, this means that they have been
            recently harvested and treated properly postharvest; for meat, it
            has recently been slaughtered and butchered; for fish, it has been
            recently caught or harvested and kept cold.
          </MDBTypography>
          <MDBBtn
            className="overlaybutton fw-bolder"
            onClick={() => navigate("/companypage")}
          >
            Learn about us
          </MDBBtn>
        </MDBCol>
        {/* image */}
        <MDBCol md="6" size="12">
          <MDBCardImage src={burger} alt="burger" fluid />
        </MDBCol>
      </MDBRow>

      {/* items list */}
      <MDBRow
        className="py-5"
        style={{ minHeight: "500px", alignItems: "center" }}
      >
        {/* veg items */}
        <MDBCol size="12" sm="6" md="3">
          <h1 className="number">62</h1>
          <MDBCardImage src={wave1} alt="wave" />
          <MDBTypography
            className="ls-wider fw-bold"
            style={{ color: "white" }}
          >
            Veg Items
          </MDBTypography>
        </MDBCol>
        {/* non veg items */}
        <MDBCol size="12" sm="6" md="3">
          <h1 className="number">76</h1>
          <MDBCardImage src={wave1} alt="wave" />
          <MDBTypography
            className="ls-wider fw-bold"
            style={{ color: "white" }}
          >
            Non-Veg Items
          </MDBTypography>
        </MDBCol>
        {/* pizzas */}
        <MDBCol size="12" sm="6" md="3">
          <h1 className="number">23</h1>
          <MDBCardImage src={wave1} alt="wave" />
          <MDBTypography
            className="ls-wider fw-bold"
            style={{ color: "white" }}
          >
            Desert Items
          </MDBTypography>
        </MDBCol>
        {/* burgers */}
        <MDBCol size="12" sm="6" md="3">
          <h1 className="number">86</h1>
          <MDBCardImage src={wave1} alt="wave" />
          <MDBTypography
            className="ls-wider fw-bold"
            style={{ color: "white" }}
          >
            Pizza Items
          </MDBTypography>
        </MDBCol>
      </MDBRow>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  background-image: url("${table}");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;

  .card {
    background-image: url("${overlay}");
    background-position: top right;
    background-size: cover;
    height: 500px;
    h1 {
      font-weight: 900;
      color: black;
      text-shadow: 0px 1px, 1px 0px, 1px 1px;
      font-size: clamp(2rem, 12vw, 4rem);
    }
    .menu {
      max-width: 100%;
    }
  }

  .number {
    font-weight: bolder;
    text-shadow: 0 1px 2px, 1px 0;
    font-size: 4rem;
    color: white;
  }
`;
export default Company;
