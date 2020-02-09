import axios, { AxiosRequestConfig } from "axios";
import { urlProvider } from "../providers/url-provider";

/**
 * class for base api
 */
export class BaseApi {

    /**
     * stores the base url
     */
    private baseUrl = urlProvider.apiUrl;

    /**
     * defines the api url
     */
    protected apiUrl = undefined;

    /**
     * initialize the base api
     * @param controllerName 
     */
    constructor(controllerName?: string) {
        if (controllerName) {
            this.apiUrl = this.baseUrl + controllerName;
        }
    }

    /**
     * get data by token
     * @param url the url to get data
     */
    protected getData(urlToGetData: string): Promise<any> {
        return new Promise<any>((resolve) => {
            axios.get(urlToGetData, this.getRequestConfiguration()).then(response => {
                resolve(response);
            }).catch(error => {
                resolve(undefined);
            });
        });
    }

    /**
     * post data by token
     * @param urlToPostData the url to post data 
     * @param data the data to be fetched on server as body
     */
    protected postData(urlToPostData: string, data: any): Promise<any> {
        return new Promise<any>((resolve) => {
            axios.post(urlToPostData, data, this.getRequestConfiguration()).then(response => {
                resolve(response);
            }).catch(error => {
                resolve(undefined);
            });
        });
    }

    /**
    * put data by token
    * @param urlToPostData the url to post data 
    * @param data the data to be fetched on server as body
    */
    protected putData(urlToPutData: string, data: any): Promise<any> {
        return new Promise<any>((resolve) => {
            axios.put(urlToPutData, data, this.getRequestConfiguration()).then(response => {
                resolve(response);
            }).catch(error => {
                resolve(undefined);
            });
        });
    }

    /**
     * delete data by token
     * @param urlToDeleteData the url to delete data 
     */
    protected deleteData(urlToDeleteData: string): Promise<any> {
        return new Promise<any>((resolve) => {
            axios.delete(urlToDeleteData, this.getRequestConfiguration()).then(response => {
                resolve(response);
            }).catch(error => {
                resolve(undefined);
            });
        });
    }

    /**
     * resolve post promise
     * @param url 
     * @param data 
     */
    protected resolvePostPromise<T>(url: string, data: any): Promise<T> {
        return new Promise<T>((resolve) => {
            this.postData(url, data).then((response) => {
                if (response) {
                    resolve(response.data);
                } else {
                    resolve(undefined);
                }
            });
        });
    }

    /**
     * resolve get promise
     * @param url 
     */
    protected resolveGetPromise<T>(url: string): Promise<T> {
        return new Promise<T>((resolve) => {
            this.getData(url).then((response) => {
                if (response) {
                    resolve(response.data);
                } else {
                    resolve(undefined);
                }
            });
        });
    }

    /**
     * get request configuration
     */
    private getRequestConfiguration(): AxiosRequestConfig {
        const axiosRequestConfig = {} as AxiosRequestConfig;
        axiosRequestConfig.headers = {
            'Content-Type': "application/json",
            "accept": "application/json",
            "Access-Control-Allow-Origin": "*"
            //'Access-Control-Allow-Origin': "*"
        };
        return axiosRequestConfig;
    }

    /**
     * get form data request
     */
    protected getFormDataAxiosRequest(): AxiosRequestConfig {
        const requestConfiguration = {} as AxiosRequestConfig;
        requestConfiguration.headers = {
            "Content-Type": "application/x-www-form-urlencoded",
            "accept": "application/json",
        };

        (requestConfiguration as any).json = true;
        return requestConfiguration;
    }

    /**
     * get form data
     * @param command the command action name 
     * @param data the data to send for filter
     */
    protected getFormRequestData(command: string, data: string): URLSearchParams {
        const urlSearchParams = new URLSearchParams();
        urlSearchParams.append("Command", command);
        urlSearchParams.append("Data", data);
        return urlSearchParams;
    }

    /**
     * return the complete url for action to execute
     * @param methodName 
     */
    protected getUrl(methodName: string): string {
        return this.apiUrl + methodName;
    }
}