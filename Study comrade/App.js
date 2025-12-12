import React, { useState } from "react";

function App() {
  const [task, setTask] = useState("");
  const [todos, setTodos] = useState([]);
  const [editIndex, setEditIndex] = useState(null);

  // Create / Add Task
  const addTask = () => {
    if (!task.trim()) return;

    if (editIndex !== null) {
      const updated = [...todos];
      updated[editIndex] = task;
      setTodos(updated);
      setEditIndex(null);
    } else {
      setTodos([...todos, task]);
    }

    setTask("");
  };

  // Edit Task
  const editTask = (index) => {
    setTask(todos[index]);
    setEditIndex(index);
  };

  // Delete Task
  const deleteTask = (index) => {
    setTodos(todos.filter((_, i) => i !== index));
  };

  return (
    <div style={styles.container}>
      <h2>Todo CRUD App</h2>

      <div style={styles.row}>
        <input
          style={styles.input}
          type="text"
          placeholder="Enter task..."
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <button style={styles.button} onClick={addTask}>
          {editIndex !== null ? "Update" : "Add"}
        </button>
      </div>

      <ul style={styles.list}>
        {todos.map((t, i) => (
          <li key={i} style={styles.item}>
            {t}
            <div>
              <button style={styles.edit} onClick={() => editTask(i)}>
                Edit
              </button>
              <button style={styles.delete} onClick={() => deleteTask(i)}>
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

const styles = {
  container: {
    width: "350px",
    margin: "40px auto",
    padding: "20px",
    background: "#fff",
    borderRadius: "10px",
    boxShadow: "0 0 10px #ccc",
    textAlign: "center"
  },
  row: { display: "flex", gap: "10px", marginTop: "10px" },
  input: {
    flex: 1,
    padding: "8px",
    borderRadius: "6px",
    border: "1px solid gray"
  },
  button: {
    padding: "9px 15px",
    background: "#007bff",
    color: "white",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer"
  },
  list: { marginTop: "20px", padding: 0 },
  item: {
    listStyle: "none",
    background: "#f1f1f1",
    padding: "10px",
    marginBottom: "10px",
    borderRadius: "6px",
    display: "flex",
    justifyContent: "space-between"
  },
  edit: {
    marginRight: "10px",
    padding: "5px 10px",
    background: "orange",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer"
  },
  delete: {
    padding: "5px 10px",
    background: "red",
    color: "white",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer"
  }
};

export default App;