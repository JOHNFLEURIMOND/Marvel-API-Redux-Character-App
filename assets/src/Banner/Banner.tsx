import React from "react";
import { css } from "@emotion/core";
import styled from "@emotion/styled";
import { Animated } from "react-animated-css";
import shouldForwardProp from "@styled-system/should-forward-prop";
import { space, flexbox, typography } from "styled-system";
import { Container } from "semantic-ui-react";

import { fleurimondColors } from "../theme";

const baseBannerStyles = css({
  boxSizing: "border-box",
  minWidth: 0,
  fontSize: "1rem",
  color: fleurimondColors.black,
  lineHeight: "normal",
  fontWeight: 600,
  margin: 0,
  padding: "0",
  height: "700px",
  width: "100%",
  backgroundColor: fleurimondColors.white,

  img: {
    width: "auto",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "right",
    paddingLeft: "250px",
  },

  ".banner": {
    width: "100%",
    boxSizing: 'border-box',
    backgroundImage: `url("https://terrigen-cdn-dev.marvel.com/content/prod/1x/mi_wallpaper_mas_mob_01.jpg")`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: '100% 100%',
    display: "block",
    height: '50vw',
    overflow: "hidden"
  },

  "*": {
    fontFamily: "Montserrat, sans-serif",
  },
});

const JFBanner = (props): JSX.Element => {
  return (
    <Container {...props}>
      <Animated
        animationInDelay={0}
        animationIn="slideInUp"
        animationOut="slideOutDown"
        isVisible
      >
        <div className="banner">
       
        </div>
      </Animated>
    </Container>
  );
};

const JFBannerWithStyle = styled(JFBanner, {
  shouldForwardProp,
})(baseBannerStyles, space, flexbox, typography);

export default JFBannerWithStyle;
