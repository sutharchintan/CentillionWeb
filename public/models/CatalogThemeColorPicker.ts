import { CatalogThemeColors } from "./CatalogThemeColors";
import { CatalogThemeColorNames } from "../enums/CatalogThemeColorNames";
import { ColorPickerState } from "./ColorPickerState";

/***
 * class for catalog theme color picker
 */
export class CatalogThemeColorPicker {
    openColorPicker: boolean;

    themeColors: CatalogThemeColors;

    colors: ColorPickerState[];

    colorNames: string[];

    spacing: number;

    fontFamily: string;

    fontSize: number;

    fontWeightLight: number;

    fontWeightMedium: number;

    fontWeightRegular: number;

    /**
     * constructor for catalog theme color
     */
    constructor() {
        this.openColorPicker = false;
        this.themeColors = new CatalogThemeColors();
        this.colors = [];
        this.colorNames = [
            CatalogThemeColorNames.PrimaryColor1,
            CatalogThemeColorNames.PrimaryColor2,
            CatalogThemeColorNames.PrimaryColor3,
            CatalogThemeColorNames.AccentColor1,
            CatalogThemeColorNames.AccentColor2,
            CatalogThemeColorNames.AccentColor3,
            CatalogThemeColorNames.TextColor,
            CatalogThemeColorNames.SecondaryTextColor,
            CatalogThemeColorNames.AlternateTextColor,
            CatalogThemeColorNames.CanvasColor,
            CatalogThemeColorNames.AlternateCanvasColor,
            CatalogThemeColorNames.AlternateColor1,
            CatalogThemeColorNames.AlternateColor2,
            CatalogThemeColorNames.BorderColor,
            CatalogThemeColorNames.DisabledColor
        ];

        this.colorNames.forEach((colorName) => {
            const colorPickerState = new ColorPickerState();
            colorPickerState.name = colorName;
            this.colors.push(colorPickerState);
        });
    }

    /**
     * update colors
     */
    updateColors(colors: CatalogThemeColors): void {
        const primaryColor1Index = this.colors.findIndex((colorPickerState: ColorPickerState) => {
            return colorPickerState.name === CatalogThemeColorNames.PrimaryColor1;
        });

        this.colors[primaryColor1Index].color = colors.PrimaryColor1;

        const primaryColor2Index = this.colors.findIndex((colorPickerState: ColorPickerState) => {
            return colorPickerState.name === CatalogThemeColorNames.PrimaryColor2;
        });

        this.colors[primaryColor2Index].color = colors.PrimaryColor2;

        const primaryColor3Index = this.colors.findIndex((colorPickerState: ColorPickerState) => {
            return colorPickerState.name === CatalogThemeColorNames.PrimaryColor3;
        });

        this.colors[primaryColor3Index].color = colors.PrimaryColor3;

        const textColorIndex = this.colors.findIndex((colorPickerState: ColorPickerState) => {
            return colorPickerState.name === CatalogThemeColorNames.TextColor;
        });

        this.colors[textColorIndex].color = colors.TextColor;

        const accentColor1Index = this.colors.findIndex((colorPickerState: ColorPickerState) => {
            return colorPickerState.name === CatalogThemeColorNames.AccentColor1;
        });

        this.colors[accentColor1Index].color = colors.AccentColor1;

        const accentColor2Index = this.colors.findIndex((colorPickerState: ColorPickerState) => {
            return colorPickerState.name === CatalogThemeColorNames.AccentColor2;
        });

        this.colors[accentColor2Index].color = colors.AccentColor2;

        const accentColor3Index = this.colors.findIndex((colorPickerState: ColorPickerState) => {
            return colorPickerState.name === CatalogThemeColorNames.AccentColor3;
        });

        this.colors[accentColor3Index].color = colors.AccentColor3;

        const secondaryTextColorIndex = this.colors.findIndex((colorPickerState: ColorPickerState) => {
            return colorPickerState.name === CatalogThemeColorNames.SecondaryTextColor;
        });

        this.colors[secondaryTextColorIndex].color = colors.SecondaryTextColor;

        const alternateCanvasColorIndex = this.colors.findIndex((colorPickerState: ColorPickerState) => {
            return colorPickerState.name === CatalogThemeColorNames.AlternateCanvasColor;
        });

        this.colors[alternateCanvasColorIndex].color = colors.AlternateCanvasColor;

        const alternateColor1Index = this.colors.findIndex((colorPickerState: ColorPickerState) => {
            return colorPickerState.name === CatalogThemeColorNames.AlternateColor1;
        });

        this.colors[alternateColor1Index].color = colors.AlternateColor1;

        const alternateColor2Index = this.colors.findIndex((colorPickerState: ColorPickerState) => {
            return colorPickerState.name === CatalogThemeColorNames.AlternateColor2;
        });

        this.colors[alternateColor2Index].color = colors.AlternateColor2;

        const alternateTextColorIndex = this.colors.findIndex((colorPickerState: ColorPickerState) => {
            return colorPickerState.name === CatalogThemeColorNames.AlternateTextColor;
        });

        this.colors[alternateTextColorIndex].color = colors.AlternateTextColor;

        const borderColorIndex = this.colors.findIndex((colorPickerState: ColorPickerState) => {
            return colorPickerState.name === CatalogThemeColorNames.BorderColor;
        });

        this.colors[borderColorIndex].color = colors.BorderColor;

        const disabledColorIndex = this.colors.findIndex((colorPickerState: ColorPickerState) => {
            return colorPickerState.name === CatalogThemeColorNames.DisabledColor;
        });

        this.colors[disabledColorIndex].color = colors.DisabledColor;
    }
}