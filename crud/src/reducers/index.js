//REDUCERS
import produce from 'immer';
import {
  GET_USER,
  GET_USER_SUCCESS,
  GET_USER_FAILED,
  CREATE_USER,
  EDIT_USER,
  DELETE_USER,
  LOGIN,
  LOGIN_SUCCESS,
  LOGIN_FAILED
} from '../constants/index';

export const initialState = {
  users: [],
  loading: false,
  error: false,
  success: false,
  logined: false,
};

const rootReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case GET_USER:
        draft.loading = true;
        draft.error = false;
        draft.success = false;
        break;

      case GET_USER_SUCCESS:
        draft.loading = false;
        draft.error = false;
        draft.success = true;
        draft.user = action.data.users;
        break;

      case GET_USER_FAILED:
        draft.loading = false;
        draft.error = true;
        draft.success = true;
        break;

        case LOGIN:
          draft.email = action.data.email;
          draft.password = action.data.password;
          draft.logined = false;
          break;

      case LOGIN_SUCCESS:
        draft.logined = true;
        break;
      
        case LOGIN_FAILED:
          draft.logined = false;
          break;
          
      default:
        return state;
    }
  });

export default rootReducer;

