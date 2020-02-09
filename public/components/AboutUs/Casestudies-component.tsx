import * as React from 'react';
import { IconButton, Theme, Grid, Paper, FormGroup, Select, MenuItem, Button, CardMedia } from "@material-ui/core";
import { Phone } from "@material-ui/icons";
import * as atxBoatsImage from "../../images/atxboats.png";
import * as niftyCartImage from "../../images/niftycart.png";

/**
 * interface to define properties for case studies component
 */
interface Props {

    currentTheme: Theme;
}

/**
 * export class for case studies component
 */
export class CaseStudiesComponent extends React.Component<Props> {

    render() {
        return (
            <div style={{ fontFamily: "Roboto" }}>
                <Grid item xs={12} sm={12} md={12} lg={12} >
                    <Paper>
                        <FormGroup style={{ padding: "0px 20px 2px 20px" }}>
                            <h3 style={{ paddingRight: 200 }}>Case Studies</h3>
                            <Grid container>
                                <Grid item xs={12} sm={6} md={6} lg={6} style={{ padding: 10 }} >
                                    <CardMedia image={niftyCartImage} style={{ height: 250, width: "100%", borderRadius: 5 }} ></CardMedia>
                                    <a style={{ fontWeight: 600, padding: "10px 0px" }}>Nifty Cart</a>
                                </Grid>
                                <Grid item xs={12} sm={6} md={6} lg={6} style={{ padding: 10 }} >
                                    <CardMedia image={atxBoatsImage} style={{ height: 250, width: "100%", borderRadius: 5 }} ></CardMedia>
                                    <a style={{ fontWeight: 600, padding: "10px 0px" }}>ATX Surf Boats</a>
                                </Grid>
                            </Grid>
                        </FormGroup>
                    </Paper>
                </Grid>
            </div>
        );
    }
}

