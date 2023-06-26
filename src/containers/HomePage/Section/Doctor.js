import React, { Component } from "react";
import { connect } from "react-redux";
import "./MedicialFacility.scss";
import { FormattedMessage } from "react-intl";
import Slider from "react-slick";
import img from "../../../assets/images/105401-bsckii-tran-minh-khuyen.jpeg";
class Doctor extends Component {
  render() {
    let settings = this.props.settings;
    console.log(settings);
    return (
      <div className="section-specility ">
        <div className="section-header">
          <h2>Bác sĩ nổi bật tuần qua</h2>
          <div className="button-section">Xem thêm</div>
        </div>
        <div className="section-content">
          <Slider {...settings}>
            <div className="img-customize-doctor">
              <img src={img} />
              <h3>Bác sĩ Chuyên khoa II Trần Minh Khuyên</h3>
              <span>Da liễu</span>
            </div>
            <div className="img-customize-doctor">
              <img src={img} />
              <h3>Bác sĩ Chuyên khoa II Trần Minh Khuyên</h3>
              <span>Da liễu</span>
            </div>
            <div className="img-customize-doctor">
              <img src={img} />
              <h3>Bác sĩ Chuyên khoa II Trần Minh Khuyên</h3>
              <span>Da liễu</span>
            </div>
            <div className="img-customize-doctor">
              <img src={img} />
              <h3>Bác sĩ Chuyên khoa II Trần Minh Khuyên</h3>
              <span>Da liễu</span>
            </div>
            <div className="img-customize-doctor">
              <img src={img} />
              <h3>Bác sĩ Chuyên khoa II Trần Minh Khuyên</h3>
              <span>Da liễu</span>
            </div>
            <div className="img-customize-doctor">
              <img src={img} />
              <h3>Bác sĩ Chuyên khoa II Trần Minh Khuyên</h3>
              <span>Da liễu</span>
            </div>
            <div className="img-customize-doctor">
              <img src={img} />
              <h3>Bác sĩ Chuyên khoa II Trần Minh Khuyên</h3>
              <span>Da liễu</span>
            </div>
            <div className="img-customize-doctor">
              <img src={img} />
              <h3>Bác sĩ Chuyên khoa II Trần Minh Khuyên</h3>
              <span>Da liễu</span>
            </div>
            <div className="img-customize-doctor">
              <img src={img} />
              <h3>Bác sĩ Chuyên khoa II Trần Minh Khuyên</h3>
              <span>Da liễu</span>
            </div>
          </Slider>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.user.isLoggedIn,
    language: state.app.language,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(Doctor);
