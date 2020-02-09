import { connect } from "react-redux";
import { DashboardComponent } from "../Dashboard/Dashboard-component";

const mapStateToProps = state => {
  return {
    currentTheme: state.applicationThemeReducer.currentTheme
  };
};

const mapDispatchToProps = dispatch => {
  return {
  };
};

export const DashboardContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(DashboardComponent as any);
