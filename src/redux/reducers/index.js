import { combineReducers } from "@reduxjs/toolkit";
import {
  GET_ROCK,
  GET_POP,
  GET_HIPHOP,
  GET_MUSIC,
  GET_ALBUM,
  GET_ARTIST,
  TRACK_MOUNT,
  ADD_FAVS,
  DEL_FAVS,
} from "../actions";

// HOME
const HomeState = {
  //Slices
  selections: {
    rockArtists: [
      "queen",
      "u2",
      "thepolice",
      "eagles",
      "thedoors",
      "oasis",
      "thewho",
      "bonjovi",
    ],
    popArtists: [
      "maroon5",
      "coldplay",
      "onerepublic",
      "jamesblunt",
      "katyperry",
      "arianagrande",
    ],
    hiphopArtists: ["eminem", "snoopdogg", "lilwayne", "drake", "kanyewest"],
  },
  selectionsData: {
    rockData: [],
    popData: [],
    hiphopData: [],
  },
  searchData: {
    data: [],
  },
};
const HomeReducer = (state = HomeState, action) => {
  switch (action.type) {
    case GET_MUSIC:
      return {
        ...state,
        searchData: {
          data: action.payload,
        },
      };
    case GET_ROCK:
      return {
        ...state,
        selectionsData: {
          ...state.selectionsData,
          rockData: [...state.selectionsData.rockData, action.payload],
        },
      };
    case GET_POP:
      return {
        ...state,
        selectionsData: {
          ...state.selectionsData,
          popData: [...state.selectionsData.popData, action.payload],
        },
      };
    case GET_HIPHOP:
      return {
        ...state,
        selectionsData: {
          ...state.selectionsData,
          hiphopData: [...state.selectionsData.hiphopData, action.payload],
        },
      };

    default:
      return state;
  }
};

// ALBUM
const AlbumState = {
  album: {
    data: false,
  },
};
const AlbumReducer = (state = AlbumState, action) => {
  switch (action.type) {
    case GET_ALBUM:
      return {
        ...state,
        album: {
          data: action.payload,
        },
      };
    default:
      return state;
  }
};

// ARTIST
const ArtistState = {
  artist: {
    data: {},
  },
};
const ArtistReducer = (state = ArtistState, action) => {
  switch (action.type) {
    case GET_ARTIST:
      return {
        ...state,
        artist: {
          data: action.payload,
        },
      };
    default:
      return state;
  }
};

// PLAYER
const PlayerState = {
  selectedTrack: null,
  favs: [],
};
const PlayerReducer = (state = PlayerState, action) => {
  switch (action.type) {
    case TRACK_MOUNT:
      return {
        ...state,
        selectedTrack: action.payload,
      };
    case ADD_FAVS:
      return {
        ...state,
        favs: [...state.favs, action.payload],
      };
    case DEL_FAVS:
      return {
        ...state,
        favs: state.favs.filter((el) => el !== action.payload),
      };

    default:
      return state;
  }
};

const mainReducer = combineReducers({
  home: HomeReducer,
  album: AlbumReducer,
  artist: ArtistReducer,
  player: PlayerReducer,
});

export default mainReducer;
