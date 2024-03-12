import React, { useState, useEffect } from "react";
import Input from "./components/Input";
import Result from "./components/Result";

const App = () => {
  const [task, setTask] = useState([]);
  const [addText, setAddText] = useState("");

  useEffect(() => {
    const savedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
    setTask(savedTasks);
  }, []);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(task));
  }, [task]);

  const handleSubmit = (e) => {
  e.preventDefault();
    if (addText === "") {
      alert("please fill the input!");
    } else {
      const newTask = {
        id: Math.floor(Math.random() * 10000),
        todo: addText,
      };
      handleAddData(newTask);
      setAddText("");
    }
  };

  const handleAddData = (newTask) => {
    setTask([...task, newTask]);
  };

  const handleDeletTodo = (id) => {
    const updatedTodo = task.filter((item) => item.id !== id);
    setTask(updatedTodo);
  };

  return (
    <div className="bg-sky-950 min-h-screen">
      <div className="flex justify-center items-center ">
        <div className="md:mt-10 mt-5 md:w-[500px] w-80">
          <h1 className="font-semibold text-xl text-center text-white mb-8">
            Todo App 📝
          </h1>
          <Input
            addText={addText}
            setAddText={setAddText}
            handleSubmit={handleSubmit}
          />
          <Result
            task={task}
            setTask={setTask}
            handleDeletTodo={handleDeletTodo}
          />
        </div>
      </div>
    </div>
  );
};

export default App;
