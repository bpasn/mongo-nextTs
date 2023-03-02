import { authSlice } from './../fratures/authReducer';
import { combineReducers } from '@reduxjs/toolkit';

export const combindReducer = combineReducers({
    [authSlice.name]: authSlice.reducer
})