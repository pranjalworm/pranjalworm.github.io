import { createSlice } from "@reduxjs/toolkit"

// Slice
const themeSlice = createSlice({
  name: 'theme',
  initialState: false,
  reducers: {
    setLightTheme: state => {
      return state = false
    },
    setDarkTheme: state => {
      return state = true
    }
  }
})

// Actions
export const { setLightTheme, setDarkTheme } = themeSlice.actions

// Reducers
export default themeSlice.reducer