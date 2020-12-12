import * as React from 'react';
import { IconButton, Button, Grid, Theme, withStyles, CardMedia, FormGroup, Paper, CardContent, Typography, Avatar } from "@material-ui/core";
import { LoadingInterface, MessageInterface } from '../../interface-properties-actions';
import * as landingoneLogo from "../../images/main-banner-1.jpg";
import * as headeroneLogo from "../../images/headerone.png";
import * as headertwoLogo from "../../images/business-development-service-banner.jpg";
import * as headerthreeLogo from "../../images/website-development-banner.png";
import * as twentyfouriconLogo from "../../images/twentyfourlightblue.png";
import * as longtermiconLogo from "../../images/longtermrelationiconlightblue.png";
import * as clienticonLogo from "../../images/clienticonlightblue.png";
import * as homeillustrationLogo from "../../images/ithome_illustration.png";
import * as atxBoatsImage from "../../images/atxboats.png";
import * as niftyCartImage from "../../images/niftycart.png";
import * as doctymeImage from "../../images/doctyme.png";
import * as labcantonImage from "../../images/labcanton.png";
import * as exultitImage from "../../images/exultit.png";
import * as fyuzeImage from "../../images/fyuzeapp.png";
import * as memoImage from "../../images/memomaker.png";
import * as eventalogImage from "../../images/eventalog.png";
import makeCarousel from 'react-reveal/makeCarousel';
// we'll need the Slide component for sliding animations
// but you can use any other effect
import Slide from 'react-reveal/Slide';
// we'll use styled components for this tutorial
// but you can use any other styling options ( like plain old css )
import styled, { css } from 'styled-components';
import { companyName } from '../../providers/comp-name-provider';
import { isMobile } from "react-device-detect";
import { centillionStyles } from "../styles/CentillionStyles";
import { Computer, Build, PanTool, Code, AccessTime, Business, SupervisorAccount, Add, ChevronRight } from "@material-ui/icons";
import "../../style.css";


// import { MDBMask, MDBView, MDBContainer, MDBRow, MDBCol } from "mdbreact";
/**
 * interface to define properties for dashboard
 */
interface Props extends LoadingInterface, MessageInterface {

  currentTheme: Theme;

  classes: any;

}
/**
 * slider -start
 */
const width = '100%', height = isMobile ? '125px' : '500px';
const Container = styled.div`
  position: relative;
  overflow: hidden;
  width: ${width};
`;
const Children = styled.div`
  width: ${width};
  position: relative;
  height: ${height};
`;
const Dot = styled.span`
  font-size: 1.5em;
  cursor: pointer;
  user-select: none;
  backgroundColor: rgba(74, 196, 243, 0.9);
  color: #2a2f35;
`;
const Dots = styled.span`
  text-align: center;
  width: ${width};
  z-index: 100;  
  left: 48%;
  position: relative;    
  bottom: 30px;
  backgroundColor: #2a2f35;
  color: #2a2f35;
`;

const CarouselUI = ({ position, total, handleClick, children }) => <Container>
  <Children>{children} </Children>
  {/* <Dots>
    {Array(...Array(total)).map((val, index) =>
      <Dot key={index} onClick={handleClick} data-position={index}>
        {index === position ? '● ' : '○ '}
      </Dot>
    )}
  </Dots> */}
</Container>;
const Carousel = makeCarousel(CarouselUI);
/**
 * slider - end
 */
const useStyles = withStyles(theme => ({
  root: {
    '& > span': {
      margin: 2,
    },
  },
}));


// function HomeIcon(props) {
//   return (
//     <SvgIcon {...props}>
//       <path d="M4,6H20V16H4M20,18A2,2 0 0,0 22,16V6C22,4.89 21.1,4 20,4H4C2.89,4 2,4.89 2,6V16A2,2 0 0,0 4,18H0V20H24V18H20Z" />
//     </SvgIcon>
//   );
// }
/**
* export the class for dashboard component
*/
class DashboardComponentList extends React.Component<Props> {


  // constructor(props) {
  //   super(props);
  //     this.state = {
  //     isFlipped: false
  //   };
  //   this.handleClickFlip = this.handleClickFlip.bind(this);
  // }

  // handleClickFlip(e) {
  //   e.preventDefault();
  //   this.setState(prevState => ({ isFlipped: !prevState.isFlipped }));
  // }

