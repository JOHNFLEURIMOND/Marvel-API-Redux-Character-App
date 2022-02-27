import React, { useState } from "react";
import { css } from "@emotion/core";
import styled from "@emotion/styled";
import { Animated } from "react-animated-css";
import shouldForwardProp from "@styled-system/should-forward-prop";
import { space, flexbox, typography } from "styled-system";
import { Container } from "semantic-ui-react";
import { Card } from "../Card";
import { useDispatch, useSelector } from "react-redux";
import { RootStore } from "../../Store";
import { GetMarvelCharacter } from "../actions/MarvelActions";
import md5 from "js-md5";
import uid2 from "uid2";
import { Button, Input, Icon, Image } from 'semantic-ui-react';
import { Header } from "../Header";

import { fleurimondColors } from "../theme";

const baseBannerStyles = css({
  boxSizing: "border-box",
  minWidth: 0,
  fontSize: "1rem",
  color: fleurimondColors.black,
  lineHeight: "normal",
  fontWeight: 600,
  padding: 0,
  height: "100%",
  width: "100%",
  backgroundColor: fleurimondColors.white,

  img: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "right",
    display: "block",
    width: "100%",
    height: "auto",
    borderRadius: "inherit"
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
  ".searchbar": {
    display: "flex",
    width: "100%",
    height: '700px',
    boxSizing: 'border-box',
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
    padding: "2rem",
  },
  ".innie": {
    display: "flex",
    boxSizing: 'border-box',
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
  },
  "*": {
    fontFamily: "Montserrat, sans-serif",
  },
});



const SearchBar = (props): JSX.Element => {
  const dispatch = useDispatch();
  const [marvelCharacterName, setMarvelCharacterName] = useState("");
  const marvelState = useSelector((state: RootStore) => state.marvelCharacter);
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => setMarvelCharacterName(event.target.value);
  const handleSubmit = () => dispatch(GetMarvelCharacter(marvelCharacterName));
  let UID = uid2(8);
  let keyNumber = md5(UID);
  {
    console.log("marvelState.marvelCharacter:  ", marvelState.marvelCharacter);
  }


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
      <Header as="h1">
        Character
      </Header>
      <div className="innie">
        <Input size="large" onChange={handleChange} />
        <Button
          variant="primary"
          aria-label="Primary Small Button"
          type="submit"
          onClick={handleSubmit}>
          submit
        </Button>
      </div>
      <div className="searchbar">
        {marvelState.marvelCharacter && (
          <div>
            {marvelState.marvelCharacter.results.map((result) => {
              console.log("{results}", result);
              return (
                <div key={keyNumber}>
                  <Animated
                    animationInDelay={0}
                    animationIn="fadeInLeft"
                    animationOut="fadeOutRight"
                    isVisible
                  >
                    <Card>
                      <Card.Content>
                        <Image src={result.thumbnail.path + "." + result.thumbnail.extension} wrapped ui={true} />
                      </Card.Content>
                      <Card.Content>
                        <Card.Header>{result.name}</Card.Header>
                        <Card.Description>
                          {result.description}
                        </Card.Description>
                      </Card.Content>
                      <Card.Content extra>
                        <a>
                          <Icon name='user' />
                          {result.series.available} Series
                        </a>
                      </Card.Content>
                    </Card>
                  </Animated>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </Container >
  );
};

const SearchBarWithStyle = styled(SearchBar, {
  shouldForwardProp,
})(baseBannerStyles, space, flexbox, typography);

export default SearchBarWithStyle;
