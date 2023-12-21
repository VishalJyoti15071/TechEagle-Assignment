import {Component} from 'react'
import {Link} from 'react-router-dom'
import {v4} from 'uuid'
import {FaPlus, FaArrowRight} from 'react-icons/fa'
import PlayerLists from '../PlayerLists'
import './index.css'

class RacingHome extends Component {
  state = {
    inputName: '',
    inputSpeed: '',
    inputStartTime: '',
    registeredList: [],
    nameFocus: false,
    speedFocus: false,
    startTimeFocus: false,
  }

  onBlurName = () => {
    const {inputName} = this.state
    if (inputName.length === 0) {
      this.setState({nameFocus: true})
    }
  }

  onChangeInputName = event => {
    this.setState({inputName: event.target.value, nameFocus: false})
  }

  onBlurSpeed = () => {
    const {inputSpeed} = this.state
    if (inputSpeed.length === 0) {
      this.setState({speedFocus: true})
    }
  }

  onChangeInputSpeed = event => {
    this.setState({inputSpeed: event.target.value, speedFocus: false})
  }

  onBlurStartTime = () => {
    const {inputStartTime} = this.state
    if (inputStartTime.length === 0) {
      this.setState({startTimeFocus: true})
    }
  }

  onChangeInputTime = event => {
    this.setState({inputStartTime: event.target.value, startTimeFocus: false})
  }

  onSubmitAddButton = event => {
    event.preventDefault()
    const {inputName, inputSpeed, inputStartTime, registeredList} = this.state
    if (
      inputName.length !== 0 &&
      inputSpeed.length !== 0 &&
      inputStartTime.length !== 0 &&
      registeredList.length < 10
    ) {
      const addRacer = {
        id: v4(),
        name: inputName,
        speed: inputSpeed,
        startTime: inputStartTime,
      }

      this.setState(prevState => ({
        registeredList: [...prevState.registeredList, addRacer],
        inputName: '',
        inputSpeed: '',
      }))
    }
  }

  onEmptyList = () => (
    <button className="empty-list-container" type="button">
      Empty
    </button>
  )

  render() {
    const {
      inputName,
      inputSpeed,
      inputStartTime,
      registeredList,
      nameFocus,
      speedFocus,
      startTimeFocus,
    } = this.state
    return (
      <div className="app-container">
        <img
          src="https://assets-global.website-files.com/6284afcd3c8fe34dca52d136/62bfd7e69c25897f423bcdac_TechEagle%20new%20logo.svg"
          className="logo-image"
          alt="logo"
        />
        <div className="card-container">
          <div className="left-container">
            <form className="form" onSubmit={this.onSubmitAddButton}>
              <h1 className="runner-heading">RUNNER DETAILS</h1>
              <p className="instruction-para">
                *You can add max 10 participants
              </p>
              <label htmlFor="nameInput" className="label">
                Name
              </label>
              <input
                id="nameInput"
                className="input"
                type="text"
                placeholder="Name"
                onChange={this.onChangeInputName}
                onBlur={this.onBlurName}
                value={inputName}
              />
              {nameFocus === true ? (
                <p className="warning-para">*Name should be entered</p>
              ) : (
                ''
              )}
              <label htmlFor="speedInput" className="label">
                Speed
              </label>
              <input
                id="speedInput"
                className="input"
                type="number"
                placeholder="Speed in km/h"
                onChange={this.onChangeInputSpeed}
                onBlur={this.onBlurSpeed}
                value={inputSpeed}
              />
              {speedFocus === true ? (
                <p className="warning-para">*Speed should be entered</p>
              ) : (
                ''
              )}
              <label htmlFor="startTimeInput" className="label">
                Start Time
              </label>
              <input
                id="startTimeInput"
                className="input"
                type="time"
                placeholder="Name"
                onChange={this.onChangeInputTime}
                onBlur={this.onBlurStartTime}
                value={inputStartTime}
              />
              {startTimeFocus === true ? (
                <p className="warning-para">*Start time should be entered</p>
              ) : (
                ''
              )}
              <button className="button input" type="submit">
                <FaPlus className="plus" /> ADD RUNNER
              </button>
            </form>
          </div>
          <div className="right-container">
            <div>
              <h1 className="participants-heading">LIST OF PARTICIPANTS</h1>
              <div className="heading-container">
                <h2 className="list-heading instruction-para">Name</h2>
                <h2 className="list-heading instruction-para">Speed</h2>
                <h2 className="list-heading instruction-para">Start Time</h2>
                <h2 className="list-heading instruction-para">End Time</h2>
              </div>
              {registeredList.length === 0 ? (
                this.onEmptyList()
              ) : (
                <ul className="unordered-list">
                  {registeredList.map(each => (
                    <PlayerLists eachPlayer={each} key={each.id} />
                  ))}
                </ul>
              )}
            </div>
            <div className="last-right-container">
              <hr className="horizontal-line" />
              <div className="button-start-container">
                {registeredList.length < 3 ? (
                  <p className="requesting-para">
                    Need 3 Participants For Race
                  </p>
                ) : (
                  <Link to="/track-path">
                    <button
                      className="start-button"
                      type="button"
                      onClick={this.onClickStartRace}
                    >
                      Start Race &nbsp;
                      <FaArrowRight className="arrow" />
                    </button>
                  </Link>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default RacingHome
