import React from "react";
import styled from "styled-components";

const StyledFooter = styled.footer`
  padding: 20px 0;
  background-color: gray;
  div {
    display: flex;
    justify-content: space-between;
  }
  p {
    color: #fff;
    opacity: 0.5;
  }
`;

const Footer = () => {
  return (
    <StyledFooter>
      <div className="container">
        <p>All rights reserved © 2021</p>
        <p>made by Denys Danylko</p>
      </div>
    </StyledFooter>
  );
};

export default Footer;
