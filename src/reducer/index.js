import { combineReducers } from "redux";
import { actionBaseNames as temp } from "../action/temp";
import { actionBaseNames as test } from "../action/test";
import tempReducer from "./temp";
import testReducer from "./test";

// combineReducersでreducerをまとめる
const rootReducers = combineReducers({
  // 外で定義しているreducerを追加する
  [temp]: tempReducer,
  [test]: testReducer,
});

export default rootReducers;
