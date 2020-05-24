import { ApplicationActionTypes } from "../enums/ApplicationActionTypes";
import { NavigationPaths } from "../enums/NavigationPaths";

/**
 * navigate to site map
 */
export const navigateToSitemapAction = () =>{
    return {
        type: ApplicationActionTypes.Current_Component,
        payload: NavigationPaths.Sitemap
    };
}