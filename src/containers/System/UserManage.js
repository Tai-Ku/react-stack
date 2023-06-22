import React, { Component } from "react";
import { FormattedMessage } from "react-intl";
import { connect } from "react-redux";
import "./Usermanage.scss";
import { getAllUser, deleteUser } from "../../services/userService";
import ModalUser from "./ModalUser";
import ModalUserEdit from "./ModalUserEdit";
class UserManage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userData: [],
      isModal: false,
      isModalEdit: false,
      idUser: null,
    };
  }

  state = {};

  async componentDidMount() {
    await this.apiGetAllUser();
  }
  // API
  apiGetAllUser = async () => {
    let res = await getAllUser("ALL");

    if (res && res.errCode === 0) {
      this.setState({
        userData: res?.userData,
      });
    }
  };

  //

  handleAddNewUser = () => {
    this.setState({
      isModal: true,
    });
  };
  handleEditNewUser = (id) => {
    console.log(id);
    this.setState({
      isModalEdit: true,
      idUser: id,
    });
  };
  handleDelete = async (userId) => {
    if (userId) {
      await deleteUser(userId);
      this.setState((prev) => ({
        userData: prev.userData.filter((user) => user?.id !== userId),
      }));
    } else {
      await deleteUser(userId);
    }
  };

  createNewUser = (data) => {
    if (data) {
      this.setState((prev) => ({
        userData: [...prev.userData, data],
      }));
    }
    this.setState({
      isModal: false,
    });
  };
  editUser = (data) => {
    if (data) {
      this.setState((prevState) => ({
        userData: prevState.userData.map((user) =>
          user.id === data.id ? data : user
        ),
      }));
    }
    this.setState({
      isModalEdit: false,
    });
  };

  toggleUserModal = () => {
    this.setState({
      isModal: !this.state.isModal,
    });
  };
  toggleUserModalEdit = () => {
    this.setState({
      isModalEdit: !this.state.isModalEdit,
    });
  };

  render() {
    const userData = this.state.userData;

    const isModal = this.state.isModal;
    const isModalEdit = this.state.isModalEdit;
    const userId = this.state.idUser;

    return (
      <div className="users-container">
        <div className="title text-center">Manage Users</div>
        {/* createUserModal */}
        {isModal && (
          <ModalUser
            createNewUser={this.createNewUser}
            toggleUserModal={this.toggleUserModal}
            isModal={isModal}
          />
        )}
        {/* Edit UserModal */}
        {isModalEdit && (
          <ModalUserEdit
            createNewUser={this.editUser}
            data={userData}
            toggleUserModalEdit={this.toggleUserModalEdit}
            isModalEdit={isModalEdit}
            id={userId}
          />
        )}
        <div className="mx-1">
          <button
            onClick={() => this.handleAddNewUser()}
            className="btn btn-primary px-3"
          >
            Add new user +
          </button>
        </div>
        <div className="mt-3 mx-1">
          <table id="customers">
            <tbody>
              <tr>
                <th>Email</th>
                <th>FirstName</th>
                <th>LastName</th>
                <th>Address</th>
                <th>Action</th>
              </tr>
              {userData?.map((item, index) => (
                <tr key={item.index}>
                  <td>{item?.email}</td>
                  <td>{item?.firstName}</td>
                  <td>{item?.lastName}</td>
                  <td>{item?.address}</td>
                  <td className="button-contain">
                    <button
                      className="button"
                      onClick={() => this.handleDelete(item.id)}
                    >
                      Delete
                    </button>

                    <button
                      onClick={() => this.handleEditNewUser(item.id)}
                      className="button"
                    >
                      Edit
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(UserManage);
