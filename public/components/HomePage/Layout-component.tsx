import * as React from 'react';
import { Theme, MuiThemeProvider } from "@material-ui/core";
import { MenuBarContainer } from '../Layout/menu-bar-container';
import { TopInfoBarContainer } from '../Layout/top-info-bar-container';
import { FooterBarContainer } from '../Layout/footer-bar-container';
import { MainContentContainer } from '../Layout/main-content-container';

/**
 * interface to define properties for layout component
 */
interface Props {

  currentTheme: Theme;

  classes: any;

}
/**
 * class for layout component
 */
export class LayoutComponent extends React.Component<Props> {
  /**
   * render the layout component elements
   */
  render() {
    const { classes } = this.props;

    // top info bar
    // menu bar
    // main content/children
    // footer
    return (
      <MuiThemeProvider theme={this.props.currentTheme}>
        <TopInfoBarContainer />
        <MenuBarContainer />
        <MainContentContainer />
        <FooterBarContainer />
      </MuiThemeProvider>
    );
  }
}


