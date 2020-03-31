import { takeLatest, call, put } from 'redux-saga/effects';
import axios from 'axios';
import {  loginFaild, loginSuccess } from '../../actions/index';
import * as types from '../../constants/index';
import { LOGIN_API } from '../../urlConfig';

export function* login(action){
  try{
    const data = yield call(axios, {
      url: LOGIN_API,
      method: 'POST',
      data: {
        email: action.data.email,
        password: action.data.password,
      },
      
    });
    console.log(action.data.email);
    if (data.status == 200) {
     
      console.log('login success')
      localStorage.setItem('token', data.data.token);
      // localStorage.setItem('refreshToken', data.data.refreshToken);
      localStorage.setItem('isAuthenticated', true);
      yield put(loginSuccess(data.data.token));
    } else {
      yield put(
        loginFaild(
         
        ),
      );
    }
  }catch(errorr){
    yield put(
      loginFaild(
        
      ),
    );

  }
}

export default function* loginPage() {
  yield takeLatest(types.LOGIN, login);
}