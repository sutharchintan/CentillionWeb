import { connect } from "react-redux"; 
import { CaseStudiesComponentWithStyles } from "./Casestudies-component";

const mapStateToProps = state => {
  return {
    currentTheme: state.applicationThemeReducer.currentTheme
  };
};

const mapDispatchToProps = dispatch => {
  return {
  };
};

export const CaseStudiesContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(CaseStudiesComponentWithStyles);
