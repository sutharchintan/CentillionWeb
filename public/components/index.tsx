import * as React from "react";
import { connect } from "react-redux";
import { LayoutContainer } from "./HomePage/Layout-container";
import { TextFieldControl } from "../components/Layout/text-filed-control";

class CentillionApp extends React.Component {
  render() {
    return <LayoutContainer />
  }
}

/**
 * defines the state actions
 * @param state the actions to be state
 */
const mapStateToProps = state => {
  return {
  };
}

/**
 * define the dispatch actions
 * @param dispatch the actions to be dispatched
 */
const mapDispatchToProps = dispatch => {
  return {};
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CentillionApp as any);