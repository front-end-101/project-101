import { useReducer, useState } from "react";
import TodoItems from "./TodoItems";

const initialState = {
  todos: [
    {
      id: 1,
      title: "Task-1",
    },
  ],
};

const Todo = () => {
  function reducer(state, action) {
    switch (action.type) {
      case "ADD_ITEM":
        return { ...state, todos: [...state.todos, action.payload] };
      case "REMOVE_ITEM":
        return {
          ...state,
          todos: state.todos.filter((item) => item.id !== action.payload),
        };
      case "EDIT_ITEM": {
        const updateList = state.todos.map((item) => {
          if (item.id == action.payload.id) {
            return { ...item, title: action.payload.text };
          } else {
            return item;
          }
        });
        return { ...state, todos: updateList };
      }
      default:
        break;
    }
  }

  const [state, dispatch] = useReducer(reducer, initialState);
  const [inputQuery, setInputQuery] = useState("");
  const handleAdd = () => {
    const itemId = state.todos.length + 1;
    const todoItem = {
      id: itemId,
      title: inputQuery,
    };
    dispatch({ type: "ADD_ITEM", payload: todoItem });
    setInputQuery("");
  };

  return (
    <div className="w-screen h-screen bg-teal-500 p-6 flex justify-center items-center">
      <div className="w-3/5">
        <div className="shadow-md flex  justify-between mb-4">
          <input
            value={inputQuery}
            type="text"
            className="p-2 outline-none w-full"
            onChange={(e) => setInputQuery(e.target.value)}
          />
          <button className="py-2 px-5 bg-slate-100" onClick={handleAdd}>
            Add
          </button>
        </div>
        <div className="flex flex-col gap-2">
          {state.todos.map((item) => {
            return <TodoItems key={item.id} item={item} dispatch={dispatch} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Todo;
