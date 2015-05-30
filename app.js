var input = document.getElementById("input"),
  output  = document.getElementById("output"),
converter = new showdown.Converter();
input.addEventListener("input", function(e) {
  output.innerHTML = converter.makeHtml(e.target.value);
