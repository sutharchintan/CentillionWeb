import * as React from 'react';
import { IconButton, Theme, Grid, Paper, FormGroup,withStyles, Select, MenuItem, Button, CardMedia } from "@material-ui/core";
import { Phone } from "@material-ui/icons";
import { centillionStyles } from "../styles/CentillionStyles";
/**
 * interface to define properties for founder's desk 
 */
interface Props {

    currentTheme: Theme;

    classes: any;
}

/**
 * export the class for founder's desk component
 */
class FounderDeskComponent extends React.Component<Props> {

    render() {
        const { classes } = this.props;
        return (
            <div className={classes.font_family}>
                <Grid item xs={12} sm={12} md={12} lg={12}>
                    <Paper>
                        <FormGroup className={classes.formgroup_padding}>
                             {/*<h3>Founder's Desk</h3>
                            <a style={{ lineHeight: 1.5, marginTop: 0 }}> Mr. Vandit Anand is the Founder and Director of Centillion Softtech and a visionary leader who is passionately leading this organization. He is a graduate from New York Institute of Technology (NYIT) Old Westbury, New York & is a Microsoft Certified Professional. He has worked with and proven his expertise to many companies in the US over more than eight years. Mr. Vandit Anand is also proudly serving in the United States Military (Reserve Component) and strongly believes and follows the core Military values both in his personal and professional life. </a>
                            <a style={{ lineHeight: 1.5, marginTop: 10 }}> Mr. Vandit Anand strongly prefers to put his clients and their satisfaction first over anything else and this approach is helping him climb the steps of success day by day.</a>*/}
                        </FormGroup> 
                    </Paper>
                </Grid>
            </div>
        );
    }
}

export const FounderDeskComponentWithStyles = withStyles(centillionStyles as any, { withTheme: true })(FounderDeskComponent)





