import { connect } from "react-redux"; 
import { CaseStudiesComponent } from "./Casestudies-component";

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
)(CaseStudiesComponent);
