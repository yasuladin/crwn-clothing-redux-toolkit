import { createSlice } from '@reduxjs/toolkit';

const INITIAL_STATE = {
  currentUser: null, // uid, email, などをプロパティにもつUserオブジェクト
};

export const userSlice = createSlice({
  name: 'user',
  initialState: INITIAL_STATE,
  reducers: {
    setCurrentUser(state, action) {
      state.currentUser = action.payload;
    }
  }
})

export const {setCurrentUser} = userSlice.actions;

export const userReducer = userSlice.reducer;
