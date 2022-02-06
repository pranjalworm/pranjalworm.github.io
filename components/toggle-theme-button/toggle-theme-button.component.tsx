import { useDispatch, useSelector } from 'react-redux'
import { selectTheme } from '../../redux/selectors'
import { setDarkTheme, setLightTheme } from '../../redux/themeSlice'
import { DarkModeSwitch } from 'react-toggle-dark-mode'

const ToggleThemeButton = () => {

  const dispatch = useDispatch()

  const isDarkModeOn = useSelector(selectTheme)

  const toggleChangeHandler = (value: boolean) => {

    value ? dispatch(setDarkTheme()) : dispatch(setLightTheme())
  }

  if (isDarkModeOn) {
    document.querySelector('html')?.classList.add('dark')
  } else {
    document.querySelector('html')?.classList.remove('dark')
  }

  return (
    <div>

      <DarkModeSwitch
        checked={isDarkModeOn}
        onChange={toggleChangeHandler}
        size={35} />

    </div>
  )
}

export default ToggleThemeButton