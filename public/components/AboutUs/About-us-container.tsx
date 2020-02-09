import { connect } from "react-redux";
import { aboutUsComponentWithStyles } from "./About-us-component";
import { setAboutUsCurrentComponentAction } from "../../actions";

const mapStateToProps = state => {

  return {
    currentTheme: state.applicationThemeReducer.currentTheme,
    currentComponent: state.applicationAboutUsReducer.currentAboutUsComponent
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setCurrentComponent: (componentName: string) =>
      dispatch(setAboutUsCurrentComponentAction(componentName))
  };
};

export const AboutusContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(aboutUsComponentWithStyles as any);
