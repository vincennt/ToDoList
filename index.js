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
            <div id="tache-${index}" class="div-task">
                ${tache.value}
                <button onclick="suprimeTask(${index})" class="button_suprim">X</button>
                <button onclick="newInput(${index})" class="button-modif" >Modifier</button>

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
            <div id="tache-${index}" class="div-task">
                ${tache.value}
                <button onclick="suprimeTask(${index})" class="button_suprim">X</button>
                
            </div>
        `
    })

    console.log(arrayTaches);
}



// function random
function randomtask() {
    var taskRandom = ["lundi boxe a 16h30", "jeudi faire les courses", " vendredi à 18h récupérer les enfant a l'école", "samedi soir soirée entres potes", "dimanche barbecue", "mardi soir impôt a faire"]
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
            <div id="tache-${index}" class="div-task">
                ${tache.value}
                <button onclick="suprimeTask(${index})" class="button_suprim">X</button>
                <button onclick="newInput(${index})" class="button-modif" >Modifier</button>
            </div>
        `
    })

    document.getElementById("myInput").value = ''

}
// FUNCTION MODIFIER
function newInput(index) {
    console.log("l'index de la fonction modifier ", index);
var item = document.getElementById(`tache-${index}`)
console.log("new input valeur de item",item);
item.innerHTML = item.innerHTML +`
<form onsubmit="onTaskSubmit(); return false;">
    <input class="customInput" value="${arrayTaches[index].value} type="text" id="myInput" placeholder="Ecrivez votre tâche..." />
    <button class="customButtton" type="submit" class="addBtn">Add</button>
</form>
`

    

}
console.log(arrayTaches);
    