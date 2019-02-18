import {constants} from './index';

const defaultState = {
    focused:false
};

export default (state = defaultState,action)=>{
    const newState = JSON.parse(JSON.stringify(state));
    if(action.type === constants.SEARCH_FOCUS){
        newState.focused = true;
        return newState;
    }
    if(action.type === constants.SEARCH_BLUR){
        newState.focused = false;
        return newState;
    }
    return state;
}