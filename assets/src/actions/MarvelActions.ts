import { Dispatch } from "redux";
import {
  MARVEL_FAIL,
  MARVEL_LOADING,
  MARVEL_SUCCESS,
  MarvelDispatchTypes,
} from "./MarvelActionsTypes";
import md5 from "js-md5";
import uid2 from "uid2";


export const GetMarvelCharacter = (Character: string) => async (dispatch: Dispatch<MarvelDispatchTypes>) => {
  try {
    dispatch({
      type: MARVEL_LOADING
    })
    const apikeyPublic = "[REMOVED_MARVEL_API_CREDENTIAL]";
    const apikeyPrivate = "[REMOVED_MARVEL_API_CREDENTIAL]";
console.log(Character);
let timeStamp = uid2(8);
let hash = md5(timeStamp + apikeyPrivate + apikeyPublic);
const api_url = `http://gateway.marvel.com/v1/public/characters?ts=${timeStamp}&apikey=${apikeyPublic}&hash=${hash}&orderBy=name&limit=${100}`;
const fetch_response = await fetch(api_url)   
const json = await fetch_response.json();
console.log(Character);
    dispatch({
      type: MARVEL_SUCCESS,
      payload: json.data
    })

  } catch (e) {
    dispatch({
      type: MARVEL_FAIL
    })
  }
};