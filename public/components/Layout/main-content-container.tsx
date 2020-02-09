import { connect } from "react-redux";
import { MainContent } from "./main-content";

const mapStateToProps = state => {
    return {
        currentComponent: state.application.currentComponent
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export const MainContentContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(MainContent);