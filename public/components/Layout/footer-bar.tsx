
import * as React from "react";
import { AppBar, Toolbar, Button, Grid, IconButton, CardMedia,withStyles, Theme } from "@material-ui/core";
import { Mail, Phone, Room } from "@material-ui/icons";
import { ComponentNames } from "../../enums/component-names";
import * as facebookLogo from "../../images/facebook.png";
import * as  googleplusLogo from "../../images/google-plus.png";
import * as instagramLogo from "../../images/instagram.png";
import * as linkedinLogo from "../../images/linkedin.png";
import * as whatsappLogo from "../../images/whatsapp.png";
import * as skypeLogo from "../../images/skype.png";
import * as pintersetLogo from "../../images/pinterest.png";
import * as twitterLogo from "../../images/twitter.png";
import * as oneLogo from "../../images/hp.png";
import * as twoLogo from "../../images/logocomp.png";
import * as threeLogo from "../../images/Origo.png";
import * as fourLogo from "../../images/datadesingcomp.jpg";
import * as fiveLogo from "../../images/purshoLogo.png";
import * as sixLogo from "../../images/iconicLogo.png";
import { phoneNumber } from "../../providers/phone-number-provider";
import * as INLogo from "../../images/IndiaFlag.png";
import { companyName } from '../../providers/comp-name-provider';
import { centillionStyles } from "../styles/CentillionStyles";
import { getFooterItems } from '../../providers/footer-items-provider';
import { ButtonModel } from '../../models/ButtonModel';

import { isMobile } from "react-device-detect";
import { consolidateStreamedStyles } from "styled-components";

/**
 * interface to define properties for footer
 */
interface Props {

    currentTheme: Theme;
    
    setCurrentComponent: (componentName: string) => void;

    classes: any;

}

/**
 * export the class for footer bar
 */
export class FooterBar extends React.Component<Props> {
  state = {
        buttons: getFooterItems() as ButtonModel[]
    }

    render() {
        const { classes } = this.props;
        return (
            <div>
                <AppBar position="static">
                    <Toolbar className={classes.footer_appbar}>
                        <Grid container >
                            <Grid item xs={12} sm={12} md={4} lg={4}>
                                <h3 className={classes.footer_h3}>India</h3>
                                <Grid container >
                                    <Grid item xs={2} >
                                        <IconButton color="inherit" className={classes.footer_iconbtn_grd1} title="Address" > <Room /> </IconButton>
                                    </Grid>
                                    <Grid item xs={10}>
                                        <p className={classes.color_white}>2nd Floor, Block N, S.G. Road,</p>
                                        <p className={classes.color_white}>Safal Mondeal Retail Park,</p>
                                        <p className={classes.color_white}>Bodakdev Near,</p>
                                        <p className={classes.color_white}>Rajpath Rangoli Rd,</p>
                                        <p className={classes.color_white}>Ahmedabad, Gujarat 380056</p>
                                    </Grid>
                                    <Grid item xs={12} className={classes.footer_grd2}>
                                        <IconButton> <img src={INLogo} className={classes.contactus_firstdiv_image}></img> </IconButton>
                                        <a className={classes.footer_grd2_a}>{phoneNumber}</a>
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid item xs={12} sm={6} md={4} lg={4}>
                            </Grid>
                            <Grid item xs={12} sm={12} md={4} lg={4} className={classes.footer_grd3}>
                                <h3 className={classes.footer_grd3_h3}>Follow Us</h3>
                                <img src={facebookLogo} className={classes.footer_grd3_img} />
                                <img src={skypeLogo} className={classes.footer_grd3_img} />
                                <img src={whatsappLogo} className={classes.footer_grd3_img} />
                                <img src={linkedinLogo} className={classes.footer_grd3_img} />
                                <img src={googleplusLogo} className={classes.footer_grd3_img} />
                                <img src={instagramLogo} className={classes.footer_grd3_img} />
                                <img src={twitterLogo} className={classes.footer_grd3_img} />
                            </Grid>
                            <Grid item xs={12} sm={12} md={6} lg={6} className={classes.footer_grd4}>
                                {/* <span>Sitemap</span>
                                <span className={classes.footer_grd4_span}>Privacy Policy</span>
                                <span className={classes.footer_grd4_span}>Disclaimer</span>
                                <span className={classes.footer_grd4_span}>Careers</span> */}
                                {
                                this.renderButtons()
                            }
                            </Grid>
                            <Grid item xs={12} sm={12} md={6} lg={6} className={classes.footer_grd5}>
                                © 2019 {companyName}. All Rights Reserved.
                                  </Grid>
                        </Grid>
                    </Toolbar>
                </AppBar>
            </div>
        )
    }

    renderButtons() {
        const { classes } = this.props;
        return (
            this.state.buttons.map((button, index) =>
                <span
                    color="inherit"
                    className={classes.career_menu_buttons}
                    key={index}
                    onClick={() => { this.handleselectedcomponent(button) }} >
                    {button.Text}
                </span>
            )
        )
    }

    
    handleselectedcomponent = (selectedcomponent: ButtonModel) => {
        const buttons = this.state.buttons;
        buttons.forEach((button: ButtonModel) => {
            if (button.Text === selectedcomponent.Text) {
                button.Active = true;
            }
            else {
                button.Active = false;
            }
        });
        const newButtons = Object.assign([], buttons);
        this.setState({ buttons: newButtons });
        this.props.setCurrentComponent(selectedcomponent.Component);
    }
}

export const FooterComponent = withStyles(centillionStyles as any, { withTheme: true })(FooterBar); 