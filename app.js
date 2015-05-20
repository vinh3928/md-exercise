var input = document.getElementById("input");
var output = document.getElementById("output");

input.addEventListener("input", function(e) {
  output.innerHTML = e.target.value
});