  render() {
    const { classes } = this.props;
    const classesStyles = useStyles;

    return (

      <div className={classes.main_div}>
        <div className={classes.hide_div}></div>
        {/* Dashboard Slider */}
        <div className="bg-2a2f35">
          <Grid container  className="container-div-tab" >
          <Carousel defaultWait={10000} /*wait for 1000 milliseconds*/ >
            <Slide right>
              <div>
                <Grid container spacing={24} className={classes.carousel_main_grid}>
                  <Paper>
                    <Grid container className={classes.carousel_paper_grid}>
                      <Grid item xs={12} sm={12} lg={12} md={12} >
                        <Grid item xs={12} sm={6} lg={6} md={6}>
                          <Typography className={classes.carousel_paper_grid_typography}>A Complete Creative Solutions Provider For Web, Mobile & Software.</Typography>
                        </Grid>
                        <Grid item xs={12} sm={12} lg={12} md={12} >
                          <CardMedia image={landingoneLogo} className={classes.header_cardMedia}> </CardMedia>
                        </Grid>
                      </Grid >
                    </Grid>
                  </Paper>
                </Grid>
              </div>
            </Slide>
            <Slide right>
              <div>
                <Grid container spacing={24} className={classes.carousel_main_grid}>
                  <Paper>
                    <Grid container className={classes.carousel_paper_grid}>
                      <Grid item xs={12} sm={12} lg={12} md={12} >
                        <Grid item xs={12} sm={6} lg={6} md={6}>
                          <Typography className={classes.carousel_paper_grid_typography}>When you Hire us, You Hire Quality and Excellence.</Typography>
                        </Grid>
                        <Grid item xs={12} sm={12} lg={12} md={12} >
                          <CardMedia image={landingoneLogo} className={classes.header_cardMedia}> </CardMedia>
                        </Grid>
                      </Grid >
                    </Grid>
                  </Paper>
                </Grid>
              </div>
            </Slide>
          </Carousel>
        </Grid>
        {/* Dashboard second div */}
        <Grid container spacing={24} className="grid-dashboard-second">
          <Grid item xs={12}>
            <h1 className={classes.grid_dash_second_h1}>Perfect Products are Reflection of Organised Efforts</h1>
            <hr className={classes.hr_border}></hr>
            <h3 className={classes.grid_dash_second_h3_home}>Our rich portfolio justifies the fact that {companyName} functions as a World-Class Software Development Company.</h3>
          </Grid>
        </Grid>

        <Grid container spacing={24} className="main-container-div padding-bottom-50">
          <Grid item xs={12} sm={12} lg={4} md={4} className="grid-dash-second-main-paper">
            <CardMedia image={niftyCartImage} className="image-perfect"> </CardMedia>
            <div className="image-perfect-div">              
              <a href="https://niftycart.co/#/" target="_blank"> <Add className="perfect-image-div" /> </a>
            </div>
            <h3 className="grid-dash-second-main-h2">Nifty Cart</h3>
          </Grid>
          <Grid item xs={12} sm={12} lg={4} md={4} className="grid-dash-second-main-paper">
            <CardMedia image={atxBoatsImage} className="image-perfect"> </CardMedia>
            <div className="image-perfect-div">              
              <a href="http://atxboats-design.com/" target="_blank"> <Add className="perfect-image-div" /> </a>
            </div>
            <h3 className="grid-dash-second-main-h2">ATX Boat</h3>
          </Grid>
          <Grid item xs={12} sm={12} lg={4} md={4} className="grid-dash-second-main-paper">
            <CardMedia image={doctymeImage} className="image-perfect"> </CardMedia>  
            <div className="image-perfect-div">              
              <a href="http://doctyme.com/" target="_blank"> <Add className="perfect-image-div" /> </a>
            </div>
            <h3 className="grid-dash-second-main-h2">Doctyme</h3>
          </Grid>
          <Grid item xs={12} sm={12} lg={4} md={4} className="grid-dash-second-main-paper">
            <CardMedia image={labcantonImage} className="image-perfect"> </CardMedia>
            <div className="image-perfect-div">              
              <a href="http://thelabcanton.com/" target="_blank"> <Add className="perfect-image-div" /> </a>
            </div>
            <h3 className="grid-dash-second-main-h2">The lab canton</h3>
          </Grid>
          <Grid item xs={12} sm={12} lg={4} md={4} className="grid-dash-second-main-paper">
            <CardMedia image={exultitImage} className="image-perfect"> </CardMedia>
            <div className="image-perfect-div">              
              <a href="http://exultitsolution.com/#/" target="_blank"> <Add className="perfect-image-div" /> </a>
            </div>
            <h3 className="grid-dash-second-main-h2">Exult-it</h3>
          </Grid>
          <Grid item xs={12} sm={12} lg={4} md={4} className="grid-dash-second-main-paper">
            <CardMedia image={fyuzeImage} className="image-perfect"> </CardMedia>
            <div className="image-perfect-div">              
              <a href="https://fyuze.app/" target="_blank"> <Add className="perfect-image-div" /> </a>
            </div>
            <h3 className="grid-dash-second-main-h2">Fyuze app</h3>
          </Grid>
          <Grid item xs={12} sm={12} lg={4} md={4} className="grid-dash-second-main-paper">
            <CardMedia image={eventalogImage} className="image-perfect"> </CardMedia>
            <div className="image-perfect-div">              
              <a href="https://www.eventalog.com/" target="_blank"> <Add className="perfect-image-div" /> </a>
            </div>
            <h3 className="grid-dash-second-main-h2">Eventalog</h3>
          </Grid>
          <Grid item xs={12} sm={12} lg={4} md={4} className="grid-dash-second-main-paper">
            <CardMedia image={memoImage} className="image-perfect"> </CardMedia>
            <div className="image-perfect-div">              
              <a href="https://memomaker.app/" target="_blank"> <Add className="perfect-image-div" /> </a>
            </div>
            <h3 className="grid-dash-second-main-h2">Memo maker</h3>
          </Grid>
        </Grid>
        </div>
        {/* <Grid container spacing={24}>
          <Grid item xs={4} className="grid-dash-second-main-paper">
            <CardMedia image={niftyCartImage} className="image-perfect"> </CardMedia>
            <div className="image-perfect-div">
              <hr className="hr-border-card"></hr>
              <div className="grid-Dash-second-main-h2">Nifty Cart</div>
              <a href="" target="_blank"> <Add className="perfect-image-div" /> </a>
            </div>
          </Grid>
          <Grid item xs={4} className="grid-dash-second-main-paper">
            <CardMedia image={atxBoatsImage} className="image-perfect"> </CardMedia>
            <div className="image-perfect-div">
              <hr className="hr-border-card"></hr>
              <div className="grid-Dash-second-main-h2">ATX Boat</div>
              <a href="" target="_blank"> <Add className="perfect-image-div" /> </a>
            </div>
          </Grid>
          <Grid item xs={4} className="grid-dash-second-main-paper">
            <CardMedia image={doctymeImage} className="image-perfect"> </CardMedia>
            <div className="image-perfect-div">
              <hr className="hr-border-card"></hr>
              <div className="grid-Dash-second-main-h2">Doctyme</div>
              <a href="" target="_blank"> <Add className="perfect-image-div" /> </a>
            </div>
          </Grid>
          <Grid item xs={4} className="grid-dash-second-main-paper margin-bottom-50">
            <CardMedia image={labcantonImage} className="image-perfect"> </CardMedia>
            <div className="image-perfect-div">
              <hr className="hr-border-card"></hr>
              <div className="grid-Dash-second-main-h2">The lab canton</div>
              <a href="" target="_blank"> <Add className="perfect-image-div" /> </a>
            </div>
          </Grid>
          <Grid item xs={4} className="grid-dash-second-main-paper margin-bottom-50">
            <CardMedia image={exultitImage} className="image-perfect"> </CardMedia>
            <div className="image-perfect-div">
              <hr className="hr-border-card"></hr>
              <div className="grid-Dash-second-main-h2">Exult-it</div>
              <a href="" target="_blank"> <Add className="perfect-image-div" /> </a>
            </div>
          </Grid>
        </Grid> */}


        {/* Dashboard third div */}
        <div className="bg-b7c500-dash">
          <Grid >
            <Typography component="h1" className="grid-dash-third-typography" >Why Work with Centillion Softech?</Typography>
          </Grid>
          <div className="grid-dash-third-main">
            <Grid container spacing={24} className="main-container-div" >


              <Grid item xs={12} sm={12} lg={4} md={4} className="why-work-main-div">
                <div>
                  <IconButton className="why-work-image-div-btn" title="Computer" > <Computer className="why-work-image-div" /> </IconButton>
                  <Typography component="h3" className="grid-dash-flippy-front-title">Masterly experienced in technologies</Typography>
                  <hr className="why-work-border-dashboard"></hr>
                  <Typography component="h4" className="grid-dash-flippy-front-h4">Our clients have always trusted us without any second thought because we have more than a decade of experience in delivering various successful projects.</Typography>
                </div>
                <IconButton className="left-arrow-why-work-div"> <ChevronRight /></IconButton>
              </Grid>
              <Grid item xs={12} sm={12} lg={4} md={4} className="why-work-main-div">
                <div>
                  <IconButton className="why-work-image-div-btn" title="Code" > <Code className="why-work-image-div " /> </IconButton>
                  <Typography component="h3" className="grid-dash-flippy-front-title">Expertise on Multiple Platforms</Typography>
                  <hr className="why-work-border-dashboard"></hr>
                  <Typography component="h4" className="grid-dash-flippy-front-h4">{companyName} has elite development team which has proficient expertise on the cutting-edge technologies and tools.</Typography>
                </div>
                <IconButton className="left-arrow-why-work-div bottom-94"> <ChevronRight /></IconButton>
              </Grid>

              <Grid item xs={12} sm={12} lg={4} md={4} className="why-work-main-div">
                <div>
                  <IconButton className="why-work-image-div-btn" title="Build" > <Build className="why-work-image-div" /> </IconButton>
                  <Typography component="h3" className="grid-dash-flippy-front-title">Best Project Management Tool</Typography>
                  <hr className="why-work-border-dashboard"></hr>
                  <Typography component="h4" className="grid-dash-flippy-front-h4">To maintain the top notch services we have hands of experience on best project management tools available in the market.</Typography>
                </div>
                <IconButton className="left-arrow-why-work-div bottom-94"> <ChevronRight /></IconButton>
              </Grid>
              <Grid item xs={12} sm={12} lg={4} md={4} className="why-work-main-div">
                <div>
                  <IconButton className="why-work-image-div-btn" title="AccessTime" > <AccessTime className="why-work-image-div" /> </IconButton>
                  <Typography component="h3" className="grid-dash-flippy-front-title">24×7 Availability</Typography>
                  <hr className="why-work-border-dashboard"></hr>
                  <Typography component="h4" className="grid-dash-flippy-front-h4">We know that our client's time is valuable and so we strive for them to make use of their time in the most efficient manner.</Typography>
                </div>
                <IconButton className="left-arrow-why-work-div bottom-143"> <ChevronRight /></IconButton>
              </Grid>

              <Grid item xs={12} sm={12} lg={4} md={4} className="why-work-main-div">
                <div>
                  <IconButton className="why-work-image-div-btn" title="Business"> <Business className="why-work-image-div" /> </IconButton>
                  <Typography component="h3" className="grid-dash-flippy-front-title">Longterm Business Relationship</Typography>
                  <hr className="why-work-border-dashboard"></hr>
                  <Typography component="h4" className="grid-dash-flippy-front-h4">We strive to be your trusted long term partner and leave no stone unturned to achieve the trustworthy relationship where our client can rely on us as a trusted IT company.</Typography>
                </div>
                <IconButton className="left-arrow-why-work-div bottom-75"> <ChevronRight /></IconButton>
              </Grid>
              <Grid item xs={12} sm={12} lg={4} md={4} className="why-work-main-div">
                <div>
                  <IconButton className="why-work-image-div-btn" title="SupervisorAccount" > <SupervisorAccount className="why-work-image-div" /> </IconButton>
                  <Typography component="h3" className="grid-dash-flippy-front-title">We are serving best to our happy clients</Typography>
                  <hr className="why-work-border-dashboard"></hr>
                  <Typography component="h4" className="grid-dash-flippy-front-h4">{companyName} is growing exponentially in its global outreach as well as quality work in all directions.</Typography>
                </div>
                <IconButton className="left-arrow-why-work-div bottom-112"> <ChevronRight /></IconButton>
              </Grid>

            </Grid>
          </div>
        </div>

      </div>
    );
  }
}

export const DashboardComponent = withStyles(centillionStyles as any, { withTheme: true })(DashboardComponentList); 