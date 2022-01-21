import { createSlice, configureStore } from '@reduxjs/toolkit'

export const themeSlice = createSlice({
  name: 'theme',
  initialState: {
    darkMode: false
  },
  reducers: {
    setLightTheme: state => {
      state.darkMode = false
    },
    setDarkTheme: state => {
      state.darkMode = true
    }
  }
})

export const { setLightTheme, setDarkTheme } = themeSlice.actions


const store = configureStore({
  reducer: themeSlice.reducer
})


// Can still subscribe to the store
store.subscribe(() => console.log(store.getState()))


// store.dispatch(incremented())
