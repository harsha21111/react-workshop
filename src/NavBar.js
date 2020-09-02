import React from "react";
import { Link } from "@reach/router";
import { css, keyframes } from "@emotion/core";
import colors from "./colors";

const Spin = keyframes`
  to {
    transform: rotate(360deg);
  }
`;
const NavBar = () => (
  <header
    css={css`
      background-color: ${colors.dark};
      position: sticky;
      top: 0;
      z-index: 10;
    `}
  >
    <Link to="/">Adopt Me!</Link>
    <span
      css={css`
        display: inline-block;
        animation: 10s ${Spin} linear infinite;
        font-size: 60px;
        &:hover {
          animation: 10s ${Spin} linear infinite reverse;
          text-decoration: underline;
        }
      `}
      role="img"
      aria-label="logo"
    >
      🐩
    </span>
  </header>
);

export default NavBar;
