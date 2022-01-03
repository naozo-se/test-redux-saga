// actionの名称定義
export const actionNames = {
  ADD_DATA: "ADD_DATA",
  CLEAR_DATA: "CLEAR_DATA",
  GET_DATA: "GET_DATA",
};

// action処理の定義
export const actions = {
  // データの追加(引数が必要な場合は設定)
  [actionNames.ADD_DATA]: (payload) => {
    return { type: actionNames.ADD_DATA, payload };
  },
  // データクリア
  [actionNames.CLEAR_DATA]: () => {
    return { type: actionNames.CLEAR_DATA };
  },
  // 条件等必要な場合は、引数として追加
  [actionNames.GET_DATA]: () => {
    return { type: actionNames.GET_DATA };
  },
};
