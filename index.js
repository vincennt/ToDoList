// Fonction écrire une tâche
var arrayTaches = []
var list = document.getElementById("myUL")

function onTaskSubmit() {
    var inputValue = document.getElementById("myInput").value;
    if (inputValue == "") {
        document.getElementById("myInput").value = ''
    } else
        var tasks = {
            status: "todo",
            value: inputValue,
            priority: Number
        }
    arrayTaches.push(tasks)
    console.log(tasks);
    console.log(arrayTaches)

    displayList(arrayTaches)

}

// function qui filtre le tableau et re affiche les nouvelle valeur du tableau après avoir suprimer la tache 
function suprimeTask(i) {
    arrayTaches = arrayTaches.filter(function(value, index) {
        return i !== index;
    });
    displayList(arrayTaches)
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

    displayList(arrayTaches)

    document.getElementById("myInput").value = ''

}
// FUNCTION MODIFIER
function newInput(index) {
    displayListWhitoutButton()
    console.log("l'index de la fonction modifier ", index);
    var item = document.getElementById(`tache-${index}`)
    console.log("new input valeur de item", item);
    item.innerHTML = item.innerHTML + `
        <form onsubmit="modifValueStatus(${index}); return false;">
            <input id="input-modif-text" class="modifSize" value="${arrayTaches[index].value}" type="text" id="myInput" placeholder="Ecrivez votre tâche..." />
            <button type="submit" class="modifBtn">...</button>
            <select class="filterButton" name="Filter" id="filter">
                <option value="">statut
                <option class="optionsBtn" value="to-do">To Do</option>
                <option class="optionsBtn" value="doing">Doing</option>
                <option class="optionsBtn" value="done">Done</option>
            </select>
        </form>
        
    `
}

function modifValueStatus(index) {
    var statusValue = document.querySelector("select").value
    console.log(statusValue);
    if (statusValue !== "") {
        console.log("modif value status condition");
        arrayTaches[index].status = statusValue
    }


    console.log("la function est bien apeller ");
    console.log(index);
    var inputValue = document.getElementById("input-modif-text").value;
    arrayTaches[index].value = inputValue
    displayList(arrayTaches)
    console.log(arrayTaches);
}
// function status(index){
//     var inputValue1 = document.getElementsByClassName("input-modif-text").value;
//     arrayTaches[index].status = inputValue1
// }


function displayList(array) {

    list.innerHTML = ''
    array.forEach(function(tasks, index) {
        list.innerHTML = list.innerHTML + `
                <div id="tache-${index}" class="div-task">
                    <p>${tasks.value}</p>
                    <p>${tasks.status}</p>
                    <div class="buttonDiv">
                        <button onclick="newInput(${index})" class="button-modif">...</button>
                        <button onclick="suprimeTask(${index})" class="button_suprim">X</button>
                    </div>
                </div>
            `
    })
}

function displayListWhitoutButton() {

    list.innerHTML = ''
    arrayTaches.forEach(function(tasks, index) {
        list.innerHTML = list.innerHTML + `
                <div id="tache-${index}" class="div-task">
                    <p class="hidenClass">${tasks.value}</p>
                    <div class="buttonDiv">
                    </div>
                </div>
            `
    })
}

function filterstatus(value) {
    var filterByStatus = arrayTaches.filter(function(task) {
        return value == task.status;
    });
    displayList(filterByStatus)

    console.log(" resulta du filtre status ", filterByStatus);
}