// Fonction écrire une tâche
var arrayTaches = []

function onTaskSubmit() {
    var div = document.createElement("div");
    var para = document.createElement("p");
    var inputValue = document.getElementById("myInput").value;
    var txt = document.createTextNode(inputValue);
    var tache = {
        status: "to do",
        value: inputValue
    }
    console.log(tache);
    arrayTaches.push(tache)
    console.log(arrayTaches)
    document.getElementById("myInput").value = ''


    para.appendChild(txt);
    if (inputValue === '') {
        alert("You must write something!")
    } else {
        document.getElementById("myUL").appendChild(div).appendChild(para);
    }
}