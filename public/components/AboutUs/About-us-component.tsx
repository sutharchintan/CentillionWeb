import * as React from 'react';
import { connect } from "react-redux";
import { IconButton, Grid, Theme, FormGroup, Paper, Button, withStyles, CardMedia, MuiThemeProvider, createStyles } from "@material-ui/core";
import { Phone } from "@material-ui/icons";
import { getAboutUsItems } from '../../providers/aboutus-item-button-provider';
import { ButtonModel } from '../../models/ButtonModel';
import { LoadingInterface, MessageInterface } from '../../interface-properties-actions';
import { phoneNumber } from '../../providers/phone-number-provider';
import { companyName } from '../../providers/comp-name-provider';
import { AboutusComponentNames } from "../../enums/aboutus-component-names";
import * as skypeLogo from "../../images/IconSkype.png";
import { OurTeamContainer } from "../AboutUs/Ourteam-container";
import { OurProcessContainer } from "../AboutUs/Ourprocess-container";
import { OurStoryContainer } from "../AboutUs/Ourstory-container";
import { LifeAtCentillionSofttechContainer } from "../AboutUs/Lifeatcentillionsoftech-container";
import { FounderDeskContainer } from "../AboutUs/Founderdesk-container";
import { CurrentOpeningContainer } from "../AboutUs/Currentopening-container";
import { CaseStudiesContainer } from "../AboutUs/Casestudies-container";
import { BlogsContainer } from "../AboutUs/Blogs-container";
import * as grouppicLogo from "../../images/photo6.jpg";
import { isMobile } from "react-device-detect";
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { themeProvider } from '../../providers/applicationThemeProvider';
import * as atxBoatsImage from "../../images/atxboats.png";
import * as niftyCartImage from "../../images/niftycart.png";

/**
 * interface to define properties for about us component
 */
interface Props {
    currentTheme: Theme;

    setCurrentComponent: (componentName: string) => void;

    currentComponent: string;

    classes: any;
}

/**
 * export the class for about us component
 */
export class aboutUsComponent extends React.Component<Props> {
    constructor(props) {
        super(props);

        this.state.buttons.map((button, index) =>
            this.handleButtonselectedcomponentOnLoad(button))
    }

    state = {
        buttons: getAboutUsItems() as ButtonModel[]
    }

    useStyles = withStyles((theme: Theme) =>
        createStyles({
            root: {
                width: '100%',
            },
            heading: {
                fontSize: theme.typography.pxToRem(15),
                fontWeight: theme.typography.fontWeightRegular,
            },
        }),
    );


