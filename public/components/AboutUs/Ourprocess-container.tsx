import { connect } from "react-redux";
import { OurProcessComponent } from "./Ourprocess-component";

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
)(OurProcessComponent);
