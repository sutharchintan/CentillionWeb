import { Theme } from "@material-ui/core/styles/createMuiTheme";

/**
 * class to define state for theme
 */
export class ApplicationThemeState {
    /**
     * Stores the theme options which are applicable
     */
    currentTheme: Theme;

    /**
     * Stores the theme type
     */
    themeType: string;
}