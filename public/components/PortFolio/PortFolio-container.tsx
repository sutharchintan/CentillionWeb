import { connect } from "react-redux";
import { PortFolioComponent } from "../PortFolio/PortFolio-component";

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
)(PortFolioComponent as any);
