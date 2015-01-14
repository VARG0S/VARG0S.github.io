var solutions = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j"];
var numbers = [0,1,2,3,4,5,6,7,8,9];
function reveal(){
    var inputs = document.getElementsByClassName("players");
    for (var i = 0; i < inputs.length; i++) {
        inputs[i].readOnly = true;
    }
    numbers = shuffleArray(numbers);

    for (var j=0; j < numbers.length; j++){
        document.getElementById(solutions[j]).innerHTML = '<input type="text" class="score score2" disabled value="'+ numbers[j] +'" id="' +numbers[j]+ '">';
    }

    var winnerFields = document.getElementsByClassName("winner");
    for (var w = 0; w < winnerFields.length; w++) {
        winnerFields[w].hidden = false;
    }
    document.getElementById("btnReveal").hidden = true;

}

function showWinner(){
    var inputs = document.getElementsByClassName("winnerInputs");
    var hiddenBtn = false;
    for (var s = 0; s < inputs.length; s++) {
        if (typeof inputs[s] === 'undefined' || inputs[s].value === null ||inputs[s].value === ""){
            hiddenBtn = true;
            break;
        }
    }
    document.getElementById("btnWinner").hidden = hiddenBtn;
    document.getElementById("btnWinner").focus();
}


function winner(){
    var total = +(document.getElementById("score1").value) +  +(document.getElementById("score2").value);
    var l = total.toString().length;
    var lastDigit = total.toString()[l-1];
    var inputs = document.getElementsByClassName("score2");

    for (var j=0; j < numbers.length; j++){
        if(lastDigit === inputs[j].value){
            document.getElementById(inputs[j].id).style.backgroundColor = '#33FF99';
        } else {
            document.getElementById(inputs[j].id).style.backgroundColor = '#FFFFFF';
        }

    }
    document.getElementById("btnWinner").hidden = true;
}


function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
}

function showReveal(){
    var inputs = document.getElementsByClassName("players");
    var hiddenBtn = false;
    for (var s = 0; s < inputs.length; s++) {
        if (typeof inputs[s].value === 'undefined' || inputs[s].value === null ||inputs[s].value === ""){
            hiddenBtn = true;
            break;
        }
    }
    document.getElementById("btnReveal").hidden = hiddenBtn;
    document.getElementById("btnReveal").focus();
}