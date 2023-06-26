import React, { Component } from "react";
import { connect } from "react-redux";
import HomeHeader from "./HomeHeader";
import "./HomePage.scss";
import Specility from "./Section/Specility";
import MedicialFacility from "./Section/MedicialFacility";
import Doctor from "./Section/Doctor";
class HomePage extends Component {
  render() {
    let settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1,
    };
    return (
      <div>
        <HomeHeader />
        <Specility settings={settings} />
        <MedicialFacility settings={settings} />
        <Doctor settings={settings} />
        <div style={{ height: "1000px" }}></div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.user.isLoggedIn,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
