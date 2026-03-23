// Get the element from the DOM and assert its type
const inputElement = document.getElementById("username") as HTMLInputElement;

// Check if the element exists before using it
if (inputElement) {
  // Set the value of the input element
  inputElement.value = "Hello, TypeScript!";
}