import { AboutusComponentActionTypes } from "../enums/AboutusComponentActionTypes";

/**
 * use for navigate tab in about us component
 */
export const setAboutUsCurrentComponentAction = (componentName: string) => {
    return {
        type: AboutusComponentActionTypes.Current_About_Component,        
        payload: componentName
    };
}