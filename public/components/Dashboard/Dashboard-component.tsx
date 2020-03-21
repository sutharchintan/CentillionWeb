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
import { borderStyles } from "../styles/borderStyles";
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

      <div style={{ fontFamily: "Roboto", position: "relative"}} >
        <div style={{height: "132px" }}>

        </div>
        <Grid container >
          <Carousel defaultWait={10000} /*wait for 1000 milliseconds*/ >
            <Slide right>
              <div>
                <Grid container spacing={24} style={{ width: "100%", margin: 0, textAlign: "left", display: "block" }}>
                  <Paper>
                    <Grid container style={{ backgroundColor: "rgb(66, 179, 219)", width: "100%" }}>

                      <Grid item xs={12} sm={12} lg={12} md={12} >

                        <Grid item xs={12} sm={6} lg={6} md={6}>
                          <Typography style={{ lineHeight: 2, color: "white", position: "absolute", paddingTop: isMobile ? "5%" : "10%", paddingLeft: "5%", fontFamily: "Roboto", fontSize: isMobile ? 15 : 35, maxWidth: isMobile ? 162 : 550 }}>A Complete Creative Solutions Provider For Web, Mobile & Software.</Typography>
                          {/* <Typography component="h1" style={{ lineHeight: 1.5, color: "white", position: "absolute", paddingTop: "10%", paddingLeft: "5%", fontFamily: "Roboto" }}>When you Hire us, You Hire Quality and Excellence.</Typography>
            <Typography component="h1" style={{ lineHeight: 1.5, color: "white", position: "absolute", paddingTop: "18%", paddingLeft: "5%", fontFamily: "Roboto" }}>No matter the Technology or Services.</Typography>*/}
                        </Grid>
                        <Grid item xs={12} sm={12} lg={12} md={12} >
                          <CardMedia image={landingoneLogo} style={{ width: "100%", height: isMobile ? 125 : 500 }} > </CardMedia>
                        </Grid>
                      </Grid >
                    </Grid>
                  </Paper>
                </Grid>
              </div>
            </Slide>
            <Slide right>
              <div>
                <Grid container spacing={24} style={{ width: "100%", margin: 0, textAlign: "left", display: "block" }}>
                  <Paper>
                    <Grid container style={{ backgroundColor: "rgb(66, 179, 219)", width: "100%" }}>

                      <Grid item xs={12} sm={12} lg={12} md={12} >

                        <Grid item xs={12} sm={6} lg={6} md={6}>
                          <Typography style={{ lineHeight: 2, color: "white", position: "absolute", paddingTop: isMobile ? "5%" : "10%", paddingLeft: "5%", fontFamily: "Roboto", fontSize: isMobile ? 15 : 35, maxWidth: isMobile ? 162 : 550 }}>When you Hire us, You Hire Quality and Excellence.</Typography>
                          {/* <Typography component="h1" style={{ lineHeight: 1.5, color: "white", position: "absolute", paddingTop: "10%", paddingLeft: "5%", fontFamily: "Roboto" }}>A Complete Creative Solutions Provider For Web, Mobile & Software.</Typography>
            <Typography component="h1" style={{ lineHeight: 1.5, color: "white", position: "absolute", paddingTop: "18%", paddingLeft: "5%", fontFamily: "Roboto" }}>No matter the Technology or Services.</Typography>*/}
                        </Grid>
                        <Grid item xs={12} sm={12} lg={12} md={12} >
                          <CardMedia image={landingoneLogo} style={{ width: "100%", height: isMobile ? 125 : 500 }} > </CardMedia>
                        </Grid>
                      </Grid >
                    </Grid>
                  </Paper>
                </Grid>
              </div>
            </Slide>
          </Carousel>
        </Grid>





        <Grid container spacing={24} style={{ padding: "2% 5% 2% 5%", width: "100%", margin: 0 }}>
          <Grid item xs={12}>
            <h1 style={{ fontSize: isMobile ? 25 : 40, textAlign: "center", color: "rgb(66, 179, 219)" }}>Perfect Products are Reflection of Organised Efforts</h1>
            <hr style={{ width: "100px", border: "1px gb(66, 179, 219) solid" }} ></hr>
            <h3 style={{ fontSize: isMobile ? 12 : 20, textAlign: "center", color: "rgb(66, 179, 219)" }}>Our rich portfolio justifies the fact that {companyName} functions as a World-Class Software Development Company.</h3>
          </Grid>

         

          <Grid style={{width:"12%"}}></Grid>
          <Grid item xs={12} sm={6} lg={3} md={3}>
            <Paper style={{ borderRadius: "100%" }}>
              <FormGroup>
                <CardMedia image={niftyCartImage} className={classes.imagePerfect}> </CardMedia>
              </FormGroup>
            </Paper>
            <h2 style={{ color: "black", textAlign: "center" }}>Nifty Cart</h2>
          </Grid>

          <Grid item xs={12} sm={6} lg={3} md={3}>
            <Paper style={{ borderRadius: "100%" }}>
              <FormGroup>
                <CardMedia image={atxBoatsImage} className={classes.imagePerfect}> </CardMedia>
              </FormGroup>
            </Paper>
            <h2 style={{ color: "black", textAlign: "center" }}>ATX Boat</h2>
          </Grid>
          <Grid item xs={12} sm={6} lg={3} md={3}>
            <Paper style={{ borderRadius: "100%" }}>
              <FormGroup>
                <CardMedia image={doctymeImage} className={classes.imagePerfect}> </CardMedia>
              </FormGroup>
            </Paper>
            <h2 style={{ color: "black", textAlign: "center" }}>Doctyme</h2>
          </Grid>
          <Grid style={{width:"12%"}}></Grid>
         
        </Grid>

