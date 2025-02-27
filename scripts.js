document.addEventListener("DOMContentLoaded", function () {
    var wait = document.getElementById("wait");
    var dots = window.setInterval(function () {
        if (wait.innerHTML.length > 3) 
            wait.innerHTML = "";
        else 
            wait.innerHTML += ".";
    }, 200);
});
