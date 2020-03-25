import { connect } from "react-redux"; 
import { LifeAtCentillionSofttechComponentWithStyles } from "./Lifeatcentillionsoftech-component";

const mapStateToProps = state => {
  return {
    currentTheme: state.applicationThemeReducer.currentTheme
  };
}; 

const mapDispatchToProps = dispatch => {
  return {
  };
};

export const LifeAtCentillionSofttechContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(LifeAtCentillionSofttechComponentWithStyles);
