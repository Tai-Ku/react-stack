import React, { Component } from "react";
import { connect } from "react-redux";
import { push } from "connected-react-router";
import "./Login.scss";
import { handleLoginApi } from "../../services/userService";
import * as actions from "../../store/actions";
import { useDispatch } from "react-redux";
import { FormattedMessage } from "react-intl";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      errMsg: "",
    };
  }

  handleOnchangeUserName = (e) => {
    this.setState({
      username: e.target.value,
    });
  };
  handleOnchangePass = (e) => {
    this.setState({
      password: e.target.value,
    });
  };
  handleLogin = async (username, password) => {
    this.setState({
      errMsg: "",
    });
    try {
      const data = await handleLoginApi(
        this.state.username,
        this.state.password
      );
      if (data && data.errCode !== 0) {
        this.setState({
          errMsg: data.errMessage,
        });
      }

      if (data && data.errCode === 0) {
        this.props.userLoginSucess(data.userData);
      }
    } catch (error) {
      if (error.response.data) {
        if (error.response.data.errCode !== 0) {
          this.setState({
            errMsg: error.response.data.errMessage,
          });
        }
      }
    }
  };
  render() {
    return (
      <div className="login-bg">
        <div className="login-container">
          <div className="login-content row">
            <div className="col-12 text-content">Login</div>
            <div className="col-12 login-input form-group">
              <label>UserName</label>
              <input
                type="text"
                placeholder="Enter your username"
                className="form-control"
                value={this.state.username}
                onChange={(e) => this.handleOnchangeUserName(e)}
              />
            </div>
            <div className="col-12 login-input form-group">
              <label>Password</label>
              <input
                type="password"
                placeholder="Enter your password"
                className="form-control"
                value={this.state.password}
                onChange={(e) => this.handleOnchangePass(e)}
              />
            </div>

            <div className="col-12 text-err">{this.state.errMsg}</div>
            <div className="col-12">
              <button
                onClick={() => {
                  this.handleLogin();
                }}
                className="btn-login"
              >
                Login
              </button>
            </div>
            <div className="col-12">
              <span className="forgot-pass">forgot your password ?</span>
            </div>
            <div className="col-12"></div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    language: state.app.language,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    navigate: (path) => dispatch(push(path)),
    // adminLoginSuccess: (adminInfo) =>
    // dispatch(actions.adminLoginSuccess(adminInfo)),
    userLoginSucess: (userInfo) => dispatch(actions.userLoginSucess(userInfo)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
