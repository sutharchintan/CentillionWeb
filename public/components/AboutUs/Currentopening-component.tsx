import * as React from 'react';
import { IconButton, Theme, Grid, Paper, FormGroup, withStyles, Select, MenuItem, Button, CardMedia } from "@material-ui/core";
import { Phone } from "@material-ui/icons";
import { centillionStyles } from "../styles/CentillionStyles";
/**
 * interface to define properties for current opening component
 */
interface Props {

    currentTheme: Theme;

    classes: any;
}

/**
 * export the class for current opening component
 */
class CurrentOpeningComponent extends React.Component<Props> {
   
    render() {
        const { classes } = this.props;
        return (
            <div className={classes.font_family}>
                <Grid item xs={12} sm={12} md={12} lg={12} >
                    <Paper>
                        <FormGroup className={classes.formgroup_padding}>
                            <h3>Current Opening</h3>
                            <h4 className={classes.blog_h4}>Why working with us?</h4>
                            <a className={classes.casestudies_padding}>Team Working</a>
                            <a className={classes.casestudies_padding}>Dynamic work environment</a>
                            <a className={classes.casestudies_padding}>Flexible work arrangements</a>
                            <a className={classes.casestudies_padding}>Professional development</a>
                            <a className={classes.casestudies_padding}>Fulfill Your Ambitions</a>
                            <a className={classes.casestudies_padding}>We turn good ideas into great products</a>
                            <a className={classes.casestudies_padding}>Where affordability meets professionalism</a>
                            <a className={classes.casestudies_padding}>Where expectations meet excellence</a>
                        </FormGroup>
                    </Paper>
                </Grid>
            </div>
        );
    }
}

export const CurrentOpeningComponentWithStyles = withStyles(centillionStyles as any, { withTheme: true })(CurrentOpeningComponent)




