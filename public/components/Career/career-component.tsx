import * as React from 'react';
import { IconButton, Theme, Grid, Paper, FormGroup, withStyles, Select, MenuItem, Button, CardMedia } from "@material-ui/core";
import { phoneNumber } from '../../providers/phone-number-provider';
import { companyName } from '../../providers/comp-name-provider';
import * as careerLogo from "../../images/career.jpg";
import { centillionStyles } from "../styles/CentillionStyles";
import * as infrastructureLogo from "../../images/infrastructure.png";
import * as environmentLogo from "../../images/environment.png";
import * as exposureLogo from "../../images/exposure.png";
import * as cultureLogo from "../../images/culture.png";
/**
* interface to define properties for career 
*/
interface Props {

    currentTheme: Theme;

    classes: any;
}

/**
 * export class for career 
 */
class CareerComponent extends React.Component<Props> {
    state = {
        name: "",
        email: "",
        profile: "",
        phoneNumber: "",
        comments: "",
        year: [
            { id: '0', name: 'Year of Experience' },
            { id: '1', name: '0' },
            { id: '2', name: '1' },
            { id: '3', name: '2' },
            { id: '4', name: '3' },
            { id: '5', name: '4' },
            { id: '6', name: '5' }
        ],
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
        * handle change of profile
        */
    handleChangeProfile = (event) => {
        if (event && event.target) {
            this.state.profile = event.target.value;
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
    * handle change of comments
    */
    handleChangeComments = (event) => {
        if (event && event.target) {
            this.state.comments = event.target.value;
        }
    }
    /**
     * handle change of experience year
     */
    handleChangeYear = (event) => {
        if (event && event.target) {
            this.state.year = event.target.value;
        }
    }

    render() {
        const { classes } = this.props;
        const { year } = this.state;

        let yearlist = year.length > 0
            && year.map((item, i) => {
                return (
                    <option key={i} value={item.id}>{item.name}</option>
                )
            }, this);
        return (
            <div className={classes.main_div}>
                <div className={classes.hide_div}></div>
                <Grid container>
                    <Grid item xs={12} sm={12} md={12} lg={12} className={classes.contactus_firstdiv_imgGrid}>
                        <img src={careerLogo} className={classes.contactus_firstdiv_grid_image}></img>
                    </Grid >
                </Grid>
                <Grid container spacing={24} className={classes.footer_seconddiv_padding}>
                    <Grid item xs={12}>
                        <h3 className={classes.grid_dash_second_h3}>WE BELIEVE IN BUILDING A TEAM OF ENGINEERS AND NOT JUST DEVELOPERS, AND THEN HELP THEM DO THEIR BEST BY REMOVING ANY BARRIER THAT COMES BETWEEN THEM AND THEIR WORK!</h3>
                        <hr className={classes.hr_border}></hr>
                    </Grid>
                    <Grid item xs={12} sm={6} lg={3} md={3}>
                        <Paper className={classes.career_grid_dash_second_main_paper}>
                            <FormGroup>
                                <CardMedia image={infrastructureLogo} className={classes.career_icon_perfect}> </CardMedia>
                            </FormGroup>

                            <h2 className={classes.grid_Dash_second_main_h2}>INFRASTRUCTURE</h2>
                            <p className={classes.grid_Dash_second_main_p}>State-of-the-art engineering facility with high performance devices and connectivity.</p>
                        </Paper>
                    </Grid>
                    <Grid item xs={12} sm={6} lg={3} md={3}>
                        <Paper className={classes.career_grid_dash_second_main_paper}>
                            <FormGroup>
                                <CardMedia image={environmentLogo} className={classes.career_icon_perfect}> </CardMedia>
                            </FormGroup>

                            <h2 className={classes.grid_Dash_second_main_h2}>ENVIRONMENT</h2>
                            <p className={classes.grid_Dash_second_main_p}>Productivity is function of interest and passion.
Grow your professional career without compromising your technical focus & interests.</p>
                        </Paper>
                    </Grid>
                    <Grid item xs={12} sm={6} lg={3} md={3}>
                        <Paper className={classes.career_grid_dash_second_main_paper}>
                            <FormGroup>
                                <CardMedia image={exposureLogo} className={classes.career_icon_perfect}> </CardMedia>
                            </FormGroup>
                            <h2 className={classes.grid_Dash_second_main_h2}>EXPOSURE</h2>
                            <p className={classes.grid_Dash_second_main_p}>Delve into latest technologies, challenging solutions, onsite deliveries & working on interesting assignments.</p>
                        </Paper>
                    </Grid>
                    <Grid item xs={12} sm={6} lg={3} md={3}>
                        <Paper className={classes.career_grid_dash_second_main_paper}>
                            <FormGroup>
                                <CardMedia image={cultureLogo} className={classes.career_icon_perfect}> </CardMedia>
                            </FormGroup>

                            <h2 className={classes.grid_Dash_second_main_h2}>CULTURE</h2>
                            <p className={classes.grid_Dash_second_main_p}>In our culture the smartest idea wins, not the strongest personality.</p>
                        </Paper>
                    </Grid>
                </Grid>
                <Grid container spacing={24}>
                    {/* <h1 className={classes.grid_dash_second_h1}>Open Positions.</h1>
                    <hr className={classes.hr_border}></hr> */}
                </Grid>
                <Grid container spacing={24} className={classes.contactus_seconddiv_padding}>
                    <Grid item xs={12} sm={12} md={12} lg={12}>
                        <h2 className={classes.contactus_seconddiv_color}>Let's Network.</h2>
                        <Paper>
                            <FormGroup>
                                <Grid container>
                                    <Grid item xs={6} className={classes.contactus_seconddiv_formgrp_grid}>
                                        <input className={classes.contactus_seconddiv_formgrp_input} onChange={this.handleChangeName} placeholder="Your name"></input>
                                    </Grid>
                                    <Grid item xs={6} className={classes.contactus_seconddiv_formgrp_grid}>
                                        <input className={classes.contactus_seconddiv_formgrp_input} onChange={this.handleChangeEmail} placeholder="Your e-mail"></input>
                                    </Grid>
                                    <Grid item xs={6} className={classes.contactus_seconddiv_formgrp_grid}>
                                        <input className={classes.contactus_seconddiv_formgrp_input} onChange={this.handleChangePhoneNumber} placeholder="Your phone number"></input>
                                    </Grid>
                                    <Grid item xs={6} className={classes.contactus_seconddiv_formgrp_grid}>
                                        <select className={classes.contactus_seconddiv_formgrp_select} onChange={this.handleChangeYear}>
                                            {yearlist}
                                        </select>
                                    </Grid>
                                    <Grid item xs={12} className={classes.contactus_seconddiv_formgrp_grid }>
                                   <div className={classes.upload_btn_wrapper}>  
                                   <button className={classes.btnfileSelect}>Upload a file</button>
                                   <input type="file" name="myfile" className={classes.inputblock} />
                                        </div> 
                                          </Grid>
                                    <Grid item xs={12} className={classes.contactus_seconddiv_formgrp_grid}>
                                        <textarea onChange={this.handleChangeComments} className={classes.contactus_seconddiv_formgrp_txtarea} placeholder="Youe comments"></textarea>
                                    </Grid>
                                    <Grid item xs={12} className={classes.contactus_seconddiv_formgrp_grid2}>
                                        <Button color="inherit" className={classes.contactus_seconddiv_formgrp_grid2_btn}>
                                            Submit
                                             </Button>
                                    </Grid>
                                </Grid>
                            </FormGroup>
                        </Paper>
                    </Grid>
                    <Grid item xs={12} sm={12} md={6} lg={6}>

                    </Grid>
                </Grid>
            </div >
        );
    }
}

export const CareerComponentWithStyles = withStyles(centillionStyles as any, { withTheme: true })(CareerComponent)

