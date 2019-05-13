var user = 0;
var computer = 0;

function startGame(c) {
    var rand = Math.floor((Math.random() * 3));
    var arr = ['r', 'p', 's'];
    switch(c + arr[rand]) {
        case 'rr':
        case 'pp':
        case 'ss':
            draw();
            break;
        case 'rs':
        case 'sp':
        case 'pr':
            win();
            break;
        case 'sr':
        case 'rp':
        case 'ps':
            lose();
            break;
    }
    
}
function win() {
    ++user;
    document.getElementById("status").innerHTML = "You won";
    document.getElementById("user").innerHTML = user;
    document.getElementById("computer").innerHTML =computer;
    document.getElementById("status").className = "col-sm-6 alert-success";
}
function lose() {
    ++computer;
    document.getElementById("status").innerHTML = "You lost";
    document.getElementById("user").innerHTML = user;
    document.getElementById("computer").innerHTML =computer;
    document.getElementById("status").className = "col-sm-6 alert-danger";
}
function draw() {
    document.getElementById("status").innerHTML = "Draw";
    document.getElementById("status").className = "col-sm-6 alert-info";
}