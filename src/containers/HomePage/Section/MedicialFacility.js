import React, { Component } from "react";
import { connect } from "react-redux";
import "./MedicialFacility.scss";
import { FormattedMessage } from "react-intl";
import Slider from "react-slick";
import img from "../../../assets/images/170749-benh-vien-an-viet.jpeg";
class MedicialFacility extends Component {
  render() {
    console.log(this.props.settings);
    let settings = this.props.settings;
    return (
      <div className="section-share section-medi">
        <div className="section-header">
          <h2>Cơ sở y tế nổi bật</h2>
          <div className="button-section">Xem thêm</div>
        </div>
        <div className="section-content">
          <Slider {...settings}>
            <div className="img-customize-medicalfacility">
              <img src={img} />
              <h3>Bệnh viện Nam học và Hiếm muộn Hà Nội</h3>
            </div>
            <div className="img-customize-medicalfacility">
              <img src={img} />
              <h3>Bệnh viện Nam học và Hiếm muộn Hà Nội</h3>
            </div>
            <div className="img-customize-medicalfacility">
              <img src={img} />
              <h3>Bệnh viện Nam học và Hiếm muộn Hà Nội</h3>
            </div>
            <div className="img-customize-medicalfacility">
              <img src={img} />
              <h3>Bệnh viện Nam học và Hiếm muộn Hà Nội</h3>
            </div>
            <div className="img-customize-medicalfacility">
              <img src={img} />
              <h3>Bệnh viện Nam học và Hiếm muộn Hà Nội</h3>
            </div>
            <div className="img-customize-medicalfacility">
              <img src={img} />
              <h3>Bệnh viện Nam học và Hiếm muộn Hà Nội</h3>
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

export default connect(mapStateToProps, mapDispatchToProps)(MedicialFacility);
