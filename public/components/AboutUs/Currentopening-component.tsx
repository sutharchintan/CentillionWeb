import * as React from 'react';
import { IconButton, Theme, Grid, Paper, FormGroup, Select, MenuItem, Button, CardMedia } from "@material-ui/core";
import { Phone } from "@material-ui/icons";

/**
 * interface to define properties for current opening component
 */
interface Props {

    currentTheme: Theme;
}

/**
 * export the class for current opening component
 */
export class CurrentOpeningComponent extends React.Component<Props> {

    render() {
        return (
            <div style={{ fontFamily: "Roboto" }}>
                <Grid item xs={12} sm={12} md={12} lg={12} >
                    <Paper>
                        <FormGroup style={{ padding: "0px 20px 2px 20px" }}>
                            <h3>Current Opening</h3>
                            <h4 style={{ marginTop: 10 }}>Why working with us?</h4>
                            <a style={{ padding: "5px 0px 5px 0px" }}>Team Working</a>
                            <a style={{ padding: "5px 0px 5px 0px" }}>Dynamic work environment</a>
                            <a style={{ padding: "5px 0px 5px 0px" }}>Flexible work arrangements</a>
                            <a style={{ padding: "5px 0px 5px 0px" }}>Professional development</a>
                            <a style={{ padding: "5px 0px 5px 0px" }}>Fulfill Your Ambitions</a>
                            <a style={{ padding: "5px 0px 5px 0px" }}>We turn good ideas into great products</a>
                            <a style={{ padding: "5px 0px 5px 0px" }}>Where affordability meets professionalism</a>
                            <a style={{ padding: "5px 0px 5px 0px" }}>Where expectations meet excellence</a>
                        </FormGroup>
                    </Paper>
                </Grid>
            </div>
        );
    }
}

