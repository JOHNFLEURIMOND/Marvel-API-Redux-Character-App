export const MARVEL_LOADING = "MARVEL_LOADING";
export const MARVEL_FAIL = "MARVEL_FAIL";
export const MARVEL_SUCCESS = "MARVEL_SUCCESS";

export type MarvelType = {
  bio: MarvelCharacterBio[],
  thumbnail: MarvelCharacterThumbnail,
  comics: MarvelCharactersComics[]
}

export type MarvelCharacterBio = {
    name: string
    description: string
}

export type MarvelCharacterThumbnail = {
  thumbnail: {
    path: string
    extension: string
  }
}

export type MarvelCharactersComics = {
  comics: {
    items: {
        resourceURI: string
        name: string
    }
  }
}

export interface MarvelLoading {
  type: typeof MARVEL_LOADING
}

export interface MarvelFail {
  type: typeof MARVEL_FAIL
}

export interface MarvelSuccess {
  type: typeof MARVEL_SUCCESS,
  payload: MarvelType
}
  
export type MarvelDispatchTypes = MarvelLoading | MarvelFail | MarvelSuccess