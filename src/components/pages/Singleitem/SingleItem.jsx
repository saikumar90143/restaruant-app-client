import {
  MDBBtn,
  MDBCard,
  MDBCardImage,
  MDBCol,
  MDBRow,
  MDBTypography,
} from "mdb-react-ui-kit";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import overlay from "../../../Images/banner cover.svg";
import styled from "styled-components";
import { GetItemById, GetReleatedItems } from "../../redux/GetDataSlice";
import { Link } from "react-router-dom";
import Loader from "../../Loader";
import { setCart } from "../../redux/CartSlice";

const SingleItem = () => {
  const { id } = useParams();

  const dispatch = useDispatch();
  const { SingleItem, releateditems,isLoading} = useSelector((state) => state.items);

  const type = SingleItem.type;
  useEffect(() => {
    dispatch(GetItemById(id));
    dispatch(GetReleatedItems(type));
  }, [dispatch, type, id]);
  return (
    <Wrapper>
      <MDBCard className="card d-flex justify-content-center align-items-center px-3">
        <h1
          className="fw-bolder text-capitalize"
          data-aos="fade-up"
          data-aos-duration="2000"
        >
          {SingleItem?.name}
        </h1>
      </MDBCard>
      {/* selected item */}
      <MDBRow className="my-5 px-2 align-items-center">
        {/* image */}
        <MDBCol md="6" size="12" className="align-self-start">
          <MDBCardImage
            src={SingleItem?.image}
            alt={SingleItem?.name}
            fluid
            className="rounded"
          />
        </MDBCol>
        {/* content */}
        <MDBCol md="6" size="12" className="text-start">
          <h1 className="fw-bolder text-capitalize">{SingleItem?.name}</h1>
          <h5 style={{ color: "#35b8be" }}>$ {SingleItem?.price} USD</h5>
          <hr style={{ backgroundColor: "#35bdbe" }} />
          <br />
          <MDBTypography className="w-75">
            {SingleItem?.description}
          </MDBTypography>
          <div className="d-flex justify-content-start gap-5">
            <input
              type="number"
              min={1}
              max={10}
              style={{ width: "60px" }}
              placeholder="1"
            />
              <Link to='/cartpage'>
                        <MDBBtn className="overlaybutton" onClick={()=>dispatch(setCart(SingleItem))} style={{color:"white"}}>
                          Add to Cart
                        </MDBBtn>
                        </Link>
          </div>
          <br />
          <hr style={{ backgroundColor: "#35bdbe" }} />
          <br />
        </MDBCol>
      </MDBRow>
      {/* releated items */}

      <MDBRow className="my-5 g-4 gap-2 justify-content-evenly shadow-1-strong">
        <h1
          className="fw-bolder"
          style={{ color: "#35b8be", fontSize: "3rem" }}
        >
          Releaded Items
        </h1>
        {isLoading?<Loader/>:
          releateditems
            .map((items) => {
              return (
                <MDBCol
                  lg="5"
                  sm="5"
                  md="12"
                  size="12"
                  style={{ border: "1px solid #35b8be", cursor: "pointer" }}
                  className="rounded py-3"
                  key={items._id}
                >
                  <MDBRow
                    className="d-flex align-items-center g-3"
                    style={{ color: "#546285" }}
                  >
                    <MDBCol md="5" size="12" className="flex-shrink-0">
                      <Link to={`/singleitem/${items?._id}`}>
                        <img
                          src={items?.image}
                          alt="item"
                          className=" img-fluid"
                        />
                      </Link>
                    </MDBCol>
                    <MDBCol md="7" size="12" className="text-start flex-grow-1">
                      <div className="d-flex justify-content-between align-item-center flex-">
                        <Link to={`/singleitem/${items?._id}`}>
                          <h6 className="fw-bolder">{items?.name}</h6>
                        </Link>
                        <p style={{ color: "#35b8be" }} className="fw-bold">
                          ${items?.price} USD
                        </p>
                      </div>
                      <MDBTypography>
                        {`${items?.description}`.slice(0, 80)}...
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
                        <MDBBtn className="overlaybutton" onClick={()=>dispatch(setCart(items))} style={{color:"white"}}>
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
            .slice(0, 6)}
        <MDBBtn className="overlaybutton mb-4" style={{ maxWidth: "200px" }}>
          <Link to="/orderpage">See More</Link>
        </MDBBtn>
      </MDBRow>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .card {
    background-image: url("${overlay}");
    background-position: top right;
    background-size: cover;
    height: 400px;
    h1 {
      font-weight: 900;
      color: black;
      text-shadow: 0px 1px, 1px 0px, 1px 1px;
      font-size: clamp(1.5rem, 12vw, 3rem);
    }
  }
`;
export default SingleItem;
