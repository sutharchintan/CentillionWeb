import * as React from 'react';
import { IconButton, Theme, Grid, Paper, FormGroup,withStyles, Select, MenuItem, Button, CardMedia } from "@material-ui/core";
import { Phone } from "@material-ui/icons";
import * as ConatctUSLogo from "../../images/contact-us.jpg";
import * as videologo from "../../images/office.jpg";
import { phoneNumber } from '../../providers/phone-number-provider';
import * as INLogo from "../../images/IndiaFlag.png";
import { companyName } from '../../providers/comp-name-provider';
import { isMobile } from "react-device-detect";
import { centillionStyles } from "../styles/CentillionStyles";
/**
* interface to define properties for contact us 
*/
interface Props {

    currentTheme: Theme;

    classes: any;
}

/**
 * export class for contact us 
 */
class ContactUsComponent extends React.Component<Props> {

    render() {
         const { classes } = this.props;      
        return (
            <div className={classes.main_div}>
            <div className={classes.hide_div}></div>
            {/* contact us first div */}
                <Grid container  >
                    <Grid item xs={12} sm={3} md={3} lg={3} className={classes.contactus_firstdiv}>
                        <h2>Chintan Suthar</h2>
                        <h4></h4><Grid item xs={12} className={classes.contactus_firstdiv_h4}>
                            <IconButton>
                                <img src={INLogo} className={classes.contactus_firstdiv_image}>
                                </img>
                            </IconButton><a> {phoneNumber}</a>
                        </Grid>
                    </Grid>
                    <Grid item xs={12} sm={9} md={9} lg={9} className={classes.contactus_firstdiv_imgGrid}>
                        <img src={ConatctUSLogo} className={classes.contactus_firstdiv_grid_image}></img>
                    </Grid >
                </Grid>
                {/* contact us second div */}
                <Grid container spacing={24} className={classes.contactus_seconddiv_padding}>
                    <Grid item xs={12} sm={12} md={6} lg={6}>
                        <h2 className={classes.contactus_seconddiv_color}>You have an idea or project we can help with?</h2>
                        <Paper>
                            <FormGroup>
                                <Grid container>
                                    <Grid item xs={6} className={classes.contactus_seconddiv_formgrp_grid}>
                                        <input placeholder="Your Name" className={classes.contactus_seconddiv_formgrp_input}></input>
                                    </Grid>
                                    <Grid item xs={6} className={classes.contactus_seconddiv_formgrp_grid}>
                                        <input placeholder="Your Email" className={classes.contactus_seconddiv_formgrp_input}></input>
                                    </Grid>
                                    <Grid item xs={6} className={classes.contactus_seconddiv_formgrp_grid}>
                                        <input placeholder="Company" className={classes.contactus_seconddiv_formgrp_input}></input>
                                    </Grid>
                                    <Grid item xs={6} className={classes.contactus_seconddiv_formgrp_grid}>
                                        <input placeholder="Phone Number" className={classes.contactus_seconddiv_formgrp_input}></input>
                                    </Grid>
                                    <Grid item xs={12} className={classes.contactus_seconddiv_formgrp_grid}>
                                        <Select className={classes.contactus_seconddiv_formgrp_select} value="Select Your budet">
                                            <MenuItem value="Select Your budet" selected> Select Your budget</MenuItem>
                                            <MenuItem value="Less than 10000 USD" >Less than 10000 USD </MenuItem>
                                            <MenuItem value="10000USD - 20000 USD">10000USD - 20000 USD </MenuItem>
                                            <MenuItem value="20000 USD - 30000 USD">20000 USD - 30000 USD </MenuItem>
                                            <MenuItem value="30000 USD - 40000 USD">30000 USD - 40000 USD </MenuItem>
                                            <MenuItem value="Greater than 40000 USD">Greater than 40000 USD </MenuItem>
                                        </Select>
                                    </Grid>
                                    <Grid item xs={12} className={classes.contactus_seconddiv_formgrp_grid}>
                                        <textarea placeholder="Share your thoughts on your project" className={classes.contactus_seconddiv_formgrp_txtarea}></textarea>
                                    </Grid>
                                    <Grid item xs={12} className={classes.contactus_seconddiv_formgrp_grid2}>
                                        <Button color="inherit" className={classes.contactus_seconddiv_formgrp_grid2_btn}>
                                            Send us your inquiry
                                             </Button>
                                    </Grid>
                                </Grid>
                            </FormGroup>
                        </Paper>
                    </Grid>
                    <Grid item xs={12} sm={12} md={6} lg={6}>
                        <h2 className={classes.contactus_seconddiv_formgrp_grid3_h2}>Understand us Better</h2>
                        <hr className={classes.hr_border}></hr>
                        <h4 className={classes.contactus_seconddiv_formgrp_grid3_h2}>Watch this Video To Know {companyName}</h4>
                        <Paper className={classes.contactus_seconddiv_formgrp_grid3_formgrp}>
                            <FormGroup className={classes.contactus_seconddiv_formgrp_grid3_formgrp}>
                                <CardMedia image={videologo} className={classes.contactus_seconddiv_formgrp_grid3_formgrp}></CardMedia>
                            </FormGroup>
                        </Paper>
                    </Grid>
                </Grid>
            </div>
        );
    }
}

export const ContactUsComponentWithStyles = withStyles(centillionStyles as any, { withTheme: true })(ContactUsComponent)

