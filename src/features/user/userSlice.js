import { createSlice } from '@reduxjs/toolkit'
// Slice
const initialUser = localStorage.getItem('user')
  ? JSON.parse(localStorage.getItem('user'))
  : null

export const slice = createSlice({
  name: 'user',
  initialState: {
    user: initialUser,
  },
  reducers: {
    loginSuccess: (state, action) => {
      state.user = action.payload;
    },
    logoutSuccess: (state, action) =>  {
      state.user = null;
    },
  },
});
export default slice.reducer
