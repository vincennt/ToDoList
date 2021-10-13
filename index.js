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
            <div class="div-task">
                ${tache.value}
                <div class="buttonDiv">
                    <button onclick="newInput(${index})" class="button-modif">...</button>
                    <button onclick="suprimeTask(${index})" class="button_suprim">X</button>
                </div>
            </div>
        `
    })

    document.getElementById("myInput").value = ''

}

// function qui filtre le tableau et re affiche les nouvelle valeur du tableau après avoir suprimer la tache 
function suprimeTask(i) {
    arrayTaches = arrayTaches.filter(function(value, index) {
        return i !== index;
    });

    list.innerHTML = ''

    arrayTaches.forEach(function(tache, index) {
        list.innerHTML = list.innerHTML + `
            <div class="div-task">
                ${tache.value}
                <div class="buttonDiv">
                    <button onclick="newInput(${index})" class="button-modif">...</button>
                    <button onclick="suprimeTask(${index})" class="button_suprim">X</button>
                </div>
            </div>
        `
    })

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
            <div class="div-task">
                    ${tache.value}
                    <div class="buttonDiv">
                        <button onclick="newInput(${index})" class="button-modif">...</button>
                        <button onclick="suprimeTask(${index})" class="button_suprim">X</button>
                    </div>
                </div>
            </div>
        `
    })

    document.getElementById("myInput").value = ''

}

function newInput() {

}
console.log(arrayTaches);