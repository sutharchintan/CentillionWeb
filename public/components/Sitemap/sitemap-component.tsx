import * as React from 'react';
import { IconButton, Theme, Grid, Paper, FormGroup, withStyles, Select, MenuItem, Button, CardMedia } from "@material-ui/core";
import { phoneNumber } from '../../providers/phone-number-provider';
import { companyName } from '../../providers/comp-name-provider';
import * as sitemapLogo from "../../images/sitemap.jpg";
import { centillionStyles } from "../styles/CentillionStyles";
import Typography from 'material-ui/styles/typography';
/**
* interface to define properties for site map
*/
interface Props {

    currentTheme: Theme;

    classes: any;
}

/**
 * export class for Site map 
 */
class SitemapComponent extends React.Component<Props> {


    render() {
        const { classes } = this.props;

        return (
            <div className={classes.main_div}>
                <div className={classes.hide_div}></div>
                <Grid container>
                    <Grid item xs={12} sm={12} md={12} lg={12} className={classes.contactus_firstdiv_imgGrid}>
                        <img src={sitemapLogo} className={classes.contactus_firstdiv_grid_image}></img>
                    </Grid >
                </Grid>
                <Grid container spacing={24} className={classes.footer_seconddiv_padding}>
                    <Grid item xs={12} sm={12} md={4} lg={4}>
                        <p className={classes.sitemap_heading}>Pages</p>
                        <p>Home</p>
                        <p>Portfolio</p>
                        <p>About Us</p>
                        <p>Contact Us</p>
                        <p>Sitemap</p>
                        <p>Desclaimer</p>
                        <p>Privacy Policy</p>
                        <p>Career</p>
                    </Grid>
                    <Grid item xs={12} sm={12} md={4} lg={4}>
                        <p className={classes.sitemap_heading}>Technology</p>
                        <p>React</p>
                        <p>C#</p>
                        <p>Angular js</p>
                        <p>TypeScript</p>
                        <p>VB.Net</p>
                        <p>Php</p>
                        <p>SQL Server</p>
                        <p>Mongo Db</p>
                        <p>Block chain technology</p>
                        <p>Excel Automation</p>
                        <p>Java</p>
                        <p>AWS services</p>
                        <p>Android</p>
                        <p>IOS</p>
                        <p>Crystal Reports</p>
                        <p>Tableau</p>
                        <p>Telerik controls</p>
                        <p>Vue js</p>
                        <p>Lavarel js</p>
                        <p>Knockout js</p>
                        <p>Paython</p>
                        <p>Windows</p>
                        <p>Node.js</p>
                        <p>HTML 5</p>
                        <p>CSS 3</p>
                        <p>Asp.net MVC 5</p>
                        <p>Asp.net Core</p>
                        <p>Linux Server</p>
                        <p>Odoo</p>
                        <p>Nope Commerce</p>
                        <p>Graphic Design</p>
                        <p>Paypal</p>
                        <p>Stripe</p>
                        <p>Braintree</p>
                    </Grid>
                    <Grid item xs={12} sm={12} md={4} lg={4}>
                        <p className={classes.sitemap_heading}>Hire Developers</p>
                    </Grid>
                </Grid>
            </div>
        );
    }
}

export const SitemapComponentWithStyles = withStyles(centillionStyles as any, { withTheme: true })(SitemapComponent)

