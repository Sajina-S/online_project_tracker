// js/data.js  --  Group Task Race
//
// HOW TO UPDATE:
//   1. Add a new task to TASKS[] (give it the next id, title, dueDate)
//   2. For each group that completes a task, add the task id to completedTasks[]
//   Everything else (counts, rankings, progress, task views) auto-updates.

const GROUPS = [
  {
    id: 1,
    name: "KTU - Group 1",
    color: "#ef476f",
    members: ["Reema", "Suhaina", "Soudha", "Thasha"],
    completedTasks: [],
    avatar: "1"
  },
  {
    id: 2,
    name: "KTU - Group 2",
    color: "#06d6a0",
    members: ["Rana Nasni", "Safa Salim", "Hanan Musthafa"],
    completedTasks: [],
    avatar: "2"
  },
  {
    id: 3,
    name: "KTU - Group 3",
    color: "#ffd166",
    members: ["Siyad", "Nooditha", "Abhitha", "Irfana"],
    completedTasks: [],
    avatar: "3"
  },
  {
    id: 4,
    name: "KTU - Group 4",
    color: "#118ab2",
    members: ["Faizal", "Sreelakshmi", "Adhi", "Vijay"],
    completedTasks: [],
    avatar: "4"
  },
  {
    id: 5,
    name: "KTU - Group 5",
    color: "#9b5de5",
    members: ["Ashwin", "Goutham", "Smeethen", "Adhnan haneefa"],
    completedTasks: [],
    avatar: "5"
  },
  {
    id: 6,
    name: "Group 6",
    color: "#f77f00",
    members: ["Hafeez", "Shamil", "Shambu", "Anas"],
    completedTasks: [],
    avatar: "6"
  },
  {
    id: 7,
    name: "KTU - Group 7",
    color: "#4cc9f0",
    members: ["Abhishek", "Albin", "Asif", "Rohit"],
    completedTasks: [],
    avatar: "7"
  }

];

// ─── ADD NEW TASKS HERE ───────────────────────────────────────────────────────
// Each task is automatically assigned to ALL groups.
// Just update completedTasks[] above for the groups that finish each task.
const TASKS = [
  {
    id: 1,
    title: "Task 1 - Numpy Final Project",
    dueDate: "2026-09-19"
  }

];
