import { combineReducers, configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import userReducer from '../features/user/userSlice';


const reducer = combineReducers({
  user: userReducer, 
  counter: counterReducer,
})

export const store = configureStore({
  reducer,

});