<Grid style={{background: 'linear-gradient(45deg, rgb(66, 179, 219) 30%, rgba(66, 179, 219, 0.23) 90%)', height:200}}>
  <Typography style={{fontSize:50, color:"rgb(255, 255, 255)", textAlign:"center", padding:"5%"}} >Why Work with Centillion Softech?</Typography>
</Grid>

        <Grid container style={{ padding: "2% 5% 5% 5%", width: "100%", margin: 0, height: 480 }}>
          <Grid style={{ width:"32.33%" , padding:"0.5%"}}>
            <Flippy
              flipOnHover={true} // default false
              flipOnClick={false} // default false
              flipDirection="horizontal" // horizontal or vertical
            // ref={(r) => this.flippy = r} // to use toggle method like this.flippy.toggle()
            // if you pass isFlipped prop component will be controlled component.
            // and other props, which will go to div
             style={{height: '200px' }} /// these are optional style, it is not necessary
            >
              <FrontSide style={{ backgroundColor: '#ffffff' }} >
                <CardMedia image={masttechiconLogo} style={{ width: 100, height: 100, margin: "0px auto" }} > </CardMedia>
                <hr style={{ width: "100px", border: "1px rgb(66, 179, 219) solid" }} ></hr>
                <Typography style={{ fontSize: isMobile ? 15 : 18, fontWeight: "bold", textAlign: "center", fontFamily: "Roboto", color: "rgb(66, 179, 219)" }}>Masterly experienced in technologies</Typography>
              </FrontSide>
              <BackSide style={{ backgroundColor: 'rgb(66, 179, 219)' }}>
                <Grid>
                  <Typography style={{ fontSize: isMobile ? 15 : 18, fontWeight: "bold", fontFamily: "Roboto", color: "rgb(255, 255, 255)", textAlign: "center", padding: "3%" }}>Masterly experienced in technologies</Typography>
                </Grid>
                <hr style={{ width: "100px", border: "1px rgb(255, 255, 255) solid" }} ></hr>
                <Grid>
                  <Typography component="h4" style={{ fontSize: isMobile ? 12 : 15, lineHeight: 1.5, color: "rgb(255, 255, 255)", fontFamily: "Roboto" }}>Our clients have always trusted us without any second thought because we have more than a decade of experience in delivering various successful projects.</Typography>
                </Grid>
              </BackSide>
            </Flippy>
          </Grid>

          <Grid style={{ width:"32.33%" , padding:"0.5%"}}>
            <Flippy
              flipOnHover={true} // default false
              flipOnClick={false} // default false
              flipDirection="horizontal" // horizontal or vertical
            // ref={(r) => this.flippy = r} // to use toggle method like this.flippy.toggle()
            // if you pass isFlipped prop component will be controlled component.
            // and other props, which will go to div
            style={{height: '200px' }} /// these are optional style, it is not necessary
            >
              <FrontSide style={{ backgroundColor: '#ffffff' }}>
                <CardMedia image={multiplatformLogo} style={{ width: 100, height: 100, margin: "0px auto" }} > </CardMedia>
                <hr style={{ width: "100px", border: "1px rgb(66, 179, 219) solid" }} ></hr>
                <Typography style={{ fontSize: isMobile ? 15 : 18, fontWeight: "bold", textAlign: "center", fontFamily: "Roboto", color: "rgb(66, 179, 219)" }}>Expertise on Multiple Platforms</Typography>
              </FrontSide>
              <BackSide style={{ backgroundColor: 'rgb(66, 179, 219)' }}>
                <Grid>
                  <Typography style={{ fontSize: isMobile ? 15 : 18, fontWeight: "bold", fontFamily: "Roboto", color: "rgb(255, 255, 255)", textAlign: "center", padding: "3%" }}>Expertise on Multiple Platforms</Typography>
                </Grid>
                <hr style={{ width: "100px", border: "1px rgb(255, 255, 255) solid" }} ></hr>
                <Grid>
                  <Typography component="h4" style={{ fontSize: isMobile ? 12 : 15, lineHeight: 1.5, color: "rgb(255, 255, 255)", fontFamily: "Roboto" }}>{companyName} has elite development team which has proficient expertise on the cutting-edge technologies and tools.</Typography>
                </Grid>
              </BackSide>
            </Flippy>
          </Grid>

          <Grid style={{ width:"32.33%" , padding:"0.5%"}}>
            <Flippy
              flipOnHover={true} // default false
              flipOnClick={false} // default false
              flipDirection="horizontal" // horizontal or vertical
            // ref={(r) => this.flippy = r} // to use toggle method like this.flippy.toggle()
            // if you pass isFlipped prop component will be controlled component.
            // and other props, which will go to div
            style={{height: '200px' }} /// these are optional style, it is not necessary
            >
              <FrontSide style={{ backgroundColor: '#ffffff' }}>
                <CardMedia image={managementtoolLogo} style={{ width: 100, height: 100, margin: "0px auto" }} > </CardMedia>
                <hr style={{ width: "100px", border: "1px rgb(66, 179, 219) solid" }} ></hr>
                <Typography style={{ fontSize: isMobile ? 15 : 18, fontWeight: "bold", textAlign: "center", fontFamily: "Roboto", color: "rgb(66, 179, 219)" }}>Best Project Management Tool</Typography>
              </FrontSide>
              <BackSide style={{ backgroundColor: 'rgb(66, 179, 219)' }}>
                <Grid>
                  <Typography style={{ fontSize: isMobile ? 15 : 18, fontWeight: "bold", fontFamily: "Roboto", color: "rgb(255, 255, 255)", textAlign: "center", padding: "3%" }}>Best Project Management Tool</Typography>
                </Grid>
                <hr style={{ width: "100px", border: "1px rgb(255, 255, 255) solid" }} ></hr>
                <Grid>
                  <Typography component="h4" style={{ fontSize: isMobile ? 12 : 15, lineHeight: 1.5, color: "rgb(255, 255, 255)", fontFamily: "Roboto" }}>To maintain the top notch services we have hands of experience on best project management tools available in the market.</Typography>
                </Grid>
              </BackSide>
            </Flippy>
          </Grid>

          <Grid style={{ width:"32.33%" , padding:"0.5%"}}>
            <Flippy
              flipOnHover={true} // default false
              flipOnClick={false} // default false
              flipDirection="horizontal" // horizontal or vertical
            // ref={(r) => this.flippy = r} // to use toggle method like this.flippy.toggle()
            // if you pass isFlipped prop component will be controlled component.
            // and other props, which will go to div
            style={{height: '200px' }} /// these are optional style, it is not necessary
            >
              <FrontSide style={{ backgroundColor: '#ffffff' }}>
                <CardMedia image={twentyfouriconLogo} style={{ width: 100, height: 100, margin: "0px auto" }} > </CardMedia>
                <hr style={{ width: "100px", border: "1px rgb(66, 179, 219) solid" }} ></hr>
                <Typography style={{ fontSize: isMobile ? 15 : 18, fontWeight: "bold", textAlign: "center", fontFamily: "Roboto", color: "rgb(66, 179, 219)" }}>24×7 Availability</Typography>
              </FrontSide>
              <BackSide style={{ backgroundColor: 'rgb(66, 179, 219)' }}>
                <Grid>
                  <Typography style={{ fontSize: isMobile ? 15 : 18, fontWeight: "bold", fontFamily: "Roboto", color: "rgb(255, 255, 255)", textAlign: "center", padding: "3%" }}>24×7 Availability</Typography>
                </Grid>
                <hr style={{ width: "100px", border: "1px rgb(255, 255, 255) solid" }} ></hr>
                <Grid>
                  <Typography component="h4" style={{ fontSize: isMobile ? 12 : 15, lineHeight: 1.5, color: "rgb(255, 255, 255)", fontFamily: "Roboto" }}>We know that our client's time is valuable and so we strive for them to make use of their time in the most efficient manner.</Typography>
                </Grid>
              </BackSide>
            </Flippy>
          </Grid>

          <Grid style={{width:"32.33%" , padding:"0.5%"}}>
            <Flippy
              flipOnHover={true} // default false
              flipOnClick={false} // default false
              flipDirection="horizontal" // horizontal or vertical
            // ref={(r) => this.flippy = r} // to use toggle method like this.flippy.toggle()
            // if you pass isFlipped prop component will be controlled component.
            // and other props, which will go to div
            style={{height: '200px' }} /// these are optional style, it is not necessary
            >
              <FrontSide style={{ backgroundColor: '#ffffff' }}>
                <CardMedia image={longtermiconLogo} style={{ width: 100, height: 100, margin: "0px auto" }} > </CardMedia>
                <hr style={{ width: "100px", border: "1px rgb(66, 179, 219) solid" }} ></hr>
                <Typography style={{ fontSize: isMobile ? 15 : 18, fontWeight: "bold", textAlign: "center", fontFamily: "Roboto", color: "rgb(66, 179, 219)" }}>Longterm Business Relationship</Typography>
              </FrontSide>
              <BackSide style={{ backgroundColor: 'rgb(66, 179, 219)' }}>
                <Grid>
                  <Typography style={{ fontSize: isMobile ? 15 : 18, fontWeight: "bold", fontFamily: "Roboto", color: "rgb(255, 255, 255)", textAlign: "center", padding: "3%" }}>Longterm Business Relationship</Typography>
                </Grid>
                <hr style={{ width: "100px", border: "1px rgb(255, 255, 255) solid" }} ></hr>
                <Grid >
                  <Typography component="h4" style={{ fontSize: isMobile ? 12 : 15, lineHeight: 1.5, color: "rgb(255, 255, 255)", fontFamily: "Roboto" }}>We strive to be your trusted long term partner and leave no stone unturned to achieve the trustworthy relationship where our client can rely on us as a trusted IT company.</Typography>
                </Grid>
              </BackSide>
            </Flippy>
          </Grid>

          <Grid style={{ width:"32.33%" , padding:"0.5%"}}>
            <Flippy
              flipOnHover={true} // default false
              flipOnClick={false} // default false
              flipDirection="horizontal" // horizontal or vertical
            // ref={(r) => this.flippy = r} // to use toggle method like this.flippy.toggle()
            // if you pass isFlipped prop component will be controlled component.
            // and other props, which will go to div
            style={{height: '200px' }}/// these are optional style, it is not necessary
            >
              <FrontSide style={{ backgroundColor: '#ffffff' }}>
                <CardMedia image={clienticonLogo} style={{ width: 100, height: 100, margin: "0px auto" }} > </CardMedia>
                <hr style={{ width: "100px", border: "1px rgb(66, 179, 219) solid" }} ></hr>
                <Typography style={{ fontSize: isMobile ? 15 : 18, fontWeight: "bold", textAlign: "center", fontFamily: "Roboto", color: "rgb(66, 179, 219)" }}>We are serving best to our happy clients</Typography>
              </FrontSide>
              <BackSide style={{ backgroundColor: 'rgb(66, 179, 219)' }}>
                <Grid>
                  <Typography style={{ fontSize: isMobile ? 15 : 18, fontWeight: "bold", fontFamily: "Roboto", color: "rgb(255, 255, 255)", textAlign: "center", padding: "3%" }}>We are serving best to our happy clients</Typography>
                </Grid>
                <hr style={{ width: "100px", border: "1px rgb(255, 255, 255) solid" }} ></hr>
                <Grid >
                  <Typography component="h4" style={{ fontSize: isMobile ? 12 : 15, lineHeight: 1.5, color: "rgb(255, 255, 255)", fontFamily: "Roboto" }}>{companyName} is growing exponentially in its global outreach as well as quality work in all directions.</Typography>
                </Grid>
              </BackSide>
            </Flippy>
          </Grid>

        </Grid>





      </div>
    );
  }
}

export const DashboardComponent = withStyles(borderStyles as any, { withTheme: true })(DashboardComponentList); 