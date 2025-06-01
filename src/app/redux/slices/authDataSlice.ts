import { createSlice, type PayloadAction } from '@reduxjs/toolkit'

interface IAuthDataState {
  id: number
  email: string
  username: string
  bio?: string
  image: string
  token: string
}

const authDataState: IAuthDataState = {
  id: 0,
  email: '',
  username: '',
  bio: '',
  image: '',
  token: '',
}

const authDataSlice = createSlice({
  name: 'authData',
  initialState: authDataState,
  reducers: {
    setAuthData: (state, action: PayloadAction<IAuthDataState>) => {
      localStorage.setItem('userData', JSON.stringify(action.payload))
      const { id, email, username, bio, image, token } = action.payload
      state.id = id
      state.email = email
      state.username = username
      state.bio = bio
      state.image = image
      state.token = token
    },
    clearAuthData: (state) => {
      localStorage.removeItem('userData')
      state.id = 0
      state.email = ''
      state.username = ''
      state.bio = ''
      state.image = ''
      state.token = ''
    },
  },
})

export const { setAuthData, clearAuthData } = authDataSlice.actions
export const authDataReducer = authDataSlice.reducer //default export it
