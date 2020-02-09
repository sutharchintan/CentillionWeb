import * as React from 'react';
import { Button, Grid, Theme, CardMedia, FormGroup, Paper, Select, MenuItem } from "@material-ui/core";
import { LoadingInterface, MessageInterface } from '../../interface-properties-actions';
import * as reactLogo from "../../images/reactnew.jpg";
import * as csharpLogo from "../../images/csharp.jpg";
import * as angularLogo from "../../images/angular.jpg";
import * as typscriptLogo from "../../images/typescript.png";
import * as vbdotnetLogo from "../../images/vbdotnet.png";
import * as phpLogo from "../../images/phpone.jpg";
import * as MssqlLogo from "../../images/MSSQLServer.png";
import * as mongodbLogo from "../../images/mongo_db.png";
import * as portfolioLogo from "../../images/portfolio.jpg";
import * as blockchainLogo from "../../images/blockchain-tracker.jpg";
import * as excelLogo from "../../images/excel.png";
import * as javaLogo from "../../images/java.png";
import * as awsLogo from "../../images/awswebservice.png";
import * as androidLogo from "../../images/android.png";
import * as iosLogo from "../../images/ios.png";
import * as crystalLogo from "../../images/CrystalReports.png";
import * as tableauLogo from "../../images/tableau.png";
import * as telerikLogo from "../../images/telerik.png";
import * as VueLogo from "../../images/vue.png";
import * as lavarelLogo from "../../images/lavarelo.png";
import * as knockoutLogo from "../../images/knockoutjs.jpg";
import * as paythonLogo from "../../images/paython.png";
import * as mobileappLogo from "../../images/mobileapp.jpg";
import { BorderTop } from '@material-ui/icons';
import { companyName } from '../../providers/comp-name-provider';
import { isMobile } from "react-device-detect";
/**
 * interface to define properties for port folio
 */
interface Props extends LoadingInterface, MessageInterface {

    currentTheme: Theme;

    classes: any;
}

/**
 * export the class for portfolio component
 */
export class PortFolioComponent extends React.Component<Props> {