    render() {

        return (
            <div >
                <Grid container spacing={24} style={{ padding: "2% 5% 2% 5%", width: "100%", margin: 0 }}>
                    <Grid item xs={12} sm={12} lg={6} md={6} >
                        <h1 style={{ lineHeight: 1.7 }}>When you Hire us, You Hire Quality and Excellence</h1>
                        <h3 style={{ lineHeight: 1.7, color: "rgb(66, 179, 219)" }}>No matter the Technology or Services</h3>
                        <p style={{ color: "gray", lineHeight: 1.5, wordBreak: "break-word" }}>By entrusting your faith and time in us, {companyName} makes sure your investment is in the right hands. Showing flexibility in our work and delivering results have been the key drivers of our growth.</p>
                        <p style={{ color: "gray", lineHeight: 1.5, wordBreak: "break-word" }}>Taking the innovative approach to transform your ideas into reality, you just have to relax and let our Professionals pave the path towards the realization of your ideas into reality!</p>
                    </Grid>
                    <Grid item xs={12} sm={12} lg={6} md={6}>
                        <CardMedia image={grouppicLogo} style={{ height: isMobile ? 200 : 360, width: "100%" }} />
                    </Grid >
                </Grid>

                <Grid container style={{ padding: "3%" }}>
                    <ExpansionPanel style={{ width: "100%" }}>
                        <ExpansionPanelSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                            style={{ backgroundColor: "rgb(66, 179, 219)" }}
                        >
                            <Typography style={{ fontWeight: 600, color: "white", fontSize: "1.17em", fontFamily:"Roboto" }}>Point of Contact</Typography>
                        </ExpansionPanelSummary>
                        <ExpansionPanelDetails>
                                <Grid container>
                                <Grid item xs={12} sm={12} md={12} lg={12} style={{ padding: 5 }} >
                                    <Typography style={{ fontWeight: 600, fontSize:16, fontFamily:"Roboto" }}>Chintan Suthar</Typography>
                                </Grid>
                                <Grid item xs={12} sm={12} md={12} lg={12} style={{ padding: 5 }} >
                                <Typography style={{ paddingBottom: 10, fontSize:16, fontFamily:"Roboto" }}><IconButton>
                                    <img src={skypeLogo} style={{ height: 20, width: 20, marginRight: 20 }}>
                                    </img>
                                </IconButton>chintan.suthar90</Typography>
                                </Grid>
                               
                            </Grid>

                        </ExpansionPanelDetails>
                    </ExpansionPanel>
                    <ExpansionPanel style={{ width: "100%" }}>
                        <ExpansionPanelSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel2a-content"
                            id="panel2a-header">
                            <Typography style={{ fontWeight: 600, color: "rgb(66, 179, 219)" ,fontSize: "1.17em", fontFamily:"Roboto" }}>Life at Centillion Softech</Typography>
                        </ExpansionPanelSummary>
                        <ExpansionPanelDetails style={{ backgroundColor: "rgb(66, 179, 219)" }}>
                            <Grid container>
                                <Grid item xs={12} sm={12} md={12} lg={12} style={{ padding: 5 }} >
                                    <Typography style={{ padding: "5px 0px 5px 0px", lineHeight: 1.5, color: "white" , fontSize:16, fontFamily:"Roboto"}}>We provides flexible timing, decent pay and a healthy environment to work in {companyName}.</Typography>
                                </Grid>
                                <Grid item xs={12} sm={12} md={12} lg={12} style={{ padding: 5 }} >
                                    <Typography style={{ padding: "5px 0px 5px 0px", lineHeight: 1.5, color: "white" , fontSize:16, fontFamily:"Roboto"}}>Our decisions and actions demonstrate Our Values – we believe in putting our Values into practice that creates long-term benefits for our customers and employees.</Typography>
                                </Grid>
                                <Grid item xs={12} sm={12} md={12} lg={12} style={{ padding: 5 }} >
                                    <Typography style={{ padding: "5px 0px 5px 0px", lineHeight: 1.5, color: "white", fontSize:16, fontFamily:"Roboto" }}>Diversity at {companyName} brings together clients, employees, and partners on a common global platform. We strongly believe that diversity is critical to innovation and it is the central part of the culture across {companyName}'s family.</Typography>
                                </Grid>
                                <Grid item xs={12} sm={12} md={12} lg={12} style={{ padding: 5 }} >
                                    <Typography style={{ padding: "5px 0px 5px 0px", lineHeight: 1.5, color: "white", fontSize:16, fontFamily:"Roboto" }}>We learn from both our successes and our failures. Our opportunities for growth and development help expand employee’s knowledge and skill levels. We pursue growth and learning as one of our core values.</Typography>
                                </Grid>
                            </Grid>
                        </ExpansionPanelDetails>
                    </ExpansionPanel>
                    <ExpansionPanel style={{ width: "100%" }}>
                        <ExpansionPanelSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel2a-content"
                            id="panel2a-header"
                            style={{ backgroundColor: "rgb(66, 179, 219)" }}>
                            <Typography style={{ color: "white", fontWeight: 600,fontSize: "1.17em" , fontFamily:"Roboto" }} >Blogs</Typography>
                        </ExpansionPanelSummary>
                        <ExpansionPanelDetails>
                            <Grid container>
                                <Grid item xs={12} sm={12} md={12} lg={12} style={{ padding: 5 }} >
                                    <Typography style={{ marginTop: 10, fontWeight:600, fontSize:16, fontFamily:"Roboto"}}>TypeScript and React</Typography>
                                </Grid>
                                <Grid item xs={12} sm={12} md={12} lg={12} style={{ padding: 5 }} >
                                    <Typography style={{ padding: "5px 0px 5px 0px", lineHeight: 1.5, fontSize:16, fontFamily:"Roboto"}}> TypeScript is quickly becoming a fan favorite of the JavaScript community, adding the age old concept of types to our beloved language. While its just recently became popular it has been around since 2012  but over the past two years its popularity has risen significantly. </Typography>
                                </Grid>
                                <Grid item xs={12} sm={12} md={12} lg={12} style={{ padding: 5 }} >
                                    <Typography style={{ padding: "5px 0px 5px 0px", lineHeight: 1.5, fontSize:16, fontFamily:"Roboto" }}> React has also became a fan favorite in frontend community too. Out of the box, React comes pre-configured for Babel and while Facebook has its own type language, Flow, its not as popular as TypeScript and with adoption growing with TypeScript I want to talk about how to take a new or existing Babel project and convert it to TypeScript. </Typography>
                                </Grid>
                            </Grid>

                        </ExpansionPanelDetails>
                    </ExpansionPanel>
                    <ExpansionPanel style={{ width: "100%" }}>
                        <ExpansionPanelSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel2a-content"
                            id="panel2a-header">
                            <Typography style={{ color: "rgb(66, 179, 219)", fontWeight: 600,fontSize: "1.17em", fontFamily:"Roboto"  }}>Case Studies</Typography>
                        </ExpansionPanelSummary>
                        <ExpansionPanelDetails style={{ backgroundColor: "rgb(66, 179, 219)" }}>
                            <Grid container>
                                <Grid item xs={12} sm={6} md={6} lg={6} style={{ padding: 10 }} >
                                    <CardMedia image={niftyCartImage} style={{ height: 250, width: "100%", borderRadius: 5 }} ></CardMedia>
                                    <a style={{ fontWeight: 600, padding: "10px 0px", color: "white", fontFamily:"Roboto" }}>Nifty Cart</a>
                                </Grid>
                                <Grid item xs={12} sm={6} md={6} lg={6} style={{ padding: 10 }} >
                                    <CardMedia image={atxBoatsImage} style={{ height: 250, width: "100%", borderRadius: 5 }} ></CardMedia>
                                    <a style={{ fontWeight: 600, padding: "10px 0px", color: "white", fontFamily:"Roboto" }}>ATX Surf Boats</a>
                                </Grid>
                            </Grid>
                        </ExpansionPanelDetails>
                    </ExpansionPanel>
                </Grid>

                <Grid container spacing={24} style={{ padding: "2% 5% 2% 5%", borderBottom: "1px #9E9E9E solid", display: "none" }}>
                    <Grid item xs={12} sm={6} md={4} lg={4}  >
                        {
                            this.aboutusButtons()
                        }
                    </Grid>
                    <Grid item xs={12} sm={6} md={8} lg={8}  >
                        {
                            this.getbuttonComponent()
                        }
                    </Grid>
                </Grid>
            </div>
        );
    }

