import { connect } from "react-redux";
import { LayoutComponent } from "../HomePage/Layout-component";
import { navigateToDashboardAction } from "../../actions/navigateToDashboardAction";
import { navigateToContactUsAction } from "../../actions/navigateToContactUsAction";
import { navigateToAboutUsAction } from "../../actions/navigateToAboutUsAction";
import { navigateToPortfolioAction } from "../../actions/navigateToPortFolioAction";


const mapStateToProps = state => {
  return {
    currentTheme: state.applicationThemeReducer.currentTheme
  };
};

const mapDispatchToProps = dispatch => {
  return {
  };
}

export const LayoutContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(LayoutComponent as any);
