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
      console.log(state);
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

// nextSlide(state, action) {
//       console.log("action", action.payload);
//       console.log("state", state);
//       state.value =
//         action.payload > state.getData.length - 1 ? 0 : action.payload;
//     },

//     prevSlide(state, action) {
//       state.value =
//         action.payload < 0 ? state.getData.length - 1 : action.payload;
//     },

//     dotSlide(state, action) {
//       const slide = action.payload;
//       console.log("dot", slide);
//       state.value = slide;
//     },
