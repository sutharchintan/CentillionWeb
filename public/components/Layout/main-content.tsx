import * as React from "react";
import { ComponentNames } from "../../enums/component-names";
import { AboutusContainer } from "../AboutUs/About-us-container";
import { PortFolioContainer } from "../PortFolio/PortFolio-container";
import { DashboardContainer } from "../Dashboard/Dashboard-container";
import { ConatactUsContainer } from "../ContactUs/contact-us-container";
import { DesclaimerContainer } from "../Desclaimer/desclaimer-container";
import { SitemapContainer } from "../Sitemap/sitemap-container";
import { PrivacyPolicyContainer } from "../PrivacyPolicy/privacypolicy-container";
import { CareerContainer } from "../Career/career-container";

/**
 * interface to define properties for main content
 */
interface Props {
    currentComponent: string;
}

/**
 * export the class for main conatent
 */
export class MainContent extends React.Component<Props> {

    render() {
        return (
            this.getComponent()
        )
    }
    
    /**
     * use for display components
     */
    getComponent() {
        let component = null;
        switch (this.props.currentComponent) {
            case ComponentNames.Home:
                component = <DashboardContainer />
                break;

            case ComponentNames.About_Us:
                component = <AboutusContainer />
                break;

            case ComponentNames.Contact_Us:
                component = <ConatactUsContainer />
                break;

            case ComponentNames.Port_Folio:
                component = <PortFolioContainer />
                break;

                case ComponentNames.Career:
                component = <CareerContainer />
                break;

                case ComponentNames.Sitemap:
                component = <SitemapContainer />
                break;

                case ComponentNames.Privacy_Policy:
                component = <PrivacyPolicyContainer />
                break;

                case ComponentNames.Desclaimer:
                component = <DesclaimerContainer />
                break;
        }
        return component;
    }
}