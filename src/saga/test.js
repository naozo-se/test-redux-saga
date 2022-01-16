import { takeEvery, call, put } from "redux-saga/effects";
import { actions, actionNames } from "../action/test";

// 監視対象のアクションと実行する処理を定義(reducerのtypeにおけるcase対象外のもの)
export default function* testSaga() {
  // データのFetch処理を監視対象として追加
  yield takeEvery(actionNames.GET_DATA, fetchDataSaga);
  // 他にも監視対象があれば、 yield ~ () で追加する
}

// Fetch処理
function* fetchDataSaga() {
  try {
    // Fetch処理を追加
    const testData = yield call(fetchData);
    // Fetchしたデータを追加する
    yield put(actions[actionNames.ADD_DATA](testData));
  } catch (e) {
    // エラー処理が必要な場合はアクションを追加
  }
}

// Fetch処理(リクエスト部分)
// [{ "id": "id_value1", "title": "title_value1" },{ "id": "id_value2", "title": "title_value2" }, ...]
// が返ってくる想定
const fetchData = () => {
  return fetch("http://localhost:8000/testdata/test").then((response) =>
    response.json()
  );
};
