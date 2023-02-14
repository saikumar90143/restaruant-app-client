import {
  MDBBtn,
  MDBCard,
  MDBCol,
  MDBContainer,
  MDBRow,
  MDBTypography,
} from "mdb-react-ui-kit";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import overlay from "../../../Images/banner cover.svg";
import { GetAllItems, GetItemsByType } from "../../redux/GetDataSlice";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../../Loader";

import { Link } from "react-router-dom";
import { setCart, setQuantity } from "../../redux/CartSlice";
const Order = () => {
  const dispatch = useDispatch();

  const { menu, isLoading, isError} = useSelector((state) => state.items);
  const {quantity}=useSelector((state)=>state.cart)
  console.log('quantity: ', quantity);
  const [type, setType] = useState(null);
// Quantity


  useEffect(() => {
    if (type === null) {
      dispatch(GetAllItems());
    } else {
      dispatch(GetItemsByType(type));
    }
  }, [dispatch, type]);

  // handle dispatch

  const handleDispatch = (e) => {
    setType(e.target.name);
  };

  return (
    <Wrapper>
      <MDBCard className="card d-flex justify-content-center align-items-center px-3">
        <h1 className="fw-bolder" data-aos="fade-up" data-aos-duration="2000">
          Get your food <span style={{ color: "#35b8be" }}>deliveried</span>,
          <br /> or <span style={{ color: "#35b8be" }}>pick-up</span> in store.{" "}
        </h1>
      </MDBCard>
      <MDBContainer className="my-5">
        <div className="row g-2 mx-auto">
          <div className="col-12 col-sm-6 col-md-3 menu">
            <MDBBtn
              className="w-100 fw-bolder ls-widest overlaybutton"
              onClick={() => setType(null)}
            >
              Full Menu
            </MDBBtn>
          </div>
          <div className="col-12 col-sm-6 col-md-3 menu ">
            <MDBBtn
              className="w-100 fw-bolder ls-widest overlaybutton"
              name="pizza"
              onClick={handleDispatch}
            >
              Pizza
            </MDBBtn>
          </div>
          <div className="col-12 col-sm-6 col-md-3 menu ">
            <MDBBtn
              className="w-100 fw-bolder ls-widest overlaybutton"
              name="biryani"
              onClick={handleDispatch}
            >
              Biryani
            </MDBBtn>
          </div>
          <div className="col-12 col-sm-6 col-md-3 menu ">
            <MDBBtn
              className="w-100 fw-bolder ls-widest overlaybutton"
              name="breakfast"
              onClick={handleDispatch}
            >
              Breakfast
            </MDBBtn>
          </div>
        </div>
      </MDBContainer>
      <MDBRow className="my-5 mx-2 g-4 gap-2 justify-content-evenly">
        {isLoading ? (
          <Loader />
        ) : isError ? (
          <h2>{isError}</h2>
        ) : (
          menu?.map((item) => {
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
                        style={{aspectRatio:4/3}}
                      />
                    </Link>
                  </MDBCol>
                  <MDBCol md="7" size="12" className="text-start flex-grow-1">
                    <div className="d-flex justify-content-between align-item-center flex-">
                      <Link to={`/singleitem/${item?._id}`}>
                        <h6 className="fw-bolder">{item?.name}</h6>
                      </Link>
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
                         
                        />
                      </div>
                      <div>
                          <Link to='/cartpage'>
                        <MDBBtn className="overlaybutton" onClick={()=>dispatch(setCart(item))} style={{color:"white"}}>
                          {isLoading?"adding to cart":"Add to cart"}
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
      </MDBRow>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .card {
    background-image: url("${overlay}");
    background-position: top right;
    background-size: cover;
    height: 500px;
    h1 {
      font-weight: 900;
      color: black;
      text-shadow: 0px 2px, 2px 0px, 2px 2px;
    }
  }
  .menu {
    max-width: 100%;
  }
`;
export default Order;
