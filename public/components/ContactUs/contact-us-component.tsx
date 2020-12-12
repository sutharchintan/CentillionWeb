import * as React from 'react';
import { IconButton, Theme, Grid, Paper, FormGroup, withStyles, Select, MenuItem, Button, CardMedia } from "@material-ui/core";
import { Phone } from "@material-ui/icons";
import * as ConatctUSLogo from "../../images/contact-us.jpg";
import * as clientQuatationLogo from "../../images/Client_Quotation.jpg";
import * as videologo from "../../images/office.jpg";
import { phoneNumber } from '../../providers/phone-number-provider';
import * as INLogo from "../../images/IndiaFlag.png";
import { companyName } from '../../providers/comp-name-provider';
import { isMobile } from "react-device-detect";
import { centillionStyles } from "../styles/CentillionStyles";
import { DropDownMenu } from 'material-ui';
import "../../style.css";
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
    state = {
        name: "",
        email: "",
        company: "",
        phoneNumber: "",
        budget:  [
            {id: '0', name: 'Select Your budget'},
            {id: '1', name: 'Less than 10000 USD'},
            {id: '2', name: '10000USD - 20000 USD'},
            {id: '3', name: '20000 USD - 30000 USD'},
            {id: '4', name: '30000 USD - 40000 USD'},
            {id: '5', name: 'Greater than 40000 USD'}
          ],
        project: ""
    }
    
    /**
    * handle change of name
    */
    handleChangeName = (event) => {
        if (event && event.target) {
            this.state.name = event.target.value;
        }
    }
    /**
        * handle change of email
        */
    handleChangeEmail = (event) => {
        if (event && event.target) {
            this.state.email = event.target.value;
        }
    }
    /**
        * handle change of company
        */
    handleChangeCompany = (event) => {
        if (event && event.target) {
            this.state.company = event.target.value;
        }
    }
    /**
        * handle change of phoneNumber
        */
    handleChangePhoneNumber = (event) => {
        if (event && event.target) {
            this.state.phoneNumber = event.target.value;
        }
    }
    /**
    * handle change of budget
    */
    handleChangeBudget = (event) => {
        if (event && event.target) {
            this.state.budget = event.target.value;
        }
    }
    /**
     * handle change of project
     */
    handleChangeProject = (event) => {
        if (event && event.target) {
            this.state.budget = event.target.value;
        }
    }
  
    render() {
        const { classes } = this.props;
        const { budget } = this.state;

        let budgetlist = budget.length > 0
            && budget.map((item, i) => {
          return (
            <option key={i} value={item.id}>{item.name}</option>
          )
        }, this);
        return (
            <div className={classes.main_div}>
                <div className={classes.hide_div}></div>
                {/* contact us first div */}
                <Grid container>
                    <Grid item xs={12} sm={12} md={12} lg={12} className={classes.contactus_firstdiv_imgGrid}>
                        <img src={ConatctUSLogo} className={classes.contactus_firstdiv_grid_image}></img>
                    </Grid >
                </Grid>
                {/* contact us second div */}
                <Grid container spacing={24} className="margin-0">
                    <Grid item xs={12} sm={12} md={6} lg={6} className="height-500 padding-0 margin-0">
                    <CardMedia image={clientQuatationLogo} className="contact-images"> </CardMedia>
                        <Paper className="contact-sec-div">
                            <FormGroup>
                                <Grid container>
                                
                                    <Grid item xs={6} className="carrer-seconddiv-formgrp-grid">
                                        <input placeholder="Your Name" className={classes.contactus_seconddiv_formgrp_input} onChange={this.handleChangeName}></input>
                                    </Grid>
                                    <Grid item xs={6} className="carrer-seconddiv-formgrp-grid1">
                                        <input placeholder="Your Email" className={classes.contactus_seconddiv_formgrp_input}  onChange={this.handleChangeEmail}></input>
                                    </Grid>
                                    <Grid item xs={6} className="carrer-seconddiv-formgrp-grid">
                                        <input placeholder="Company" className={classes.contactus_seconddiv_formgrp_input} onChange={this.handleChangeCompany}></input>
                                    </Grid>
                                    <Grid item xs={6} className="carrer-seconddiv-formgrp-grid1">
                                        <input placeholder="Phone Number" className={classes.contactus_seconddiv_formgrp_input} onChange={this.handleChangePhoneNumber}></input>
                                    </Grid>
                                    <Grid item xs={12} className={classes.contactus_seconddiv_formgrp_grid_100}>
                                        <select className={classes.contactus_seconddiv_formgrp_select} onChange={this.handleChangeBudget}>
                                            {budgetlist}
                                        </select>
                                    </Grid>
                                    <Grid item xs={12} className={classes.contactus_seconddiv_formgrp_grid_100}>
                                        <textarea placeholder="Share your thoughts on your project" onChange={this.handleChangeProject} className={classes.contactus_seconddiv_formgrp_txtarea}></textarea>
                                    </Grid>
                                    <Grid item xs={12} className={classes.contactus_seconddiv_formgrp_grid2}>
                                        <Button color="inherit" className="contactus-seconddiv-formgrp-grid2-btn">
                                            Send us your inquiry
                                             </Button>
                                    </Grid>
                                </Grid>
                            </FormGroup>
                        </Paper>
                    </Grid>
                    <Grid item xs={12} sm={12} md={6} lg={6} className="height-500 height-325 bg-b7c500 padding-0 margin-0">
                    <h2 className="contactus-seconddiv-color">You have an idea or project we can help with?</h2>
                       
                    </Grid>
                </Grid>
            </div>
        );
    }
}

export const ContactUsComponentWithStyles = withStyles(centillionStyles as any, { withTheme: true })(ContactUsComponent)

