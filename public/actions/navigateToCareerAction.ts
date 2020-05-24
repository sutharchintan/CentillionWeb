import { ApplicationActionTypes } from "../enums/ApplicationActionTypes";
import { NavigationPaths } from "../enums/NavigationPaths";

/**
 * navigate to career
 */
export const navigateToCareerAction = () =>{
    return {
        type: ApplicationActionTypes.Current_Component,
        payload: NavigationPaths.Career
    };
}