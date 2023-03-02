import { RootState } from '@/redux/makeStore';
import { createSlice } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";

// Type for our state
export interface AuthState {
  authState: boolean;
}

// Initial state
const initialState: AuthState = {
  authState: false,
};

// Actual Slice
export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    // Action to set the authentication status
    setAuthState(state, action) {
      state.authState = action.payload;
    },
  },

  // Special reducer for hydrating the state. Special case for next-redux-wrapper
  extraReducers: (build) => {
    build.addCase('auth', (state, action: any) => {
      return {
        ...state,
        ...action.payload.auth
      }
    })
    // [HYDRATE]: (state, action) => {
    //   return {
    //     ...state,
    //     ...action.payload.auth,
    //   };
    // },
  },
});

export const { setAuthState } = authSlice.actions;

export const selectAuthState = (state: RootState) => state.auth.authState;

export default authSlice.reducer;