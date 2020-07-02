var btns = document.querySelectorAll("#btn");
var result = document.getElementById("result")
var count = "1";

btns.forEach(btn => {
    btn.addEventListener("click", function () {
        if (btn.className === "decrease") {
            count--;
        } else if (btn.className === "increase") {
            count++;
        } 
        else if (btn.className === "reset") {
            count = 0;
        }

        if (count < 0) {
            result.style.color = "red"; 
        }
        if (count > 0) {
            result.style.color = "green"; 
        }
        if (count === 0) {
            result.style.color = "white"; 
        }
        result.textContent = count;
    });
});

