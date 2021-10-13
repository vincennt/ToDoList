// Fonction écrire une tâche
var arrayTaches = []
var list = document.getElementById("myUL")

function onTaskSubmit() {
    var inputValue = document.getElementById("myInput").value;
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
        <div class="div-task">${tache.value}<button onclick="suprimeTask(${index})" class="button_suprim">X</button></div>
        `

    })

    document.getElementById("myInput").value = ''

}



// function newInput() {
//     document.getElementsByClassName("div-task").innerHTML = `
//     <input type = "text"placeholder = "Modifier votre tâche" onclik = "changeTask()">
//         `
// }
// function qui filtre le tableau et re affiche les nouvelle valeur du tableau après avoir suprimer la tache 
function suprimeTask(i) {
    arrayTaches = arrayTaches.filter(function(value, index) {
        return i !== index;
    })
}


// button random

function randomTask(num){
    var min = 1;
    var max = 10;
    var random = Math.floor(Math.random() * (max - min + 1) + min)
    console.log(random);
    
}