// Fonction écrire une tâche

function newElement() {
    var div = document.createElement("div");
    var inputValue = document.getElementById("myInput").value;
    var txt = document.createTextNode(inputValue);
    div.appendChild(txt);
    if (inputValue === '') {
        alert("You must write something!");
    } else {
        document.getElementById("myUL").appendChild(div);
    }
    document.getElementById("myInput").value = ""
}