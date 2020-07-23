import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeOptions, Theme } from "@material-ui/core/styles/createMuiTheme";
import { PaletteOptions, SimplePaletteColorOptions } from "@material-ui/core/styles/createPalette";
import { ThemeTypes } from "../enums/ThemeTypes";
import { CatalogThemeColorPicker } from '../models/CatalogThemeColorPicker';
import { PaletteType } from "@material-ui/core";

/**
 * class for theme provider
 */
class ThemeProvider {

    /**
    * get current catalog theme
    */
    public currentStoreTheme: CatalogThemeColorPicker;

    /**
     * Stores the theme privately
     */
    private theme: Theme;

    /**
     * defines the base theme type
     */
    private baseThemeType: string;

    /**
     * stores the color theme type
     */
    private colorThemeType: string = ThemeTypes.blue_grey;

    /**
     * initialize the theme provider
     */
    constructor() {
        this.currentStoreTheme = new CatalogThemeColorPicker();
    }

    /**
     * get default theme
     * @param {string} type the theme type
     */
    public getTheme(type?: string): Theme {
        switch (type) {
            case ThemeTypes.blue_grey:
                this.colorThemeType = type;
                return this.getBlueGreyTheme();

            case ThemeTypes.blue_grey:
            default:
                return this.getBlueGreyTheme();
        }
    }

    /**
     * get blue grey theme
     */
    private getBlueGreyTheme(): Theme {
        const themeOptions = {} as ThemeOptions;
        themeOptions.palette = {} as PaletteOptions;
        themeOptions.palette.type = this.baseThemeType as PaletteType;
        this.theme = createMuiTheme(themeOptions);
        this.theme.palette.primary.main = "#5f9ea0";
        this.theme.palette.primary.light = "#82B1FF";
        this.theme.palette.primary.dark = "#2196f3";
        this.theme.palette.primary.contrastText = "#ffffff";
        this.theme.palette.secondary.main = "#9E9E9E";
        this.theme.palette.secondary.light = "#F5F5F5";
        this.theme.palette.secondary.dark = "#616161";
        this.theme.typography.fontFamily = "\"Roboto\", \"Helvetica\", \"Arial\", sans-serif";
        return this.theme;
    }

    /**
     * update the existing theme
     * @param catalogThemeSettings the catalog theme color picker settings
     */
    public updateTheme(catalogThemeSettings: CatalogThemeColorPicker): Theme {
        const themeOptions = {} as ThemeOptions;
        themeOptions.palette = {} as PaletteOptions;
        themeOptions.palette.type = this.theme.palette.type;
        if (catalogThemeSettings) {
            if (catalogThemeSettings.themeColors) {

                const themeColors = catalogThemeSettings.themeColors;

                const primaryPaletteColorOptions = {} as SimplePaletteColorOptions;
                primaryPaletteColorOptions.main = themeColors.PrimaryColor1;
                primaryPaletteColorOptions.light = themeColors.PrimaryColor2;
                primaryPaletteColorOptions.dark = themeColors.PrimaryColor3;
                primaryPaletteColorOptions.contrastText = themeColors.TextColor;
                themeOptions.palette.primary = primaryPaletteColorOptions;

                const secondaryPaletteColorOptions = {} as SimplePaletteColorOptions;
                secondaryPaletteColorOptions.main = themeColors.AccentColor1;
                secondaryPaletteColorOptions.light = themeColors.AccentColor2;
                secondaryPaletteColorOptions.dark = themeColors.AccentColor3;
                secondaryPaletteColorOptions.contrastText = themeColors.SecondaryTextColor;
                themeOptions.palette.secondary = secondaryPaletteColorOptions;

                const errorPaletteColorOptions = {} as SimplePaletteColorOptions;
                errorPaletteColorOptions.main = themeColors.AlternateCanvasColor;
                errorPaletteColorOptions.light = themeColors.AlternateColor1;
                errorPaletteColorOptions.dark = themeColors.AlternateColor2;
                errorPaletteColorOptions.contrastText = themeColors.AlternateTextColor;
                themeOptions.palette.error = errorPaletteColorOptions;
            }

            if (catalogThemeSettings.spacing) {
                themeOptions.spacing = {};
                themeOptions.spacing.unit = catalogThemeSettings.spacing;
            }

            if (!themeOptions.typography) {
                themeOptions.typography = {};
            }

            if (catalogThemeSettings.fontFamily) {
                (themeOptions.typography as any).fontFamily = catalogThemeSettings.fontFamily;
            }

            if (catalogThemeSettings.fontSize) {
                (themeOptions.typography as any).fontSize = catalogThemeSettings.fontSize;
            }

            if (catalogThemeSettings.fontWeightLight) {
                (themeOptions.typography as any).fontWeightLight = catalogThemeSettings.fontWeightLight;
            }

            if (catalogThemeSettings.fontWeightMedium) {
                (themeOptions.typography as any).fontWeightMedium = catalogThemeSettings.fontWeightMedium;
            }

            if (catalogThemeSettings.fontWeightRegular) {
                (themeOptions.typography as any).fontWeightRegular = catalogThemeSettings.fontWeightRegular;
            }
        }

        this.theme = createMuiTheme(themeOptions);
        return this.theme;
    }

    /**
     * get current store theme
     */
    public getCurrentStoreTheme(): CatalogThemeColorPicker {
        const primaryThemePalette = this.theme.palette.primary as SimplePaletteColorOptions;
        this.currentStoreTheme.themeColors.PrimaryColor1 = primaryThemePalette.main;
        this.currentStoreTheme.themeColors.PrimaryColor2 = primaryThemePalette.light;
        this.currentStoreTheme.themeColors.PrimaryColor3 = primaryThemePalette.dark;
        this.currentStoreTheme.themeColors.TextColor = primaryThemePalette.contrastText;

        const secondaryThemePalette = this.theme.palette.secondary as SimplePaletteColorOptions;
        this.currentStoreTheme.themeColors.AccentColor1 = secondaryThemePalette.main;
        this.currentStoreTheme.themeColors.AccentColor2 = secondaryThemePalette.light;
        this.currentStoreTheme.themeColors.AccentColor3 = secondaryThemePalette.dark;
        this.currentStoreTheme.themeColors.SecondaryTextColor = secondaryThemePalette.contrastText;

        const errorThemePalette = this.theme.palette.error as SimplePaletteColorOptions;
        this.currentStoreTheme.themeColors.AlternateCanvasColor = errorThemePalette.main;
        this.currentStoreTheme.themeColors.AlternateColor1 = errorThemePalette.light;
        this.currentStoreTheme.themeColors.AlternateColor2 = errorThemePalette.dark;
        this.currentStoreTheme.themeColors.AlternateTextColor = errorThemePalette.contrastText;
        this.currentStoreTheme.updateColors(this.currentStoreTheme.themeColors);

        this.currentStoreTheme.spacing = this.theme.spacing ? this.theme.spacing.unit : 0;

        if (this.theme.typography) {
            const typoGraphy = this.theme.typography as any;
            this.currentStoreTheme.fontFamily = typoGraphy.fontFamily;
            this.currentStoreTheme.fontSize = typoGraphy.fontSize;
            this.currentStoreTheme.fontWeightLight = typoGraphy.fontWeightLight;
            this.currentStoreTheme.fontWeightMedium = typoGraphy.fontWeightMedium;
            this.currentStoreTheme.fontWeightRegular = typoGraphy.fontWeightRegular;
        }

        return this.currentStoreTheme;
    }

}

export const themeProvider = new ThemeProvider();