import { Dispatch } from "redux";
import md5 from "js-md5";
import axios from 'axios';
import {
  MARVEL_FAIL,
  MARVEL_LOADING,
  MARVEL_SUCCESS,
  MarvelDispatchTypes,
} from "./MarvelActionsTypes";

const apikeyPublic = "9d5da9314c00aba0c2c38a73b5070930";
const apikeyPrivate = "849fede62e27affc515cf7711204f6b63585726e";

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
    const apiUrl = `http://gateway.marvel.com/v1/public/characters?name=${characters}&ts=${timeStamp}&apikey=9d5da9314c00aba0c2c38a73b5070930&hash=${hash}&orderBy=name&limit=${limit}`;
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