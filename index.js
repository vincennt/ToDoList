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
    displayListWhitoutButton()
    console.log("l'index de la fonction modifier ", index);
    var item = document.getElementById(`tache-${index}`)
    console.log("new input valeur de item", item);
    item.innerHTML = item.innerHTML + `
        <form onsubmit="modifValueStatus(${index}); return false;">
            <input id="input-modif-text" class="customInput" value="${arrayTaches[index].value}" type="text" id="myInput" placeholder="Ecrivez votre tâche..." />
            <button type="submit" class="modifBtn">...</button>
            <select class="filterButton" name="Filter" id="filter">
                    <option class="optionsBtn" value="to-do">To Do</option>
                    <option class="optionsBtn" value="doing">Doing</option>
                    <option class="optionsBtn" value="done">Done</option>
            </select>
        </form>
        
    `
}

function modifValueStatus(index) {

    console.log("la function est bien apeller ");
    console.log(index);
    var inputValue = document.getElementById("input-modif-text").value;
    arrayTaches[index].value = inputValue
    displayList()
    console.log(arrayTaches);
}
function status(index){
    var inputValue1 = document.getElementsByClassName("input-modif-text").value;
    arrayTaches[index].status = inputValue1
}

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

function displayListWhitoutButton() {

    list.innerHTML = ''
    arrayTaches.forEach(function(tasks, index) {
        list.innerHTML = list.innerHTML + `
                <div id="tache-${index}" class="div-task">
                    ${tasks.value}
                    <div class="buttonDiv">
                    </div>
                </div>
            `
    })
}