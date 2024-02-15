import {Component} from 'react'

import './index.css'

class LoginPage extends Component {
  state = {userNameInput: '', passwordInput: ''}

  onClickUserName = event => {
    this.setState({userNameInput: event.target.value})
    console.log(event.target.value)
  }

  onChangePassword = event => {
    this.setState({passwordInput: event.target.value})
    console.log(event.target.value)
  }

  onSubmitBtn = async event => {
    event.preventDefault()
    const {userNameInput, passwordInput} = this.state
    const userDetails = {userNameInput, passwordInput}
    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(url, options)
    console.log(response)
    const data = await response.json()
  }

  render() {
    return (
      <div className="container1">
        <div className="container2">
          <img
            className="img"
            alt="website logo"
            src="https://assets.ccbp.in/frontend/react-js/logo-img.png"
          />
          <form onSubmit={this.onSubmitBtn} className="form">
            <label className="inputLabel">USERNAME</label>
            <input
              onChange={this.onClickUserName}
              className="inputName"
              type="text"
            />
            <label className="passLabel">PASSWORD</label>
            <input
              onChange={this.onChangePassword}
              className="inputName"
              type="password"
            />
            <button type="submit" className="btn">
              Login
            </button>
          </form>
        </div>
      </div>
    )
  }
}
export default LoginPage
