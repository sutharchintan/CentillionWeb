import { connect } from "react-redux";
import { DesclaimerComponentWithStyles } from "../Desclaimer/desclaimer-component";

const mapStateToProps = state => {
  return {
    currentTheme: state.applicationThemeReducer.currentTheme
  };
};

const mapDispatchToProps = dispatch => {
  return {
  };
};

export const DesclaimerContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(DesclaimerComponentWithStyles);
