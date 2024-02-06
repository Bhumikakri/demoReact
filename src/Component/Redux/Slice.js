import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  savedCodes: [],
  codeDetails: {
    htmlCode: "<div>Hello, World!</div>",
    cssCode: "body { background-color: lightblue; }",
    jsCode: "",
    codeName: "",
  },
};

const codeSlice = createSlice({
  name: 'code',
  initialState,
  reducers: {
    setSavedCodes: (state, action) => {
      state.savedCodes = action.payload;
    },
    setCodeDetails: (state, action) => {
      state.codeDetails = action.payload;
    },
  },
});

export const { setSavedCodes, setCodeDetails } = codeSlice.actions;

export default codeSlice.reducer;
