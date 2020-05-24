import { connect } from "react-redux";
import { CareerComponentWithStyles } from "../Career/career-component";

const mapStateToProps = state => {
  return {
    currentTheme: state.applicationThemeReducer.currentTheme
  };
};

const mapDispatchToProps = dispatch => {
  return {
  };
};

export const CareerContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(CareerComponentWithStyles);
