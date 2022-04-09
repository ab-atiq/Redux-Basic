export const addToReadingList = (payload) => {
  return {
    type: "Add_To_Reading_List",
    payload,
  };
};

export const removeToReadingList = (payload) => {
  return {
    type: "Remove_To_Reading_List",
    payload,
  };
};

export const finishedFromReadingList = (payload) => {
  return {
    type: "Finished_From_Reading_List",
    payload,
  };
};
