const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask(){
  if(inputBox.value === ''){
    alert("You must write something in the text field!");
  }
  else{
    let li = document.createElement("li");
    li.innerHTML = inputBox.value;
    listContainer.appendChild(li);
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
  }
  inputBox.value = "";
  saveData(); // saves any of the created tasks.
}

inputBox.addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    addTask(); // Pressing enter on the keyboard after typing.
  }
});

listContainer.addEventListener("click", function(e){
  if(e.target.tagName === "LI"){
    e.target.classList.toggle("checked");
    saveData(); // Saves any checked items
  } else if(e.target.tagName === "SPAN"){
    e.target.parentElement.remove();
    saveData(); // Saves any of the deleted data or/or checked items.
  }
}, false);

function saveData(){ // Saves data on website
  localStorage.setItem("data", listContainer.innerHTML);
}

function showTask(){ // Stores data locally
  listContainer.innerHTML = localStorage.getItem("data");
}
showTask();
