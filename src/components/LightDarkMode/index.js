import {Component} from 'react'
import './index.css'

class LightDarkMode extends Component {
  state = {
    isDarkMode: true,
  }

  handleModeToggle = () => {
    this.setState(prevState => ({
      isDarkMode: !prevState.isDarkMode,
    }))
  }

  render() {
    const {isDarkMode} = this.state
    const themeClass = isDarkMode ? 'dark' : 'light'
    const buttonLabel = isDarkMode ? 'Light Mode' : 'Dark Mode'
    return (
      <div className={`div-container ${themeClass}`}>
        <div className="main-container">
          <h1 className="heading">Click to Change Mode</h1>
          <button type="button" className="btn" onClick={this.handleModeToggle}>
            {buttonLabel}
          </button>
        </div>
      </div>
    )
  }
}
export default LightDarkMode
