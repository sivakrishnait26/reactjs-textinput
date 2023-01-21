import {Component} from 'react'
import './index.css'

class TextInput extends Component {
  state = {
    isButtonClicked: false,
    userInput: '',
  }

  SaveButton = () => {
    this.setState(prevState => ({
      isButtonClicked: !prevState.isButtonClicked,
    }))
  }

  EditButton = () => {
    this.setState(prevState => ({
      isButtonClicked: !prevState.isButtonClicked,
    }))
  }

  UserInput = event => {
    this.setState({
      userInput: event.target.value,
    })
  }

  render() {
    const {userInput, isButtonClicked} = this.state
    return (
      <div className="container">
        <div className="text-container">
          <h1 className="text-heading">Editable Text Input</h1>
          {isButtonClicked ? (
            <div className="para">
              <p className="di-text">{userInput}</p>
              <button
                type="button"
                className="save-button"
                onClick={this.EditButton}
              >
                Edit
              </button>
            </div>
          ) : (
            <div className="save-container">
              <input
                className="input-box"
                type="text"
                value={userInput}
                onChange={this.UserInput}
              />
              <button
                type="button"
                className="save-button"
                onClick={this.SaveButton}
              >
                Save
              </button>
            </div>
          )}
        </div>
      </div>
    )
  }
}

export default TextInput
