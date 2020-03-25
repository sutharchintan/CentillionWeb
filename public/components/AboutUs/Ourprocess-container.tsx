import { connect } from "react-redux";
import { OurProcessComponentWithStyles } from "./Ourprocess-component";

const mapStateToProps = state => {
  return {
    currentTheme: state.applicationThemeReducer.currentTheme
  };
};

const mapDispatchToProps = dispatch => {
  return {
  };
};

export const OurProcessContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(OurProcessComponentWithStyles);
