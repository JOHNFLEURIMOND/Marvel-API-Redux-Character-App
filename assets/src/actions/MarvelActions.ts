import { Dispatch } from "redux";
import {
  MARVEL_FAIL,
  MARVEL_LOADING,
  MARVEL_SUCCESS,
  MarvelDispatchTypes,
} from "./MarvelActionsTypes";

export const GetMarvelCharacter = (Character: string) => async (dispatch: Dispatch<MarvelDispatchTypes>) => {
  try {
    dispatch({
      type: MARVEL_LOADING
    })
  
const api_url = `http://localhost:8080/backend/api`;
const fetch_response = await fetch(api_url)   
const json = await fetch_response.json();
console.log(Character);
console.log(json.data);
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