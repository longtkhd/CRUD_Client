import { all } from 'redux-saga/effects';
import  getuser from './crudsaga/getUsers';
import loginPage from './crudsaga/loginUser';

export default function* rootSaga() {
  yield all([
    getuser(),
    loginPage(),
    
  ]);
}