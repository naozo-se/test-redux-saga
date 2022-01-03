import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { v1 as uuidv1 } from "uuid";
import {
  actions as tempActions,
  actionNames as tempActionNames,
} from "./action/temp";

const App = () => {
  // 入力内容設定のstate
  const [title, setTitle] = useState("");
  // 実行dispatch
  const dispatch = useDispatch();
  // reducerのデータ取得(リアルタイム)
  const tempData = useSelector((state) => state.temp.data);
  // 追加ボタン
  const addClickHandler = () => {
    const id = uuidv1();
    if (title) {
      // 追加のアクションを実行
      dispatch(tempActions[tempActionNames.ADD_DATA]({ title, id }));
      setTitle("");
    }
  };
  // データ取得ボタン
  const getClickHandler = () => {
    // データ取得のアクションを実行
    dispatch(tempActions[tempActionNames.GET_DATA]());
  };
  // データクリアボタン
  const clearClickHandler = () => {
    // データクリアのアクションを実行
    dispatch(tempActions[tempActionNames.CLEAR_DATA]());
    setTitle("");
  };

  return (
    <>
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
        {tempData.length > 0
          ? tempData.map((item, idx) => (
              <li key={idx}>
                {item.title} / {item.id}
              </li>
            ))
          : null}
      </ul>
    </>
  );
};

export default App;
