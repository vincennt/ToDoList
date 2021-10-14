// Fonction écrire une tâche
var arrayTaches = []
var list = document.getElementById("myUL")



function onTaskSubmit() {
    var inputValue = document.getElementById("myInput").value;
    var tasks = {
        status: "todo",
        value: inputValue
    }
    arrayTaches.push(tasks)
    console.log(tasks);
    console.log(arrayTaches)

    displayList()

    document.getElementById("myInput").value = ''

}

// function qui filtre le tableau et re affiche les nouvelle valeur du tableau après avoir suprimer la tache 
function suprimeTask(i) {
    arrayTaches = arrayTaches.filter(function(value, index) {
        return i !== index;
    });
    displayList()
    console.log(arrayTaches);
}



// function random
function randomtask() {
    var taskRandom = ["lundi boxe a 16h30", "jeudi faire les courses", " vendredi récupérer les enfant a l'école", "samedi soir soirée entres potes", "dimanche barbecue", "mardi soir impôt a faire"]
    var min = 0;
    var max = 5;
    var random = Math.floor(Math.random() * (max - min + 1) + min)


    console.log(random);
    console.log(taskRandom[random]);
    console.log(arrayTaches);

    var inputValue = taskRandom[random];
    var tasks = {
        status: "todo",
        value: inputValue
    }

    console.log(tasks);
    arrayTaches.push(tasks)
    console.log(arrayTaches)

    displayList()

    document.getElementById("myInput").value = ''

}
// FUNCTION MODIFIER
function newInput(index) {
    console.log("l'index de la fonction modifier ", index);
    var item = document.getElementById(`tache-${index}`)
    console.log("new input valeur de item", item);
    item.innerHTML = item.innerHTML + `
        <form onsubmit="modifValueStatus(); return false;">
            <input class="customInput" value="${arrayTaches[index].value}" type="text" id="myInput" placeholder="Ecrivez votre tâche..." />
            <button class="customButtton" type="submit" class="addBtn">Add</button>
            <div class="btn-group">
            <div class="btn-group" role="group">
            <button type="button" class="btn btn-warning dropdown-toggle dropdown-toggle-split" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <span class="sr-only text-white">Status</span>
            </button>
            <div class="dropdown-menu">
                    <a class="dropdown-item bg-warning text-center" href="#">To do</a>
                    <a class="dropdown-item bg-primary text-center" href="#">Doing</a>
                    <a class="dropdown-item bg-success text-center" href="#">Done</a>
            </div>
            </div>
        </div>
        </form>
        
`
}

function modifValueStatus() {
    console.log("la function est bien apeller ");

    var inputValue = document.getElementById("myInput").value;
    var tasks = {
        status: "todo",
        value: inputValue
    }
    arrayTaches.push(tasks)
    displayList()
}
console.log(arrayTaches);


function displayList() {

    list.innerHTML = ''
    arrayTaches.forEach(function(tasks, index) {
        list.innerHTML = list.innerHTML + `
                <div id="tache-${index}" class="div-task">
                    ${tasks.value}
                    <div class="buttonDiv">
                        <button onclick="newInput(${index})" class="button-modif">...</button>
                        <button onclick="suprimeTask(${index})" class="button_suprim">X</button>
                    </div>
                </div>
            `
    })
}