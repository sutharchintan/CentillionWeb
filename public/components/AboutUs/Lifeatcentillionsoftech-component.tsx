import * as React from 'react';
import { IconButton, Theme, Grid, Paper, FormGroup, withStyles, Select, MenuItem, Button, CardMedia } from "@material-ui/core";
import { Phone } from "@material-ui/icons";
import { companyName } from '../../providers/comp-name-provider';
import { centillionStyles } from "../styles/CentillionStyles";
/**
 * interface to define properties for life at centillion softech
 */
interface Props {

    currentTheme: Theme;

    classes: any;
}

/**
 * export the class for life at centillion softech component
 */
class LifeAtCentillionSofttechComponent extends React.Component<Props> {

    render() {
        const { classes } = this.props;
        return (
            <div className={classes.font_family}>
                <Grid item xs={12} sm={12} md={12} lg={12} >
                    <Paper>
                        <FormGroup className={classes.formgroup_padding}>
                            <h3>Life at {companyName}</h3>
                            <a className={classes.blog_a}>We provides flexible timing, decent pay and a healthy environment to work in {companyName}.</a>
                            <a className={classes.blog_a}>Our decisions and actions demonstrate Our Values – we believe in putting our Values into practice that creates long-term benefits for our customers and employees.</a>
                            <a className={classes.blog_a}>Diversity at {companyName} brings together clients, employees, and partners on a common global platform. We strongly believe that diversity is critical to innovation and it is the central part of the culture across {companyName}'s family.</a>
                            <a className={classes.blog_a}>We learn from both our successes and our failures. Our opportunities for growth and development help expand employee’s knowledge and skill levels. We pursue growth and learning as one of our core values.</a>
                        </FormGroup>
                    </Paper>
                </Grid>
            </div>
        );
    }
}

export const LifeAtCentillionSofttechComponentWithStyles = withStyles(centillionStyles as any, { withTheme: true })(LifeAtCentillionSofttechComponent)

