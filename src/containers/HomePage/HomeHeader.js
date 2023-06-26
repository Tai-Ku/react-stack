import React, { Component } from "react";
import { connect } from "react-redux";
import "./HomeHeader.scss";
import { FormattedMessage } from "react-intl";
import { LANGUAGES } from "../../utils";
import { changeLanguageApp } from "../../store/actions";

class HomeHeader extends Component {
  changeLanguage = (language) => {
    this.props.changeLanguageAppRedux(language);
  };
  render() {
    const language = this.props.language;
    return (
      <>
        <div className="home-header-container">
          <div className="home-header-content">
            <div className="left-content">
              <i className="fa-solid fa-bars"></i>
              <div className="header-logo"></div>
            </div>
            <div className="center-content">
              <div className="child-content">
                <div className="subtitle">
                  <b>
                    <FormattedMessage id="home-header.speciality" />
                  </b>
                </div>
                <div>
                  <FormattedMessage id="home-header.searchdoctor" />
                </div>
              </div>
              <div className="child-content">
                <div className="subtitle">
                  <b>
                    <FormattedMessage id="home-header.healthy-facility" />
                  </b>
                </div>
                <div>
                  <FormattedMessage id="home-header.select-room" />
                </div>
              </div>
              <div className="child-content">
                <div className="subtitle">
                  <b>
                    <FormattedMessage id="home-header.doctor" />
                  </b>
                </div>
                <div>
                  <FormattedMessage id="home-header.select-doctor" />
                </div>
              </div>
              <div className="child-content">
                <div className="subtitle">
                  <b>
                    <FormattedMessage id="home-header.fee" />
                  </b>
                </div>
                <div>
                  <FormattedMessage id="home-header.check-health" />
                </div>
              </div>
            </div>
            <div className="right-content">
              <div className="support">
                <i class="fa-solid fa-circle-question"></i>
                <FormattedMessage id="home-header.support" />
              </div>
              <div
                className={`language-vi ${
                  language === LANGUAGES.VI && "active"
                }`}
              >
                <span onClick={() => this.changeLanguage(LANGUAGES.VI)}>
                  VN
                </span>
              </div>
              <div
                className={`language-en ${
                  language === LANGUAGES.EN && "active"
                }`}
              >
                <span
                  onClick={() => {
                    this.changeLanguage(LANGUAGES.EN);
                  }}
                >
                  EN
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="home-header-banner">
          <div className="content-up">
            <div className="title1">
              <FormattedMessage id="banner.title1" />
            </div>
            <div className="title2">
              <FormattedMessage id="banner.title2" />
            </div>
            <div className="search">
              <i className="fas fa-search"></i>
              <input type="text" />
            </div>
          </div>
          <div className="content-down">
            <div className="options">
              <div className="option-child">
                <div className="icon-child">
                  <i className="far fa-hospital"></i>
                </div>
                <div className="text-child">
                  <FormattedMessage id="options.speciality" />
                </div>
              </div>
              <div className="option-child">
                <div className="icon-child">
                  <i class="fa-solid fa-mobile-screen"></i>
                </div>
                <div className="text-child">
                  <FormattedMessage id="options.remote" />
                </div>
              </div>
              <div className="option-child">
                <div className="icon-child">
                  <i class="fa-regular fa-calendar-check"></i>
                </div>
                <div className="text-child">
                  <FormattedMessage id="options.general" />
                </div>
              </div>
              <div className="option-child">
                <div className="icon-child">
                  <i class="fa-solid fa-vial-circle-check"></i>
                </div>
                <div className="text-child">
                  <FormattedMessage id="options.test" />
                </div>
              </div>
              <div className="option-child">
                <div className="icon-child">
                  <i class="fa-solid fa-brain"></i>
                </div>
                <div className="text-child">
                  <FormattedMessage id="options.health" />
                </div>
              </div>
              <div className="option-child">
                <div className="icon-child">
                  <i class="fa-solid fa-tooth"></i>
                </div>
                <div className="text-child">
                  <FormattedMessage id="options.tooth" />
                </div>
              </div>
              <div className="option-child">
                <div className="icon-child">
                  <i class="fa-solid fa-bed-pulse"></i>
                </div>
                <div className="text-child">
                  <FormattedMessage id="options.surgery" />
                </div>
              </div>
              <div className="option-child">
                <div className="icon-child">
                  <i class="fa-solid fa-heart-pulse"></i>
                </div>
                <div className="text-child">
                  <FormattedMessage id="options.products" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
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
  return {
    changeLanguageAppRedux: (language) => dispatch(changeLanguageApp(language)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeHeader);
