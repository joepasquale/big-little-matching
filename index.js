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
        },
        matched: false,
        match: null
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

function matchPair(b, l){
    b.match = l;
    l.match = b;
    b.matched = true;
    l.matched = true;

}

function unmatchPair(b, l){
    b.match = null;
    l.match = null;
    b.matched = false;
    l.matched = false;
}

//uses stable matching to match big and little lists
function matchLists(event){
    var i = 0;
    //while current brother can be matched
    while(!brothers[i].matched){
        var curBrother = brothers[i];
        var p;
        //find prefs
        for(p in curBrother.prefs){
            //search little list for name of pref
            if(littles.includes(curBrother.p)){
                var l;
                for(l in littles){
                    if(curBrother.p == l){
                        p = l;
                    }
                }
            }
        }
        if(!p.matched){
            matchPair(curBrother, p)
        }
        else{
            
        }
    }
}