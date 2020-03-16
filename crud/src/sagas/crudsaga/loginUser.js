import { takeLatest, call, put } from 'redux-saga/effects';
import axios from 'axios';
import { loginSucceed, loginFaild, loginSuccess } from '../../actions/index';
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
    if (data.status == 200) {
      localStorage.setItem('token', data.data.token);
      localStorage.setItem('refreshToken', data.data.refreshToken);
      localStorage.setItem('isAuthenticated', true);
      yield put(loginSuccess(data.data.token));
    } else {
      // yield put(
      //   loginFaild({
      //     error: data.data.msg,
      //   }),
      // );
    }
  }catch(errorr){

  }
}

export default function* loginPage() {
  yield takeLatest(types.LOGIN, login);
}