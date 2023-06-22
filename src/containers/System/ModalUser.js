import React, { Component, createRef } from "react";
import { FormattedMessage } from "react-intl";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import { connect } from "react-redux";
import { createNewUser, getAllUser } from "../../services/userService";
class ModalUser extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      address: "",
      lastName: "",
      firstName: "",
      isEmail: true,
      isEmailExist: true,
      isValidate: true,
      isErrmsg: "",
      // userData: [],
    };
    this.myRef = createRef();
  }
  state = {};

  componentDidMount() {}
  toggle = () => {
    this.props.toggleUserModal();
  };
  closeBtn = () => {};

  checkValidate = () => {
    const arr = ["email", "password", "address", "lastName", "firstName"];
    const checkData = arr.every((i) => this.state[i]);
    return checkData;
  };
  handleOnchangeInput = (e, id) => {
    let coppyState = { ...this.state };
    coppyState[id] = e.target.value;
    if (coppyState) {
      this.myRef.current?.classList?.remove("invalid");
    }
    this.setState({
      ...coppyState,
    });
  };
  handleEmail = () => {
    const email = this.state.email;
    const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (email.match(regex)) {
      return true;
    } else {
      return false;
    }
  };
  handleAddNewUser = async () => {
    const checkFullField = this.checkValidate();
    if (checkFullField) {
      this.setState({
        isValidate: true,
      });
      this.myRef.current?.classList?.remove("invalid");
      const checkEmail = this.handleEmail();
      if (checkEmail) {
        this.setState({
          isEmail: true,
        });

        const data = this.state;
        const response = await createNewUser(data);
        if (response.errCode !== 0) {
          this.setState({
            isErrmsg: response.errMessage,
          });
        } else {
          // let res = await getAllUser("ALL");
          // if (res && res.errCode === 0) {
          //   this.setState((prev) => ({
          //     userData: [...prev.userData, res.user],
          //   }));
          //   console.log("add user secess");
          // }
          this.props.createNewUser(this.state);

          this.setState({
            isErrmsg: response.errMessage,
          });
        }
      } else {
        this.setState({
          isEmail: false,
        });
      }
    } else {
      this.setState({
        isValidate: false,
      });
      this.myRef.current?.classList?.add("invalid");
    }
  };

  render() {
    const isEmail = this.state.isEmail;
    const isValidate = this.state.isValidate;
    const isErrmsg = this.state.isErrmsg;
    return (
      <Modal
        centered
        size="lg"
        isOpen={this.props.isModal}
        toggle={() => this.toggle()}
        className={"modal-user-container"}
      >
        <ModalHeader
          toggle={() => this.toggle()}
          close={() => {
            this.closeBtn();
          }}
        >
          Create a new users
        </ModalHeader>
        <ModalBody>
          {!isEmail && <span className="err-msg row-12">Email required </span>}

          {isErrmsg && <span className="err-msg row-12">{isErrmsg} </span>}

          {!isValidate && (
            <span className="err-msg row-12">
              Plz missing input parameters{" "}
            </span>
          )}
          <div ref={this.myRef}>
            <div className="modal-user-body">
              <div className="input-container">
                <label>Email</label>
                <input
                  onChange={(e) => this.handleOnchangeInput(e, "email")}
                  type="email"
                  value={this.state.email}
                />
              </div>
              <div className="input-container">
                <label>Password</label>
                <input
                  onChange={(e) => this.handleOnchangeInput(e, "password")}
                  type="password"
                  value={this.state.password}
                />
              </div>
            </div>
            <div className="modal-user-body">
              <div className="input-container">
                <label>FirstName</label>
                <input
                  onChange={(e) => this.handleOnchangeInput(e, "firstName")}
                  type="text"
                  value={this.state.firstName}
                />
              </div>
              <div className="input-container">
                <label>LastName</label>
                <input
                  onChange={(e) => this.handleOnchangeInput(e, "lastName")}
                  type="text"
                  value={this.state.lastName}
                />
              </div>
            </div>
            <div className="modal-user-body">
              <div className="input-container">
                <label>Address</label>
                <input
                  onChange={(e) => this.handleOnchangeInput(e, "address")}
                  type="text"
                  value={this.state.address}
                />
              </div>
            </div>
          </div>
        </ModalBody>
        <ModalFooter>
          <Button
            color="primary"
            className="px-3"
            onClick={() => this.handleAddNewUser()}
          >
            Add new user
          </Button>
          <Button
            color="secondary"
            className="px-3"
            onClick={() => this.toggle()}
          >
            close
          </Button>
        </ModalFooter>
      </Modal>
    );
  }
}

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(ModalUser);
