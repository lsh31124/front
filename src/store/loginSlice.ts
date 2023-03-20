import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export type LoginState = {
  token: string | null
  error: boolean | null
}

const initialState = {
  token: null as string | null,
  error: false,
}

const loginSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    login(state: LoginState, action: PayloadAction<string>) {
      state.token = action.payload
    },
    logoutAction(state: LoginState) {
      state.token = null
    },
    fetchDataFailure(state, action: PayloadAction<boolean>) {
      state.token = null
      state.error = true
    },
  },
})

export default loginSlice
export const { login, logoutAction, fetchDataFailure } = loginSlice.actions
