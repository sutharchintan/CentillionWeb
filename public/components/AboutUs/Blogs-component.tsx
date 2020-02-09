import * as React from 'react';
import { IconButton, Theme, Grid, Paper, FormGroup, Select, MenuItem, Button, CardMedia } from "@material-ui/core";
import { Phone } from "@material-ui/icons";

/**
 * interface to define properties for blog component
 */
interface Props {

    currentTheme: Theme;

}

/**
 * export the class for blog component
 */
export class BlogsComponent extends React.Component<Props> {

    render() {
        return (
            <div style={{ fontFamily: "Roboto" }}>
                <Grid item xs={12} sm={12} md={12} lg={12}>
                    <Paper>
                        <FormGroup style={{ padding: "0px 20px 2px 20px" }}>
                            <h3>Blogs</h3>
                            <h4 style={{ marginTop: 10 }}>TypeScript and React</h4>
                            <a style={{ padding: "5px 0px 5px 0px", lineHeight: 1.5 }}> TypeScript is quickly becoming a fan favorite of the JavaScript community, adding the age old concept of types to our beloved language. While its just recently became popular it has been around since 2012  but over the past two years its popularity has risen significantly. </a>
                            <a style={{ padding: "5px 0px 5px 0px", lineHeight: 1.5 }}> React has also became a fan favorite in frontend community too. Out of the box, React comes pre-configured for Babel and while Facebook has its own type language, Flow, its not as popular as TypeScript and with adoption growing with TypeScript I want to talk about how to take a new or existing Babel project and convert it to TypeScript. </a>
                        </FormGroup>
                    </Paper>
                </Grid>
            </div>
        );
    }
}

