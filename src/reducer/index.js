import { combineReducers } from "redux";
import tempReducer from "./temp";

// combineReducersでreducerをまとめる
const rootReducers = combineReducers({
  // 外で定義しているreducerを追加する
  temp: tempReducer,
});

export default rootReducers;
