import * as React from 'react';
import { IconButton, Theme, Grid, Paper, FormGroup, Select, MenuItem, Button, CardMedia } from "@material-ui/core";
import { Phone } from "@material-ui/icons";

/**
 * interface to define properties for our story component
 */
interface Props {

    currentTheme: Theme;
}

/**
 * export the class for our story component
 */
export class OurStoryComponent extends React.Component<Props> {

    render() {
        return (
            <div style={{ fontFamily: "Roboto" }}>
                <Grid item xs={12} sm={12} md={12} lg={12}>
                    <Paper>
                        <FormGroup style={{ padding: "0px 20px 20px 20px" }}>
                            {/* <h3>Our Story</h3>
                            <a style={{ lineHeight: 1.5, marginTop: 0 }}> Centillion Softtech is an offshore development outsourcing IT company. Incepted in the year 2019, Centillion Softtech is doing an astonishing work on the ground of IT fraternity. We have the global presence in India, USA with a team of 10+ in-house talents. Our commitment and belief to achieve the best is making us the most demandable company globally. We believe in stepping into client’s shoe for building their product in more awesome ways. Our experts are talented enough to convey the best solutions. We assure clients to bring their unique thoughts in the marketplace with more intuitive manner. We believe in maintaining punctuality and quality is our key area to deliver splendid work. </a> */}
                        </FormGroup>
                    </Paper>
                </Grid>
            </div>
        );
    }
}

