// Exercice 5

// 1) Retrieve the div and console.log it
const containerDiv = document.getElementById("container");
console.log(containerDiv);

// 2) Change “Pete” to “Richard”
const uls = document.querySelectorAll("ul.list");
uls[0].children[1].textContent = "Richard";

// 3) Delete the second <li> of the second <ul>
uls[1].children[1].remove(); // removes "Sarah"

// 4) Change the name of the first <li> of each <ul> to your name
for (let ul of uls) {
  ul.children[0].textContent = "Roman";
}

// ---- Classes ----

// 5) Add class student_list to both <ul>
for (let ul of uls) {
  ul.classList.add("student_list");
}

// 6) Add classes university and attendance to the first <ul>
uls[0].classList.add("university", "attendance");

// ---- Styling ----

// 7) Add light blue background and padding to the <div>
containerDiv.style.backgroundColor = "lightblue";
containerDiv.style.padding = "10px";

// 8) Do not display the <li> that contains “Dan”
const allLis = document.querySelectorAll("li");
for (let li of allLis) {
  if (li.textContent === "Dan") {
    li.style.display = "none";
  }
}

// 9) Add a border to the <li> that contains “Richard”
for (let li of allLis) {
  if (li.textContent === "Richard") {
    li.style.border = "2px solid black";
  }
}

// 10) Change the font size of the whole body
document.body.style.fontSize = "18px";

// ---- Bonus ----
// If div background is light blue, alert "Hello x and y"
// (x and y are the users in the div) -> we’ll use the first two visible names in the lists.
if (containerDiv.style.backgroundColor === "lightblue") {
  const visibleUsers = Array.from(document.querySelectorAll("li"))
    .filter(li => li.style.display !== "none")
    .map(li => li.textContent);

  const x = visibleUsers[0] || "user";
  const y = visibleUsers[1] || "user";

  alert(`Hello ${x} and ${y}`);
}