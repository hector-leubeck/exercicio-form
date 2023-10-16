function toggleFilled(input) {
  const label = input.parentElement.querySelector("label");
  label.classList.toggle("filled", input.value !== "");
}
