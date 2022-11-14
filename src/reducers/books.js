import { CREATE_BOOK, REMOVE_BOOK } from "./../actions/index";
import { v4 as uuidv4 } from 'uuid';

export const initialState = [
  {
    id: uuidv4(),
    title: 'Twice',
    category: 'fantasy',
  },
  {
    id: uuidv4(),
    title: 'Harry Potter',
    category: 'fantasy',
  },
];

export const bookReducer = (state = initialState, action) => {
    switch (action.type) {
      case CREATE_BOOK:
        return [...state, action.payload];
      case REMOVE_BOOK:
        return state.filter((book) => book.id !== action.payload.id);
      default:
        return state;
    };
};
