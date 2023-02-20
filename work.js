let n = document.getElementById("name");
let e = document.getElementById("email");
let n1 = document.getElementById("nameErrMsg");
let e1 = document.getElementById("emailErrMsg");
n.addEventListener("blur", function() {
    if (n.value === "") {
        n1.textContent = "R";
    } else {
        n1.textContent = "";
    }
});
e.addEventListener("blur", function() {
    if (e.value === "") {
        e1.textContent = "R";
    } else {
        e1.textContent = "";
    }
});
let form = document.getElementById("addUserForm");
form.addEventListener("submit", function() {
    if (n.value === "") {
        n1.textContent = "R";
    } else {
        n1.textContent = "";
    }
    if (e.value === "") {
        e1.textContent = "R";
    } else {
        e1.textContent = "";
    }
})
