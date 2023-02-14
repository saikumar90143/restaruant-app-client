import React from "react";
import styled from "styled-components";
import Banner1 from "./Banner1";
import Banner2 from "./Banner2";
import { MDBContainer } from "mdb-react-ui-kit";
import HowItWorks from "./HowItWorks";
import SeeFAQ from "./SeeFAQ";
import CallOurStore from "./CallOurStore";
import Table from "./Table";
import BrowseMenu from "./BrowseMenu";

const Home = () => {
  return (
    <>
      <Wrapper id="#homepage">
        {/* banner1 */}
        <Banner1 />
        <MDBContainer>
          {/* banner2 */}
          <Banner2 />
          {/* how it works */}
          <HowItWorks />
          {/* menu items */}
          <BrowseMenu />
          {/* see FAQ */}
          <SeeFAQ />
          {/* call to store */}
          <CallOurStore />
          {/* table image */}
          <Table />
        </MDBContainer>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.section``;
export default Home;
