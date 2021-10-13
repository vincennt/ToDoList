// Fonction écrire une tâche
var arrayTaches = []

function onTaskSubmit() {
    var inputValue = document.getElementById("myInput").value;
    var list = document.getElementById("myUL")

    var tache = {
        status: "todo",
        value: inputValue
    }

    console.log(tache);
    arrayTaches.push(tache)
    console.log(arrayTaches)

    list.innerHTML = ''

    arrayTaches.forEach(function(tache, index) {
        list.innerHTML = list.innerHTML + `
            <div class="div-task">${tache.value} <input type="button" value="Modif." onclick="newInput()">
            </div>
        `
    })

    document.getElementById("myInput").value = ''

}

function newInput() {
    document.getElementsByClassName("div-task").innerHTML = `
    <input type = "text"placeholder = "Modifier votre tâche" onclik = "changeTask()">
        `
}