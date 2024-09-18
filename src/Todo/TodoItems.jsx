import { useState } from "react";

const TodoItems = ({ item, dispatch }) => {
  const [edit, isEdit] = useState(false);
  const [updateQuery, setUpdateQuery] = useState(item.title);

  const handleDelete = () => {
    dispatch({ type: "REMOVE_ITEM", payload: item.id });
  };

  const handleEdit = () => {
    dispatch({type: 'EDIT_ITEM', payload: {id: item.id, text:updateQuery}})
  }
  return (
    <div className="bg-slate-300 p-2 flex justify-between shadow-sm cursor-pointer hover:bg-slate-500 hover:text-slate-100">
      {edit ? (
        <input
            className="text-slate-500 p-2"
          type="text"
          value={updateQuery}
          onChange={(e) => setUpdateQuery(e.target.value)}
        />
      ) : (
        <h2>{item.title}</h2>
      )}
      <div className="flex gap-2">
        <button onClick={() => isEdit((prev) => !prev)}>Edit</button>
        {edit && <button onClick={handleEdit}>update</button>}
        <button onClick={handleDelete}>Delete</button>
      </div>
    </div>
  );
};

export default TodoItems;
