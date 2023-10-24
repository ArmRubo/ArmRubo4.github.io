const game = document.getElementById('game');
const resetBtn = document.getElementById('resetBtn');
const player1Name = prompt('Write the name of the first player');
const player2Name = prompt('Write the name of the second player');
const player1 = document.querySelector('.player1');
const player2 = document.querySelector('.player2');
let allBoxes;
let hod = 0;
player1.innerHTML += ' ' + player1Name;
player2.innerHTML += ' ' + player2Name;

for (let i = 0; i < 9; i++) {
    game.innerHTML += '<div class="box"></div>';
}

game.addEventListener('click', function (event) {
    if (event.target.className == 'box') {
        if (!event.target.innerHTML) {
            if (hod % 2 == 0) {
                event.target.innerHTML = '<img src="./images/simka.png" alt="simka">';
                document.querySelector('.turns span.active').classList.remove('active');
                document.querySelector('.turns .player2').classList.add('active');
            } else {
                event.target.innerHTML = '<img src="./images/nolik.png" alt="nolik">';
                document.querySelector('.turns span.active').classList.remove('active');
                document.querySelector('.turns .player1').classList.add('active');
            }

            hod++;
            setTimeout(function(){
                checkWinner();
                checkNichya();
            }, 500);
        }
    }
})

resetBtn.addEventListener('click', function () {
    let question = confirm('Do you want to start a new game?');

    if (question) {
        window.location.reload();
    }
})

function checkWinner() {
    allBoxes = document.querySelectorAll('.box');

    // ----------------------- WINN X
    if (allBoxes[0].innerHTML == '<img src="./images/simka.png" alt="simka">' &&
        allBoxes[3].innerHTML == '<img src="./images/simka.png" alt="simka">' &&
        allBoxes[6].innerHTML == '<img src="./images/simka.png" alt="simka">') {
        return alert('Winn Simka');
    }


    if (allBoxes[1].innerHTML == '<img src="./images/simka.png" alt="simka">' &&
        allBoxes[4].innerHTML == '<img src="./images/simka.png" alt="simka">' &&
        allBoxes[7].innerHTML == '<img src="./images/simka.png" alt="simka">') {
        return alert('Winn Simka');
    }

    if (allBoxes[2].innerHTML == '<img src="./images/simka.png" alt="simka">' &&
        allBoxes[5].innerHTML == '<img src="./images/simka.png" alt="simka">' &&
        allBoxes[8].innerHTML == '<img src="./images/simka.png" alt="simka">') {
        return alert('Winn Simka');
    }

    if (allBoxes[0].innerHTML == '<img src="./images/simka.png" alt="simka">' &&
        allBoxes[1].innerHTML == '<img src="./images/simka.png" alt="simka">' &&
        allBoxes[2].innerHTML == '<img src="./images/simka.png" alt="simka">') {
        return alert('Winn Simka');
    }

    if (allBoxes[3].innerHTML == '<img src="./images/simka.png" alt="simka">' &&
        allBoxes[4].innerHTML == '<img src="./images/simka.png" alt="simka">' &&
        allBoxes[5].innerHTML == '<img src="./images/simka.png" alt="simka">') {
        return alert('Winn Simka');
    }

    if (allBoxes[6].innerHTML == '<img src="./images/simka.png" alt="simka">' &&
        allBoxes[7].innerHTML == '<img src="./images/simka.png" alt="simka">' &&
        allBoxes[8].innerHTML == '<img src="./images/simka.png" alt="simka">') {
        return alert('Winn Simka');
    }

    if (allBoxes[0].innerHTML == '<img src="./images/simka.png" alt="simka">' &&
        allBoxes[4].innerHTML == '<img src="./images/simka.png" alt="simka">' &&
        allBoxes[8].innerHTML == '<img src="./images/simka.png" alt="simka">') {
        return alert('Winn Simka');
    }

    if (allBoxes[2].innerHTML == '<img src="./images/simka.png" alt="simka">' &&
        allBoxes[4].innerHTML == '<img src="./images/simka.png" alt="simka">' &&
        allBoxes[6].innerHTML == '<img src="./images/simka.png" alt="simka">') {
        return alert('Winn Simka');
    }

    // ----------------------- WINN O
    if (allBoxes[0].innerHTML == '<img src="./images/nolik.png" alt="nolik">' &&
        allBoxes[3].innerHTML == '<img src="./images/nolik.png" alt="nolik">' &&
        allBoxes[6].innerHTML == '<img src="./images/nolik.png" alt="nolik">') {
        return alert('Winn Nolik');
    }


    if (allBoxes[1].innerHTML == '<img src="./images/nolik.png" alt="nolik">' &&
        allBoxes[4].innerHTML == '<img src="./images/nolik.png" alt="nolik">' &&
        allBoxes[7].innerHTML == '<img src="./images/nolik.png" alt="nolik">') {
        return alert('Winn Nolik');
    }

    if (allBoxes[2].innerHTML == '<img src="./images/nolik.png" alt="nolik">' &&
        allBoxes[5].innerHTML == '<img src="./images/nolik.png" alt="nolik">' &&
        allBoxes[8].innerHTML == '<img src="./images/nolik.png" alt="nolik">') {
        return alert('Winn Nolik');
    }

    if (allBoxes[0].innerHTML == '<img src="./images/nolik.png" alt="nolik">' &&
        allBoxes[1].innerHTML == '<img src="./images/nolik.png" alt="nolik">' &&
        allBoxes[2].innerHTML == '<img src="./images/nolik.png" alt="nolik">') {
        return alert('Winn Nolik');
    }

    if (allBoxes[3].innerHTML == '<img src="./images/nolik.png" alt="nolik">' &&
        allBoxes[4].innerHTML == '<img src="./images/nolik.png" alt="nolik">' &&
        allBoxes[5].innerHTML == '<img src="./images/nolik.png" alt="nolik">') {
        return alert('Winn Nolik');
    }

    if (allBoxes[6].innerHTML == '<img src="./images/nolik.png" alt="nolik">' &&
        allBoxes[7].innerHTML == '<img src="./images/nolik.png" alt="nolik">' &&
        allBoxes[8].innerHTML == '<img src="./images/nolik.png" alt="nolik">') {
        return alert('Winn Nolik');
    }

    if (allBoxes[0].innerHTML == '<img src="./images/nolik.png" alt="nolik">' &&
        allBoxes[4].innerHTML == '<img src="./images/nolik.png" alt="nolik">' &&
        allBoxes[8].innerHTML == '<img src="./images/nolik.png" alt="nolik">') {
        return alert('Winn Nolik');
    }

    if (allBoxes[2].innerHTML == '<img src="./images/nolik.png" alt="nolik">' &&
        allBoxes[4].innerHTML == '<img src="./images/nolik.png" alt="nolik">' &&
        allBoxes[6].innerHTML == '<img src="./images/nolik.png" alt="nolik">') {
        return alert('Winn Nolik');
    }
}

function checkNichya() {
    if (allBoxes[0].innerHTML !== '' &&
        allBoxes[1].innerHTML !== '' &&
        allBoxes[2].innerHTML !== '' &&
        allBoxes[3].innerHTML !== '' &&
        allBoxes[4].innerHTML !== '' &&
        allBoxes[5].innerHTML !== '' &&
        allBoxes[6].innerHTML !== '' &&
        allBoxes[7].innerHTML !== '' &&
        allBoxes[8].innerHTML !== '' ) {
        alert('This is NICHYA');
    }
}