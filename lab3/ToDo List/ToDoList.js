const inputBox = document.getElementById('task');
const listContainer = document.getElementById('tasks');
const button = document.getElementById('myButton');

function addTask(){
    if(inputBox.value.trim()===null){
        alert("Please enter a task");
    }
    else {
        let li = document.createElement('li');
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let img = document.createElement('img');
        img.src = "img/trashed.png";
        img.style.width = "25px";
        img.style.height = "25px";
        img.addEventListener("mouseover", () => img.src = "img/trash.png", false);
        img.addEventListener("mouseout", () => img.src = "img/trashed.png", false);
        li.appendChild(img);
    }
    inputBox.value = '';
    saveData();
}
listContainer.addEventListener('click', function (e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle('checked');
    } else if (e.target.tagName === "IMG") {
        e.target.parentElement.remove();
    }
},false);
function saveData(){
    localStorage.setItem('data', listContainer.innerHTML);
}
document.addEventListener('keydown', (e) => {
    if (e.key === "Enter") {
        addTask();
    }
});
function loadData() {
    const data = localStorage.getItem('data');
    if (data) {
        listContainer.innerHTML = data;
    }
}
loadData();