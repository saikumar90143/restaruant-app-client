import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardHeader,
  MDBCardTitle,
  MDBIcon,
  MDBInput,
  MDBTextArea,
} from "mdb-react-ui-kit";
import React from "react";
import styled from "styled-components";

const Contact = () => {
  return (
    <Wrapper id="#contactpage">
      <MDBCard
        style={{ maxWidth: "600px", marginInline: "auto" }}
        className="my-5"
      >
        <MDBCardHeader>
          <MDBCardTitle className="fw-bolder">
            <MDBIcon icon="mobile" fas /> Contact Us
          </MDBCardTitle>
        </MDBCardHeader>
        <MDBCardBody>
          <form
            action="https://formspree.io/f/xqkopqyl"
            method="post"
            className="d-flex flex-column gap-4"
          >
            <MDBInput type="text" name="name" label="Name" required></MDBInput>
            <MDBInput
              type="email"
              name="email"
              label="Email"
              required
            ></MDBInput>
            <MDBInput type="tel" name="phone" label="Phone" required></MDBInput>
            <MDBTextArea
              rows={4}
              name="message"
              label="message"
              style={{ resize: "none" }}
            ></MDBTextArea>
            <MDBBtn
              type="submit"
              style={{ width: "10rem", marginInline: "auto" }}
            >
              <MDBIcon fas icon="paper-plane" /> Send
            </MDBBtn>
          </form>
        </MDBCardBody>
      </MDBCard>
    </Wrapper>
  );
};

const Wrapper = styled.section``;

export default Contact;
