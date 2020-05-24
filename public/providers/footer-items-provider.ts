import { ButtonModel } from '../models/ButtonModel';
import { NavigationPaths } from '../enums/NavigationPaths';
import { ComponentNames } from '../enums/component-names';
/**
 * export the class for get menu
 */
export const getFooterItems = () => {

    const buttonList = [];
    
   
    /**
     * get the site map menu
     */
    const sitemapButton = new ButtonModel();
    sitemapButton.Text = "Sitemap"
    sitemapButton.Active = true;
    sitemapButton.Component = ComponentNames.Sitemap;
    buttonList.push(sitemapButton);

    /**
     * get the privacy policy menu
     */
    const privacypolicyButton = new ButtonModel();
    privacypolicyButton.Text = "Privacy Policy";
    privacypolicyButton.Active = false;
    privacypolicyButton.Component = ComponentNames.Privacy_Policy;
    buttonList.push(privacypolicyButton);

    /**
     * get the desclaimer menu
     */
    const desclaimerButton = new ButtonModel();
    desclaimerButton.Text = "Desclaimer";
    desclaimerButton.Active = false;
    desclaimerButton.Component = ComponentNames.Desclaimer;
    buttonList.push(desclaimerButton);

     /**
     * get the career menu
     */
    const careerButton = new ButtonModel();
    careerButton.Text = "Career";
    careerButton.Active = false;
    careerButton.Component = ComponentNames.Career;
    buttonList.push(careerButton);

    return buttonList;
}