    /**
     * display tab button in about us page(show tab component)
     */
    aboutusButtons() {
        return (
            this.state.buttons.map((button, index) =>
                <Button
                    color="inherit"
                    variant="outlined"
                    style={{
                        margin: 5, padding: 5, display: "block",
                        borderColor: this.props.currentTheme.palette.primary.main,
                        backgroundColor: button.Active ? this.props.currentTheme.palette.primary.main : "white",
                        color: button.Active ? "white" : this.props.currentTheme.palette.primary.main
                    }}
                    key={index} onClick={() => { this.handleButtonselectedcomponent(button) }}  >
                    {button.Text}
                </Button>
            )
        )
    }

    /**
     * use for display selected tab
     */
    handleButtonselectedcomponent = (selectedcomponent: ButtonModel) => {
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

    /**
     * use for display load time tab
     */
    handleButtonselectedcomponentOnLoad = (selectedcomponent: ButtonModel) => {
        const buttons = this.state.buttons;
        buttons.forEach((button: ButtonModel) => {
            if (button.Text === "Our Team") {
                button.Active = true;
            }
            else {
                button.Active = false;
            }
        });
        const newButtons = Object.assign([], buttons);
        this.setState({ buttons: newButtons });
        this.props.setCurrentComponent("our_team");
    }

    /**
     * use for get tab components according selected tab
     */
    getbuttonComponent() {
        let component = null;
        switch (this.props.currentComponent) {
            case AboutusComponentNames.Our_Team:
                component = <OurTeamContainer />
                break;

            case AboutusComponentNames.Our_Story:
                component = <OurStoryContainer />
                break;

            case AboutusComponentNames.Our_Process:
                component = <OurProcessContainer />
                break;

            case AboutusComponentNames.Founder_Desk:
                component = <FounderDeskContainer />
                break;

            case AboutusComponentNames.Blogs:
                component = <BlogsContainer />
                break;

            case AboutusComponentNames.Case_Studies:
                component = <CaseStudiesContainer />
                break;

            case AboutusComponentNames.Life_At_Centillion_Softech:
                component = <LifeAtCentillionSofttechContainer />
                break;

            case AboutusComponentNames.Current_Opening:
                component = <CurrentOpeningContainer />
                break;
        }
        return component;
    }
}

const styles = {
    selectButton: {
        backgroundColor: "#2196f3",
        color: "#ffffff",
        margin: "0px 5px 0px 5px"
    },
    button: {
        backgroundColor: "#ffffff",
        color: "#2196f3",
        margin: "0px 5px 0px 5px"
    }
}
export const aboutUsComponentWithStyles = withStyles(styles)(aboutUsComponent)

