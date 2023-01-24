import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { TFormData, formApi } from '../form-api';

interface IInitialState {
  data: TFormData,
  status: 'idle'| 'loading' | 'succeeded' | 'failed',
  error: string | undefined,
}

const initialState: IInitialState = {
  data: {
    name: '',
    phone: '',
    email: '',
  },
  status: 'idle',
  error: undefined,
};

export const sendForm = createAsyncThunk('contact/sendForm', async (data: TFormData) => {
  const response = await formApi(data);
  return response;
});

export const contactSlice = createSlice({
  name: 'contact',
  initialState,
  reducers: {

  },
  extraReducers(builder) {
    builder
      .addCase(sendForm.pending, (state) => {
        state.status = 'loading'
      })
      .addCase(sendForm.fulfilled, (state) => {
        state = {
          ...initialState,
          status: 'idle',
        };
      })
      .addCase(sendForm.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
  }
});
