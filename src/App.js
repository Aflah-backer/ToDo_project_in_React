import React, { useState } from "react";

import AddTaskForm from "./components/AddTaskForm.jsx";
import UpdateForm from "./components/UpdateForm.jsx";
import ToDo from "./components/ToDo.jsx";

import "bootstrap/dist/css/bootstrap.min.css";

import "./App.css";

function App() {
  //Tasks (todo list) state
  const [toDo, setToDo] = useState([]);

  // temp state
  const [newTask, setNewTask] = useState("");
  const [updateData, setUpdateData] = useState("");

  //add task
  const addTask = () => {
    if (newTask) {
      let num = toDo.length + 1;
      let newEntery = { id: num, title: newTask, status: false };
      setToDo([...toDo, newEntery]);
      setNewTask("");
    }
  };

  // delete task
  const deleteTask = (id) => {
    let newTask = toDo.filter((task) => task.id !== id);
    setToDo(newTask);
  };

  //mark task as done or comleted
  const markDone = (id) => {
    let newTask = toDo.map((task) => {
      if (task.id === id) {
        return { ...task, status: !task.status };
      }
      return task;
    });
    setToDo(newTask);
  };

  //cancel update
  const cancelUpdate = () => {
    setUpdateData("");
  };

  //change task for update
  const changeTask = (e) => {
    let newEntery = {
      id: updateData.id,
      title: e.target.value,
      status: updateData.status ? true : false,
    };
    setUpdateData(newEntery);
  };

  //update task
  const updateTask = () => {
    let filterRecords = [...toDo].filter((task) => task.id !== updateData.id);
    let updatedObject = [...filterRecords, updateData];
    setToDo(updatedObject);
    setUpdateData("");
  };

  return (
    <div className="container App">
      <br />
      <br />
      <h2>To Do List</h2>
      <br />
      <br />
      {/* update task */}
      {updateData && updateData ? (
        <UpdateForm
          updateData={updateData}
          changeTask={changeTask}
          updateTask={updateTask}
          cancelUpdate={cancelUpdate}
        />
      ) : (
        <AddTaskForm
          newTask={newTask}
          setNewTask={setNewTask}
          addTask={addTask}
        />
      )}

      {/* display todos */}

      {toDo && toDo.length ? "" : "No Tasks..."}

      <ToDo
        toDo={toDo}
        markDone={markDone}
        setUpdateData={setUpdateData}
        deleteTask={deleteTask}
      />
    </div>
  );
}

export default App;
