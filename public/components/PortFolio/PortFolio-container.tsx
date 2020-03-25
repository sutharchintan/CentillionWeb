import { connect } from "react-redux";
import { PortFolioComponentWithStyles } from "../PortFolio/PortFolio-component";

const mapStateToProps = state => {
  return {
  };
};

const mapDispatchToProps = dispatch => {
  return {
  };
};

export const PortFolioContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(PortFolioComponentWithStyles as any);
