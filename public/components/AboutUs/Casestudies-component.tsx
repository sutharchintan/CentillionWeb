import * as React from 'react';
import { IconButton, Theme, Grid, Paper, FormGroup, withStyles, Select, MenuItem, Button, CardMedia } from "@material-ui/core";
import { Phone } from "@material-ui/icons";
import * as atxBoatsImage from "../../images/atxboats.png";
import * as niftyCartImage from "../../images/niftycart.png";
import * as doctymeImage from "../../images/doctyme.png";
import { centillionStyles } from "../styles/CentillionStyles";
/**
 * interface to define properties for case studies component
 */
interface Props {

    currentTheme: Theme;

    classes: any;
}

/**
 * export class for case studies component
 */
class CaseStudiesComponent extends React.Component<Props> {

    render() {
        const { classes } = this.props;
        return (
            <div className={classes.font_family}>
                <Grid item xs={12} sm={12} md={12} lg={12} >
                    <Paper>
                        <FormGroup className={classes.formgroup_padding}>
                            <h3 className={classes.casestudies_h3}>Case Studies</h3>
                            <Grid container>
                                <Grid item xs={12} sm={4} md={4} lg={4} className={classes.casestudies_grid} >
                                    <CardMedia image={niftyCartImage} className={classes.casestudies_cardMedia}></CardMedia>
                                    <h4 className={classes.casestudies_a}>Nifty Cart</h4>
                                </Grid>
                                <Grid item xs={12} sm={4} md={4} lg={4} className={classes.casestudies_grid}>
                                    <CardMedia image={atxBoatsImage} className={classes.casestudies_cardMedia}></CardMedia>
                                    <h4 className={classes.casestudies_a}>ATX Surf Boats</h4>
                                </Grid>
                                <Grid item xs={12} sm={4} md={4} lg={4} className={classes.casestudies_grid}>
                                    <CardMedia image={doctymeImage} className={classes.casestudies_cardMedia}></CardMedia>
                                    <h4 className={classes.casestudies_a}>Doctyme</h4>
                                </Grid>                               
                            </Grid>
                        </FormGroup>
                    </Paper>
                </Grid>
            </div>
        );
    }
}

export const CaseStudiesComponentWithStyles = withStyles(centillionStyles as any, { withTheme: true })(CaseStudiesComponent)



