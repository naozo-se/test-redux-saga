import { all, fork } from "redux-saga/effects";
import tempSaga from "./temp";

// redux-sagaの対象にするsagaを定義
export default function* rootSaga() {
  yield all([
    // forkでsagaを追加
    fork(tempSaga),
  ]);
}
