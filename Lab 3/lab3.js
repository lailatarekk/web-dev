"use strict";
let tasks = [];
const input = document.getElementById("task-input");
const list = document.getElementById("task-list");
function addTask() {
    const text = input.value;
    tasks.push(text);
    render();
}
function render() {
    list.innerHTML = "";
    for (let i = 0; i < tasks.length; i++) {
        const p = document.createElement("p");
        p.textContent = tasks[i];
        list.appendChild(p);
    }
}
