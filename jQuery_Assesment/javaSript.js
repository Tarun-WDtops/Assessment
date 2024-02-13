function one() {
  const inputEl = document.getElementById("first-input");
  const value = inputEl.getAttribute("value") || "";
  const newValue = value + "1";
  inputEl.setAttribute("value", newValue);
}
