import { connect } from "react-redux";
import { TopInfoComponent } from "./top-info-bar";
import { setCurrentComponentAction, sendEmailAction } from "../../actions";
import { MailModel } from "../../models/MailModel";

const mapStateToProps = state => {
    return {
        currentTheme: state.applicationThemeReducer.currentTheme
    };
};

const mapDispatchToProps = dispatch => {
    return {
        setCurrentComponent: (componentName: string) =>
            dispatch(setCurrentComponentAction(componentName)),

        sendEmail: (orderEmailInfo: MailModel) =>
            dispatch(sendEmailAction(orderEmailInfo)),
    };
};

export const TopInfoBarContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(TopInfoComponent as any);