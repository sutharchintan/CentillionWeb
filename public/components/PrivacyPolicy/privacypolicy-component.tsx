import * as React from 'react';
import { IconButton, Theme, Grid, Paper, FormGroup, withStyles, Select, MenuItem, Button, CardMedia } from "@material-ui/core";
import { phoneNumber } from '../../providers/phone-number-provider';
import { companyName } from '../../providers/comp-name-provider';
import * as  privacypolicyLogo from "../../images/privacy_policy.jpg";
import { centillionStyles } from "../styles/CentillionStyles";
/**
* interface to define properties for privacy policy 
*/
interface Props {

    currentTheme: Theme;

    classes: any;
}

/**
 * export class for Privacy Policy 
 */
class PrivacyPolicyComponent extends React.Component<Props> {


    render() {
        const { classes } = this.props;

        return (
            <div className={classes.main_div}>
                <div className={classes.hide_div}></div>
                <Grid container>
                    <Grid item xs={12} sm={12} md={12} lg={12} className={classes.contactus_firstdiv_imgGrid}>
                        <img src={privacypolicyLogo} className={classes.contactus_firstdiv_grid_image}></img>
                    </Grid >
                </Grid>
                <Grid container spacing={24} className={classes.footer_seconddiv_padding}>
                    <Grid item xs={12} sm={12} md={12} lg={12}>
                        <p>Your privacy is important to us. As part of our efforts to facilitate and make your experience with this website as user-friendly and productive as possible, we may collect and use certain information you provide to us.</p>
                        <p>This Privacy Policy addresses the collection, use and disclosure of information that we may gather during your use of this website.</p>
                        <p>This Privacy Policy may change from time to time. We will notify you of any material changes by publishing the new Privacy Policy on this website.</p>
        <p>{companyName}(India) is referred to in this Privacy Policy as “{companyName}”, “we”, “our” and “us” and persons accessing this website are referred to as “you.”</p>
                        <p style={{fontWeight:600}}>This Privacy Policy covers the following topics:</p>
                        <p style={{fontWeight:600}}>1. What does this Privacy Policy apply to?</p>
                        <p style={{fontWeight:600}}>2. hat information do we collect?</p>
                        <p style={{fontWeight:600}}>3. How do we collect information?</p>
                        <p style={{fontWeight:600}}>4. What is our legal basis for collecting Personal Data?</p>
                        <p style={{fontWeight:600}}>5. How do we use your Personal Data?</p>
                        <p style={{fontWeight:600}}>6. How and with whom do we share your Personal Data?</p>
                        <p style={{fontWeight:600}}>7. How long do we keep your Personal Data?</p>
                        <p style={{fontWeight:600}}>8. Your rights with respect to your Personal Data</p>
                        <p style={{fontWeight:600}}>9. Our opt-in/opt-out policy</p>
                        <p style={{fontWeight:600}}>10. How do you change or delete your information?</p>
                        <p style={{fontWeight:600}}>11. International transfer of Personal Data</p>
                        <p style={{fontWeight:600}}>12. How do we safeguard your Personal Data?</p>
                        <p style={{fontWeight:600}}>13. "Do Not Track" signals</p>
                        <p style={{fontWeight:600}}>14. Children’s privacy</p>
                        <p style={{fontWeight:600}}>15. Changes to this Privacy Policy</p>
                        <p style={{fontWeight:600}}>16. How to contact us</p>
                        <p style={{fontWeight:800}}>PLEASE REVIEW THIS PRIVACY POLICY AND THE TERMS OF USE CAREFULLY. IF YOU DO NOT UNDERSTAND OR DO NOT AGREE TO BE BOUND BY THE TERMS OF THIS PRIVACY POLICY AND THE TERMS OF USE, YOU SHOULD NOT ACCESS OR USE THIS WEBSITE AND YOU SHOULD NOT SUBMIT YOUR PERSONAL DATA TO US.</p>
                        <p style={{fontWeight:600}}>1. What does this Privacy Policy apply to?</p>
                        <p>This Privacy Policy applies to our data collection practices. This Privacy Policy applies only to this website. This Privacy Policy does not apply to any websites managed, maintained, and/or hosted by our affiliates or third parties that you may visit via a link on this website or on a third-party website. We do not control the privacy policies of other websites to which we may provide hyperlinks.</p>
                        <p style={{fontWeight:600}}>2. What information do we collect?</p>
                        <p><span style={{fontWeight:600}}>Personal Data.</span>As you interact with this website, we may collect and use personal data from you. We use the term “Personal Data” to refer to any information that identifies or can be used to identify you.</p>
                        <p>We may collect the following Personal Data when you submit your details to us:</p>
                        <p>Full name</p>
                        <p>Email address</p>
                        <p>City, country and state</p>
                        <p>Your company’s name</p>
                        <p>Company size</p>
                        <p>Job title</p>
                        <p>Your digital identity, such as, the manufacturer and model of the device which you use to access this website; Internet Service Provider (ISP); Internet Protocol (“IP”) address; browser type; and operating system</p>
                        <p>Metadata, such as, location; cookies; access times and dates; referring/exit pages; clickstream data; visited pages; the time spent on those pages or interacting with certain portions of this website; information you search for on this website.</p>
                        <p><span style={{fontWeight:600}}>Sensitive Personal Data.</span>We use the term “Sensitive Personal Data” to refer to a smaller subset of Personal Data which is considered more sensitive to the individual, such as: race and ethnic origin, political opinions, religious or philosophical beliefs, trade-union membership, genetic or biometrical information, physical or mental health information, medical insurance data, or sexual orientation.</p>
                        <p style={{fontWeight:800}}>WE DO NOT COLLECT OR USE, AND WE REQUEST THAT YOU DO NOT PROVIDE TO US, ANY SENSITIVE PERSONAL DATA.</p>
                        <p style={{fontWeight:600}}>3. How do we collect information?</p>
                        <p>We obtain information about you from a variety of sources, including you, your interaction with this website, and third parties. Such information may include any or all items listed in Section 2 above.</p>
                        <p><span style={{fontWeight:600}}>Information you provide to us.</span>If you use our website or communicate with us (by phone, chat, email, social media or in person), you may be required to provide us certain Personal Data, when you:</p>
                        <p>Fill in forms on our website, post material or apply for a job at {companyName}</p>
                        <p>Ask a question about our services</p>
                        <p>Respond to surveys that we might ask you to complete for research purposes</p>
                        <p>Search queries on our website</p>
                        <p>If you do not provide us with Personal Data, your ability to use certain functions of this website may be limited.</p>
                        <p><span style={{fontWeight:600}}>Information we collect from your use of this website and third parties. </span>The information relating to your digital identity is collected automatically by our servers when you access this website. The information we collect is statistical data and may or may not include Personal Data, however we may maintain it or associate it with Personal Data we collect in other ways or receive from third parties to allow us to improve our service, including by enabling us to:</p>
                        <p>Estimate the number of users of this website</p>
                        <p>Store information about your preferences, allowing us to customize your experience on this website</p>
                        <p>Speed up your searches</p>
                        <p>Recognize you when you return to this website</p>
                        <p>The technologies we use for this automatic data collection may include</p>
                        <p><span style={{fontWeight:600}}>Cookies. </span>A cookie is a small file placed on the hard drive of a computer. Cookies help to optimize a returning website visitor’s experience during website navigation. If you prefer that we do not use cookies while you browse our website, you have the option of rejecting the use of cookies by checking the “X” in the upper right corner of the privacy notification when prompted on this website or to change your browser settings so that cookie use will be disabled. However, if you close the privacy notification box or change your browser settings, your ability to access the full functionality of this website may be affected. Unless you have rejected cookies on this website or adjusted your browser setting so that it will refuse cookies, our system will issue cookies when you direct your browser to our services. For information on how to disable the use of cookies, please refer to your browser’s “Tools” section, or any other similar heading. You can also adjust your standard browser settings to turn off cookies for all websites that you may visit in the future.</p>
                        <p>We may also collect information about you from your interaction with and use of certain functionalities on this website and third-party websites:</p>
                        <p><span style={{fontWeight:600}}>Public Forums. </span>Please note that if you use any blog, comment posting feature or other public communication service or forum or post any information available for viewing by other users, any of the information that you share will be visible to other users. We are not responsible for the manner in which the Personal Data that you decide to share in this way will be used by other users.</p>
                        <p><span style={{fontWeight:600}}>Social Media. </span>We operate and maintain networking pages on social media platforms such as Facebook, Twitter, and LinkedIn. We may import comments and posts from these third-party platforms to this website. If you post to any of our networking pages on third-party social media platforms, you are providing information to general public and do so at your own risk. We may use these postings on this website without notice or compensation to you. Please visit the privacy policies of any third-party social media platforms before posting to our pages there.</p>
                        <p><span style={{fontWeight:600}}>Information we collect from other sources. </span>We may collect information about you from third parties and publicly available sources. We may also collect information about you if you attend one of our trade shows or events.</p>
                        <p style={{fontWeight:600}}>6. What is our legal basis for collecting Personal Data?</p>
                        <p>Whenever we collect Personal Data from you, we may do so on one of more of the following legal bases:</p>
                        <p><span style={{fontWeight:600}}>Consent. </span>When you give us consent for our use of your Personal Data for a specific purpose.</p>
                        <p><span style={{fontWeight:600}}>Contract. </span>When it is necessary for a contract you have with us.</p>
                        <p><span style={{fontWeight:600}}>Legal obligation. </span>When it is necessary for us to comply with the law (not including contractual obligations).</p>
                        <p><span style={{fontWeight:600}}>Vital interests. </span>When it is necessary to protect someone’s life.</p>
                        <p><span style={{fontWeight:600}}>Public task. </span>When it is necessary for us to perform a task in the public interest or for our official functions, and the task or function has a clear basis in law.</p>
                        <p><span style={{fontWeight:600}}>Legitimate interests. </span>When it is necessary for our legitimate interests or the legitimate interests of a third party.</p>
                        <p style={{fontWeight:600}}>5. How do we use your Personal Data?</p>
                        <p>We will use Personal Data only in ways that are compatible with the purposes for which it was collected. We will take reasonable steps to ensure that Personal Data is relevant to its intended use, accurate, complete, and current.</p>
                        <p>We may combine Personal Data about you that we have collected from various sources to help analyze sales opportunities.</p>
                        <p>We may use information about you to provide, maintain, personalize and improve our services.</p>
                        <p>We may use information we collect to send you news and information about our services and to communicate with you about our services, including marketing and administrative messages.</p>
                        <p>You may opt out of receiving promotional emails or text messages from us by following the instructions in those emails or text messages. If you opt out, we may still send you non-promotional communications, such as messages about your account or our ongoing business relations.</p>
                        <p>We may also use information about you:</p>
                        <p>to track and analyze trends and usage in connection with our services</p>
                        <p>to protect our rights or property</p>
                        <p>to verify accuracy of information</p>
                        <p>to verify your identity</p>
                        <p>to investigate and prevent fraud or other illegal activities</p>
                        <p>to carry out our obligations and enforce our rights arising from any contracts entered into between you and us, including for billing and collection</p>
                        <p>to notify you about changes to this website, our services or any other services</p>
                        <p>for any other purpose disclosed to you in connection with our services that is consistent with the legal bases stated in Section 4 above.</p>
                        <p style={{fontWeight:600}}>6. How and with whom do we share your Personal Data?</p>
                        <p>We may share your Personal Data for any lawful purpose to which you have expressly consented or directed, or to fulfill the purpose for which you provided the Personal Data to us that is consistent with the legal bases stated in Section 4 above.</p>
                        <p>We may employ third parties to facilitate this website; perform maintenance services, database management, web analytics and improvement of the features or functionality.</p>
                        <p>It is our policy to only share Personal Data with contractors, service providers and other third parties who are bound by contractual obligations to keep Personal Data secure and confidential and use it only for the purposes for which we disclose it to them.</p>
                        <p><span style={{fontWeight:600}}>Business Transfers. </span>As we continue to grow and develop our business, we may buy, sell, or share assets in connection with a merger, acquisition, reorganization or bankruptcy. In such transactions, your Personal Data may be a transferred business asset.</p>
                        <p style={{fontWeight:600}}>7. How long do we keep your Personal Data?</p>
                        <p>We may retain your Personal Data for a period of time consistent with the original purpose of collection. We will keep your Personal Data for no longer than reasonably necessary for your use of our services and for a reasonable period of time thereafter. If you are a customer, we may delete your Personal Data from our systems within sixty (60) days after termination of your agreement with us. We also may retain your Personal Data during the time needed for us to pursue our legitimate business interests, conduct audits, comply with our legal obligations, resolve disputes and enforce our agreements.</p>
                        <p style={{fontWeight:600}}>Your rights with respect to your Personal Data</p>
                        <p>Data protection laws, including the EU General Data Protection Regulation (“GDPR”), provide you with certain rights in connection with the Personal Data that you have shared with us.</p>
                        <p style={{fontWeight:600}}>You have the following rights:</p>
                        <p><span style={{fontWeight:600}}>The right to be informed. </span>You are entitled to be informed of the use of your Personal Data.</p>
                        <p><span style={{fontWeight:600}}>The right of access. </span>You have the right to request a copy of your Personal Data which we hold about you.</p>
                        <p><span style={{fontWeight:600}}>The right of correction. </span>You have the right to request correction of your Personal Data if it is found to be inaccurate or out of date.</p>
                        <p><span style={{fontWeight:600}}>The right to be forgotten. </span>You have the right to request us, at any time, to delete your Personal Data from our servers and to erase your Personal Data when it is no longer necessary for us to retain such data. Note, however, that deletion of your Personal Data will likely impact your ability to use this website or our services.</p>
                        <p><span style={{fontWeight:600}}>The right to object (opt-out). </span>You have the right to opt out of certain uses of your Personal Data, such as direct marketing.</p>
                        <p><span style={{fontWeight:600}}>The right to data portability. </span>You have the right to a “portable” copy of your Personal Data that you have submitted to us. Generally, this means your right to request that we move, copy or transmit your Personal Data stored on our servers to another service provider’s servers.</p>
                        <p><span style={{fontWeight:600}}>The right to refuse to be subjected to automated decision making, including profiling. </span>You have the right not to be subjected to a decision and insist on human intervention if the decision is based on automated processing and produces a legal effect or a similarly significant effect on you.</p>
                        <p><span style={{fontWeight:600}}>The right to lodge a complaint with a supervisory authority.</span></p>
                        <p style={{fontWeight:600}}>9. Our opt-in/opt-out policy</p>
                        <p>By providing an email address on this website, you agree that we may contact you in the event of a change in this Privacy Policy, to provide you with any service-related notices, or to provide you with information about our events, invitations, or related educational information.</p>
                        <p>For purposes of this Privacy Policy, “opt-in” is generally defined as any affirmative action by a user to submit or receive information, as the case may be.</p>
                        <p>We currently provide the following opt-out opportunities:</p>
                        <p>At any time, you can follow a link provided in offers, newsletters or other email messages (except for service notice emails) received from us to unsubscribe from receiving these communications from us.</p>
                        <p>At any time, you can contact us at {companyName} the address provided below to revoke your consent to the sharing your Personal Data.</p>
                        <p>Notwithstanding anything else in this Privacy Policy, please note that we always reserve the right to contact you in the event of a change in this Privacy Policy, or to provide you with any service related notices.</p>
                        <p style={{fontWeight:600}}>10. How do you change or delete your information?</p>
                        <p>You may update or correct information about yourself by emailing us at {companyName}. We may retain an archived copy of your records as required by law, to comply with our legal obligations, to resolve disputes, to enforce our agreements or for other legitimate business purposes.</p>
                        <p style={{fontWeight:600}}>11. International transfer of Personal Data</p>
                        <p>We are committed to complying with applicable laws, regulations and mandatory government standards regarding the protection of Personal Data.</p>
                        <p>Since we are a global organization, Personal Data and any additional information submitted may be used globally in connection with employment, business processes within {companyName}, or communicating with our clients.</p>
                        <p>Therefore, Personal Data may be transferred to other {companyName} entities worldwide, where it will be processed in accordance with this Privacy Policy and laws that are applicable in each country.</p>
                        <p>If we transfer your Personal Data out of your jurisdiction, we will implement suitable safeguards to ensure that your Personal Data is protected. It is our policy to, where required by applicable laws, execute a Data Privacy and Data Security Addendum with all third parties with whom we may share Personal Data.</p>
                        <p>We require our third-party service providers to agree to terms and conditions relating to the data privacy, data security, data protection and transfer of Personal Data consistent with the applicable laws.</p>
                        <p style={{fontWeight:600}}>GDPR</p>
                        <p>The GDPR is a new comprehensive data protection law (in effect May 25, 2018) in the EU that regulates the processing of personal data and expands the privacy rights of EU individuals. {companyName} complies with the principles promulgated by the GDPR. For more information about GDPR please visit the GDPR portal at https://www.eugdpr.org/.</p>
                        <p style={{fontWeight:600}}>12. How do we safeguard your Personal Data?</p>
                        <p>We are committed to safeguarding your information. We employ administrative, physical, and electronic measures designed to protect your information from unauthorized access. We implement appropriate technical and organizational measures to ensure a level of security appropriate for the risk, taking into account technological reality, cost, the scope, context and purposes of processing weighted against the severity and likelihood that the processing could threaten individual rights and freedoms. For example, we use commercially reasonable security measures such as encryption, firewalls, and transport layer security (TLS) or hypertext transfer protocol secure (HTTPS) to protect Personal Data.</p>
                        <p>Please note that no security system is impenetrable. Accordingly, we do not guarantee the security of our databases, nor that information you supply will not be intercepted while being transmitted to us over the Internet or other network. You transmit any information to us at your own risk. We are not responsible for circumvention of any privacy settings or security measures contained on or within our services.</p>
                        <p>We will make any legally required disclosures of any breach of the security, confidentiality, or integrity of your unencrypted electronically stored Personal Data to you via email or conspicuous posting through this website in the most expedient time possible and without unreasonable delay, as consistent with the legitimate needs of law enforcement or any measures necessary to determine the scope of the breach and restore the reasonable integrity of the data system.</p>
                        <p style={{fontWeight:600}}>13. "Do Not Track" signals</p>
                        <p>Some Web browsers may be configured to send Do Not Track signals to websites, or users may use similar mechanisms, to indicate a user’s preference that certain web technologies not be used to track the user’s online activity. This website does not accept or process such Do Not Track signals or similar mechanisms.</p>
                        <p style={{fontWeight:600}}>14. Children’s privacy</p>
                        <p>We are in compliance with the requirements of <span style={{fontWeight:600}}>Children’s Online Privacy Protection Act (COPPA)</span> and do not collect any information from anyone under 13 years of age. Our website and services are all intended for individuals who are at least 13 years old or older. If you are under 13, do not use or provide any information on or through this website. If we learn that we have collected or received Personal Data from a child under 13 without parental consent, we will delete that information. If you are a parent or guardian or otherwise believe we might have any information from or about a child under 13, please contact us so that we can delete the child’s information. We will never knowingly accept, collect, maintain or use any information from a child under the age of 13. If a child whom we know to be under the age of 13 sends Personal Data to us online, we will only use that information to respond directly to that child or notify parents.</p>
                        <p>In case of dispute, please submit an email to {companyName} or call us at our main office number and ask for the legal department to register a dispute.</p>
                        <p style={{fontWeight:600}}>15. Changes to this Privacy Policy.</p>
                        <p>Please review our Privacy Policy periodically to be sure you are familiar with the most current version.</p>
                        <p>We will notify our users when we make any significant changes to our Privacy Policy that affect the use of any Personal Data we collect. We will not make new use of any Personal Data which we gathered from individual users prior to any significant change in our Privacy Policy without first obtaining the user’s consent for any new uses.</p>
                    </Grid>
                </Grid>
            </div>
        );
    }
}

export const PrivacyPolicyComponentWithStyles = withStyles(centillionStyles as any, { withTheme: true })(PrivacyPolicyComponent)

