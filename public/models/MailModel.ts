/**
 * class for order email
 */
export class MailModel {
    /**
     * Stores the email address
     */
    email: string;

    /**
     * Stores the date
     */
    date: Date;

    /**
     * Stores the name
     */
    name: string;
    
    /**
     * Stores the contact number
     */
    contact: number;
    
    /**
    * defines from email recipient 
    */
    From: string;
    
    /**
     * defines to email recipient
     */
    To: string;
    
    /**
     * subject for email
     */
    Subject: string;
    
    /**
     * body of email
     */
    Body: string;
}