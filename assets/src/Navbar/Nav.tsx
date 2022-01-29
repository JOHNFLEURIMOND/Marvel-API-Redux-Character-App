import React from "react";
import { Link } from "react-router-dom";
import { css } from "@emotion/core";
import styled from "@emotion/styled";
import shouldForwardProp from "@styled-system/should-forward-prop";
import { space, flexbox, typography } from "styled-system";
import { Container } from "semantic-ui-react";

import { fleurimondColors } from "../theme";

const baseNavStyles = css({
  boxSizing: "border-box",
  fontSize: "20px",
  height: "10vw",
  color: fleurimondColors.leapingLemon,
  textAlign: "center",
  width: "100vw",
  backgroundColor: fleurimondColors.buttons.darkBlue,
  minHeight: "5vh",
  display: "flex",
  padding: "20px",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  left: "0",
  top: "0",
  overflowX: "hidden",
  zIndex: 100,

  ".App-header-nav ": {
    fontSize: "20px",
    height: "55px",
    color: fleurimondColors.leapingLemon,
    textAlign: "center",
    padding: "20px",
    position: "absolute",
    left: "0",
    top: "0",
  },
  li: {
    listStyle: "none",
  },
  ul: {
    width: "52vw",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    margin: 0,
    padding: "1rem",
  },

  a: {
    color: fleurimondColors.leapingLemon,
    textDecoration: "none",
  },

  ".BannerHeader": {
    width: "50%",
  },
  ".BannerHeader2": {
    width: "50%",
  },
  "*": {
    margin: 0,
    padding: 0,
    fontFamily: "Montserrat, sans-serif",
  },
});

const JFNav = (props): JSX.Element => {
  return (
    <Container className="App-header-nav" {...props}>
      <header>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/CharacterPage">Pokemon Movesets</Link>
          </li>
          <li>
            <Link to="/SignUp">About Us</Link>
          </li>
        </ul>
      </header>
    </Container>
  );
};

const JFNavWithStyle = styled(JFNav, {
  shouldForwardProp,
})(baseNavStyles, space, flexbox, typography);

export default JFNavWithStyle;
