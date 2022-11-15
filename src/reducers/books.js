import { CREATE_BOOK, REMOVE_BOOK } from "./../actions/index";

const initialState = [];
export const bookReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_BOOK:
      return [...state, action.payload];
    case REMOVE_BOOK:
      return state.filter((book) => book.id !== action.payload.id);
    default:
      return state;
<<<<<<< HEAD
  };
=======
  }
>>>>>>> db897a2a6cd7dd0a09466096f9f3d1fff1a8a632
};
