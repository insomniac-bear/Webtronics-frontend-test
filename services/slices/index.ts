import { combineReducers } from 'redux';
import { reviewSlice } from './review';
import { contactSlice } from './contact';

export const rootReducer = combineReducers({
  review: reviewSlice.reducer,
  contact: contactSlice.reducer,
})
