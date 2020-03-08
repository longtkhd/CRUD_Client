//REDUCERS
import produce from 'immer';
import {
  GET_USER,
  GET_USER_SUCCESS,
  GET_USER_FAILED,
  CREATE_USER,
  EDIT_USER,
  DELETE_USER
} from '../constants/index';

export const initialState = {
  users: [],
  loading: false,
  error: false,
  success: false,
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
        draft.success = false;
        break;
    }
  });

export default rootReducer;

