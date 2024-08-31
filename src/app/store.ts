import { Action, configureStore, ThunkAction } from "@reduxjs/toolkit";
import { AppSlice } from "./slices/AppSlice";
import { PokemonSlice } from "./slices/PokemonSlice";

export const store = configureStore({
  reducer: {
    app: AppSlice.reducer,
    pokemo: PokemonSlice.reducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
