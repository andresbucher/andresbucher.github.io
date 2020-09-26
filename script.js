function load() {
    var d = new Date();
    var date = document.getElementById("date");
    date.innerText = d.toLocaleDateString();
}
window.addEventListener("DOMContentLoaded", load);

