/**
 * LayoutWrapper is include in Layout
 * with this, LayoutWrapper is included in every page
 *
 * Info:
 * Eufemia Styles are imported in "index.js"
 * But in here we define ".dnb-core-style"
 * With this, we could have Legacy CSS somewhere in the header or footer
 *
 */

import React from "react";
import PropTypes from "prop-types";
import styled from "@emotion/styled";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
`;
const WrapperInner = styled.div`
  /* for large screesn */
  width: 100%; /* apr. the same as 60rem */
  max-width: 60rem; /* same as 960px */
  padding: 0 1rem;

  /* for small screesn */
  @media (max-width: 40em) {
    padding: 0;
  }
`;
const Main = styled.main``;

const LayoutWrapper = ({ children }) => {
  return (
    <Wrapper className="dnb-core-style">
      <WrapperInner>
        <Main>{children}</Main>
      </WrapperInner>
    </Wrapper>
  );
};
LayoutWrapper.propTypes = {
  children: PropTypes.node.isRequired
};

export default LayoutWrapper;
