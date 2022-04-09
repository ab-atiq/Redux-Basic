import books from "../../fakeData/books.json";

const initialState = {
  discover: books,
  readingList: [],
  finishedList: [],
};

export function bookReducer(state = initialState, action) {
  // using if else statement
  // if (action.type === "Add_To_Reading_List") {
  //     const newState = [...state, action.payload];
  //     return newState;
  // }
  // else if (action.type === "Remove_To_Reading_List") {
  //     const newState = state.filter((book) => book.id !== action.payload);
  //     return newState;
  // }
  // else {
  //     return state;
  // }

  // using switch statement
  switch (action.type) {
    case "Add_To_Reading_List": {
      const newState = {
        ...state,
        readingList: [...state.readingList, action.payload],
      };
      return newState;
    }
    case "Remove_To_Reading_List": {
      const newState = {
        ...state,
        readingList: state.readingList.filter(
          (book) => book.id !== action.payload
        ),
      };
      return newState;
    }
    case "Finished_From_Reading_List": {
      const newState = {
        ...state,
        readingList: state.readingList.filter(
          (book) => book.id !== action.payload.id
        ),
        finishedList: [...state.finishedList, action.payload],
      };
      return newState;
    }
    default:
      return state;
  }
}
