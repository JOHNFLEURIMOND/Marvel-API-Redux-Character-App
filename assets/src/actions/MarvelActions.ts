import { Dispatch } from "redux";
import axios from 'axios';
import {
  MARVEL_FAIL,
  MARVEL_LOADING,
  MARVEL_SUCCESS,
  MarvelDispatchTypes,
} from "./MarvelActionsTypes";

export const GetMarvelCharacter =
  (characters: string) =>
  async (dispatch: Dispatch<MarvelDispatchTypes>) => {
    try {
      dispatch({
        characters,
        type: MARVEL_LOADING
      });

      const res = await axios.get('/backend/api', {
        params: {
          characters
        }
      });

      dispatch({
        type: MARVEL_SUCCESS,
        payload: res.data.data
      });
    } catch (error) {
      dispatch({
        type: MARVEL_FAIL
      });
    }
  };