    render() {
        return (
            <div >
                <Grid>
                    <Grid item xs={12} style={{ height: 370, width: "100%" }} >
                        <img src={portfolioLogo} style={{ width: "100%", height: 370, opacity: 0.8 }}></img>
                        <h1 style={{ color: "rgb(66, 179, 219)", textAlign: "center", position: "relative", top: -300, fontSize: 50, fontWeight: 800 }}>PORTFOLIO</h1>
                        <p style={{ color: "rgb(66, 179, 219)", textAlign: "center", fontSize: 25, position: "relative", top: -300 }}>We make every effort to turn your idea into reality that changes user perspective. Have a look at our Portfolio</p>
                    </Grid >
                </Grid>
                <Grid container >
                    <Grid item xs={12} sm={12} lg={6} md={6} style={{ color: "rgb(66, 179, 219)", paddingTop: 60 }} >
                        <h1 style={{ lineHeight: 1.3, color: "rgb(66, 179, 219)", fontSize: isMobile ? 27 : 50, fontWeight: 700, textAlign: "center" }}>Mobile App Development</h1>
                        <h3 style={{ padding: isMobile ? "3%" : "7%", lineHeight: 1.5, color: "rgb(66, 179, 219)", fontSize: 20, fontWeight: 400, margin: 20, wordBreak: "break-word", textAlign: "justify" }}>We create amazing experiences for mobile devices. Whether it's native app development across iOS & Android or cross-platform development with tools such as Phonegap we have a proven track record across a range of mobile & tablet technologies.</h3>
                        <Button color="inherit" style={{ marginBottom: 20, color: "rgb(66, 179, 219)", border: "1px rgb(66, 179, 219) solid", height: 40, width: "150", fontWeight: 400, float: "right", marginRight: 20, MozBorderRadius: 5, boxAlign: "center" }}> Know More </Button>
                    </Grid>
                    <Grid item xs={12} sm={12} lg={6} md={6} >
                        <CardMedia image={mobileappLogo} style={{ width: "100%", height: isMobile ? 200 : 496 }} > </CardMedia>
                    </Grid>
                </Grid>
                <Grid container color="default">
                    <Grid item xs={12} sm={12} lg={12} md={12} style={{ padding: "4% 5% 2% 5%", backgroundColor: "rgb(66, 179, 219)" }}>
                        <FormGroup>
                            <span style={{ fontSize: isMobile ? 27 : 50, lineHeight: 1, color: "white", textAlign: "center" }}>A Complete Creative Solutions Provider For Web, Mobile & Software</span>
                            <p style={{ fontSize: 20, lineHeight:isMobile ? 1.5 : 2, color: "white", wordBreak: "break-word", textAlign: "justify", margin: 20 }}>{companyName} is an offshore development outsourcing IT company. Incepted in the year 2019, {companyName} is doing an astonishing work on the ground of IT fraternity. We have the global presence in India, USA with a team of 10+ in-house talents. Our commitment and belief to achieve the best is making us the most demandable company globally. We believe in stepping into client’s shoe for building their product in more awesome ways. Our experts are talented enough to convey the best solutions. We assure clients to bring their unique thoughts in the marketplace with more intuitive manner. We believe in maintaining punctuality and quality is our key area to deliver splendid work.</p>
                        </FormGroup>
                    </Grid>
                </Grid>
                <Grid container spacing={24} style={{ padding: "2% 5% 2% 5%", borderBottom: "1px #9E9E9E solid" }}>
                    <Grid item xs={12} sm={6} md={4} lg={3} style={{ borderRadius: 5 }}>
                        <Paper>
                            <FormGroup >
                                <CardMedia image={reactLogo} style={{ height: 270, width: "100%", borderRadius: 5 }}></CardMedia>
                            </FormGroup>
                        </Paper>
                        <h3 style={{ fontWeight: 600, marginBottom: -10 }}>React</h3>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} lg={3} style={{ borderRadius: 5 }}>
                        <Paper>
                            <FormGroup>
                                <CardMedia image={csharpLogo} style={{ height: 270, width: "100%", borderRadius: 5 }}></CardMedia>
                            </FormGroup>
                        </Paper>
                        <h3 style={{ fontWeight: 600, marginBottom: -10 }}>C#</h3>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} lg={3} style={{ borderRadius: 5 }}>
                        <Paper>
                            <FormGroup>
                                <CardMedia image={angularLogo} style={{ height: 270, width: "100%", borderRadius: 5 }}></CardMedia>
                            </FormGroup>
                        </Paper>
                        <h3 style={{ fontWeight: 600, marginBottom: -10 }}>Angular js</h3>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} lg={3} style={{ borderRadius: 5 }}>
                        <Paper>
                            <FormGroup>
                                <CardMedia image={typscriptLogo} style={{ height: 270, width: "100%", borderRadius: 5 }}></CardMedia>
                            </FormGroup>
                        </Paper>
                        <h3 style={{ fontWeight: 600, marginBottom: -10 }}>TypeScript</h3>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} lg={3} style={{ borderRadius: 5 }}>
                        <Paper>
                            <FormGroup>
                                <CardMedia image={vbdotnetLogo} style={{ height: 270, width: "100%", borderRadius: 5 }}></CardMedia>
                            </FormGroup>
                        </Paper>
                        <h3 style={{ fontWeight: 600, marginBottom: -10 }}>VB.Net</h3>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} lg={3} style={{ borderRadius: 5 }}>
                        <Paper>
                            <FormGroup>
                                <CardMedia image={phpLogo} style={{ height: 270, width: "100%", borderRadius: 5 }}></CardMedia>
                            </FormGroup>
                        </Paper>
                        <h3 style={{ fontWeight: 600, marginBottom: -10 }}>Php</h3>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} lg={3} style={{ borderRadius: 5 }}>
                        <Paper>
                            <FormGroup>
                                <CardMedia image={MssqlLogo} style={{ height: 270, width: "100%", borderRadius: 5 }}></CardMedia>
                            </FormGroup>
                        </Paper>
                        <h3 style={{ fontWeight: 600, marginBottom: 0 }}>SQL Server</h3>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} lg={3} style={{ borderRadius: 5 }}>
                        <Paper>
                            <FormGroup>
                                <CardMedia image={mongodbLogo} style={{ height: 270, width: "100%", borderRadius: 5 }}></CardMedia>
                            </FormGroup>
                        </Paper>
                        <h3 style={{ fontWeight: 600, marginBottom: -10 }}>Mongo Db</h3>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} lg={3} style={{ borderRadius: 5 }}>
                        <Paper>
                            <FormGroup>
                                <CardMedia image={blockchainLogo} style={{ height: 270, width: "100%", borderRadius: 5 }}></CardMedia>
                            </FormGroup>
                        </Paper>
                        <h3 style={{ fontWeight: 600, marginBottom: -10 }}>Block chain technology</h3>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} lg={3} style={{ borderRadius: 5 }}>
                        <Paper>
                            <FormGroup>
                                <CardMedia image={excelLogo} style={{ height: 270, width: "100%", borderRadius: 5 }}></CardMedia>
                            </FormGroup>
                        </Paper>
                        <h3 style={{ fontWeight: 600, marginBottom: -10 }}>Excel Automation</h3>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} lg={3} style={{ borderRadius: 5 }}>
                        <Paper>
                            <FormGroup>
                                <CardMedia image={javaLogo} style={{ height: 270, width: "100%", borderRadius: 5 }}></CardMedia>
                            </FormGroup>
                        </Paper>
                        <h3 style={{ fontWeight: 600, marginBottom: -10 }}>Java</h3>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} lg={3} style={{ borderRadius: 5 }}>
                        <Paper>
                            <FormGroup>
                                <CardMedia image={awsLogo} style={{ height: 270, width: "100%", borderRadius: 5 }}></CardMedia>
                            </FormGroup>
                        </Paper>
                        <h3 style={{ fontWeight: 600, marginBottom: -10 }}>AWS services</h3>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} lg={3} style={{ borderRadius: 5 }}>
                        <Paper>
                            <FormGroup>
                                <CardMedia image={androidLogo} style={{ height: 270, width: "100%", borderRadius: 5 }}></CardMedia>
                            </FormGroup>
                        </Paper>
                        <h3 style={{ fontWeight: 600, marginBottom: -10 }}>Android</h3>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} lg={3} style={{ borderRadius: 5 }}>
                        <Paper>
                            <FormGroup>
                                <CardMedia image={iosLogo} style={{ height: 270, width: "100%", borderRadius: 5 }}></CardMedia>
                            </FormGroup>
                        </Paper>
                        <h3 style={{ fontWeight: 600, marginBottom: -10 }}>IOS</h3>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} lg={3} style={{ borderRadius: 5 }}>
                        <Paper>
                            <FormGroup>
                                <CardMedia image={crystalLogo} style={{ height: 270, width: "100%", borderRadius: 5 }}></CardMedia>
                            </FormGroup>
                        </Paper>
                        <h3 style={{ fontWeight: 600, marginBottom: -10 }}>Crystal Reports</h3>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} lg={3} style={{ borderRadius: 5 }}>
                        <Paper>
                            <FormGroup>
                                <CardMedia image={tableauLogo} style={{ height: 270, width: "100%", borderRadius: 5 }}></CardMedia>
                            </FormGroup>
                        </Paper>
                        <h3 style={{ fontWeight: 600, marginBottom: -10 }}>Tableau</h3>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} lg={3} style={{ borderRadius: 5 }}>
                        <Paper>
                            <FormGroup>
                                <CardMedia image={telerikLogo} style={{ height: 270, width: "100%", borderRadius: 5 }}></CardMedia>
                            </FormGroup>
                        </Paper>
                        <h3 style={{ fontWeight: 600, marginBottom: -10 }}>Telerik controls</h3>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} lg={3} style={{ borderRadius: 5 }}>
                        <Paper>
                            <FormGroup>
                                <CardMedia image={VueLogo} style={{ height: 270, width: "100%", borderRadius: 5 }}></CardMedia>
                            </FormGroup>
                        </Paper>
                        <h3 style={{ fontWeight: 600, marginBottom: -10 }}>Vue js</h3>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} lg={3} style={{ borderRadius: 5 }}>
                        <Paper>
                            <FormGroup>
                                <CardMedia image={lavarelLogo} style={{ height: 270, width: "100%", borderRadius: 5 }}></CardMedia>
                            </FormGroup>
                        </Paper>
                        <h3 style={{ fontWeight: 600, marginBottom: -10 }}>Lavarel js</h3>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} lg={3} style={{ borderRadius: 5 }}>
                        <Paper>
                            <FormGroup>
                                <CardMedia image={knockoutLogo} style={{ height: 270, width: "100%", borderRadius: 5 }}></CardMedia>
                            </FormGroup>
                        </Paper>
                        <h3 style={{ fontWeight: 600, marginBottom: -10 }}>Knockout js</h3>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} lg={3} style={{ borderRadius: 5 }}>
                        <Paper>
                            <FormGroup>
                                <CardMedia image={paythonLogo} style={{ height: 270, width: "100%", borderRadius: 5 }}></CardMedia>
                            </FormGroup>
                        </Paper>
                        <h3 style={{ fontWeight: 600, marginBottom: -10 }}>Paython</h3>
                    </Grid>
                </Grid>
            </div>
        );
    }
}

