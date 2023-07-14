const input = document.getElementById("BaseInput");
const div = document.getElementById("BaseDiv");

input.addEventListener("focus", function() {
    div.style.display = "block";
});

input.addEventListener("blur", function() {
    div.style.display = "none";
});
