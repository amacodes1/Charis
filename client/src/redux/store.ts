// import { combineReducers, configureStore } from "@reduxjs/toolkit";
// import {
//   persistStore,
//   persistReducer,
//   FLUSH,
//   REHYDRATE,
//   PAUSE,
//   PERSIST,
//   PURGE,
//   REGISTER,
// } from "redux-persist";
// import storage from "redux-persist/lib/storage";
// import UserSlice from "./userSlice";
// import cartSlice from "./cartSlice";
// import productSlice from "./productSlice";
// import sliderSlice from "./sliderSlice";
// import searchSlice from "./searchSlice";
// import recentlyViewedSlice from "./recentlyViewedSlice";

// const persistConfig = {
//   key: "root",
//   version: 1,
//   storage,
// };

// const rootReducer = combineReducers({
//   user: UserSlice,
//   cart: cartSlice,
//   prod: productSlice,
//   slider: sliderSlice,
//   search: searchSlice,
//   recently: recentlyViewedSlice,
// });

// const persistedReducer = persistReducer(persistConfig, rootReducer);

// export const store = configureStore({
//   reducer: {
//     comb: persistedReducer,
//     // userData: UserDataSlice,
//     // league: leagueSlice,
//   },
//   middleware: (getDefaultMiddleware) =>
//     getDefaultMiddleware({
//       serializableCheck: {
//         ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
//       },
//     }),
// });

// export const persistor = persistStore(store);


import { combineReducers, configureStore } from "@reduxjs/toolkit";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

import userSlice from "./userSlice";
import cartSlice from "./cartSlice";
import productSlice from "./productSlice";
import sliderSlice from "./sliderSlice";
import searchSlice from "./searchSlice";
import recentlyViewedSlice from "./recentlyViewedSlice";

const persistConfig = {
  key: "root",
  version: 1,
  storage,
};

// ✅ Combine all your slices
const rootReducer = combineReducers({
  user: userSlice,
  cart: cartSlice,
  prod: productSlice,
  slider: sliderSlice,
  search: searchSlice,
  recently: recentlyViewedSlice,
});

// ✅ Apply persistence to the entire root reducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

// ✅ Create the store
export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

// ✅ Export the persistor
export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
