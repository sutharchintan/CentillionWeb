import * as React from 'react';
import { connect } from "react-redux";
import { IconButton, Grid, Theme, Button, withStyles, CardMedia, createStyles } from "@material-ui/core";
import { getAboutUsItems } from '../../providers/aboutus-item-button-provider';
import { ButtonModel } from '../../models/ButtonModel';
import { LoadingInterface, MessageInterface } from '../../interface-properties-actions';
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
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import * as atxBoatsImage from "../../images/atxboats.png";
import * as niftyCartImage from "../../images/niftycart.png";
import { centillionStyles } from "../styles/CentillionStyles";
import * as doctymeImage from "../../images/doctyme.png";

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
class aboutUsComponent extends React.Component<Props> {
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
        const { classes } = this.props;
        return (
            <div className={classes.main_div}>
                <div className={classes.hide_div}></div>
                {/* about us first div */}
                <Grid container spacing={24} className={classes.aboutus_first_container}>
                    <Grid item xs={12} sm={12} lg={6} md={6} >
                        <h1 className={classes.aboutus_first_h1}>When you Hire us, You Hire Quality and Excellence</h1>
                        <h3 className={classes.aboutus_first_h3}>No matter the Technology or Services</h3>
                        <p className={classes.aboutus_first_p}>By entrusting your faith and time in us, {companyName} makes sure your investment is in the right hands. Showing flexibility in our work and delivering results have been the key drivers of our growth.</p>
                        <p className={classes.aboutus_first_p}>Taking the innovative approach to transform your ideas into reality, you just have to relax and let our Professionals pave the path towards the realization of your ideas into reality!</p>
                    </Grid>
                    <Grid item xs={12} sm={12} lg={6} md={6}>
                        <CardMedia image={grouppicLogo} className={classes.aboutus_first_cardMedia} />
                    </Grid >
                </Grid>

                <Grid container className={classes.aboutus_expension_container}>
                    <ExpansionPanel className={classes.aboutus_expension_width}>
                        <ExpansionPanelSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                            className={classes.aboutus_expensionsummary}>
                            <Typography className={classes.aboutus_expensionsummary_typography}>Point of Contact</Typography>
                        </ExpansionPanelSummary>
                        <ExpansionPanelDetails>
                            <Grid container>
                                <Grid item xs={12} sm={12} md={12} lg={12} className={classes.padding_5}>
                                    <Typography className={classes.aboutus_expensiondetails_grid_typograpgy}>Chintan Suthar</Typography>
                                </Grid>
                                <Grid item xs={12} sm={12} md={12} lg={12} className={classes.padding_5}>
                                    <Typography className={classes.aboutus_expensiondetails_typography}><IconButton>
                                        <img src={skypeLogo} className={classes.aboutus_expensiondetails_typography_imge}>
                                        </img>
                                    </IconButton>chintan.suthar90</Typography>
                                </Grid>

                            </Grid>

                        </ExpansionPanelDetails>
                    </ExpansionPanel>
                    <ExpansionPanel className={classes.aboutus_expension_width}>
                        <ExpansionPanelSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel2a-content"
                            id="panel2a-header">
                            <Typography className={classes.aboutus_expensionsummary_typography_second}>Life at Centillion Softech</Typography>
                        </ExpansionPanelSummary>
                        <ExpansionPanelDetails className={classes.aboutus_expensiondetails_second}>
                            <Grid container>
                                <Grid item xs={12} sm={12} md={12} lg={12} className={classes.padding_5}>
                                    <Typography className={classes.aboutus_expensionsummary_grid_typography}>We provides flexible timing, decent pay and a healthy environment to work in {companyName}.</Typography>
                                </Grid>
                                <Grid item xs={12} sm={12} md={12} lg={12} className={classes.padding_5}>
                                    <Typography className={classes.aboutus_expensionsummary_grid_typography}>Our decisions and actions demonstrate Our Values – we believe in putting our Values into practice that creates long-term benefits for our customers and employees.</Typography>
                                </Grid>
                                <Grid item xs={12} sm={12} md={12} lg={12} className={classes.padding_5}>
                                    <Typography className={classes.aboutus_expensionsummary_grid_typography}>Diversity at {companyName} brings together clients, employees, and partners on a common global platform. We strongly believe that diversity is critical to innovation and it is the central part of the culture across {companyName}'s family.</Typography>
                                </Grid>
                                <Grid item xs={12} sm={12} md={12} lg={12} className={classes.padding_5}>
                                    <Typography className={classes.aboutus_expensionsummary_grid_typography}>We learn from both our successes and our failures. Our opportunities for growth and development help expand employee’s knowledge and skill levels. We pursue growth and learning as one of our core values.</Typography>
                                </Grid>
                            </Grid>
                        </ExpansionPanelDetails>
                    </ExpansionPanel>
                    <ExpansionPanel className={classes.aboutus_expension_width}  >
                        <ExpansionPanelSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel2a-content"
                            id="panel2a-header"
                            className={classes.aboutus_expensionsummary}>
                            <Typography className={classes.aboutus_expensionsummary_typography}>Blogs</Typography>
                        </ExpansionPanelSummary>
                        <ExpansionPanelDetails>
                            <Grid container>
                                <Grid item xs={12} sm={12} md={12} lg={12} className={classes.padding_5}>
                                    <Typography className={classes.aboutus_expensiondetails_typograpgy}>TypeScript and React</Typography>
                                </Grid>
                                <Grid item xs={12} sm={12} md={12} lg={12} className={classes.padding_5}>
                                    <Typography className={classes.aboutus_expensiondetails_typography}> TypeScript is quickly becoming a fan favorite of the JavaScript community, adding the age old concept of types to our beloved language. While its just recently became popular it has been around since 2012  but over the past two years its popularity has risen significantly. </Typography>
                                </Grid>
                                <Grid item xs={12} sm={12} md={12} lg={12} className={classes.padding_5}>
                                    <Typography className={classes.aboutus_expensiondetails_typography}> React has also became a fan favorite in frontend community too. Out of the box, React comes pre-configured for Babel and while Facebook has its own type language, Flow, its not as popular as TypeScript and with adoption growing with TypeScript I want to talk about how to take a new or existing Babel project and convert it to TypeScript. </Typography>
                                </Grid>
                            </Grid>

                        </ExpansionPanelDetails>
                    </ExpansionPanel>
                    <ExpansionPanel className={classes.aboutus_expension_width}
                    >
                        <ExpansionPanelSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel2a-content"
                            id="panel2a-header">
                            <Typography className={classes.aboutus_expensionsummary_typography_second}>Case Studies</Typography>
                        </ExpansionPanelSummary>
                        <ExpansionPanelDetails className={classes.aboutus_expensiondetails_second}>
                            <Grid container>
                                <Grid item xs={12} sm={4} md={4} lg={4} className={classes.casestudies_grid} >
                                    <CardMedia image={niftyCartImage} className={classes.casestudies_cardMedia}></CardMedia>
                                    <h4 className={classes.casestudies_a}>Nifty Cart</h4>
                                </Grid>
                                <Grid item xs={12} sm={4} md={4} lg={4} className={classes.casestudies_grid}>
                                    <CardMedia image={atxBoatsImage} className={classes.casestudies_cardMedia}></CardMedia>
                                    <h4 className={classes.casestudies_a}>ATX Surf Boats</h4>
                                </Grid>
                                <Grid item xs={12} sm={4} md={4} lg={4} className={classes.casestudies_grid}>
                                    <CardMedia image={doctymeImage} className={classes.casestudies_cardMedia}></CardMedia>
                                    <h4 className={classes.casestudies_a}>Doctyme</h4>
                                </Grid>
                            </Grid>
                        </ExpansionPanelDetails>
                    </ExpansionPanel>
                </Grid>
                {/* about  second div */}
                <Grid container spacing={24} className={classes.aboutus_third_container}>
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
export const aboutUsComponentWithStyles = withStyles(centillionStyles as any, { withTheme: true })(aboutUsComponent)

