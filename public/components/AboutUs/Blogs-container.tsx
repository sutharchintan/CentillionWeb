import { connect } from "react-redux"; 
import { BlogsComponentWithStyles } from "./Blogs-component";

const mapStateToProps = state => {
  return {
    currentTheme: state.applicationThemeReducer.currentTheme
  };
};

const mapDispatchToProps = dispatch => {
  return {
  };
};

export const BlogsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(BlogsComponentWithStyles);
