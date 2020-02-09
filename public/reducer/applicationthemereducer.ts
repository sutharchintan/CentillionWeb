import { ApplicationThemeState } from "../state-model/ApplicationThemeState";
import { themeProvider } from "../providers/applicationThemeProvider";
import { ThemeAction } from "../enums/ThemeAction";

/**
 * application theme reducer
 * @param state the current application theme state
 * @param action the action to be executed
 */
export const applicationThemeReducer = (state: ApplicationThemeState = new ApplicationThemeState(), action: any) => {
    switch (action.type) {
        case ThemeAction.Theme_Changed:
            return handleThemeChanged(state, action.payload);

        default:
            if (!state.currentTheme) {
                const theme = themeProvider.getTheme();
                state.currentTheme = theme;
                state.themeType = theme.palette.type;
            }

            break;
    }
    return state;
}

/**
 * handle theme changed
 * @param state the catalog theme state
 * @param payload the payload of theme type string
 */
const handleThemeChanged = (state: ApplicationThemeState, payload: string) => {
    return {
        ...state,
        currentTheme: themeProvider.getTheme(payload),
        themeType: payload
    }
}
