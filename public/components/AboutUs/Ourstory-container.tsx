import { connect } from "react-redux";
import { OurStoryComponent } from "./Ourstory-component";

const mapStateToProps = state => {
  return {
    currentTheme: state.applicationThemeReducer.currentTheme
  };
};

const mapDispatchToProps = dispatch => {
  return {
  };
};

export const OurStoryContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(OurStoryComponent);
