import * as React from 'react';
import { Button, Grid, Theme, CardMedia, FormGroup, Paper, withStyles } from "@material-ui/core";
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
import * as mobileappLogo from "../../images/pngtreemobileapp.png";
import * as windowsLogo from "../../images/windows_logos.png";
import * as nodejsLogo from "../../images/nodejs.png";
import * as html5Logo from "../../images/html5.png";
import * as css3Logo from "../../images/css3.png";
import * as mvs5Logo from "../../images/mvc5.jpg";
import * as coreLogo from "../../images/core.png";
import * as linuxLogo from "../../images/linux.png";
import * as odooLogo from "../../images/odoo.png";
import * as nopecommerceLogo from "../../images/nopecommerce.jpg";
import * as graphicsLogo from "../../images/graphics.jpg";
import * as paypalLogo from "../../images/paypal.png";
import * as stripeLogo from "../../images/stripe.png";
import * as braintreeLogo from "../../images/braintree.png";
import { companyName } from '../../providers/comp-name-provider';
import { centillionStyles } from "../styles/CentillionStyles";
import Typography from 'material-ui/styles/typography';
import "../../style.css";
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
class PortFolioComponent extends React.Component<Props> {

    render() {
        const { classes } = this.props;
        return (
            <div className={classes.main_div}>
                <div className={classes.hide_div}></div>
                {/* portfolio first div */}
                <Grid>
                    <Grid item xs={12} className={classes.header_cardMedia} >
                        <img src={portfolioLogo} className={classes.portfolio_header_image}></img>
                        <h1 className={classes.header_title_on_image}>PORTFOLIO</h1>
                        <p className={classes.header_title_on_image_p}>We make every effort to turn your idea into reality that changes user perspective. Have a look at our Portfolio</p>
                    </Grid >
                </Grid>
                {/* portfolio second div */}
                <Grid container className="margin-bottom-50 ">
                    <Grid item xs={12} sm={12} lg={6} md={6} className={classes.portfolio_mobile_first}>
                        <h1 className="portfolio_mobile-first-h1">Mobile App Development</h1>
                        <hr className={classes.hr_border}></hr>
                        <h3 className="portfolio-mobile-first-h3">We create amazing experiences for mobile devices. Whether it's native app development across iOS & Android or cross-platform development with tools such as Phonegap we have a proven track record across a range of mobile & tablet technologies.</h3>
                        <span className="portfolio-mobile-button"> Know More </span> 
                    </Grid>
                    <Grid item xs={12} sm={12} lg={6} md={6} >
                        <CardMedia image={mobileappLogo} className={classes.portfolio_mobile_cardMedia}> </CardMedia>
                    </Grid>
                </Grid>
                <Grid container color="default" className="bg-black" >
                    <Grid item xs={12} sm={12} lg={12} md={12} className="portfolio-mobile-second">
                        <FormGroup>
                            <span className="portfolio-mobile-second-span">A Complete Creative Solutions Provider For Web, Mobile & Software</span>
                            <hr className={classes.portfolio_mobile_second_hr} ></hr>
                            <p className="portfolio-mobile-second-p">{companyName} is an offshore development outsourcing IT company. Incepted in the year 2019, {companyName} is doing an astonishing work on the ground of IT fraternity. We have the global presence in India, USA with a team of 10+ in-house talents. Our commitment and belief to achieve the best is making us the most demandable company globally. We believe in stepping into client’s shoe for building their product in more awesome ways. Our experts are talented enough to convey the best solutions. We assure clients to bring their unique thoughts in the marketplace with more intuitive manner. We believe in maintaining punctuality and quality is our key area to deliver splendid work.</p>
                        </FormGroup>
                    </Grid>
                </Grid>
                {/* portfolio third div */}
                <Grid container spacing={24} className={classes.portfolio_mobile_third_container}>
                    <Grid item xs={12} sm={6} md={4} lg={3} >
                        <Paper>
                            <FormGroup >
                                  <CardMedia image={reactLogo} className={classes.portfolio_mobile_third_cardMedia}></CardMedia>                                
                              </FormGroup>
                        </Paper>
                        <h3 className={classes.portfolio_mobile_third_h3}>React</h3>                     
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} lg={3} className={classes.portfolio_mobile_third_grid}>
                        <Paper>
                            <FormGroup>
                                <CardMedia image={csharpLogo} className={classes.portfolio_mobile_third_cardMedia}></CardMedia>
                            </FormGroup>
                        </Paper>
                        <h3 className={classes.portfolio_mobile_third_h3}>C#</h3>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} lg={3} className={classes.portfolio_mobile_third_grid}>
                        <Paper>
                            <FormGroup>
                                <CardMedia image={angularLogo} className={classes.portfolio_mobile_third_cardMedia}></CardMedia>
                            </FormGroup>
                        </Paper>
                        <h3 className={classes.portfolio_mobile_third_h3}>Angular js</h3>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} lg={3} className={classes.portfolio_mobile_third_grid}>
                        <Paper>
                            <FormGroup>
                                <CardMedia image={typscriptLogo} className={classes.portfolio_mobile_third_cardMedia}></CardMedia>
                            </FormGroup>
                        </Paper>
                        <h3 className={classes.portfolio_mobile_third_h3}>TypeScript</h3>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} lg={3} className={classes.portfolio_mobile_third_grid}>
                        <Paper>
                            <FormGroup>
                                <CardMedia image={vbdotnetLogo} className={classes.portfolio_mobile_third_cardMedia}></CardMedia>
                            </FormGroup>
                        </Paper>
                        <h3 className={classes.portfolio_mobile_third_h3}>VB.Net</h3>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} lg={3} className={classes.portfolio_mobile_third_grid}>
                        <Paper>
                            <FormGroup>
                                <CardMedia image={phpLogo} className={classes.portfolio_mobile_third_cardMedia}></CardMedia>
                            </FormGroup>
                        </Paper>
                        <h3 className={classes.portfolio_mobile_third_h3}>Php</h3>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} lg={3} className={classes.portfolio_mobile_third_grid}>
                        <Paper>
                            <FormGroup>
                                <CardMedia image={MssqlLogo} className={classes.portfolio_mobile_third_cardMedia}></CardMedia>
                            </FormGroup>
                        </Paper>
                        <h3 className={classes.portfolio_mobile_third_h3}>SQL Server</h3>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} lg={3} className={classes.portfolio_mobile_third_grid}>
                        <Paper>
                            <FormGroup>
                                <CardMedia image={mongodbLogo} className={classes.portfolio_mobile_third_cardMedia}></CardMedia>
                            </FormGroup>
                        </Paper>
                        <h3 className={classes.portfolio_mobile_third_h3}>Mongo Db</h3>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} lg={3} className={classes.portfolio_mobile_third_grid}>
                        <Paper>
                            <FormGroup>
                                <CardMedia image={blockchainLogo} className={classes.portfolio_mobile_third_cardMedia}></CardMedia>
                            </FormGroup>
                        </Paper>
                        <h3 className={classes.portfolio_mobile_third_h3}>Block chain technology</h3>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} lg={3} className={classes.portfolio_mobile_third_grid}>
                        <Paper>
                            <FormGroup>
                                <CardMedia image={excelLogo} className={classes.portfolio_mobile_third_cardMedia}></CardMedia>
                            </FormGroup>
                        </Paper>
                        <h3 className={classes.portfolio_mobile_third_h3}>Excel Automation</h3>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} lg={3} className={classes.portfolio_mobile_third_grid}>
                        <Paper>
                            <FormGroup>
                                <CardMedia image={javaLogo} className={classes.portfolio_mobile_third_cardMedia}></CardMedia>
                            </FormGroup>
                        </Paper>
                        <h3 className={classes.portfolio_mobile_third_h3}>Java</h3>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} lg={3} className={classes.portfolio_mobile_third_grid}>
                        <Paper>
                            <FormGroup>
                                <CardMedia image={awsLogo} className={classes.portfolio_mobile_third_cardMedia}></CardMedia>
                            </FormGroup>
                        </Paper>
                        <h3 className={classes.portfolio_mobile_third_h3}>AWS services</h3>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} lg={3} className={classes.portfolio_mobile_third_grid}>
                        <Paper>
                            <FormGroup>
                                <CardMedia image={androidLogo} className={classes.portfolio_mobile_third_cardMedia}></CardMedia>
                            </FormGroup>
                        </Paper>
                        <h3 className={classes.portfolio_mobile_third_h3}>Android</h3>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} lg={3} className={classes.portfolio_mobile_third_grid}>
                        <Paper>
                            <FormGroup>
                                <CardMedia image={iosLogo} className={classes.portfolio_mobile_third_cardMedia}></CardMedia>
                            </FormGroup>
                        </Paper>
                        <h3 className={classes.portfolio_mobile_third_h3}>IOS</h3>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} lg={3} className={classes.portfolio_mobile_third_grid}>
                        <Paper>
                            <FormGroup>
                                <CardMedia image={crystalLogo} className={classes.portfolio_mobile_third_cardMedia}></CardMedia>
                            </FormGroup>
                        </Paper>
                        <h3 className={classes.portfolio_mobile_third_h3}>Crystal Reports</h3>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} lg={3} className={classes.portfolio_mobile_third_grid}>
                        <Paper>
                            <FormGroup>
                                <CardMedia image={tableauLogo} className={classes.portfolio_mobile_third_cardMedia}></CardMedia>
                            </FormGroup>
                        </Paper>
                        <h3 className={classes.portfolio_mobile_third_h3}>Tableau</h3>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} lg={3} className={classes.portfolio_mobile_third_grid}>
                        <Paper>
                            <FormGroup>
                                <CardMedia image={telerikLogo} className={classes.portfolio_mobile_third_cardMedia}></CardMedia>
                            </FormGroup>
                        </Paper>
                        <h3 className={classes.portfolio_mobile_third_h3}>Telerik controls</h3>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} lg={3} className={classes.portfolio_mobile_third_grid}>
                        <Paper>
                            <FormGroup>
                                <CardMedia image={VueLogo} className={classes.portfolio_mobile_third_cardMedia}></CardMedia>
                            </FormGroup>
                        </Paper>
                        <h3 className={classes.portfolio_mobile_third_h3}>Vue js</h3>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} lg={3} className={classes.portfolio_mobile_third_grid}>
                        <Paper>
                            <FormGroup>
                                <CardMedia image={lavarelLogo} className={classes.portfolio_mobile_third_cardMedia}></CardMedia>
                            </FormGroup>
                        </Paper>
                        <h3 className={classes.portfolio_mobile_third_h3}>Lavarel js</h3>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} lg={3} className={classes.portfolio_mobile_third_grid}>
                        <Paper>
                            <FormGroup>
                                <CardMedia image={knockoutLogo} className={classes.portfolio_mobile_third_cardMedia}></CardMedia>
                            </FormGroup>
                        </Paper>
                        <h3 className={classes.portfolio_mobile_third_h3}>Knockout js</h3>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} lg={3} className={classes.portfolio_mobile_third_grid}>
                        <Paper>
                            <FormGroup>
                                <CardMedia image={paythonLogo} className={classes.portfolio_mobile_third_cardMedia}></CardMedia>
                            </FormGroup>
                        </Paper>
                        <h3 className={classes.portfolio_mobile_third_h3}>Paython</h3>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} lg={3} className={classes.portfolio_mobile_third_grid}>
                        <Paper>
                            <FormGroup>
                                <CardMedia image={windowsLogo} className={classes.portfolio_mobile_third_cardMedia}></CardMedia>
                            </FormGroup>
                        </Paper>
                        <h3 className={classes.portfolio_mobile_third_h3}>Windows</h3>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} lg={3} className={classes.portfolio_mobile_third_grid}>
                        <Paper>
                            <FormGroup>
                                <CardMedia image={nodejsLogo} className={classes.portfolio_mobile_third_cardMedia}></CardMedia>
                            </FormGroup>
                        </Paper>
                        <h3 className={classes.portfolio_mobile_third_h3}>Node.js</h3>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} lg={3} className={classes.portfolio_mobile_third_grid}>
                        <Paper>
                            <FormGroup>
                                <CardMedia image={html5Logo} className={classes.portfolio_mobile_third_cardMedia}></CardMedia>
                            </FormGroup>
                        </Paper>
                        <h3 className={classes.portfolio_mobile_third_h3}>HTML 5</h3>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} lg={3} className={classes.portfolio_mobile_third_grid}>
                        <Paper>
                            <FormGroup>
                                <CardMedia image={css3Logo} className={classes.portfolio_mobile_third_cardMedia}></CardMedia>
                            </FormGroup>
                        </Paper>
                        <h3 className={classes.portfolio_mobile_third_h3}>CSS 3</h3>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} lg={3} className={classes.portfolio_mobile_third_grid}>
                        <Paper>
                            <FormGroup>
                                <CardMedia image={mvs5Logo} className={classes.portfolio_mobile_third_cardMedia}></CardMedia>
                            </FormGroup>
                        </Paper>
                        <h3 className={classes.portfolio_mobile_third_h3}>Asp.net MVC 5</h3>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} lg={3} className={classes.portfolio_mobile_third_grid}>
                        <Paper>
                            <FormGroup>
                                <CardMedia image={coreLogo} className={classes.portfolio_mobile_third_cardMedia}></CardMedia>
                            </FormGroup>
                        </Paper>
                        <h3 className={classes.portfolio_mobile_third_h3}>Asp.net Core</h3>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} lg={3} className={classes.portfolio_mobile_third_grid}>
                        <Paper>
                            <FormGroup>
                                <CardMedia image={linuxLogo} className={classes.portfolio_mobile_third_cardMedia}></CardMedia>
                            </FormGroup>
                        </Paper>
                        <h3 className={classes.portfolio_mobile_third_h3}>Linux Server</h3>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} lg={3} className={classes.portfolio_mobile_third_grid}>
                        <Paper>
                            <FormGroup>
                                <CardMedia image={odooLogo} className={classes.portfolio_mobile_third_cardMedia}></CardMedia>
                            </FormGroup>
                        </Paper>
                        <h3 className={classes.portfolio_mobile_third_h3}>Odoo</h3>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} lg={3} className={classes.portfolio_mobile_third_grid}>
                        <Paper>
                            <FormGroup>
                                <CardMedia image={nopecommerceLogo} className={classes.portfolio_mobile_third_cardMedia}></CardMedia>
                            </FormGroup>
                        </Paper>
                        <h3 className={classes.portfolio_mobile_third_h3}>Nope Commerce</h3>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} lg={3} className={classes.portfolio_mobile_third_grid}>
                        <Paper>
                            <FormGroup>
                                <CardMedia image={graphicsLogo} className={classes.portfolio_mobile_third_cardMedia}></CardMedia>
                            </FormGroup>
                        </Paper>
                        <h3 className={classes.portfolio_mobile_third_h3}>Graphic Design</h3>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} lg={3} className={classes.portfolio_mobile_third_grid}>
                        <Paper>
                            <FormGroup>
                                <CardMedia image={paypalLogo} className={classes.portfolio_mobile_third_cardMedia}></CardMedia>
                            </FormGroup>
                        </Paper>
                        <h3 className={classes.portfolio_mobile_third_h3}>Paypal</h3>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} lg={3} className={classes.portfolio_mobile_third_grid}>
                        <Paper>
                            <FormGroup>
                                <CardMedia image={stripeLogo} className={classes.portfolio_mobile_third_cardMedia}></CardMedia>
                            </FormGroup>
                        </Paper>
                        <h3 className={classes.portfolio_mobile_third_h3}>Stripe</h3>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} lg={3} className={classes.portfolio_mobile_third_grid}>
                        <Paper>
                            <FormGroup>
                                <CardMedia image={braintreeLogo} className={classes.portfolio_mobile_third_cardMedia}></CardMedia>
                            </FormGroup>
                        </Paper>
                        <h3 className={classes.portfolio_mobile_third_h3}>Braintree</h3>
                    </Grid>
                </Grid>
            </div>
        );
    }
}

export const PortFolioComponentWithStyles = withStyles(centillionStyles as any, { withTheme: true })(PortFolioComponent)

