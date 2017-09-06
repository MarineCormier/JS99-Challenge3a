var score = 0;
var essai = 0;


function clik(answer, id, id2) {
    console.log(answer);

    if (answer) {
        score ++;
        document.getElementById(id).style.backgroundColor = "#5FB295";
        document.getElementById("score").innerHTML = score;

    }
    else {
        essai ++;
        document.getElementById("essai").innerHTML = score;
        alert("ABSOLUMENT PAS");
        document.getElementById(id).style.backgroundColor = "#B23337";
    }

    if (score == 1) {
    document.getElementById("question2").style.visibility="visible";
}
    if (score == 2) {
    document.getElementById("question3").style.visibility="visible";
}

    if (score == 3) {
    document.getElementById("question4").style.visibility="visible";
}
    if (score == 4) {
    document.getElementById("question5").style.visibility="visible";
}
    if (score == 5) {
    document.getElementById("question6").style.visibility="visible";
}
    if (score == 6) {
    document.getElementById("question7").style.visibility="visible";
}
    if (score == 7) {
    document.getElementById("question8").style.visibility="visible";
}
    if (score == 8) {
    document.getElementById("question9").style.visibility="visible";
}
    if (score == 9) {
    document.getElementById("question10").style.visibility="visible";
}

    }




            