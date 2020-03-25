import * as React from 'react';
import { IconButton, Theme, Grid, Paper, FormGroup, withStyles, Select, MenuItem, Button, CardMedia } from "@material-ui/core";
import { Phone } from "@material-ui/icons";
import { centillionStyles } from "../styles/CentillionStyles";

/**
 * interface to define properties for our process component
 */
interface Props {

    currentTheme: Theme;

    classes: any;
}

/**
 * export the class for our process component
 */
class OurProcessComponent extends React.Component<Props> {

    render() {
        const { classes } = this.props;
        return (
            <div style={{ fontFamily: "Roboto" }}>
                <Grid item xs={12} sm={12} md={12} lg={12}>
                    <Paper>
                        <FormGroup className={classes.formgroup_padding}>
                            <h3>Our Process</h3>
                            <a className={classes.blog_a}>Planning and Requirement Analysis</a>
                            <a className={classes.blog_a}>Defining Requirements</a>
                            <a className={classes.blog_a}>Designing the product architecture</a>
                            <a className={classes.blog_a}>Building or Developing the Product</a>
                            <a className={classes.blog_a}>Testing the Product</a>
                            <a className={classes.blog_a}>Deployment and Maintenance</a>
                        </FormGroup>
                    </Paper>
                </Grid>
            </div>
        );
    }
}

export const OurProcessComponentWithStyles = withStyles(centillionStyles as any, { withTheme: true })(OurProcessComponent)
