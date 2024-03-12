import React from "react";

const Input = ({ handleSubmit, addText, setAddText }) => {
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="w-full bg-white rounded-2xl overflow-hidden">
          <input
            value={addText}
            onChange={(e) => setAddText(e.target.value)}
            type="text"
            placeholder="Type your task"
            className="p-3 md:w-[430px] w-[252px] outline-none "
          />
          <button
            type="submit"
            className="p-2 px-4 text-white bg-red-600 rounded-2xl"
          >
            Add
          </button>
        </div>
      </form>
    </div>
  );
};

export default Input;
