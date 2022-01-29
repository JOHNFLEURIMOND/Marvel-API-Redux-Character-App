import {combineReducers} from "redux";
import MarvelReducer from "./MarvelReducer";

const RootReducer = combineReducers({
  marvelCharacter: MarvelReducer
});

export default RootReducer