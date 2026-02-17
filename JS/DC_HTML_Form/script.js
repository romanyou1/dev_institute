const form = document.getElementById("myForm");
const output = document.getElementById("output");

form.addEventListener("submit", (event) => {
  event.preventDefault(); // prevent page reload

  const name = document.getElementById("name").value.trim();
  const lastname = document.getElementById("lastname").value.trim();

  const data = { name, lastname };

  output.textContent = JSON.stringify(data);
});