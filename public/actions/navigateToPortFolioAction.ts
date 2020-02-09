import { ApplicationActionTypes } from "../enums/ApplicationActionTypes";
import { NavigationPaths } from "../enums/NavigationPaths";

/**
 * navigate to about us
 */
export const navigateToPortfolioAction = () =>{
    return {
        type: ApplicationActionTypes.Current_Component,
        payload: NavigationPaths.PortFolio
    };
}