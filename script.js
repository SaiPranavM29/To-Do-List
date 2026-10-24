const taskInput = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");

function addTask(){
    const text = taskInput.value.trim();
    if(text ==="")
        return;

    const li = document.createElement("li");
    const span = document.createElement("span");
    span.textContent = text;

    li.addEventListener("click",()=>{
        li.classList.toggle("Done")
    })
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.addEventListener("click",(e)=>{
        e.stopPropagation();
        li.remove();
    });

    li.appendChild(span);
    li.appendChild(deleteBtn);
    taskList.appendChild(li);

    taskInput.value = "";
}
addBtn.addEventListener("click", addTask);

taskInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") addTask();
});