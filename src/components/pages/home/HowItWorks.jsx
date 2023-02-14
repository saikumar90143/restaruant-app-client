import {
  MDBCardImage,
  MDBCol,
  MDBRow,
  MDBTypography,
} from "mdb-react-ui-kit";
import React from "react";
import styled from "styled-components";
import menuItem from "../../../Images/menuitem.png";
import Payment from "../../../Images/payment.png";
import Devevery from "../../../Images/delevery.png";
const HowItWorks = () => {
  return (
    <Wrapper>
      <MDBTypography
            tag="h1"
            className="fw-bolder"
            style={{ color: "#35b8be" }}
          >
            HOW ITS WORKS
          </MDBTypography>
      <MDBRow className="py-5">
        
        <MDBCol size="12" className="">
          
        </MDBCol>
        {/* menu item */}
        <MDBCol md="4">
          <div>
            <MDBCardImage src={menuItem} alt="menuitem" fluid />
            <div>
              <h3 className="fw-bolder">Adapt your menu item</h3>
              <MDBTypography>
                Easily adpat your menu using the services and allow customers to
                browse your items.
              </MDBTypography>
            </div>
          </div>
        </MDBCol>
        {/* payment */}
        <MDBCol md="4">
          <div>
            <MDBCardImage src={Payment} alt="payment" fluid />
            <div>
              <h3 className="fw-bolder">Adapt your menu item</h3>
              <MDBTypography>
                Easily adpat your menu using the services and allow customers to
                browse your items.
              </MDBTypography>
            </div>
          </div>
        </MDBCol>
        {/* delivery */}
        <MDBCol md="4">
          <div>
            <MDBCardImage src={Devevery} alt="devilery" fluid />
            <div>
              <h3 className="fw-bolder">Adapt your menu item</h3>
              <MDBTypography>
                Easily adpat your menu using the services and allow customers to
                browse your items.
              </MDBTypography>
            </div>
          </div>
        </MDBCol>
      </MDBRow>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  margin-block: 9rem;
`;

export default HowItWorks;
