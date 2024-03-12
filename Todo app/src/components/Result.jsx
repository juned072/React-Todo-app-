import React, { useState } from "react";
import { RiDeleteBin5Line } from "react-icons/ri";
import { FaRegEdit } from "react-icons/fa";

const Result = ({ task, setTask, handleDeletTodo }) => {
  const [editTodo, setEditTodo] = useState("");
  const [editMode, setEditMode] = useState(null);

  const handleEditTodo = (id) => {
    const editedTask = task.map((item) => {
      if (item.id === id) {
        return { ...item, todo: editTodo };
      }
      return item;
    });
    setTask(editedTask);
    setEditMode(null);
    setEditTodo("");
  };

  const toggleCompletion = (id) => {
    const updatedLineThrough = task.map((item) => {
      if (item.id === id) {
        return { ...item, completed: !item.completed };
      }
      return item;
    });
    setTask(updatedLineThrough);
  };
  return (
    <div className="mt-8">
      {task.length === 0 ? (
        <p className="text-center text-white text-sm mt-28">Todo is empty!</p>
      ) : (
        <>
          {task.map((item) => {
            return (
              <div
                key={item.id}
                className="bg-gray-200 rounded-xl p-2 flex justify-between mb-4"
              >
                {editMode === item.id ? (
                  <div>
                    <input
                      value={editTodo}
                      onChange={(e) => setEditTodo(e.target.value)}
                      type="text"
                      placeholder="Edit your todo"
                      className="p-2 outline-red-500 rounded-md md:w-[480px] w-[305px]"
                    />
                    <div className="mt-2 text-right">
                      <button
                        className="p-2 bg-red-600 text-white rounded-md"
                        onClick={() => handleEditTodo(item.id)}
                      >
                        Save
                      </button>
                    </div>
                  </div>
                ) : (
                  <>
                    <div className="flex items-center">
                      <input
                        type="checkbox"
                        id={`resultCheckbox-${item.id}`}
                        checked={item.completed}
                        className="mr-5"
                        onChange={() => toggleCompletion(item.id)}
                      />
                      <label
                        htmlFor={`resultCheckbox-${item.id}`}
                        className={`cursor-pointer mr-4  md:max-w-[388px] max-w-[215px] ${
                          item.completed
                            ? "line-through text-gray-500 bg-yellow-400"
                            : ""
                        }`}
                        style={{
                          overflowWrap: "break-word",
                        }}
                      >
                        {item.todo}
                      </label>
                    </div>

                    <div className="flex items-center">
                      <FaRegEdit
                        className="mr-2 text-sky-700 cursor-pointer"
                        aria-label="Edit"
                        onClick={() => {
                          setEditMode(item.id);
                          setEditTodo(item.todo);
                        }}
                      />
                      <RiDeleteBin5Line
                        className="mr-2 text-red-500 cursor-pointer"
                        aria-label="Delete"
                        onClick={() => handleDeletTodo(item.id)}
                      />
                    </div>
                  </>
                )}
              </div>
            );
          })}
        </>
      )}
    </div>
  );
};

export default Result;
