import * as React from 'react';
import { Button, Grid, Theme, CardMedia, FormGroup, Paper, CardContent, Typography, Avatar } from "@material-ui/core";
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
import makeCarousel from 'react-reveal/makeCarousel';
// we'll need the Slide component for sliding animations
// but you can use any other effect
import Slide from 'react-reveal/Slide';
// we'll use styled components for this tutorial
// but you can use any other styling options ( like plain old css )
import styled, { css } from 'styled-components';
import LinesEllipsis from 'react-lines-ellipsis';
import { companyName } from '../../providers/comp-name-provider';
import { isMobile } from "react-device-detect";
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
const width = '100%', height = '280px';
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
  text-shadow: 1px 1px 1px rgba(74, 196, 243, 0.9);
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
  backgroundColor: rgb(66, 179, 219);
  color: rgb(66, 179, 219);
`;
const CarouselUI = ({ position, total, handleClick, children }) => <Container>
  <Children>{children} </Children>
  <Dots>
    {Array(...Array(total)).map((val, index) =>
      <Dot key={index} onClick={handleClick} data-position={index}>
        {index === position ? '● ' : '○ '}
      </Dot>
    )}
  </Dots>
</Container>;
const Carousel = makeCarousel(CarouselUI);
/**
 * slider - end
 */

/**
* export the class for dashboard component
*/
export class DashboardComponent extends React.Component<Props> {
  render() {
    return (

      <div style={{ fontFamily: "Roboto" }} >
        <Grid container >
          <Grid item xs={12} sm={6} lg={6} md={6}>
            <Typography style={{ lineHeight: 2, color: "white", position: "absolute", paddingTop: isMobile ? "5%" : "10%", paddingLeft: "5%", fontFamily: "Roboto", fontSize: isMobile ? 15 : 35, maxWidth: isMobile ? 162 : 550 }}>A Complete Creative Solutions Provider For Web, Mobile & Software.</Typography>
            {/* <Typography component="h1" style={{ lineHeight: 1.5, color: "white", position: "absolute", paddingTop: "10%", paddingLeft: "5%", fontFamily: "Roboto" }}>When you Hire us, You Hire Quality and Excellence.</Typography>
            <Typography component="h1" style={{ lineHeight: 1.5, color: "white", position: "absolute", paddingTop: "18%", paddingLeft: "5%", fontFamily: "Roboto" }}>No matter the Technology or Services.</Typography>*/}
          </Grid>
          <Grid item xs={12} sm={12} lg={12} md={12} >
            <CardMedia image={landingoneLogo} style={{ width: "100%", height: isMobile ? 125 : 500 }} > </CardMedia>
          </Grid>
        </Grid>
        <Grid container spacing={24} color="white" style={{ padding: "2% 5% 2% 5%", width: "100%", margin: 0 }}>
          <Grid item xs={12} sm={12} lg={6} md={6} style={{ borderRadius: 5, padding: 20 }}>
            <CardMedia image={homeillustrationLogo} style={{ width: "100%", height: isMobile ? 260 : 583 }} > </CardMedia>

          </Grid>
          <Grid item xs={12} sm={12} lg={6} md={6} style={{ borderRadius: 5, paddingLeft: isMobile ? "1%" : "5%" }}>
            <div style={{ borderRadius: 5 }}>
              <CardContent style={{ minHeight: 90, paddingBottom: 1 }}>
                <div style={{ minHeight: 50 }}>
                  <Grid item xs={2} sm={2} lg={2} md={2} style={{ float: "left" }}  >
                    <CardMedia image={masttechiconLogo} style={{ width: 40, height: 40 }} > </CardMedia>
                  </Grid>
                  <Grid item xs={10} sm={10} lg={10} md={10} style={{ marginLeft: 50, verticalAlign: "center" }}>
                    <Typography component="h2" style={{ fontSize: isMobile ? 15 : 18, fontWeight: "bold", verticalAlign: "center", fontFamily: "Roboto", color: "rgb(66, 179, 219)", padding: "3%" }}>Masterly experienced in technologies</Typography>
                  </Grid>
                </div>
                <Grid item xs={12} sm={12} lg={12} md={12}>
                  <Typography component="h4" style={{ fontSize: isMobile ? 12 : 15, lineHeight: 1.5, color: "black", fontWeight: "bold", fontFamily: "Roboto" }}>Our clients have always trusted us without any second thought because we have more than a decade of experience in delivering various successful projects.</Typography>
                </Grid>
              </CardContent>
            </div>
            <div style={{ borderRadius: 5 }}>
              <CardContent style={{ minHeight: 90, paddingBottom: 1 }}>
                <div style={{ minHeight: 50 }}>
                  <Grid item xs={2} sm={2} lg={2} md={2} style={{ float: "left" }}  >
                    <CardMedia image={multiplatformLogo} style={{ width: 40, height: 40 }} > </CardMedia>
                  </Grid>
                  <Grid item xs={10} sm={10} lg={10} md={10} style={{ marginLeft: 50, verticalAlign: "center" }}>
                    <Typography component="h2" style={{ fontSize: isMobile ? 15 : 18, fontWeight: "bold", verticalAlign: "center", fontFamily: "Roboto", color: "rgb(66, 179, 219)", padding: "3%" }}>Expertise on Multiple Platforms</Typography>
                  </Grid>
                </div>
                <Grid item xs={12} sm={12} lg={12} md={12}>
                  <Typography component="h4" style={{ fontSize: isMobile ? 12 : 15, lineHeight: 1.5, color: "black", fontWeight: "bold", fontFamily: "Roboto" }}> {companyName} has elite development team which has proficient expertise on the cutting-edge technologies and tools.</Typography>
                </Grid>
              </CardContent>
            </div>
            <div style={{ borderRadius: 5 }}>
              <CardContent style={{ minHeight: 90, paddingBottom: 1 }}>
                <div style={{ minHeight: 50 }}>
                  <Grid item xs={2} sm={2} lg={2} md={2} style={{ float: "left" }}  >
                    <CardMedia image={managementtoolLogo} style={{ width: 40, height: 40 }} > </CardMedia>
                  </Grid>
                  <Grid item xs={10} sm={10} lg={10} md={10} style={{ marginLeft: 50, verticalAlign: "center" }}>
                    <Typography component="h2" style={{ fontSize: isMobile ? 15 : 18, fontWeight: "bold", verticalAlign: "center", fontFamily: "Roboto", color: "rgb(66, 179, 219)", padding: "3%" }}>Best Project Management Tool</Typography>
                  </Grid>
                </div>
                <Grid item xs={12} sm={12} lg={12} md={12}>
                  <Typography component="h4" style={{ fontSize: isMobile ? 12 : 15, lineHeight: 1.5, color: "black", fontWeight: "bold", fontFamily: "Roboto" }}>To maintain the top notch services we have hands of experience on best project management tools available in the market.</Typography>
                </Grid>
              </CardContent>
            </div>
            <div style={{ borderRadius: 5 }}>
              <CardContent style={{ minHeight: 90, paddingBottom: 1 }}>
                <div style={{ minHeight: 50 }}>
                  <Grid item xs={2} sm={2} lg={2} md={2} style={{ float: "left" }}  >
                    <CardMedia image={twentyfouriconLogo} style={{ width: 40, height: 40 }} > </CardMedia>
                  </Grid>
                  <Grid item xs={10} sm={10} lg={10} md={10} style={{ marginLeft: 50, verticalAlign: "center" }}>
                    <Typography component="h2" style={{ fontSize: isMobile ? 15 : 18, fontWeight: "bold", verticalAlign: "center", fontFamily: "Roboto", color: "rgb(66, 179, 219)", padding: "3%" }}>24×7 Availability</Typography>
                  </Grid>
                </div>
                <Grid item xs={12} sm={12} lg={12} md={12}>
                  <Typography component="h4" style={{ fontSize: isMobile ? 12 : 15, lineHeight: 1.5, color: "black", fontWeight: "bold", fontFamily: "Roboto" }}> We know that our client's time is valuable and so we strive for them to make use of their time in the most efficient manner.</Typography>
                </Grid>
              </CardContent>
            </div>
            <div style={{ borderRadius: 5 }}>
              <CardContent style={{ minHeight: 90, paddingBottom: 1 }}>
                <div style={{ minHeight: 50 }}>
                  <Grid item xs={2} sm={2} lg={2} md={2} style={{ float: "left" }}  >
                    <CardMedia image={longtermiconLogo} style={{ width: 40, height: 40 }} > </CardMedia>
                  </Grid>
                  <Grid item xs={10} sm={10} lg={10} md={10} style={{ marginLeft: 40, verticalAlign: "center" }}>
                    <Typography component="h2" style={{ fontSize: isMobile ? 15 : 18, fontWeight: "bold", verticalAlign: "center", fontFamily: "Roboto", color: "rgb(66, 179, 219)", padding: "3%" }}>Longterm Business Relationship</Typography>
                  </Grid>
                </div>
                <Grid item xs={12} sm={12} lg={12} md={12}>
                  <Typography component="h4" style={{ fontSize: isMobile ? 12 : 15, lineHeight: 1.5, color: "black", fontWeight: "bold", fontFamily: "Roboto" }}> We strive to be your trusted long term partner and leave no stone unturned to achieve the trustworthy relationship where our client can rely on us as a trusted IT company.</Typography>
                </Grid>
              </CardContent>
            </div>
            <div style={{ borderRadius: 5 }}>
              <CardContent style={{ minHeight: 90, paddingBottom: 1 }}>
                <div style={{ minHeight: 50 }}>
                  <Grid item xs={2} sm={2} lg={2} md={2} style={{ float: "left" }}  >
                    <CardMedia image={clienticonLogo} style={{ width: 40, height: 40 }} > </CardMedia>
                  </Grid>
                  <Grid item xs={10} sm={10} lg={10} md={10} style={{ marginLeft: 50, verticalAlign: "center" }}>
                    <Typography component="h2" style={{ fontSize: isMobile ? 15 : 18, fontWeight: "bold", verticalAlign: "center", fontFamily: "Roboto", color: "rgb(66, 179, 219)", padding: "3%" }}>We are serving best to our happy clients</Typography>
                  </Grid>
                </div>
                <Grid item xs={12} sm={12} lg={12} md={12}>
                  <Typography component="h4" style={{ fontSize: isMobile ? 12 : 15, lineHeight: 1.5, color: "black", fontWeight: "bold", fontFamily: "Roboto" }}> {companyName} is growing exponentially in its global outreach as well as quality work in all directions.</Typography>
                </Grid>
              </CardContent>
            </div>
          </Grid>
        </Grid>

        <Grid container spacing={24} style={{ padding: "2% 5% 2% 5%", backgroundColor: "rgb(245, 245, 245)", width: "100%", margin: 0 }}>
          <Grid item xs={12}>
            <h1 style={{ fontSize: isMobile ? 25 : 40, textAlign: "center", color: "rgb(66, 179, 219)" }}>Perfect Products are Reflection of Organised Efforts</h1>
            <h3 style={{ fontSize: isMobile ? 12 : 20, textAlign: "center", color: "rgb(66, 179, 219)" }}>Our rich portfolio justifies the fact that {companyName} functions as a World-Class Software Development Company.</h3>
          </Grid>
          <Grid item xs={12} sm={6} lg={3} md={3} style={{ width: "75%" }}>
            <Paper style={{ borderRadius: "100%" }}>
              <FormGroup>
                <CardMedia image={niftyCartImage} style={{ height: 250, width: "100%", borderRadius: "100%" }} > </CardMedia>
              </FormGroup>
            </Paper>
            <h2 style={{ color: "black", textAlign: "center" }}>Nifty Cart</h2>
          </Grid>
          <Grid item xs={12} sm={6} lg={3} md={3} style={{ width: "75%" }}>
            <Paper style={{ borderRadius: "100%" }}>
              <FormGroup>
                <CardMedia image={atxBoatsImage} style={{ height: 250, width: "100%", borderRadius: "100%" }}> </CardMedia>
              </FormGroup>
            </Paper>
            <h2 style={{ color: "black", textAlign: "center" }}>ATX Boat</h2>
          </Grid>
        </Grid>


        <Carousel defaultWait={100000} /*wait for 1000 milliseconds*/ >
          <Slide right>
            <div>
              <Grid container spacing={24} style={{ padding: "2% 5% 2% 5%", width: "100%", margin: 0, textAlign: "left" }}>
                <Paper>
                  <Grid container style={{ backgroundColor: "rgb(66, 179, 219)", borderRadius: 5, width: "100%" }}>

                    <Grid item xs={12} sm={12} lg={12} md={12} style={{ padding: 20 }}>

                      <Avatar alt="Nicholas Hurd" src="" style={{ float: "left" }} />
                      <Typography style={{ color: "white", fontSize: isMobile ? 18 : 20, fontWeight: 600, textAlign: "center" }}>Our Happy Clients</Typography>

                      {/* <LinesEllipsis
                        text='I can recommend Centillion Softech for their tenacity in solving software development problems, fast responses and all around approach to building software solutions.'
                        maxLine='1'
                        ellipsis='...'
                        trimRight
                        basedOn='letters'
                        style={{ lineHeight: 1.5, color: "white", fontSize: 20, fontStyle: "italic", paddingTop: 20}}
                      />  */}
                      <Typography style={{ fontSize: isMobile ? 12 : 15, lineHeight: 1.5, color: "white", fontStyle: "italic", paddingTop: 20, wordBreak: "break-word" }}>"I can recommend {companyName} for their tenacity in solving software development problems, fast responses and all around approach to building software solutions."</Typography>
                      <h4 style={{ color: "white", fontSize: isMobile ? 15 : 18, fontWeight: 600 }}>Nicholas Hurd</h4>
                      <p style={{ color: "white", fontSize: isMobile ? 15 : 18 }}>Litening Softwares Inc.</p>
                    </Grid >
                  </Grid>
                </Paper>
              </Grid>
            </div>
          </Slide>
          <Slide right>
            <div>
              <Grid container spacing={24} style={{ padding: "2% 5% 2% 5%", width: "100%", margin: 0, textAlign: "left" }}>
                <Paper>
                  <Grid container style={{ backgroundColor: "rgb(66, 179, 219)", borderRadius: 5, width: "100%" }}>
                    <Grid item xs={12} sm={12} lg={12} md={12} style={{ padding: 20 }} >
                      <Avatar alt="Jagdip Joshi" src="" style={{ float: "left" }} />
                      <Typography style={{ color: "white", fontSize: isMobile ? 18 : 20, fontWeight: 600, textAlign: "center" }}>Our Happy Clients</Typography>
                      {/* <LinesEllipsis
                        text='Very line process of functionality clarification, development, execution and delivery. Very Very Satisfied with services provided by the Centillion Softech company.'
                        maxLine='1'
                        ellipsis='...'
                        trimRight
                        basedOn='letters'
                        style={{ lineHeight: 1.5, color: "white", fontSize: 20, fontStyle: "italic", paddingTop: 20}}
                      />  */}
                      <Typography style={{ fontSize: isMobile ? 12 : 15, lineHeight: 1.5, color: "white", fontStyle: "italic", paddingTop: 20, wordBreak: "break-word" }}>"Very line process of functionality clarification, development, execution and delivery. Very Very Satisfied with services provided by the {companyName}."</Typography>
                      <h4 style={{ color: "white", fontSize: isMobile ? 15 : 18, fontWeight: 600 }}>Jagdip Joshi</h4>
                      <p style={{ color: "white", fontSize: isMobile ? 15 : 18 }}>ExultIt</p>
                    </Grid >
                  </Grid>
                </Paper>
              </Grid>
            </div>
          </Slide>
        </Carousel>

      </div>
    );
  }
}