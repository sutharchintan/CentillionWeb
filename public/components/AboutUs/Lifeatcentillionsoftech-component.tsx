import * as React from 'react';
import { IconButton, Theme, Grid, Paper, FormGroup, Select, MenuItem, Button, CardMedia } from "@material-ui/core";
import { Phone } from "@material-ui/icons";
import { companyName } from '../../providers/comp-name-provider';
/**
 * interface to define properties for life at centillion softech
 */
interface Props {

    currentTheme: Theme;
}

/**
 * export the class for life at centillion softech component
 */
export class LifeAtCentillionSofttechComponent extends React.Component<Props> {

    render() {
        return (
            <div style={{ fontFamily: "Roboto" }}>
                <Grid item xs={12} sm={12} md={12} lg={12} >
                    <Paper>
                        <FormGroup style={{ padding: "0px 20px 2px 20px" }}>
                            <h3>Life at {companyName}</h3>
                            <a style={{ padding: "5px 0px 5px 0px", lineHeight: 1.5 }}>We provides flexible timing, decent pay and a healthy environment to work in {companyName}.</a>
                            <a style={{ padding: "5px 0px 5px 0px", lineHeight: 1.5 }}>Our decisions and actions demonstrate Our Values – we believe in putting our Values into practice that creates long-term benefits for our customers and employees.</a>
        <a style={{ padding: "5px 0px 5px 0px", lineHeight: 1.5 }}>Diversity at {companyName} brings together clients, employees, and partners on a common global platform. We strongly believe that diversity is critical to innovation and it is the central part of the culture across {companyName}'s family.</a>
                            <a style={{ padding: "5px 0px 5px 0px", lineHeight: 1.5 }}>We learn from both our successes and our failures. Our opportunities for growth and development help expand employee’s knowledge and skill levels. We pursue growth and learning as one of our core values.</a>
                        </FormGroup>
                    </Paper>
                </Grid>
            </div>
        );
    }
}

