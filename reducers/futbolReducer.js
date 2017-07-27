import actions from '../utils/actionsTypes';

const INITIAL_STATE = {
  competitions = []
};

const futbolReducer = (state = INITIAL_STATE,action) => {
  switch (action.type) {

    case actions.GET_COMPETITIONS:
      return {
        ...state,
        competitions : action.data
      };
      break;

    default:
      return state;
      
  }
};
