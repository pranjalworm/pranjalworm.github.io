import { setDarkTheme, setLightTheme } from "../../redux/reducers"

const ToggleButton = (label: string, defaultValue: boolean, toggleOnCallback: Function,
  toggleOffCallback: Function) => {

  const toggleChangeHandler = (event: any) => {

    const value = event.target.checked

    console.log('toggle button', value)
    console.log(event.target)

    value ? setLightTheme() : setDarkTheme()

  }

  return (
    <div className="control">

      <span>{label}</span>

      <label className="switch">

        {
          defaultValue ?
            <input type="checkbox" id="toggleButton" onChange={(event) => toggleChangeHandler(event)} />
            :
            <input type="checkbox" checked id="toggleButton" onChange={(event) => toggleChangeHandler(event)} />
        }

        <div className="slider round"></div>
      </label>

    </div>
  )
}

export default ToggleButton