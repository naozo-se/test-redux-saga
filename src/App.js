import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { v1 as uuidv1 } from "uuid";
import {
  actions as tempActions,
  actionNames as tempActionNames,
} from "./action/temp";

const App = () => {
  const [title, setTitle] = useState("");
  const dispatch = useDispatch();
  const tempData = useSelector((state) => state.temp.data);

  const addClickHandler = () => {
    const id = uuidv1();
    if (title) {
      dispatch(tempActions[tempActionNames.ADD_DATA]({ title, id }));
      setTitle("");
    }
  };

  const getClickHandler = () => {
    dispatch(tempActions[tempActionNames.GET_DATA]());
  };

  const removeClickHandler = () => {
    dispatch(tempActions[tempActionNames.CLEAR_DATA]());
    setTitle("");
  };

  useEffect(() => {
    console.log("tempData", tempData);
  }, [tempData]);

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
      <button onClick={removeClickHandler}>REMOVE</button>
      <ul>
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
