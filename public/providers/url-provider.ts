import { ApplicationInformation } from "../utils/application-info";
import { EnvironmentTypes } from "../enums/environment-types";

/**
 * the url provider
 */
class UrlProvider {
    /**
     * defines the api url
     */
    apiUrl: string;
    
    /**
     * constructor for url provider
     */
    constructor() {
        switch (ApplicationInformation.Environment) {
            case EnvironmentTypes.Development:
                this.apiUrl = "http://localhost:3001/api/";            
                break;

            case EnvironmentTypes.Testing:
                //this.apiUrl = "http://myniftycart.com/webapi/api/";
                this.apiUrl = "https://niftycart.co/healthapi/api/";               
                break;
        }
    }
}
/**
 * the url provider
 */
export const urlProvider = new UrlProvider();