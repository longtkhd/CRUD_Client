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

export function getUsers(id) {
  return {
    type : GET_USER,
    id
  }
}
export function getUsersSuccess(data){
  return {
    type:GET_USER_SUCCESS,
    data
  }
}
export function getUsersFailed(){
  return {
    type: GET_USER_FAILED,
    
  }
} 



export function loginUser(email,password){
  return {
    type:LOGIN,
    data:{
      email,
      password,
    }
  }
}

export function loginSuccess(data) {
  return {
    type: LOGIN_SUCCESS,
    data,
  };
}

export function loginFaild(data) {
  return {
    type: LOGIN_FAILED,
    data,
  };
}




