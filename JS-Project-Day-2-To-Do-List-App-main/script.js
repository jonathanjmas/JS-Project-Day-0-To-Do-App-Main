const listContainer = document.querySelector("#list-container");
const inputBox = document.querySelector("#input-box");


function addTask(){
    if(inputBox.value === ""){
        alert("Please enter a task");
    } else {
        let li = document.createElement("li");
        li.textContent = inputBox.value;
        let span = document.createElement("span");
        span.textContent = "\u00D7";
        li.appendChild(span);
        listContainer.appendChild(li);
        saveData();
    }
}

listContainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
});

function saveData(){
    localStorage.setItem("data", listContainer.innerHTML);
}
function loadData(){
    listContainer.innerHTML = localStorage.getItem("data");
}

loadData();
