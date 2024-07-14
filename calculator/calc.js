const display = document.getElementById("display");

function ans(input) {
  display.value += input;
}
function clearr() {
  display.value = "";
}
function answer() {
  try {
    display.value = eval(display.value);
  } catch (error) {
    display.value = "A ERROR";
  }
}
