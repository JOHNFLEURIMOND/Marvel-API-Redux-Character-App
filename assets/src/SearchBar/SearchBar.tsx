import React, { useState } from "react";
import { css } from "@emotion/core";
import styled from "@emotion/styled";
import { Animated } from "react-animated-css";
import shouldForwardProp from "@styled-system/should-forward-prop";
import { space, flexbox, typography } from "styled-system";
import { Container } from "semantic-ui-react";
import { Header } from "../Header";
import { useDispatch, useSelector } from "react-redux";
import { RootStore } from "../../Store";
import { GetMarvelCharacter } from "../actions/MarvelActions";

import { fleurimondColors } from "../theme";

const baseBannerStyles = css({
  boxSizing: "border-box",
  minWidth: 0,
  fontSize: "1rem",
  color: fleurimondColors.black,
  lineHeight: "normal",
  fontWeight: 600,
  margin: 0,
  padding: 0,
  height: "70vw",
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

  ".leftHalf": {
    width: "50%",
    display: "inline-block",
  },
  ".rightHalf": {
    width: "50%",
    display: "inline-block",
  },
  "*": {
    fontFamily: "Montserrat, sans-serif",
  },
});

const SearchBar = (props): JSX.Element => {
  const dispatch = useDispatch();
  const [marvelCharacterName, setMarvelCharacterName] = useState("");
  const marvelState = useSelector((state: RootStore) => state.marvelCharacter);
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) =>
    setMarvelCharacterName(event.target.value);
  const handleSubmit = () => dispatch(GetMarvelCharacter(marvelCharacterName));

  {
    console.log("marvelState.marvelCharacter:  ", marvelState);
  }
  return (
    <Container {...props}>
      <Animated
        animationInDelay={0}
        animationIn="slideInUp"
        animationOut="slideOutDown"
        isVisible
      >
        <div className="leftHalf">
          <Header className="BannerHeader" as="h1" pt={200} pl={100}>
            Marvel
          </Header>
          <Header className="BannerHeader2" as="h2" pt={50} pl={100}>
            Characters
          </Header>
        </div>

        <div className="rightHalf">
          <Container {...props}>
            <div className="    ">
              <input onChange={handleChange} />
              <button type="submit" onClick={handleSubmit}>
                submit
              </button>
              {marvelState.marvelCharacter && (
                <div>
                  {marvelState.marvelCharacter.bio.map((results) => {
                    console.log("{results}", results);
                    return (
                      <>
                        <p>{results.name}</p> <p>{results.description}</p>
                      </>
                    );
                  })}
                </div>
              )}
            </div>
          </Container>
        </div>
      </Animated>
    </Container>
  );
};

const SearchBarWithStyle = styled(SearchBar, {
  shouldForwardProp,
})(baseBannerStyles, space, flexbox, typography);

export default SearchBarWithStyle;
