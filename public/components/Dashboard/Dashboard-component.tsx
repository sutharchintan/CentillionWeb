import * as React from 'react';
import { Button, Grid, Theme, withStyles, CardMedia, FormGroup, Paper, CardContent, Typography, Avatar } from "@material-ui/core";
import { LoadingInterface, MessageInterface } from '../../interface-properties-actions';
import * as landingoneLogo from "../../images/softwarelandingpage.png";
import * as masttechiconLogo from "../../images/materltytechiconlightblue.png";
import * as multiplatformLogo from "../../images/multipleplaticonpnglightblue.png";
import * as managementtoolLogo from "../../images/managementtooliconlightblue.png";
import * as twentyfouriconLogo from "../../images/twentyfourlightblue.png";
import * as longtermiconLogo from "../../images/longtermrelationiconlightblue.png";
import * as clienticonLogo from "../../images/clienticonlightblue.png";
import * as homeillustrationLogo from "../../images/ithome_illustration.png";
import * as atxBoatsImage from "../../images/atxboats.png";
import * as niftyCartImage from "../../images/niftycart.png";
import * as doctymeImage from "../../images/doctyme.png"
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
import Flippy, { FrontSide, BackSide } from 'react-flippy';


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
  color: rgb(66, 179, 219);
`;
const Dots = styled.span`
  text-align: center;
  width: ${width};
  z-index: 100;  
  left: 48%;
  position: relative;    
  bottom: 30px;
  backgroundColor: rgb(66, 179, 219);
  color: rgb(66, 179, 219);
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
        <Grid container >
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
        <Grid container spacing={24} className={classes.grid_dashboard_second}>
          <Grid item xs={12}>
            <h1 className={classes.grid_dash_second_h1}>Perfect Products are Reflection of Organised Efforts</h1>
            <hr className={classes.hr_border}></hr>
            <h3 className={classes.grid_dash_second_h3}>Our rich portfolio justifies the fact that {companyName} functions as a World-Class Software Development Company.</h3>
          </Grid>
          <Grid className={classes.grid_dash_second_main}></Grid>
          <Grid item xs={12} sm={6} lg={3} md={3}>
            <Paper className={classes.grid_dash_second_main_paper}>
              <FormGroup>
                <CardMedia image={niftyCartImage} className={classes.image_perfect}> </CardMedia>
              </FormGroup>
            </Paper>
            <h2 className={classes.grid_Dash_second_main_h2}>Nifty Cart</h2>
          </Grid>
          <Grid item xs={12} sm={6} lg={3} md={3}>
            <Paper className={classes.grid_dash_second_main_paper}>
              <FormGroup>
                <CardMedia image={atxBoatsImage} className={classes.image_perfect}> </CardMedia>
              </FormGroup>
            </Paper>
            <h2 className={classes.grid_Dash_second_main_h2}>ATX Boat</h2>
          </Grid>
          <Grid item xs={12} sm={6} lg={3} md={3}>
            <Paper className={classes.grid_dash_second_main_paper}>
              <FormGroup>
                <CardMedia image={doctymeImage} className={classes.image_perfect}> </CardMedia>
              </FormGroup>
            </Paper>
            <h2 className={classes.grid_Dash_second_main_h2}>Doctyme</h2>
          </Grid>
          <Grid style={{ width: "12%" }}></Grid>
        </Grid>
        {/* Dashboard third div */}
        <Grid className={classes.grid_dash_third}>
          <Typography className={classes.grid_dash_third_typography} >Why Work with Centillion Softech?</Typography>
        </Grid>

        <Grid container spacing={24} className={classes.grid_dash_third_main}>
          <Grid item xs={12} sm={4} lg={4} md={4} className={classes.grid_dash_third_main_grid}>
            <Flippy flipOnHover={true} flipOnClick={false} flipDirection="horizontal" className={classes.grid_dash_flippy_height}>
              <FrontSide className={classes.grid_dash_flippy_front} >
                <CardMedia image={masttechiconLogo} className={classes.grid_dash_flippy_front_cardMedia}> </CardMedia>
                <hr className={classes.hr_border}></hr>
                <Typography className={classes.grid_dash_flippy_front_title}>Masterly experienced in technologies</Typography>
              </FrontSide>
              <BackSide className={classes.grid_dash_flippy_back}>
                <Grid>
                  <Typography className={classes.grid_dash_flippy_back_header}>Masterly experienced in technologies</Typography>
                </Grid>
                <hr className={classes.hr_border}></hr>
                <Grid>
                  <Typography component="h4" className={classes.grid_dash_flippy_back_div}>Our clients have always trusted us without any second thought because we have more than a decade of experience in delivering various successful projects.</Typography>
                </Grid>
              </BackSide>
            </Flippy>
          </Grid>

          <Grid item xs={12} sm={4} lg={4} md={4} className={classes.grid_dash_third_main_grid}>
            <Flippy flipOnHover={true} flipOnClick={false} flipDirection="horizontal" className={classes.grid_dash_flippy_height}>
              <FrontSide className={classes.grid_dash_flippy_front} >
                <CardMedia image={multiplatformLogo} className={classes.grid_dash_flippy_front_cardMedia}> </CardMedia>
                <hr className={classes.hr_border}></hr>
                <Typography className={classes.grid_dash_flippy_front_title}>Expertise on Multiple Platforms</Typography>
              </FrontSide>
              <BackSide className={classes.grid_dash_flippy_back}>
                <Grid>
                  <Typography className={classes.grid_dash_flippy_back_header}>Expertise on Multiple Platforms</Typography>
                </Grid>
                <hr className={classes.hr_border}></hr>
                <Grid>
                  <Typography component="h4" className={classes.grid_dash_flippy_back_div}>{companyName} has elite development team which has proficient expertise on the cutting-edge technologies and tools.</Typography>
                </Grid>
              </BackSide>
            </Flippy>
          </Grid>

          <Grid item xs={12} sm={4} lg={4} md={4} className={classes.grid_dash_third_main_grid}>
            <Flippy flipOnHover={true} flipOnClick={false} flipDirection="horizontal" className={classes.grid_dash_flippy_height}>
              <FrontSide className={classes.grid_dash_flippy_front} >
                <CardMedia image={managementtoolLogo} className={classes.grid_dash_flippy_front_cardMedia}> </CardMedia>
                <hr className={classes.hr_border}></hr>
                <Typography className={classes.grid_dash_flippy_front_title}>Best Project Management Tool</Typography>
              </FrontSide>
              <BackSide className={classes.grid_dash_flippy_back}>
                <Grid>
                  <Typography className={classes.grid_dash_flippy_back_header}>Best Project Management Tool</Typography>
                </Grid>
                <hr className={classes.hr_border}></hr>
                <Grid>
                  <Typography component="h4" className={classes.grid_dash_flippy_back_div}>To maintain the top notch services we have hands of experience on best project management tools available in the market.</Typography>
                </Grid>
              </BackSide>
            </Flippy>
          </Grid>

          <Grid item xs={12} sm={4} lg={4} md={4} className={classes.grid_dash_third_main_grid}>
            <Flippy flipOnHover={true} flipOnClick={false} flipDirection="horizontal" className={classes.grid_dash_flippy_height}>
              <FrontSide className={classes.grid_dash_flippy_front}>
                <CardMedia image={twentyfouriconLogo} className={classes.grid_dash_flippy_front_cardMedia}> </CardMedia>
                <hr className={classes.hr_border}></hr>
                <Typography className={classes.grid_dash_flippy_front_title}>24×7 Availability</Typography>
              </FrontSide>
              <BackSide className={classes.grid_dash_flippy_back}>
                <Grid>
                  <Typography className={classes.grid_dash_flippy_back_header}>24×7 Availability</Typography>
                </Grid>
                <hr className={classes.hr_border}></hr>
                <Grid>
                  <Typography component="h4" className={classes.grid_dash_flippy_back_div}>We know that our client's time is valuable and so we strive for them to make use of their time in the most efficient manner.</Typography>
                </Grid>
              </BackSide>
            </Flippy>
          </Grid>

          <Grid item xs={12} sm={4} lg={4} md={4} className={classes.grid_dash_third_main_grid}>
            <Flippy flipOnHover={true} flipOnClick={false} flipDirection="horizontal" className={classes.grid_dash_flippy_height}>
              <FrontSide className={classes.grid_dash_flippy_front}>
                <CardMedia image={longtermiconLogo} className={classes.grid_dash_flippy_front_cardMedia}> </CardMedia>
                <hr className={classes.hr_border}></hr>
                <Typography className={classes.grid_dash_flippy_front_title}>Longterm Business Relationship</Typography>
              </FrontSide>
              <BackSide className={classes.grid_dash_flippy_back}>
                <Grid>
                  <Typography className={classes.grid_dash_flippy_back_header}>Longterm Business Relationship</Typography>
                </Grid>
                <hr className={classes.hr_border}></hr>
                <Grid >
                  <Typography component="h4" className={classes.grid_dash_flippy_back_div}>We strive to be your trusted long term partner and leave no stone unturned to achieve the trustworthy relationship where our client can rely on us as a trusted IT company.</Typography>
                </Grid>
              </BackSide>
            </Flippy>
          </Grid>

          <Grid item xs={12} sm={4} lg={4} md={4} className={classes.grid_dash_third_main_grid}>
            <Flippy flipOnHover={true} flipOnClick={false} flipDirection="horizontal" className={classes.grid_dash_flippy_height}>
              <FrontSide className={classes.grid_dash_flippy_front}>
                <CardMedia image={clienticonLogo} className={classes.grid_dash_flippy_front_cardMedia}> </CardMedia>
                <hr className={classes.hr_border}></hr>
                <Typography className={classes.grid_dash_flippy_front_title}>We are serving best to our happy clients</Typography>
              </FrontSide>
              <BackSide className={classes.grid_dash_flippy_back}>
                <Grid>
                  <Typography className={classes.grid_dash_flippy_back_header}>We are serving best to our happy clients</Typography>
                </Grid>
                <hr className={classes.hr_border}></hr>
                <Grid >
                  <Typography component="h4" className={classes.grid_dash_flippy_back_div}>{companyName} is growing exponentially in its global outreach as well as quality work in all directions.</Typography>
                </Grid>
              </BackSide>
            </Flippy>
          </Grid>

        </Grid>





      </div>
    );
  }
}

export const DashboardComponent = withStyles(centillionStyles as any, { withTheme: true })(DashboardComponentList); 