import { Dispatch } from "redux";
import md5 from "js-md5";
import uid2 from "uid2";
import axios from 'axios';
import {
  MARVEL_FAIL,
  MARVEL_LOADING,
  MARVEL_SUCCESS,
  MarvelDispatchTypes,
} from "./MarvelActionsTypes";

const apikeyPublic = "[REMOVED_MARVEL_API_CREDENTIAL]";
const apikeyPrivate = "[REMOVED_MARVEL_API_CREDENTIAL]";

export const GetMarvelCharacter = (characters: string) => async (dispatch: Dispatch<MarvelDispatchTypes>) => {
  try {
    dispatch({
      characters,
      type: MARVEL_LOADING
    })
    let timeStamp = uid2(8);
    let hash = md5(timeStamp + apikeyPrivate + apikeyPublic);
    const limit = 100;
    const apiUrl = `http://gateway.marvel.com/v1/public/characters?name=${characters}&ts=${timeStamp}&apikey=[REMOVED_MARVEL_API_CREDENTIAL]&hash=${hash}&orderBy=name&limit=${limit}`;
    const res = await axios.get(apiUrl);
    console.log(res.data)
    dispatch({
      type: MARVEL_SUCCESS,
      payload: res.data
    })

  } catch (e) {
    dispatch({
      type: MARVEL_FAIL
    })
  }
};