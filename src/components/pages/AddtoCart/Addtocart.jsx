import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardHeader,
  MDBCardImage,
  MDBCol,
  MDBIcon,
  MDBInput,
  MDBListGroup,
  MDBListGroupItem,
  MDBRipple,
  MDBRow,
  MDBTooltip,
  MDBTypography,
} from "mdb-react-ui-kit";
import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { DecreaseItem, DeleteItem, getTotal, setCart} from "../../redux/CartSlice";
     
const Addtocart = () => {
  const navigate = useNavigate();
  const dispatch=useDispatch()
  
  const {cart,TotalAmount,shippingFee}=useSelector((state)=>state.cart)
  console.log('TotalAmount: ', TotalAmount);
  console.log('cart: ', cart);

  // handleQunatity
 
useEffect(()=>{
  dispatch(getTotal())
},[cart])
 
  return (
    <Wrapper>
      <section className="h-100 gradient-custom open">
        <MDBRow className="justify-content-center my-4">
          <MDBCol size="12">
            <MDBBtn
              onClick={() => navigate("/")}
              className="float-start ms-4"
              style={{ maxWidth: "200px" }}
            >
              <MDBIcon fas icon="long-arrow-alt-left" /> Home
            </MDBBtn>
          </MDBCol>
          <MDBCol md="8">
            <MDBCard className="mb-4">
              <MDBCardHeader className="py-3">
                <MDBTypography tag="h5" className="mb-0">
                  Cart - {cart.length} items
                </MDBTypography>
              </MDBCardHeader>
              <MDBCardBody>
              {cart.length===0?(
              <>
              <h2>No items in the cart</h2>
              <MDBBtn
              onClick={() => navigate("/orderpage")}
              className=" ms-4"
              style={{ maxWidth: "200px" }}
            >
               Make Order
            </MDBBtn>
            </>
              ):cart?.map((item,index)=>{
                return(

<MDBRow key={index}>
                  <MDBCol lg="3" md="12" className="mb-4 mb-lg-0">
                    <MDBRipple
                      rippleTag="div"
                      rippleColor="light"
                      className="bg-image rounded hover-zoom hover-overlay"
                    >
                      <img
                        src={item?.image}
                        className="w-100"
                        alt="item"
                      />
                      <a href="#!">
                        <div
                          className="mask"
                          style={{
                            backgroundColor: "rgba(251, 251, 251, 0.2)",
                          }}
                        ></div>
                      </a>
                      <span className="text-start fw-bolder">Price:<span style={{color:"#35b8be"}}>${item?.price} USD</span></span>
                    </MDBRipple>
                  </MDBCol>

                  <MDBCol lg="5" md="6" className=" mb-4 mb-lg-0">
                    <p>
                      <strong>{item?.name}</strong>
                    </p>
                    <p>Type: {item?.type}</p>
                    

                   
                        <MDBBtn onClick={()=>dispatch(DeleteItem(item?._id))}>
                      <MDBIcon fas icon="trash"  />
                          
                        </MDBBtn>
                    

                    
                  </MDBCol>
                  <MDBCol lg="4" md="6" className="mb-4 mb-lg-0">
                    <div className="d-flex mb-4" style={{ maxWidth: "300px" }}>
                      <MDBBtn className="px-3 me-2" onClick={()=>dispatch(DecreaseItem(item))}>
                        <MDBIcon fas icon="minus" />
                      </MDBBtn>

                     <span>{item?.cartQunatity}</span>

                      <MDBBtn className="px-3 ms-2" onClick={()=>dispatch(setCart(item))}>
                        <MDBIcon fas icon="plus" />
                      </MDBBtn>
                    </div>

                    <p className="text-start text-md-center">
                      <strong>${item?.price*item?.cartQunatity} USD</strong>
                    </p>
                  </MDBCol>
                </MDBRow>
                )
              })}
                

                <hr className="my-4" />
              </MDBCardBody>
            </MDBCard>

            <MDBCard className="mb-4">
              <MDBCardBody>
                <p>
                  <strong>Expected shipping delivery</strong>
                </p>
                <p className="mb-0">12.10.2020 - 14.10.2020</p>
              </MDBCardBody>
            </MDBCard>

            <MDBCard className="mb-4 mb-lg-0">
              <MDBCardBody>
                <p>
                  <strong>We accept</strong>
                </p>
                <MDBCardImage
                  className="me-2"
                  width="45px"
                  src="https://mdbcdn.b-cdn.net/wp-content/plugins/woocommerce-gateway-stripe/assets/images/visa.svg"
                  alt="Visa"
                />
                <MDBCardImage
                  className="me-2"
                  width="45px"
                  src="https://mdbcdn.b-cdn.net/wp-content/plugins/woocommerce-gateway-stripe/assets/images/amex.svg"
                  alt="American Express"
                />
                <MDBCardImage
                  className="me-2"
                  width="45px"
                  src="https://mdbcdn.b-cdn.net/wp-content/plugins/woocommerce-gateway-stripe/assets/images/mastercard.svg"
                  alt="Mastercard"
                />
                <MDBCardImage
                  className="me-2"
                  width="45px"
                  src="https://mdbcdn.b-cdn.net/wp-content/plugins/woocommerce/includes/gateways/paypal/assets/images/paypal.png"
                  alt="PayPal acceptance mark"
                />
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
          <MDBCol md="4">
            <MDBCard className="mb-4">
              <MDBCardHeader>
                <MDBTypography tag="h5" className="mb-0">
                  Summary
                </MDBTypography>
              </MDBCardHeader>
              <MDBCardBody>
                <MDBListGroup flush>
                  <MDBListGroupItem className="d-flex justify-content-between align-items-center border-0 px-0 pb-0">
                    Products
                    <span>{TotalAmount}</span>
                  </MDBListGroupItem>
                  <MDBListGroupItem className="d-flex justify-content-between align-items-center px-0">
                    Shipping
                    <span>{cart.length>=1?shippingFee:0}</span>
                  </MDBListGroupItem>
                  <MDBListGroupItem className="d-flex justify-content-between align-items-center border-0 px-0 mb-3">
                    <div>
                      <strong>Total amount</strong>
                      <strong>
                        <p className="mb-0">(including VAT)</p>
                      </strong>
                    </div>
                    <span>
                      <strong>{`${TotalAmount+shippingFee}`}</strong>
                    </span>
                  </MDBListGroupItem>
                </MDBListGroup>

                <MDBBtn block size="lg">
                  Go to checkout
                </MDBBtn>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </section>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  background-color: white;
`;
export default Addtocart;
