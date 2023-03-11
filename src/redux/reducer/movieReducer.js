import { AllMOVIES } from "../type/moviesType"; 

const intialValue = { movies: [], pageCount: 0 };

export const movieReducer = (state = intialValue, action) => {
  switch (action.type) {
    case AllMOVIES:
      return { movies: action.data , pageCount: action.pages};
    default:
      return state;
  }
};


