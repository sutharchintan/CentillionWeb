import { ApplicationActionTypes } from "../enums/ApplicationActionTypes";
import { ApplicationState } from '../state-model/ApplicationState';
import { ComponentNames } from "../enums/component-names";

export const applicationReducer = (
    state: ApplicationState = new ApplicationState(),
    action: any
) => {
    switch (action.type) {
        case ApplicationActionTypes.Current_Component:
            return handleCurrentComponent(state, action.payload);

        default:
            if (!state.currentComponent) {
                state.currentComponent = ComponentNames.Home
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
const handleCurrentComponent = (
    state: ApplicationState,
    payload: string
) => {
    return {
        ...state,
        currentComponent: payload
    };
};
