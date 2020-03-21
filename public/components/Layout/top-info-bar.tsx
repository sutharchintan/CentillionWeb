import * as React from "react";
import { Fragment, Component } from "react";
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, FormGroup, ListItem, List, FormControl } from '@material-ui/core';
import { AppBar, IconButton, Grid, Toolbar, CardMedia, Modal } from "@material-ui/core";
import { Mail, Phone } from "@material-ui/icons";
import TextField from '@material-ui/core/TextField';
import DateTimePicker from 'react-datetime-picker';
import * as skypeLogo from "../../images/skype.png";
import * as plannerLogo from "../../images/planner.png";
import { MailModel } from "../../models/MailModel";
import { phoneNumber } from "../../providers/phone-number-provider";
import * as INLogo from "../../images/IndiaFlag.png";

/**
 * interface to define properties for top info bar
 */
interface Props {
    setCurrentComponent: (componentName: string) => void;

    sendEmail: (model: MailModel) => void;
}

/**
 * export the class for top info bar
 */
export class TopInfoBar extends React.Component<Props> {

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
        const { open } = this.state
        return (
            <AppBar position="static" style={{ fontFamily: "Roboto", position:"fixed" }} >
                <Toolbar style={{ justifyContent: "space-between", paddingLeft: "5%", paddingRight: "5%", backgroundColor:"rgb(66, 179, 219)" }}>
                    <Grid container style={{ marginTop: 10, marginBottom: 10 }} >
                        <Grid xs={12} sm={4} lg={10} md={10}>
                            <IconButton>
                                <img src={INLogo} style={{height: 18, width: 25}}></img>
                            </IconButton>
                            <a style={{ paddingLeft: 5 }}>{phoneNumber}</a>
                            <IconButton>
                                <img src={skypeLogo} style={{ height: 20, width: 20 }}></img>
                            </IconButton>
                            <a style={{ paddingLeft: 5 }}>chintan.suthar90</a>
                        </Grid>
                        <Grid item xs={12} sm={8} lg={2} md={2}>
                            <FormControl style={{ paddingTop: 15, display: "inline-block", cursor: "pointer", float: "right" }} onClick={this.handleOpen}>
                                <img src={plannerLogo} style={{ height: 20, width: 20 }}></img>
                                <span style={{ marginLeft: 10, position:"relative", bottom: 4}}>SCHEDULE MEETING</span>
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