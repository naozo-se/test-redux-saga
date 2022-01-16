import { actionNames } from "../action/test";

// reducerのデータ定義
const initialState = {
  data: [],
};

// reducerの関数定義
const testReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionNames.ADD_DATA:
      // データの追加
      return { ...state, data: state.data.concat(action.payload) };
    case actionNames.CLEAR_DATA:
      // データのクリア
      return { ...state, data: [] };
    default:
      return state;
  }
};

export default testReducer;
