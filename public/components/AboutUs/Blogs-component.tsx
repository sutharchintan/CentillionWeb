import * as React from 'react';
import { IconButton, Theme, Grid, Paper, FormGroup, withStyles, Select, MenuItem, Button, CardMedia } from "@material-ui/core";
import { Phone } from "@material-ui/icons";
import { centillionStyles } from "../styles/CentillionStyles";
/**
 * interface to define properties for blog component
 */
interface Props {

    currentTheme: Theme;

    classes: any;
}

/**
 * export the class for blog component
 */
 class BlogsComponent extends React.Component<Props> {

    render() {
        const { classes } = this.props;
        return (
            <div className={classes.font_family}>
                <Grid item xs={12} sm={12} md={12} lg={12}>
                    <Paper>
        <FormGroup className={classes.formgroup_padding}>
                            <h3>Blogs</h3>
                            <h4 className={classes.blog_h4}>TypeScript and React</h4>
                            <a className={classes.blog_a}> TypeScript is quickly becoming a fan favorite of the JavaScript community, adding the age old concept of types to our beloved language. While its just recently became popular it has been around since 2012  but over the past two years its popularity has risen significantly. </a>
                            <a className={classes.blog_a}> React has also became a fan favorite in frontend community too. Out of the box, React comes pre-configured for Babel and while Facebook has its own type language, Flow, its not as popular as TypeScript and with adoption growing with TypeScript I want to talk about how to take a new or existing Babel project and convert it to TypeScript. </a>
                        </FormGroup>
                    </Paper>
                </Grid>
            </div>
        );
    }
}

export const BlogsComponentWithStyles = withStyles(centillionStyles as any, { withTheme: true })(BlogsComponent)


