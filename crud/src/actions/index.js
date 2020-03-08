import {
  GET_USER,
  GET_USER_SUCCESS,
  GET_USER_FAILED,
  CREATE_USER,
  EDIT_USER,
  DELETE_USER
} from '../constants/index';

export function getUsers(id) {
  return {
    type : GET_USER,
    id
  }
}




