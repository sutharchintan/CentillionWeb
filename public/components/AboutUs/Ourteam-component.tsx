import * as React from 'react';
import { IconButton, Theme, Grid, Paper, FormGroup, Select, MenuItem, Button, CardMedia } from "@material-ui/core";
import { Phone } from "@material-ui/icons";
import { phoneNumber } from '../../providers/phone-number-provider'
import * as skypeLogo from "../../images/IconSkype.png";

/**
 * interface to define properties for our team component
 */
interface Props {

    currentTheme: Theme;

    setCurrentComponent: (componentName: string) => void;
}

/**
 * export the class for our team component
 */
export class OurTeamComponent extends React.Component<Props> {

    render() {
        return (
            <div style={{ fontFamily: "Roboto" }}>
                <Grid item xs={12} sm={12} md={12} lg={12} >
                    <Paper >
                        <FormGroup style={{ padding: "0px 20px 20px 20px" }}>
                            <h3>Point of Contact</h3>
                            <a style={{ fontWeight: 600 }}>Chintan Suthar </a>
                            <a></a>
                            <a style={{ paddingBottom: 10 }}><IconButton>
                                <img src={skypeLogo} style={{ height: 20, width: 20 , marginRight:20}}>
                                </img>
                            </IconButton>chintan.suthar90</a>
                            {/* <a style={{ fontWeight: 600 }}>Milin Hapani </a>
                            <a>(Project Manager and Technical Head)</a>
                            <a style={{ paddingBottom: 10 }}><IconButton>
                                <img src={skypeLogo} style={{ height: 20, width: 20 }}>
                                </img>
                            </IconButton>cid.cbbde506456260eb</a>
                            <a style={{ fontWeight: 600 }}>Devang Suthar </a>
                            <a>(Software Developer)</a>
                            <a style={{ paddingBottom: 10 }}><IconButton>
                                <img src={skypeLogo} style={{ height: 20, width: 20 }}>
                                </img>
                            </IconButton></a>
                            <a style={{ fontWeight: 600 }}>Dharvi Suthar </a>
                            <a>(Software Developer)</a>
                            <a style={{ paddingBottom: 10 }}><IconButton>
                                <img src={skypeLogo} style={{ height: 20, width: 20 }}>
                                </img>
                            </IconButton>dharvi610</a> */}
                        </FormGroup>
                    </Paper>
                </Grid>
            </div>
        );
    }
}

