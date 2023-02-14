import {
  MDBCardImage,
  MDBCollapse,
  MDBContainer,
  MDBIcon,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarItem,
  MDBNavbarNav,
  MDBNavbarToggler,
} from "mdb-react-ui-kit";
import React from "react";
import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import Logo from "../../Images/logo.png";
import styled from "styled-components";
import CartOverlay from "../../Images/cardoverlay.svg";
import { useDispatch ,useSelector} from "react-redux";

const Navbar = () => {
 const {cart}=useSelector((state)=>state.cart)
  
  const [showNav, setShowNav] = useState(false);
  const navigate = useNavigate();
  return (
    <Wrapper>
      <MDBNavbar expand="md">
        <MDBContainer
          className="d-flex justify-content-between align-items-center mx-4"
          fluid
        >
          <MDBNavbarBrand
            onClick={() => navigate("/")}
            style={{ cursor: "pointer" }}
          >
            <MDBCardImage src={Logo} alt="logo" style={{ height: "50px" }} />
            <span className="fw-bolder" style={{ color: "#35b8be" }}>
              MR
            </span>
            &nbsp;
            <span className="fw-bold" style={{ color: "GrayText" }}>
              Tandoor
            </span>
          </MDBNavbarBrand>
          <MDBNavbarToggler
            aria-label="Toggle navigation"
            airal-expand="false"
            onClick={() => setShowNav(!showNav)}
          >
            <MDBIcon
              icon="bars"
              fas
              className="rounded p-3"
              style={{ backgroundColor: "rgba(126, 130, 143, 0.1)" }}
            />
          </MDBNavbarToggler>
          <MDBCollapse navbar show={showNav}>
            <MDBNavbarNav
              right
              fullWidth={false}
              className="d-flex justify-content-around align-items-center gap-4"
              onClick={() => setShowNav(false)}
            >
              {/* home */}
              <MDBNavbarItem>
                <NavLink to="/">Home</NavLink>
              </MDBNavbarItem>
              {/* order */}
              <MDBNavbarItem>
                <NavLink to="/orderpage">Order</NavLink>
              </MDBNavbarItem>
              {/* company */}
              <MDBNavbarItem>
                <NavLink to="/companypage">Company</NavLink>
              </MDBNavbarItem>
              {/* faq */}
              <MDBNavbarItem>
                <NavLink to="/faqpage">FAQ</NavLink>
              </MDBNavbarItem>
              {/* contact */}
              <MDBNavbarItem>
                <NavLink to="/contactpage">Contact</NavLink>
              </MDBNavbarItem>
              <MDBNavbarItem
                className="p-3 rounded position-relative cart"
                style={{ backgroundColor: "#35b8be" }}
                
              >
              <NavLink to='/cartpage'>  <MDBIcon fas icon="shopping-cart" color="white" /></NavLink>
                <span
                  className="position-absolute top-0 start-100 fw-bold translate-middle text-center rounded-circle"
                  style={{
                    backgroundColor: "white",
                    color: "#35b8be",
                    width: "20px",
                    height: "20px",
                    fontSize: "12px",
                  }}
                >
                  {cart.length>0?cart.length:0}
                </span>
              </MDBNavbarItem>
            </MDBNavbarNav>
          </MDBCollapse>
        </MDBContainer>
      </MDBNavbar>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  ul {
    li {
      a {
        color: ${(props) => props.theme.colors.navlink};
        font-weight: 400;
      }
      .active {
        color: #35b8be;
      }
    }
  }
  .cart {
    background-image: url("${CartOverlay}");
    span {
      border: 1px solid gray;
    }
  }
`;
export default Navbar;
