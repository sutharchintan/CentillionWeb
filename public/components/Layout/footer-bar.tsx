
import * as React from "react";
import { AppBar, Toolbar, Button, Grid, IconButton, CardMedia } from "@material-ui/core";
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

/**
 * interface to define properties for footer
 */
interface Props {
    setCurrentComponent: (componentName: string) => void;
}

/**
 * export the class for footer bar
 */
export class FooterBar extends React.Component<Props> {

    render() {
        return (
            <div>
                <AppBar position="static">
                    <Toolbar style={{ justifyContent: "space-between", paddingLeft: "5%", paddingRight: "5%" }}>
                        <Grid container >
                            <Grid item xs={12} sm={12} md={4} lg={4}>
                                <h3 style={{ fontWeight: 500, color: "white", margin: 20 }}>India</h3>
                                <Grid container >
                                    <Grid item xs={2}>
                                        <IconButton color="inherit" style={{ fontSize: 15, paddingLeft: 20, paddingTop: 15 }} title="Address" > <Room /> </IconButton>
                                    </Grid>
                                    <Grid item xs={10}><p style={{ color: "white" }}>2nd Floor, Block N, S.G. Road,</p>
                                        <p style={{ color: "white" }}>Safal Mondeal Retail Park,</p>
                                        <p style={{ color: "white" }}>Bodakdev Near,</p>
                                        <p style={{ color: "white" }}>Rajpath Rangoli Rd,</p>
                                        <p style={{ color: "white" }}>Ahmedabad, Gujarat 380056</p>
                                    </Grid>
                                    <Grid item xs={12} style={{ marginLeft: 10, marginTop: -14 }}>
                                        <IconButton> <img src={INLogo} style={{ height: 18, width: 25 }}></img> </IconButton>
                                        <a style={{ color: "white", paddingLeft: 10 }}>{phoneNumber}</a>
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid item xs={12} sm={6} md={4} lg={4}>
                            </Grid>
                            <Grid item xs={12} sm={12} md={4} lg={4} style={{marginTop:40, marginBottom:20}}>
                                <h3 style={{ fontWeight: 500, color: "white", margin: 20 }}>Follow Us</h3>
                                <img src={facebookLogo} style={{ height: 25, width: 25, paddingLeft: 20, paddingTop: 15 }} />
                                <img src={skypeLogo} style={{ height: 25, width: 25, paddingLeft: 20, paddingTop: 15 }} />
                                <img src={whatsappLogo} style={{ height: 25, width: 25, paddingLeft: 20, paddingTop: 15 }} />
                                <img src={linkedinLogo} style={{ height: 25, width: 25, paddingLeft: 20, paddingTop: 15 }} />
                                <img src={googleplusLogo} style={{ height: 25, width: 25, paddingLeft: 20, paddingTop: 15 }} />
                                <img src={instagramLogo} style={{ height: 25, width: 25, paddingLeft: 20, paddingTop: 15 }} />
                                <img src={twitterLogo} style={{ height: 25, width: 25, paddingLeft: 20, paddingTop: 15 }} />
                            </Grid>
                            <Grid item xs={12} sm={12} md={6} lg={6} style={{ paddingBottom: 10, paddingTop: 10, marginTop:20}}>
                                <span>Sitemap</span>
                                <span style={{ paddingLeft: "5%" }}>Privacy Policy</span>
                                <span style={{ paddingLeft: "5%" }}>Disclaimer</span>
                                <span style={{ paddingLeft: "5%" }}>Careers</span>
                            </Grid>
                            <Grid item xs={12} sm={12} md={6} lg={6} style={{ textAlign: "right", paddingBottom: 10, marginTop:30}}>
                                © 2019 {companyName}. All Rights Reserved.
                                  </Grid>
                        </Grid>
                    </Toolbar>
                </AppBar>
            </div>
        )
    }
}