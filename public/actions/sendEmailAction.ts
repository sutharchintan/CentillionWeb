import { mailApi } from "../rest-api/mail-api";
import { MailModel } from "../models/MailModel";

/**
 * send  email action
 */
export const sendEmailAction = (dataEmail: MailModel) => {
  return function (dispatcher) {
    const promise = mailApi.senEmail(dataEmail);
    promise.then((data) => {
      console.log("send schedule for later:");
      console.log(data);
    });
    return promise;
  };
}