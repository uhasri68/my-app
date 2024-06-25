import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name:"gpt",
    initialState: {
      showGptSearch: false  // more accurate if it tracks boolean status
    },
    reducers: {
      toggleGptSearch : (state) => {
        state.showGptSearch = !state.showGptSearch;
      }
    }
});

export const { toggleGptSearch } = gptSlice.actions;

export default gptSlice.reducer;