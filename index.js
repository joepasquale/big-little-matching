//create list of inputs, list of brothers, list of littles
var inputs = [];
var brothers = [];
var littles = [];

window.addEventListener("DOMContentLoaded", memberAddHandler);
window.addEventListener("DOMContentLoaded", matchListHandler);

//event handler for adding a member to the match list
function memberAddHandler(){
    inputs = document.getElementsByTagName("input");
    for(var i = 0; i < inputs.length; i++){
        var curInput = inputs[i];
    }
    var addButton = document.getElementById("addMatch");
    addButton.addEventListener("click", addToList);
}

//add member to dominant or subservient list
function addToList(event){
    var newMem = {
        name: inputs[0],
        brother: inputs[1],
        prefs: {
            pref1: inputs[2],
            pref2: inputs[3],
            pref3: inputs[4],
            pref4: inputs[5],
            pref5: inputs[6]
        }
    };
    if(newMem.brother){
        brothers.push(newMem);
    }
    else{
        littles.push(newMem);
    }
}

//event handler to match lists
function matchListHandler(){
    var submitButton = document.getElementById("matchPairs");
    submitButton.addEventListener("click", matchLists);
}

//uses stable matching to match big and little lists
function matchLists(event){

}