import React, { Component } from "react";
import { FormattedMessage } from "react-intl";
import { connect } from "react-redux";
import "./Usermanage.scss";
import { getAllUser } from "../../services/userService";
class UserManage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userData: [],
    };
  }

  state = {};

  async componentDidMount() {
    let res = await getAllUser("ALL");

    if (res && res.errCode === 0) {
      this.setState({
        userData: res?.userData,
      });
    }

    console.log(this.state.userData);
  }
  render() {
    return (
      <div className="users-container">
        <div className="title text-center">Manage Users</div>
        <div className="mt-3 mx-1">
          <table id="customers">
            <tr>
              <th>Email</th>
              <th>FirstName</th>
              <th>LastName</th>
              <th>Address</th>
              <th>Action</th>
            </tr>

            {this.state.userData?.map((item, index) => (
              <tr key={item.id}>
                <td>{item?.email}</td>
                <td>{item?.firstName}</td>
                <td>{item?.lastName}</td>
                <td>{item?.address}</td>
                <td className="button-contain">
                  <button className="button">Delete</button>
                  <button className="button">Edit</button>
                </td>
              </tr>
            ))}
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
