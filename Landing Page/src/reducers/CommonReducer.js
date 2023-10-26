const initialState = {
  breeds: [],
  favourites: [],
  images: [],
};

const CommonReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_BREEDS": {
      return { ...state, breeds: action.payload };
    }
    case "SET_FAVOURITES": {
      return { ...state, favourites: [...state.favourites, action.payload] };
    }
    case "DEL_FAVOURITES": {
      return { ...state, favourites: action.payload };
    }

    case "SET_IMAGES": {
      return { ...state, images: action.payload };
    }

    default:
      return state;
  }
};
export default CommonReducer;
