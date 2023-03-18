function getSlideValue() {
  let length = document.getElementById("length").value;
  document.getElementById("length-val").textContent = length;
}

const slider_input = document.getElementById("length"),
  slider_line = document.getElementById("slider_line");

function showSliderValue() {
  slider_line.style.width = slider_input.value + "%";
}

showSliderValue();
window.addEventListener("resize", showSliderValue);
slider_input.addEventListener("input", showSliderValue, false);
