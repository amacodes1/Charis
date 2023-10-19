import { createSlice } from "@reduxjs/toolkit";

export const sliderSlice = createSlice({
  name: "slider",
  initialState: {
    data: [],
    currentIndex: 0,
    length: 4,
  },
  reducers: {
    setData(state, action) {
      state.data = action.payload;
    },

    nextSlide: (state) => {
      state.currentIndex = (state.currentIndex + 1) % state.data.length;
    },

    prevSlide: (state) => {
      state.currentIndex =
        (state.currentIndex - 1 + state.data.length) % state.data.length;
    },

    dotSlide(state, action) {
      state.currentIndex = action.payload;
    },
  },
});

export const { setData, nextSlide, prevSlide, dotSlide } = sliderSlice.actions;
export default sliderSlice.reducer;
