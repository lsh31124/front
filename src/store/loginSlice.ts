import { createSlice, PayloadAction } from '@reduxjs/toolkit'

const initialState = {
  email: null as string | null,
  isLogged: false as boolean,
}

const loginSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setLogin(state, action: PayloadAction<string>): void {
      state.isLogged = true
      state.email = action.payload
    },
    setLogout(state): void {
      state.isLogged = false
      state.email = null
    },
  },
})

export default loginSlice
export const { setLogin, setLogout } = loginSlice.actions
