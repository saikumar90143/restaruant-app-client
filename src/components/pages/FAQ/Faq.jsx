import {
  MDBAccordion,
  MDBAccordionItem,
  MDBBtn,
  MDBCard,
  MDBContainer,
  MDBIcon,
} from "mdb-react-ui-kit";
import React, { useState } from "react";
import styled from "styled-components";
import overlay from "../../../Images/banner cover.svg";
const Faq = () => {
  const OurFood = [
    {
      title: "Do you offer any vegan options ?",
      message:
        "In fact, according to a study by Tastewise, a popular industry food data, statistics, and trends platform, this vegan trend is spreading throughout the entire restaurant industry, with a significant increase in demand for vegan dishes by consumers, and therefore increased sales of vegan food for restaurant sources.",
    },
    {
      title: "Do you offer any gluten free options ?",
      message:
        "Several items on our menu are free from ingredients containing gluten. However, due to our kitchen set up, we cannot guarantee that cross-contamination will not occur.",
    },
    {
      title: "Do you offer discount schemes ?",
      message:
        "Popularized by fast-food value meals, combo deals are mutually beneficial to both the restaurant and its customers. Guests want a full meal and most restaurants are happy to oblige with a combination of foods and a drink that are priced in a way that saves the consumer some money while encouraging a larger ticket size. It’s basically a built-in upsell. ",
    },
    {
      title: "Was your menu items hygienic ?",
      message:
        "Good food hygiene means knowing how to avoid the spread of bacteria when cooking, preparing, and storing food. Foods that aren't cooked, stored and handled correctly can cause food poisoning and other conditions.",
    },
    {
      title: "was your food tastey than others ?",
      message:
        "These proteins sit inside the nasal cavity, and when particular molecules activate them or patterns of them, they stimulate neurons within the olfactory epithelial region that tell the brain you are smelling something. If there is a change to one of them such that, for example, it activates a different neuron than it normally would, the smell sensation is also changed.",
    },
  ];
  const [Questions, setQuestions] = useState(OurFood);
  console.log("Questions: ", Questions);

  // delivery
  const Delivery = [
    {
      title: "Do you offer a free delivery ?",
      message:
        "In fact, according to a study by Tastewise, a popular industry food data, statistics, and trends platform, this vegan trend is spreading throughout the entire restaurant industry, with a significant increase in demand for vegan dishes by consumers, and therefore increased sales of vegan food for restaurant sources.",
    },
    {
      title: "Do you delivery on time ?",
      message:
        "Several items on our menu are free from ingredients containing gluten. However, due to our kitchen set up, we cannot guarantee that cross-contamination will not occur.",
    },
    {
      title: "Do you provide carry bags while delivery ?",
      message:
        "Popularized by fast-food value meals, combo deals are mutually beneficial to both the restaurant and its customers. Guests want a full meal and most restaurants are happy to oblige with a combination of foods and a drink that are priced in a way that saves the consumer some money while encouraging a larger ticket size. It’s basically a built-in upsell. ",
    },
    {
      title: "Do you provide cash on delivery ?",
      message:
        "Good food hygiene means knowing how to avoid the spread of bacteria when cooking, preparing, and storing food. Foods that aren't cooked, stored and handled correctly can cause food poisoning and other conditions.",
    },
  ];

  // company
  const Company = [
    {
      title: "How does the Business going on ?",
      message:
        "In fact, according to a study by Tastewise, a popular industry food data, statistics, and trends platform, this vegan trend is spreading throughout the entire restaurant industry, with a significant increase in demand for vegan dishes by consumers, and therefore increased sales of vegan food for restaurant sources.",
    },
    {
      title: "Do you have any Complaints ?",
      message:
        "Several items on our menu are free from ingredients containing gluten. However, due to our kitchen set up, we cannot guarantee that cross-contamination will not occur.",
    },
    {
      title: "Do you need anything to change in menu ?",
      message:
        "Popularized by fast-food value meals, combo deals are mutually beneficial to both the restaurant and its customers. Guests want a full meal and most restaurants are happy to oblige with a combination of foods and a drink that are priced in a way that saves the consumer some money while encouraging a larger ticket size. It’s basically a built-in upsell. ",
    },
    {
      title: "Have you Storing the food ?",
      message:
        "Good food hygiene means knowing how to avoid the spread of bacteria when cooking, preparing, and storing food. Foods that aren't cooked, stored and handled correctly can cause food poisoning and other conditions.",
    },
    {
      title: "Have you taking safety precautions ?",
      message:
        "These proteins sit inside the nasal cavity, and when particular molecules activate them or patterns of them, they stimulate neurons within the olfactory epithelial region that tell the brain you are smelling something. If there is a change to one of them such that, for example, it activates a different neuron than it normally would, the smell sensation is also changed.",
    },
  ];
  return (
    <Wrapper id="#faqpage">
      <MDBCard className="card d-flex justify-content-center align-items-center px-3">
        <h1 className="fw-bolder" data-aos="fade-up" data-aos-duration="2000">
          Frequently Asked <br />
          <span style={{ color: "#35b8be" }}>Questions.</span>
        </h1>
      </MDBCard>
      <MDBContainer className="my-5">
        <div className="row g-2 mx-auto mb-5">
          <div className="col-12 col-sm-3 menu offset-sm-1">
            <MDBBtn
              className="w-100 fw-bolder ls-widest overlaybutton"
              onClick={() => setQuestions(OurFood)}
            >
              Our Food
            </MDBBtn>
          </div>
          <div className="col-12 col-sm-3 menu ">
            <MDBBtn
              className="w-100 fw-bolder ls-widest overlaybutton"
              onClick={() => setQuestions(Delivery)}
            >
              Our Delivery
            </MDBBtn>
          </div>
          <div className="col-12 col-sm-3 menu ">
            <MDBBtn
              className="w-100 fw-bolder ls-widest overlaybutton"
              onClick={() => setQuestions(Company)}
            >
              Our Company
            </MDBBtn>
          </div>
        </div>

        {/* frequently asked question accordions */}

        {Questions.map((item, index) => {
          return (
            <MDBAccordion initialActive={0} key={index}>
              <MDBAccordionItem
                className="text-start"
                collapseId={index + 1}
                headerTitle={
                  <>
                    <MDBIcon fas icon="question-circle" /> &nbsp; {item?.title}
                  </>
                }
              >
                {item?.message}
              </MDBAccordionItem>
            </MDBAccordion>
          );
        })}
      </MDBContainer>
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
      text-shadow: 0px 1px, 1px 0px, 1px 1px;
      font-size: clamp(2rem, 12vw, 4rem);
    }
    .menu {
      max-width: 100%;
    }
  }
`;
export default Faq;
