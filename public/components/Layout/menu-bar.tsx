import * as React from "react";
import { AppBar, Toolbar, Button, CardMedia, Grid, withStyles, Theme } from "@material-ui/core";
import { getMenuItems } from '../../providers/menu-item-provider';
import { ButtonModel } from '../../models/ButtonModel';
import { blue } from "@material-ui/core/colors";
import { companyName } from '../../providers/comp-name-provider';
import { isMobile } from "react-device-detect";
import styled from 'styled-components';
import { centillionStyles } from "../styles/CentillionStyles";
/**
 * interface to define properties for menu bar
 */
interface Props {

    currentTheme: Theme;

    classes: any;

    setCurrentComponent: (componentName: string) => void;
}

/**
 * class for menu bar
 */
class MenuBar extends React.Component<Props> {

    state = {
        buttons: getMenuItems() as ButtonModel[]
    }

    render() {
        const { classes } = this.props;
        return (
            <AppBar position="static" style={{ fontFamily: "Roboto", backgroundColor: "white", position:"fixed", top:"68px"}}>
                <Toolbar className={classes.footer_appbar}>
                    <Grid container spacing={24}>
                        <Grid item xs={12} sm={6} lg={7} md={5}>
        <span style={{ color: "rgb(66, 179, 219)", fontSize: isMobile ? 30 : 40}}>{companyName}</span>
                        </Grid>
                        <Grid item xs={12} sm={6} lg={5} md={7} className={classes.menubar_paddingtop}>
                            {
                                this.renderButtons()
                            }
                        </Grid>
                    </Grid>
                </Toolbar>
            </AppBar>
        )
    }

    renderButtons() {
        return (
            this.state.buttons.map((button, index) =>
                <Button
                    color="inherit"
                    variant="outlined"
                    style={{
                        float: "right",
                        borderColor: this.props.currentTheme.palette.primary.main,
                        backgroundColor: button.Active ? this.props.currentTheme.palette.primary.main : "white",
                        color: button.Active ? "white" : this.props.currentTheme.palette.primary.main,
                        paddingLeft: isMobile ? 2 : 5,
                        paddingRight: isMobile ? 2 : 5,
                        marginLeft: isMobile ? 2 :5,
                        marginRight: isMobile ? 2 :5,
                        marginBottom: 15,
                        fontSize: isMobile ? 11: 13,
                        minHeight:isMobile ? 30 : 36,
                        minWidth:isMobile ? 76 : 88
                    }}
                    key={index}
                    onClick={() => { this.handleselectedcomponent(button) }} >
                    {button.Text}
                </Button>
            )
        )
    }

    handleselectedcomponent = (selectedcomponent: ButtonModel) => {
        const buttons = this.state.buttons;
        buttons.forEach((button: ButtonModel) => {
            if (button.Text === selectedcomponent.Text) {
                button.Active = true;
            }
            else {
                button.Active = false;
            }
        });
        const newButtons = Object.assign([], buttons);
        this.setState({ buttons: newButtons });
        this.props.setCurrentComponent(selectedcomponent.Component);
    }
}

const styles = {
    selectButton: {
        backgroundColor: "rgb(66, 179, 219)",
        color: "#ffffff",
        margin: "0px 5px 0px 5px"
    },
    button: {
        backgroundColor: "#ffffff",
        color: "rgb(66, 179, 219)",
        margin: "0px 5px 0px 5px"
    }
}

export const MenuBarWithStyles = withStyles(styles)(MenuBar)