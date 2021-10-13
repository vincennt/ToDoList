// Fonction écrire une tâche
var arrayTaches = []

function onTaskSubmit() {
    var inputValue = document.getElementById("myInput").value;
    var list = document.getElementById("myUL")
        // var txt = document.createTextNode(inputValue);
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
            <p>${tache.value}</p>
        `
    })



    // var getInput = arrayTaches.map(function(tache) {

    //     var txt = document.createTextNode(tache.value);
    //     para.appendChild(txt);
    //     document.getElementById("myUL").appendChild(div).appendChild(para);

    // })
    document.getElementById("myInput").value = ''


    // para.appendChild(txt);
    // if (inputValue === '') {
    //     alert("You must write something!")
    // } else {
    //     document.getElementById("myUL").appendChild(div).appendChild(para);
    // }
}