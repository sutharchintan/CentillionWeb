import * as React from 'react';
import { IconButton, Theme, Grid, Paper, FormGroup, Select, MenuItem, Button, CardMedia } from "@material-ui/core";
import { Phone } from "@material-ui/icons";

/**
 * interface to define properties for our process component
 */
interface Props {

    currentTheme: Theme;
}

/**
 * export the class for our process component
 */
export class OurProcessComponent extends React.Component<Props> {

    render() {
        return (
            <div style={{ fontFamily: "Roboto" }}>
                <Grid item xs={12} sm={12} md={12} lg={12}>
                    <Paper>
                        <FormGroup style={{ padding: "0px 20px 20px 20px" }}>
                            <h3>Our Process</h3>
                            <a style={{ padding: "5px 0px 5px 0px" }}>Planning and Requirement Analysis</a>
                            <a style={{ padding: "5px 0px 5px 0px" }}>Defining Requirements</a>
                            <a style={{ padding: "5px 0px 5px 0px" }}>Designing the product architecture</a>
                            <a style={{ padding: "5px 0px 5px 0px" }}>Building or Developing the Product</a>
                            <a style={{ padding: "5px 0px 5px 0px" }}>Testing the Product</a>
                            <a style={{ padding: "5px 0px 5px 0px" }}>Deployment and Maintenance</a>
                        </FormGroup>
                    </Paper>
                </Grid>
            </div>
        );
    }
}

