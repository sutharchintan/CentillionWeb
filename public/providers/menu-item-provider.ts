import { ButtonModel } from '../models/ButtonModel';
import { NavigationPaths } from '../enums/NavigationPaths';
import { ComponentNames } from '../enums/component-names';
/**
 * export the class for get menu
 */
export const getMenuItems = () => {

    const buttonList = [];

    /**
     * get the contact us menu
     */
    const contactUsButton = new ButtonModel();
    contactUsButton.Text = "Contact Us";
    contactUsButton.Active = false;
    contactUsButton.Component = ComponentNames.Contact_Us;
    buttonList.push(contactUsButton);

    /**
     * get the about us menu
     */
    const aboutUsButton = new ButtonModel();
    aboutUsButton.Text = "About Us";
    aboutUsButton.Active = false;
    aboutUsButton.Component = ComponentNames.About_Us;
    buttonList.push(aboutUsButton);

    /**
     * get the portfolio menu
     */
    const portfolioButton = new ButtonModel();
    portfolioButton.Text = "Portfolio";
    portfolioButton.Active = false;
    portfolioButton.Component = ComponentNames.Port_Folio;
    buttonList.push(portfolioButton);

    /**
     * get the home menu
     */
    const homeButton = new ButtonModel();
    homeButton.Text = "Home"
    homeButton.Active = true;
    homeButton.Component = ComponentNames.Home;
    buttonList.push(homeButton);

    return buttonList;
}



