// Tasks_DB  
let Tasks = [];

// Add_Task handler
function addTask(input){
  const newTask = {
    id:Math.floor(Math.random() * 1000000),
    task:input,
    isDone:false,
    isChecked:false
  }
  Tasks.push(newTask);
}

// render task after add on dom
function showTask() {
  const tasksList = document.querySelector('.list');
  tasksList.textContent = "";

  if (Tasks.length === 0) {
    return;
  }

  Tasks.forEach(item => {
    const li = document.createElement("li");
    li.classList.add("task-item");

    const textContainer = document.createElement("div");
    textContainer.classList.add("text-item");

    const text = document.createElement("span");
    text.textContent = item.task;

    if (item.isDone) {
      li.style.backgroundColor = "#d3d3d339";
      text.style.textDecoration = "line-through";
    }

    const btnContainer = document.createElement("div");
    btnContainer.classList.add("btn-items");

    const doneBtn = document.createElement("button");
    doneBtn.classList.add('done');
    doneBtn.textContent = "Done";

    const deleteBtn = document.createElement("button");
    deleteBtn.classList.add('delete');
    deleteBtn.textContent = "Delete";

    // Toggle done and delete display 
    deleteBtn.style.display = item.isDone ? "block" : "none";
    doneBtn.style.display = item.isDone ? "none" : "block";

    doneBtn.addEventListener("click", () => {
      item.isDone = true;
      showTask();
    });
    deleteBtn.addEventListener("click", () => {
      Tasks = Tasks.filter(t => t.id !== item.id);
      showTask();
    });

    btnContainer.appendChild(doneBtn);
    btnContainer.appendChild(deleteBtn);
    textContainer.appendChild(text);
    li.appendChild(textContainer);
    li.appendChild(btnContainer);

    tasksList.appendChild(li);
  });

}


// receive input from user after adding and validate it 
const addBtn = document.querySelector('.add');
addBtn.addEventListener("click", () => {
    const userInput = document.querySelector('#input').value;
    const validated = userInput.split(" ").filter(e => e!=="").join(" ");
    if(validated === "") {
        alert("Please Write Your Task");
    } else {
      // send text after validation to create task object  
        addTask(validated);
        // make text input empty for next task
        document.querySelector('#input').value = "";
        showTask()
    }
});
// handle remove btn to remove text
const removeBtn = document.querySelector('.remove');
removeBtn.addEventListener("click",()=>{
  document.querySelector('#input').value = "";
})




