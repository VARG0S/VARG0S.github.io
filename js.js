function reveal(){
    var numbers = [0,1,2,3,4,5,6,7,8,9];
    var solutions = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j"];
    var inputs = document.getElementsByTagName("INPUT");
    for (var i = 0; i < inputs.length; i++) {
        inputs[i].readOnly = true;
    }
    var total = +(document.getElementById("score1").value) +  +(document.getElementById("score2").value);
    var l = total.toString().length;
    var lastDigit = total.toString()[l-1];
    numbers = shuffleArray(numbers);

    for (var j=0; j < numbers.length; j++){
        document.getElementById(solutions[j]).innerHTML = '<input class="u-full-width" type="text" disabled width="30px" value="'+ numbers[j] +'">';
        if(lastDigit === numbers[j].toString()){
            document.getElementById(solutions[j] + "Name").style.backgroundColor = '#33FF99';
        }
    }
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
    var inputs = document.getElementsByTagName("INPUT");
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