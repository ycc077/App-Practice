const textplace = document.querySelector(".textplace");
const textlist = document.querySelector(".textlist");
const pbutton = document.querySelector(".pbutton");

function task2() {
  if (textplace.value === "") {
    return;
  }
  const task1 = document.createElement("li");
  task1.innerHTML = `
        <input type="checkbox" class="checkicon">
        <label>${textplace.value}</label>
        <button class="trashicon">🗑️</button>
    `;

  const trashicon = task1.querySelector(".trashicon");
  const checkicon = task1.querySelector(".checkicon");

  trashicon.addEventListener("click", function () {
    task1.remove();
  });

  checkicon.addEventListener("change", function () {
    if (checkicon.checked) {
      task1.style.textDecoration = "line-through";
      task1.style.color = "#999";
      textlist.append(task1);
    } else {
      task1.style.textDecoration = "none";
      task1.style.color = "";
      textlist.prepend(task1);
    }
  });

  textlist.append(task1);
  textplace.value = "";
}

pbutton.addEventListener("click", task2);

textplace.addEventListener("keyup", function (e) {
  if (e.key === "Enter") {
    task2();
  }
});
