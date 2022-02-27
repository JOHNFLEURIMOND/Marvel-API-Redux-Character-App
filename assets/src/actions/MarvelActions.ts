import { Dispatch } from "redux";
import md5 from "js-md5";
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
    const timeStamp = Number(new Date());;
    const hash = md5.create();
    hash.update(timeStamp + apikeyPrivate + apikeyPublic)
    const limit = 100;
    const apiUrl = `http://gateway.marvel.com/v1/public/characters?name=${characters}&ts=${timeStamp}&apikey=[REMOVED_MARVEL_API_CREDENTIAL]&hash=${hash}&orderBy=name&limit=${limit}`;
    const res = await axios.get(apiUrl);
    console.log("res.data: ", res.data.data)
    dispatch({
      type: MARVEL_SUCCESS,
      payload: res.data.data
    })

  } catch (e) {
    dispatch({
      type: MARVEL_FAIL
    })
  }
};