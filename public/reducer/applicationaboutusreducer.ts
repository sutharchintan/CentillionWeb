import { AboutusComponentActionTypes } from "../enums/AboutusComponentActionTypes";
import { ApplicationAboutusState } from '../state-model/ApplicationAboutusState';
import { AboutusComponentNames } from "../enums/aboutus-component-names";

export const applicationAboutUsReducer = (
    state: ApplicationAboutusState = new ApplicationAboutusState(),
    action: any
) => {
    switch (action.type) {
        case AboutusComponentActionTypes.Current_About_Component:
            return handleCurrentaboutusComponent(state, action.payload);

        default:
            if (!state.currentAboutUsComponent) {
                state.currentAboutUsComponent = AboutusComponentNames.Our_Team
            }
            break;
    }
    return state;
};

/**
 * handle current component progress
 * @param state the applucation state state
 * @param payload the action payload
 */
const handleCurrentaboutusComponent = (
    state: ApplicationAboutusState,
    payload: string
) => {
    return {
        ...state,
        currentAboutUsComponent: payload
    };
};
