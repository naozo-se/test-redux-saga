import { all, fork } from "redux-saga/effects";
import tempSaga from "./temp";
import testSaga from "./test";

// redux-sagaの対象にするsagaを定義
export default function* rootSaga() {
  yield all([
    // forkでsagaを追加
    fork(tempSaga),
    fork(testSaga),
  ]);
}
