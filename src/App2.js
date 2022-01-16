import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { v1 as uuidv1 } from "uuid";
import {
  actions as testActions,
  actionNames as testActionNames,
  actionBaseNames as testBaseName,
} from "./action/test";

const App2 = () => {
  // 入力内容設定のstate
  const [title, setTitle] = useState("");
  // 実行dispatch
  const dispatch = useDispatch();
  // reducerのデータ取得(リアルタイム)
  const testData = useSelector((state) => state[testBaseName].data);
  // 追加ボタン
  const addClickHandler = () => {
    const id = uuidv1();
    if (title) {
      // 追加のアクションを実行
      dispatch(testActions[testActionNames.ADD_DATA]({ title, id }));
      setTitle("");
    }
  };
  // データ取得ボタン
  const getClickHandler = () => {
    // データ取得のアクションを実行
    dispatch(testActions[testActionNames.GET_DATA]());
  };
  // データクリアボタン
  const clearClickHandler = () => {
    // データクリアのアクションを実行
    dispatch(testActions[testActionNames.CLEAR_DATA]());
    setTitle("");
  };

  return (
    <>
      <h1>test</h1>
      <label htmlFor="title">Title</label>
      <input
        type="text"
        id="title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button onClick={addClickHandler}>ADD</button>
      <button onClick={getClickHandler}>GET</button>
      <button onClick={clearClickHandler}>CLEAR</button>
      <ul>
        {/* データの出力 */}
        {testData.length > 0
          ? testData.map((item, idx) => (
              <li key={idx}>
                {item.title} / {item.id}
              </li>
            ))
          : null}
      </ul>
    </>
  );
};

export default App2;
