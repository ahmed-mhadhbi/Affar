import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../features/auth/authSlice';
import userReducer from '../features/user/userSlice';
import listingReducer from '../features/listings/listingSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    user: userReducer,
    listings: listingReducer,
  },
});