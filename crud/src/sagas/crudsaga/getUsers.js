import { call, put, takeLatest, takeEvery } from 'redux-saga/effects';
import * as types from '../../constants';
import {GETUSER} from '../../urlConfig';

import { 
    getUsers,
    getUsersSuccess,
    getUsersFailed
} from '../../actions/index';

export function* fetchGetAllUser(action){

  try{
    const DataUser = yield call(GETUSER,{
      method:'GET',
    });
    if(DataUser){
      yield put(getUsersSuccess(DataUser.data));

    }else {
      yield put (getUsersFailed({}));
    }

  }catch(error){
    yield put(getUsersFailed(error));

    
  }
}


export default function* getuser() {
  // See example in containers/HomePage/saga.js
  yield takeLatest(types.GET_USER, fetchGetAllUser);

}

