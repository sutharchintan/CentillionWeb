import {MailModel} from "../../public/models/MailModel";
import axios, { AxiosRequestConfig, AxiosResponse } from "axios";
import { BaseApi } from "./base-api";

/**
 * mail api
 */
class MailApi extends BaseApi {
    
    /**
     * initialize the mail api 
     */
    constructor() {
        super("mail/");
    }

    /**
     * send data to email
     * @param EmailData the order email data
     */
    senEmail(emailData: MailModel): Promise<any> {
        return this.resolvePostPromise(this.getUrl("SendMail"), emailData);
    }
}

export const mailApi = new MailApi();