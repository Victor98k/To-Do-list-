




const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");




function addTask() {
  if (inputBox.value === '') {
    alert("Please add your task!");
  } else {
    if (listContainer.childElementCount < 5) {
      let li = document.createElement("li");
      li.innerHTML = inputBox.value;
      listContainer.appendChild(li);
      

      let span = document.createElement("span");
      span.innerHTML = "\u00d7";
      li.appendChild(span);
    } else {
      alert("Damn G i think 5 is max for today");
    }
  }
  inputBox.value = "";
}



listContainer.addEventListener("click", function (e) {
  if (e.target.tagName === "LI") {
    e.target.classList.toggle("checked");
  } else if (e.target.tagName === "SPAN") {
    e.target.parentElement.remove();
  }
}, false);





let input = document.getElementById('input-box');
input.addEventListener('keydown', (event) => {
  if (event.key === 'Enter'){
    addTask()
  }
})