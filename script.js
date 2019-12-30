//function to display Grade

function Grade(x,y,z) {
    if (x < 0 || x > 100) {
        document.getElementById('Buttn').disabled = true;
        document.getElementById(y).innerHTML = 'out of range';
        document.getElementById('Buttn').className = 'btn btn-danger p-3';
        document.getElementById(z).style = 'border: red 2px solid !important';
    } else {
        document.getElementById('Buttn').disabled = false;
        document.getElementById('Buttn').className = 'btn btn-dark p-3';
        document.getElementById(z).style = 'border: red 2px solid !important' == false;
    }
    
    if(x >= 0 && x < 30){
        document.getElementById(y).innerHTML = 'F';

    } else if (x >= 30 && x < 40){
        document.getElementById(y).innerHTML = 'E';

    } else if (x >= 40 && x < 50){
        document.getElementById(y).innerHTML = 'D';     

    } else if (x >= 50 && x < 60){
        document.getElementById(y).innerHTML = 'C';

    } else if (x >=60 && x < 70){
        document.getElementById(y).innerHTML = 'B';

    } else if (x >= 70 && x <= 100){
        document.getElementById(y).innerHTML = 'A';

    } 
}

//Function to display Total and DOM output
function total() {
    scores = document.getElementsByClassName('scoreSum');
    totalScore = 0;
    for(i=0; i<scores.length; i++){
        totalScore = Number(totalScore)  + Number(scores[i].value);
    }
    
    if (totalScore < 500) {
        document.getElementById('displayTotal').innerHTML= totalScore + ' / 500';
        avgScore(totalScore);
    } 
}

document.getElementById('alertMessage').style.display = 'none';
document.getElementById('emoji').style.display = 'none';


//function to determine average and DOM output
function avgScore(x) {
    var averageGrade = (x / 500) * 100;
    document.getElementById('displayAverage').innerHTML = averageGrade.toFixed(2);
    document.getElementById('alertMessage').style.display = 'block';
    if (averageGrade > 50) {
        document.getElementById('alertMessage').innerHTML = 'Bravo! You did excellent, keep it up.'; 
        document.getElementById('emoji').style.display = 'block';
        document.getElementById('alertMessage').className = 'alert alert-primary mt-2 mb-0';

        document.getElementById('emoji').src = 'img/image4.gif';

    }
    else if(averageGrade < 50 ) {
        document.getElementById('alertMessage').innerHTML = 'Oops! You disappointed your teacher.';
        document.getElementById('alertMessage').className = 'alert alert-danger mt-2 mb-0';
        document.getElementById('alertMessage').role = 'alert';
        document.getElementById('emoji').style.display = 'block';

        document.getElementById('emoji').src = 'img/image1.gif';
    } 
}