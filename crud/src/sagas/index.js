import { all } from 'redux-saga/effects';
import  getuser from './crudsaga/getUsers';

export default function* rootSaga() {
  yield all([
    getuser(),
    
  ]);
}