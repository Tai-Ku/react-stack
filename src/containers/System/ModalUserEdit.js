import React, { Component, createRef } from "react";
import { FormattedMessage } from "react-intl";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import { connect } from "react-redux";
import {
  createNewUser,
  getAllUser,
  editUser,
} from "../../services/userService";
class ModalUserEdit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      address: "",
      lastName: "",
      firstName: "",
      isEmail: true,
      isEmailExist: true,
      isValidate: true,
      isErrmsg: "",
      userData: {},
    };
    this.myRef = createRef();
  }
  state = {};

  async componentDidMount() {
    const res = await getAllUser(this.props.id);
    this.setState({
      firstName: res.userData?.firstName,
      lastName: res.userData?.lastName,
      address: res.userData?.address,
      email: res.userData?.email,
    });
  }
  toggle = () => {
    this.props.toggleUserModalEdit();
  };
  closeBtn = () => {};

  // checkValidate = () => {
  //   const arr = ["email", "password", "address", "lastName", "firstName"];
  //   const checkData = arr.every((i) => this.state[i]);
  //   return checkData;
  // };
  handleOnchangeInput = (e, id) => {
    let coppyState = { ...this.state };
    coppyState[id] = e.target.value;
    this.setState({
      ...coppyState,
    });
  };
  // handleEmail = () => {
  //   const email = this.state.email;
  //   const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  //   if (email.match(regex)) {
  //     return true;
  //   } else {
  //     return false;
  //   }
  // };
  // handleAddNewUser = async () => {
  //   const checkFullField = this.checkValidate();
  //   if (checkFullField) {
  //     this.setState({
  //       isValidate: true,
  //     });
  //     this.myRef.current?.classList?.remove("invalid");
  //     const checkEmail = this.handleEmail();
  //     if (checkEmail) {
  //       this.setState({
  //         isEmail: true,
  //       });

  //       const data = this.state;
  //       const response = await createNewUser(data);
  //       if (response.errCode !== 0) {
  //         this.setState({
  //           isErrmsg: response.errMessage,
  //         });
  //       } else {
  //         // let res = await getAllUser("ALL");
  //         // if (res && res.errCode === 0) {
  //         //   this.setState((prev) => ({
  //         //     userData: [...prev.userData, res.user],
  //         //   }));
  //         //   console.log("add user secess");
  //         // }
  //         this.props.createNewUser(this.state);

  //         this.setState({
  //           isErrmsg: response.errMessage,
  //         });
  //       }
  //     } else {
  //       this.setState({
  //         isEmail: false,
  //       });
  //     }
  //   } else {
  //     this.setState({
  //       isValidate: false,
  //     });
  //     this.myRef.current?.classList?.add("invalid");
  //   }
  // };
  handleSaveUser = async () => {
    const data = {
      address: this.state.address,
      lastName: this.state.lastName,
      firstName: this.state.firstName,
      email: this.state.email,
      id: this.props.id,
    };
    await editUser(data);
    this.props.createNewUser(data);
  };

  render() {
    const isEmail = this.state.isEmail;
    const isValidate = this.state.isValidate;
    const isErrmsg = this.state.isErrmsg;

    return (
      <Modal
        centered
        size="lg"
        isOpen={this.props.isModalEdit}
        toggle={() => this.toggle()}
        className={"modal-user-container"}
      >
        <ModalHeader
          toggle={() => this.toggle()}
          close={() => {
            this.closeBtn();
          }}
        >
          Edit users
        </ModalHeader>
        <ModalBody>
          <div>
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
            onClick={() => this.handleSaveUser()}
          >
            Save change
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

export default connect(mapStateToProps, mapDispatchToProps)(ModalUserEdit);
