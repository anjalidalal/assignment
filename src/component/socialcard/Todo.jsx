import React from "react";
import styles from "./socialcard.module.css";

const Todo = () => {
  return (
    <div className={styles.todo}>
      <h1>To-Do</h1>
      <div className={styles.checkbox}>
        {" "}
        <input type="checkbox" checked />
        <label>Call Rohan</label>
      </div>
      <div className={styles.checkbox}>
        <input type="checkbox" checked />
        <label>Call Rohan</label>
      </div>
      <div className={styles.checkbox}>
        {" "}
        <input type="checkbox" checked />
        <label>Fix navbar bug issues</label>
      </div>
      <button className={styles.taskButton}>Add Task</button>
    </div>
  );
};

export default Todo;
