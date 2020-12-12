import * as React from "react";
import { AppBar, Toolbar, Button, CardMedia, Grid, withStyles, Theme } from "@material-ui/core";
import { getMenuItems } from '../../providers/menu-item-provider';
import { ButtonModel } from '../../models/ButtonModel';
import { blue } from "@material-ui/core/colors";
import { companyName } from '../../providers/comp-name-provider';
import { isMobile } from "react-device-detect";
import styled from 'styled-components';
import { centillionStyles } from "../styles/CentillionStyles";
import * as LogoImage from "../../images/Logo5.png";
import "../../style.css";
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
            <AppBar position="static" style={{ fontFamily: "Roboto", backgroundColor: "#b7c500", position:"fixed", top:"50px"}}>
                <div  className="main-container-div">
                   <Toolbar className={classes.footer_appbar}>
                    <Grid container spacing={24}>
                        <Grid item xs={12} sm={6} lg={7} md={5}>
        {/* <span style={{ color: "rgb(0, 0, 0)", fontSize: isMobile ? 30 : 40}}>{companyName}</span> */}
        <CardMedia image={LogoImage} className="comp-logo"></CardMedia>
                        </Grid>
                        <Grid item xs={12} sm={6} lg={5} md={7} className={classes.menubar_paddingtop}>
                            {
                                this.renderButtons()
                            }
                        </Grid>
                    </Grid>
                </Toolbar>
                </div> 
            </AppBar>
        )
    }

    renderButtons() {
        return (
            this.state.buttons.map((button, index) =>
                <Button
                    style={{
                        float: "right",
                        color: "#000000",
                        //color: button.Active ? "#b7c500" : this.props.currentTheme.palette.primary.main,
                        paddingLeft: isMobile ? 2 : 5,
                        paddingRight: isMobile ? 2 : 5,
                        marginLeft: isMobile ? 2 :5,
                        marginRight: isMobile ? 2 :5,
                        marginTop: isMobile ? 2: 18,
                        fontSize: isMobile ? 11: 13,
                        minHeight:isMobile ? 30 : 36,
                        minWidth:isMobile ? 76 : 88,
                        fontWeight: 600,
                        borderBottom: button.Active ? "1px #000000 solid" : "0px #000000 solid"
                    }}
                    className="menu-btn"
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
        color: "#000000",
        margin: "0px 5px 0px 5px",
        
    },
    button: {
        color: "#000000",
        margin: "0px 5px 0px 5px"
    }
}

export const MenuBarWithStyles = withStyles(styles)(MenuBar)