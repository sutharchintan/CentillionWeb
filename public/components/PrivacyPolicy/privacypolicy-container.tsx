
import { connect } from "react-redux";
import { PrivacyPolicyComponentWithStyles } from "../PrivacyPolicy/privacypolicy-component";

const mapStateToProps = state => {
  return {
    currentTheme: state.applicationThemeReducer.currentTheme
  };
};

const mapDispatchToProps = dispatch => {
  return {
  };
};

export const PrivacyPolicyContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(PrivacyPolicyComponentWithStyles);
