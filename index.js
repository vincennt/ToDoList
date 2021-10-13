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

    arrayTaches.forEach(function(tache) {
        list.innerHTML = list.innerHTML + `
            <div class= div-task>${tache.value}</div>
        `
    })

    document.getElementById("myInput").value = ''



}