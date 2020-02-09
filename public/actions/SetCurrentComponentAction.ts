import { ApplicationActionTypes } from "../enums/ApplicationActionTypes";

/**
 * use for set current page
 */
export const setCurrentComponentAction = (componentName: string) => {
    return {
        type: ApplicationActionTypes.Current_Component,        
        payload: componentName
    };
}