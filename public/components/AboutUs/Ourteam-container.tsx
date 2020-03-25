import { connect } from "react-redux";
import { OurTeamComponentWithStyles } from "./Ourteam-component";
import { setCurrentComponentAction } from "../../actions";

const mapStateToProps = state => {
  return {
    currentTheme: state.applicationThemeReducer.currentTheme
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setCurrentComponent: (componentName: string) =>
      dispatch(setCurrentComponentAction(componentName))

  };
};

export const OurTeamContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(OurTeamComponentWithStyles);
