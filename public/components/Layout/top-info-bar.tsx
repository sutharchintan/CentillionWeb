import * as React from "react";
import { Fragment, Component } from "react";
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, FormGroup, ListItem, List, FormControl, withStyles } from '@material-ui/core';
import { AppBar, IconButton, Grid, Toolbar, CardMedia, Modal } from "@material-ui/core";
import { Mail, Phone } from "@material-ui/icons";
import TextField from '@material-ui/core/TextField';
import DateTimePicker from 'react-datetime-picker';
import * as skypeLogo from "../../images/skype.png";
import * as plannerLogo from "../../images/planner.png";
import { MailModel } from "../../models/MailModel";
import { phoneNumber } from "../../providers/phone-number-provider";
import * as INLogo from "../../images/IndiaFlag.png";
import { isMobile } from "react-device-detect";
import { centillionStyles } from "../styles/CentillionStyles";
/**
 * interface to define properties for top info bar
 */
interface Props {
    setCurrentComponent: (componentName: string) => void;

    sendEmail: (model: MailModel) => void;

    classes: any;
}

/**
 * export the class for top info bar
 */
class TopInfoBar extends React.Component<Props> {

    state = {
        open: false,
        close: false,
        date: new Date(),
        name: "",
        email: "",
        contact: ""
    }

    /**
     * handle change of contact
     */
    handleChangeContact = (event) => {
        if (event && event.target) {
            this.state.contact = event.target.value;
        }
    }

    /**
     * handle change of email
     */
    handleChangeEmail = (event) => {
        if (event && event.target) {
            this.state.email = event.target.value;
        }
    }

    /**
     * handle change of name
     */
    handleChangeName = (event) => {
        if (event && event.target) {
            this.state.name = event.target.value;
        }
    }

    /**
     * handle change of date
     */
    handleChangedate = (event) => {
        if (event && event.target) {
            this.state.date = event.target.value;
        }
    }

    /**
     * handle open to schedule pop up
     */
    handleOpen = () => {
        this.setState({
            open: true
        })
    }

    /**
     * handle close to schedule pop up
     */
    handleClose = e => {
        this.setState({
            open: false
        })
    }

    /**
     * handle send mail for successful schedule event
     */
    handleSave = () => {
        if (this.state.email && this.state.name && this.state.date && this.state.contact) {
            const request = new MailModel();
            request.From = "suthar.chintan555@gmail.com";
            request.To = this.state.email;
            request.Subject = "Your schedule event";
            request.Body = "Hello!" + this.state.name + ". Your schedule is confirm on " + this.state.date;
            var data = request;
        }
        this.props.sendEmail(data);
    }

    render() {
        const { open } = this.state;
        const { classes } = this.props;
        return (
            <AppBar position="static" style={{ fontFamily: "Roboto", position: "fixed", height: "68px" }}>
                <Toolbar className={classes.topbar_toolbar}>
                    <Grid container className={classes.topbar_grid} >
                        <Grid xs={12} sm={8} lg={10} md={9}>
                            <IconButton className={classes.topbar_iconbtn}>
                                <img src={INLogo} className={classes.contactus_firstdiv_image} />
                            </IconButton>
                            <a className={classes.topbar_paddingleft}>{phoneNumber}</a>
                            <IconButton className={classes.topbar_iconbtn}>

                            <a  href="skype:chintan.suthar90?chat" >
                                <img src={skypeLogo} className={classes.contactus_skype_logo} /></a>
                            </IconButton>
                            <a className={classes.topbar_paddingleft}> Chintan Suthar</a>
                        </Grid>
                        <Grid item xs={12} sm={4} lg={2} md={3}>
                            <FormControl className={classes.topbar_formctrl} onClick={this.handleOpen}>
                                <img src={plannerLogo} className={classes.topbar_logo}></img>
                                <span className={classes.topbar_span}>SCHEDULE MEETING</span>
                            </FormControl>
                        </Grid>
                    </Grid>
                    <Dialog open={open} onClose={this.handleClose} >
                        <DialogTitle> {"Schedule"} </DialogTitle>
                        <DialogContent>
                            <List>
                                <ListItem>
                                    <DateTimePicker label="date" value={this.state.date} onChange={this.handleChangedate} />
                                </ListItem>
                            </List>
                            <ListItem>
                                <TextField label="Name" onChange={this.handleChangeName} type="text" />
                            </ListItem>
                            <ListItem>
                                <TextField label="Email" onChange={this.handleChangeEmail} type="text" />
                            </ListItem>
                            <ListItem>
                                <TextField label="Phone" onChange={this.handleChangeContact} type="number" />
                            </ListItem>
                        </DialogContent>
                        <DialogActions>
                            <Button variant="contained" size="medium" color="primary" onClick={this.handleSave}>
                                Schedule Event
                        </Button>
                            <Button variant="contained" size="medium" color="default" onClick={this.handleClose}>
                                Back
                        </Button>
                        </DialogActions>
                    </Dialog>
                </Toolbar>
            </AppBar>
        )
    }
}

export const TopInfoComponent = withStyles(centillionStyles as any, { withTheme: true })(TopInfoBar); 