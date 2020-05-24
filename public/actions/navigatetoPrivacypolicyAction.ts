import { ApplicationActionTypes } from "../enums/ApplicationActionTypes";
import { NavigationPaths } from "../enums/NavigationPaths";

/**
 * navigate to privacy policy
 */
export const navigateToPrivacyPolicyAction = () =>{
    return {
        type: ApplicationActionTypes.Current_Component,
        payload: NavigationPaths.PrivacyPolicy
    };
}