import { connect } from "react-redux";
import { setCurrentComponentAction } from "../../actions";
import { FooterBar } from "./footer-bar";

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

export const FooterBarContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(FooterBar as any);