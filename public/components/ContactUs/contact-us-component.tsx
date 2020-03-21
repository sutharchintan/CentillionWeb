import * as React from 'react';
import { IconButton, Theme, Grid, Paper, FormGroup, Select, MenuItem, Button, CardMedia } from "@material-ui/core";
import { Phone } from "@material-ui/icons";
import * as ConatctUSLogo from "../../images/contact-us.jpg";
import * as videologo from "../../images/office.jpg";
import { phoneNumber } from '../../providers/phone-number-provider';
import * as INLogo from "../../images/IndiaFlag.png";
import { companyName } from '../../providers/comp-name-provider';
import { isMobile } from "react-device-detect";
/**
* interface to define properties for contact us 
*/
interface Props {

    currentTheme: Theme;
}

/**
 * export class for contact us 
 */
export class ContactUsComponent extends React.Component<Props> {

    render() {
        return (
            <div style={{ fontFamily: "Roboto", position: "relative", top: "132px" }}>
                <Grid container  >
                    <Grid item xs={12} sm={3} md={3} lg={3} style={{ padding: "2% 5% 2% 5%", backgroundColor: "rgb(245, 245, 245)" }}>
                        <h2>Chintan Suthar</h2>
                        <h4></h4><Grid item xs={12} style={{ marginTop: -14, marginLeft: -12 }}>
                            <IconButton>
                                <img src={INLogo} style={{ height: 18, width: 25 }}>
                                </img>
                            </IconButton><a> {phoneNumber}</a>
                        </Grid>
                    </Grid>
                    <Grid item xs={12} sm={9} md={9} lg={9} style={{ height: isMobile ? 200 : 370 }} >
                        <img src={ConatctUSLogo} style={{ width: "100%", height: isMobile ? 200 : 370, opacity: 0.8 }}></img>
                    </Grid >
                </Grid>
                <Grid container spacing={24} style={{ padding: isMobile ? "2% 5% 20% 5%" : "2% 5% 13% 5%" }}>
                    <Grid item xs={12} sm={12} md={6} lg={6}>
                        <h2 style={{ color: "rgb(66, 179, 219)" }}>You have an idea or project we can help with?</h2>
                        <Paper>
                            <FormGroup>
                                <Grid container>
                                    <Grid item xs={6} style={{ paddingTop: 20, paddingLeft: 20, paddingRight: 10 }}>
                                        <input placeholder="Your Name" style={{ paddingLeft: 20, height: 40, width: "100%", border: "1px gray solid", borderRadius: 5 }}></input>
                                    </Grid>
                                    <Grid item xs={6} style={{ paddingTop: 20, paddingLeft: 20, paddingRight: 40 }}>
                                        <input placeholder="Your Email" style={{ paddingLeft: 20, height: 40, width: "100%", border: "1px gray solid", borderRadius: 5 }}></input>
                                    </Grid>
                                    <Grid item xs={6} style={{ paddingTop: 20, paddingLeft: 20, paddingRight: 10 }}>
                                        <input placeholder="Company" style={{ paddingLeft: 20, height: 40, width: "100%", border: "1px gray solid", borderRadius: 5 }}></input>
                                    </Grid>
                                    <Grid item xs={6} style={{ paddingTop: 20, paddingLeft: 20, paddingRight: 40 }}>
                                        <input placeholder="Phone Number" style={{ paddingLeft: 20, height: 40, width: "100%", border: "1px gray solid", borderRadius: 5 }}></input>
                                    </Grid>
                                    <Grid item xs={12} style={{ paddingTop: 20, paddingLeft: 20, paddingRight: 20 }}>
                                        <Select style={{ paddingLeft: 20, paddingTop: 8, width: "96%", height: 35, borderTop: "1px #9E9E9E solid", borderLeft: "1px #9E9E9E solid", borderRight: "1px #9E9E9E solid", borderRadius: 5, fontSize: 12, color: "gray" }} value="Select Your budet">
                                            <MenuItem value="Select Your budet" selected> Select Your budget</MenuItem>
                                            <MenuItem value="Less than 10000 USD" >Less than 10000 USD </MenuItem>
                                            <MenuItem value="10000USD - 20000 USD">10000USD - 20000 USD </MenuItem>
                                            <MenuItem value="20000 USD - 30000 USD">20000 USD - 30000 USD </MenuItem>
                                            <MenuItem value="30000 USD - 40000 USD">30000 USD - 40000 USD </MenuItem>
                                            <MenuItem value="Greater than 40000 USD">Greater than 40000 USD </MenuItem>
                                        </Select>
                                    </Grid>
                                    <Grid item xs={12} style={{ paddingTop: 20, paddingLeft: 20, paddingRight: 40 }}>
                                        <textarea placeholder="Share your thoughts on your project" style={{ paddingTop: 10, paddingLeft: 20, height: 100, width: "100%", border: "1px gray solid", borderRadius: 5 }}></textarea>
                                    </Grid>
                                    <Grid item xs={12} style={{ paddingTop: 20, paddingLeft: 40, paddingRight: 40, paddingBottom: 20, textAlign: "center" }}>
                                        <Button color="inherit" style={{ color: "rgb(66, 179, 219)", border: "1px rgb(66, 179, 219) solid", height: 40, MozBorderRadius: 5 }}>
                                            Send us your inquiry
                                             </Button>
                                    </Grid>
                                </Grid>
                            </FormGroup>
                        </Paper>
                    </Grid>
                    <Grid item xs={12} sm={12} md={6} lg={6}>
                        <h2 style={{ textAlign: "center", color: "rgb(66, 179, 219)" }}>Understand us Better</h2>
                        <hr style={{ width: "100px", border: "1px gb(66, 179, 219) solid" }} ></hr>
                        <h4 style={{ textAlign: "center", color: "rgb(66, 179, 219)" }}>Watch this Video To Know {companyName}</h4>
                        <Paper style={{ height: isMobile ? 215 : 350, width: "100%", borderRadius: 5 }}>
                            <FormGroup style={{ height: isMobile ? 215 : 350, width: "100%", borderRadius: 5 }}>
                                <CardMedia image={videologo} style={{ height: isMobile ? 215 : 350, width: "100%", borderRadius: 5 }} ></CardMedia>
                            </FormGroup>
                        </Paper>
                    </Grid>
                </Grid>
            </div>
        );
    }
}

