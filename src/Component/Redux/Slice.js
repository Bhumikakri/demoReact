import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  savedCodes: [],
  codeDetails: {
    htmlCode: "<div>Hello, World!</div>",
    cssCode: "body { background-color: lightblue; }",
    jsCode: "",
    codeName: "",
  },
  checked:false,
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
    setCheckeds:(state, action) => {
      state.checked = action.payload
    }
  },
});

export const { setSavedCodes, setCodeDetails, setCheckeds } = codeSlice.actions;

export default codeSlice.reducer;
