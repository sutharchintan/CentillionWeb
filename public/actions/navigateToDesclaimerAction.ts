import { ApplicationActionTypes } from "../enums/ApplicationActionTypes";
import { NavigationPaths } from "../enums/NavigationPaths";

/**
 * navigate to desclaimer
 */
export const navigateToDesclaimerAction = () =>{
    return {
        type: ApplicationActionTypes.Current_Component,
        payload: NavigationPaths.Desclaimer
    };
}