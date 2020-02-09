import { MailModel } from "../models/MailModel";

/**
 * order email data provider 
 */
 class EmailProvider {
     
    /**
     * get order email data
     */
    getEmailData(mailmodel: MailModel): MailModel {
        const returnValue = new MailModel();
        returnValue.From = mailmodel.From;
        returnValue.Subject = mailmodel.Subject;
        returnValue.Body = mailmodel.Body;
        returnValue.To = mailmodel.To;
        
        return returnValue;
    }
}
export const emailProvider = new EmailProvider();