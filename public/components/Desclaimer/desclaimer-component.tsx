import * as React from 'react';
import { IconButton, Theme, Grid, Paper, FormGroup, withStyles, Select, MenuItem, Button, CardMedia } from "@material-ui/core";
import { phoneNumber } from '../../providers/phone-number-provider';
import { companyName } from '../../providers/comp-name-provider';
import * as desclaimerLogo from "../../images/desclaimer.jpg";
import { centillionStyles } from "../styles/CentillionStyles";

import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
/**
* interface to define properties for desclaimer 
*/
interface Props {

    currentTheme: Theme;

    classes: any;
}

/**
 * export class for desclaimer 
 */
class DesclaimerComponent extends React.Component<Props> {


    render() {
        const { classes } = this.props;

        return (
            <div className={classes.main_div}>
                <div className={classes.hide_div}></div>
                <Grid container>
                    <Grid item xs={12} sm={12} md={12} lg={12} className={classes.contactus_firstdiv_imgGrid}>
                        <img src={desclaimerLogo} className={classes.contactus_firstdiv_grid_image}></img>
                    </Grid >
                </Grid>
                <Grid container spacing={24} className={classes.desclaimer_seconddiv_padding}>
                    <Grid item xs={12} sm={12} md={12} lg={12}></Grid>
                    <h3>Find us Right Now</h3>
                    <p>Best {companyName} is a Ahmedabad based IT company, Our core expertise lies in Software Development, Website Design & Development, Mobile App Development, E-commerce Website Solutions and Web Marketing Services. While this website may showcase client logos & projects, these materials are copyright to their respective owners and Best {companyName} does not suggest any ownership over these logos or project, implied or otherwise unless specifically mentioned.</p>
                    <h3>No Warranties</h3>
                    <p>This website is provided "as is" without any representations or warranties, express or implied. Best {companyName} makes no representations or warranties in relation to this website or the information and materials provided on this website. Without prejudice to the generality of the foregoing paragraph, Best {companyName} does not warrant that: this website will be constantly available, or available at all; or the information on this website is complete, true, accurate or non-misleading.</p>
                    <h3>Limitations of liability</h3>
                    <p>This website is provided "as is" without any representations or warranties, express or implied. Best {companyName} makes no representations or warranties in relation to this website or the information and materials provided on this website. Without prejudice to the generality of the foregoing paragraph, Best {companyName} does not warrant that: this website will be constantly available, or available at all; or the information on this website is complete, true, accurate or non-misleading.</p>
                    <h3>Reasonableness</h3>
                    <p>By using this website, you agree that the exclusions and limitations of liability set out in this website disclaimer are reasonable. If you do not think they are reasonable, you must not use this website.</p>
                    <h3>Other Parties</h3>
                    <p>You accept that, as a limited liability entity, Best {companyName} has an interest in limiting the personal liability of its officers and employees. You agree that you will not bring any claim personally against Best {companyName} officers or employees in respect of any losses you suffer in connection with the website. You agree that the limitations of warranties and liability set out in this website disclaimer will protect Best {companyName} officers, employees, agents, subsidiaries, successors, assigns and sub-contractors as well as Best {companyName}.</p>
                 
                    <Grid container>
                    <h3>Services</h3>
                        <ExpansionPanel className={classes.aboutus_expension_width}>
                            <ExpansionPanelSummary
                                expandIcon={<ExpandMoreIcon className="color-white" />}
                                aria-controls="panel1a-content"
                                id="panel1a-header"
                                className={classes.aboutus_expensionsummary}>
                                <Typography className={classes.aboutus_expensionsummary_typography}>Custom Software Developement</Typography>
                            </ExpansionPanelSummary>
                            <ExpansionPanelDetails>
                                <Grid container>
                                    <Grid item xs={12} sm={12} md={12} lg={12} className={classes.padding_5}>
                                        <Typography className={classes.aboutus_expensiondetails_grid_typograpgy}>Product Developement</Typography>
                                        <Typography className={classes.aboutus_expensiondetails_grid_typograpgy}>SaaS Development</Typography>
                                        <Typography className={classes.aboutus_expensiondetails_grid_typograpgy}>CRM Development</Typography>
                                        <Typography className={classes.aboutus_expensiondetails_grid_typograpgy}>BI App Development</Typography>
                                        <Typography className={classes.aboutus_expensiondetails_grid_typograpgy}>Database Management Solutions</Typography>
                                        <Typography className={classes.aboutus_expensiondetails_grid_typograpgy}>Software Consulting</Typography>
                                        <Typography className={classes.aboutus_expensiondetails_grid_typograpgy}>Integration Solutions</Typography>
                                        <Typography className={classes.aboutus_expensiondetails_grid_typograpgy}>Big Data Solutions</Typography>
                                    </Grid>
                                </Grid>
                            </ExpansionPanelDetails>
                        </ExpansionPanel>
                        <ExpansionPanel className={classes.aboutus_expension_width}>
                            <ExpansionPanelSummary
                                expandIcon={<ExpandMoreIcon className="color-black" />}
                                aria-controls="panel2a-content"
                                id="panel2a-header">
                                <Typography className={classes.aboutus_expensionsummary_typography_second}>Mobile Application Developement</Typography>
                            </ExpansionPanelSummary>
                            <ExpansionPanelDetails className={classes.aboutus_expensiondetails_second}>
                                <Grid container>
                                    <Grid item xs={12} sm={12} md={12} lg={12} className={classes.padding_5}>
                                        <Typography className={classes.aboutus_expensionsummary_grid_typography}>Android Application Developement</Typography>
                                        <Typography className={classes.aboutus_expensionsummary_grid_typography}>iPhone Application Development</Typography>
                                        <Typography className={classes.aboutus_expensionsummary_grid_typography}>iPad Application Development</Typography>
                                        <Typography className={classes.aboutus_expensionsummary_grid_typography}>Windows Mobile App Development</Typography>
                                        <Typography className={classes.aboutus_expensionsummary_grid_typography}>Hybrid Mobile App Development</Typography>
                                        <Typography className={classes.aboutus_expensionsummary_grid_typography}>Enterprise Mobility Solutions</Typography>
                                        <Typography className={classes.aboutus_expensionsummary_grid_typography}>iPhone Games Development</Typography>
                                        <Typography className={classes.aboutus_expensionsummary_grid_typography}>iPad Games Development</Typography>
                                        <Typography className={classes.aboutus_expensionsummary_grid_typography}>iPad Social App Development</Typography>
                                        <Typography className={classes.aboutus_expensionsummary_grid_typography}>Android Games Development</Typography>
                                        <Typography className={classes.aboutus_expensionsummary_grid_typography}>iOS 7 Development</Typography>
                                    </Grid>
                                </Grid>
                            </ExpansionPanelDetails>
                        </ExpansionPanel>
                        <ExpansionPanel className={classes.aboutus_expension_width}>
                            <ExpansionPanelSummary
                                expandIcon={<ExpandMoreIcon className="color-white" />}
                                aria-controls="panel1a-content"
                                id="panel1a-header"
                                className={classes.aboutus_expensionsummary}>
                                <Typography className={classes.aboutus_expensionsummary_typography}>Web Desing & Developement</Typography>
                            </ExpansionPanelSummary>
                            <ExpansionPanelDetails>
                                <Grid container>
                                    <Grid item xs={12} sm={12} md={12} lg={12} className={classes.padding_5}>
                                        <Typography className={classes.aboutus_expensiondetails_grid_typograpgy}>eCommerce Development</Typography>
                                        <Typography className={classes.aboutus_expensiondetails_grid_typograpgy}>Amazon Webstore Development</Typography>
                                        <Typography className={classes.aboutus_expensiondetails_grid_typograpgy}>Custom eCommerce Development</Typography>
                                        <Typography className={classes.aboutus_expensiondetails_grid_typograpgy}>Drupal UberCart Development</Typography>
                                        <Typography className={classes.aboutus_expensiondetails_grid_typograpgy}>OpenCart Development</Typography>
                                        <Typography className={classes.aboutus_expensiondetails_grid_typograpgy}>ZenCart Development</Typography>
                                        <Typography className={classes.aboutus_expensiondetails_grid_typograpgy}>Shopify Development</Typography>
                                        <Typography className={classes.aboutus_expensiondetails_grid_typograpgy}>Magento Extension Development</Typography>
                                        <Typography className={classes.aboutus_expensiondetails_grid_typograpgy}>Know More About Magento</Typography>
                                        <Typography className={classes.aboutus_expensiondetails_grid_typograpgy}>Redesign Magento Store</Typography>
                                    </Grid>
                                </Grid>
                            </ExpansionPanelDetails>
                        </ExpansionPanel>
                        <ExpansionPanel className={classes.aboutus_expension_width}>
                            <ExpansionPanelSummary
                                expandIcon={<ExpandMoreIcon className="color-black" />}
                                aria-controls="panel2a-content"
                                id="panel2a-header">
                                <Typography className={classes.aboutus_expensionsummary_typography_second}>Support</Typography>
                            </ExpansionPanelSummary>
                            <ExpansionPanelDetails className={classes.aboutus_expensiondetails_second}>
                                <Grid container>
                                    <Grid item xs={12} sm={12} md={12} lg={12} className={classes.padding_5}>
                                        <Typography className={classes.aboutus_expensionsummary_grid_typography}>Tech Support</Typography>
                                        <Typography className={classes.aboutus_expensionsummary_grid_typography}>Web Hosting</Typography>
                                        <Typography className={classes.aboutus_expensionsummary_grid_typography}>Domain Registration</Typography>
                                    </Grid>
                                </Grid>
                            </ExpansionPanelDetails>
                        </ExpansionPanel>
                    </Grid>
                </Grid>
            </div>
        );
    }
}

export const DesclaimerComponentWithStyles = withStyles(centillionStyles as any, { withTheme: true })(DesclaimerComponent)

