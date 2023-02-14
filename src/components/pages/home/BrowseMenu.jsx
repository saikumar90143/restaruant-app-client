import React, { useEffect } from "react";
import {
  MDBBtn,
  MDBCard,
  MDBCol,
  MDBContainer,
  MDBRow,
  MDBTypography,
} from "mdb-react-ui-kit";

import overlay from "../../../Images/banner cover.svg";
import btnoverlay from "../../../Images/cardoverlay.svg";
import { FeaturedItems } from "../../redux/GetDataSlice";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import Loader from "../../Loader";
import { Link } from "react-router-dom";
import { setCart } from "../../redux/CartSlice";

const BrowseMenu = () => {
  const { featuredItems, isError, isLoading } = useSelector(
    (state) => state.items
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(FeaturedItems());
  }, [dispatch]);
  return (
    <Wrapper>
      <MDBContainer className="my-5">
        <MDBCard className="card d-flex justify-content-center align-items-center flex-column px-3">
          <h1 className="fw-bolder" style={{ color: "#35b8be" }}>
            Browse Our Menu
          </h1>
          <p>
            Use our menu to place an order online, or{" "}
            <a
              href="tel:9014386620"
              style={{ color: "#35b8be", textDecoration: "underline" }}
            >
              phone
            </a>{" "}
            our store to place a pickup order. Fast and fresh food.
          </p>
        </MDBCard>

        <h1
          className="text-center text-uppercase fw-bolder"
          style={{ color: "#35b8be" }}
        >
          featured Items
        </h1>

        <MDBRow className="my-5 g-4  justify-content-evenly">
          {isLoading ? (
            <Loader />
          ) : isError ? (
            <h2>{isError}</h2>
          ) : (
            featuredItems?.map((item) => {
              return (
                <MDBCol
                  lg="5"
                  sm="5"
                  md="12"
                  size="12"
                  style={{ border: "1px solid #35b8be", cursor: "pointer" }}
                  className="rounded py-3"
                  key={item._id}
                >
                  <MDBRow
                    className="d-flex align-items-center g-3"
                    style={{ color: "#546285" }}
                  >
                    <MDBCol md="5" size="12" className="flex-shrink-0">
                      <Link to={`/singleitem/${item?._id}`}>
                        <img
                          src={item?.image}
                          alt="item"
                          className="img-fluid"
                        />
                      </Link>
                    </MDBCol>
                    <MDBCol md="7" size="12" className="text-start flex-grow-1">
                      <div className="d-flex justify-content-between align-item-center flex-">
                        <h6 className="fw-bolder">
                          {" "}
                          <Link to={`/singleitem/${item?._id}`}>
                            {item?.name}
                          </Link>
                        </h6>
                        <p style={{ color: "#35b8be" }} className="fw-bold">
                          ${item?.price} USD
                        </p>
                      </div>
                      <MDBTypography>
                        {`${item?.description}`.slice(0, 80)}...
                      </MDBTypography>
                      <div className="d-flex justify-content-between align-items-center w-100">
                        <div>
                          <input
                            type="number"
                            max={10}
                            min={1}
                            style={{ width: "60px" }}
                            defaultValue={1}
                          />
                        </div>
                        <div>
                          {" "}
                          <Link to='/cartpage'>
                        <MDBBtn className="overlaybutton" onClick={()=>dispatch(setCart(item))} style={{color:"white"}}>
                          Add to Cart
                        </MDBBtn>
                        </Link>
                        </div>
                      </div>
                    </MDBCol>
                  </MDBRow>
                </MDBCol>
              );
            })
          )}
          <Link to="/orderpage">
            <MDBBtn
              className="buttonoverlay"
              style={{ maxWidth: "250px", color: "white" }}
            >
              See FullMenu
            </MDBBtn>
          </Link>
        </MDBRow>
      </MDBContainer>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .card {
    background-image: url("${overlay}");
    background-position: top right;
    background-size: cover;
    height: 200px;
    margin-bottom: 1rem;
    h1 {
      font-weight: 900;
      color: black;
      text-shadow: 0px 2px, 2px 0px, 2px 2px;
    }
    .menu {
      max-width: 100%;
    }
  }

  button {
    background-color: ${(props) => props.theme.colors.lightblue};
    padding-block: 1rem;
    background-image: url("${btnoverlay}");
    background-repeat: no-repeat;
  }
`;
export default BrowseMenu;
