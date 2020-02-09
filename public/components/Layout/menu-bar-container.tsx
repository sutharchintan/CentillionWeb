import { connect } from "react-redux";
import { MenuBarWithStyles } from "./menu-bar";
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

export const MenuBarContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(MenuBarWithStyles as any);