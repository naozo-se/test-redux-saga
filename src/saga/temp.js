import { takeEvery, call, put } from "redux-saga/effects";
import { actions, actionNames } from "../action/temp";

// 監視対象のアクションと実行する処理を定義(reducerのtypeにおけるcase対象外のもの)
export default function* tempSaga() {
  // データのFetch処理を監視対象として追加
  yield takeEvery(actionNames.GET_DATA, fetchDataSaga);
  // 他にも監視対象があれば、 yield ~ () で追加する
}

// Fetch処理
function* fetchDataSaga() {
  try {
    // Fetch処理を追加
    const tempData = yield call(fetchData);
    // Fetchしたデータを追加する
    yield put(actions[actionNames.ADD_DATA](tempData));
  } catch (e) {
    // エラー処理が必要な場合はアクションを追加
  }
}

// Fetch処理(リクエスト部分)
const fetchData = () => {
  return fetch("http://localhost:8000/testdata/temp").then((response) =>
    response.json()
  );
};
