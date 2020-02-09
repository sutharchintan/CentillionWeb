import { ButtonModel } from '../models/ButtonModel';
import { NavigationPaths } from '../enums/NavigationPaths';
import { AboutusComponentNames } from '../enums/aboutus-component-names';
import { companyName } from './comp-name-provider';
/**
 * export class for get all tab of about us
 */
export const getAboutUsItems = () => {

    const buttonList = [];

    /**
     * get the our team tab
     */
    const ourTeamButton = new ButtonModel();
    ourTeamButton.Text = "Point of Contact";
    ourTeamButton.Active = false;
    ourTeamButton.Component = AboutusComponentNames.Our_Team;
    buttonList.push(ourTeamButton);

    /**
     * get the our story tab
     */
    const ourStoryButton = new ButtonModel();
    ourStoryButton.Text = "Our Story";
    ourStoryButton.Active = false;
    ourStoryButton.Component = AboutusComponentNames.Our_Story;
    buttonList.push(ourStoryButton);

    /**
     * get the our process tab
     */
    const ourProcessButton = new ButtonModel();
    ourProcessButton.Text = "Our Process";
    ourProcessButton.Active = false;
    ourProcessButton.Component = AboutusComponentNames.Our_Process;
    buttonList.push(ourProcessButton);

    /**
     * get the founder's desk tab
     */
    const founderDeskButton = new ButtonModel();
    founderDeskButton.Text = "Founder's Desk"
    founderDeskButton.Active = true;
    founderDeskButton.Component = AboutusComponentNames.Founder_Desk;
    buttonList.push(founderDeskButton);

    /**
     * get the blogs tab
     */
    const blogsButton = new ButtonModel();
    blogsButton.Text = "Blogs";
    blogsButton.Active = true;
    blogsButton.Component = AboutusComponentNames.Blogs;
    buttonList.push(blogsButton); 

    /**
     * get the case studies tab
     */
    const caseStudiesButton = new ButtonModel();
    caseStudiesButton.Text = "Case Studies"
    caseStudiesButton.Active = true;
    caseStudiesButton.Component = AboutusComponentNames.Case_Studies;
    buttonList.push(caseStudiesButton); 

    /**
     * get the life at centillion softech
     */
    const lifeAtCentillionSoftechButton = new ButtonModel();
    lifeAtCentillionSoftechButton.Text =  "Life At Centillion Softech"
    lifeAtCentillionSoftechButton.Active = true;
    lifeAtCentillionSoftechButton.Component = AboutusComponentNames.Life_At_Centillion_Softech;
    buttonList.push(lifeAtCentillionSoftechButton);  
    
    /**
     * get the current opening tab
     */
    const currentOpeningButton = new ButtonModel();
    currentOpeningButton.Text = "Current Opening"
    currentOpeningButton.Active = true;
    currentOpeningButton.Component = AboutusComponentNames.Current_Opening;
    buttonList.push(currentOpeningButton);  

    return buttonList;
}



