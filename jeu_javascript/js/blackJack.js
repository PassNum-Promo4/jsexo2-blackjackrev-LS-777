
/* Variables & functions */




function getNumbers() {
    var userNumber = document.getElementById("nb_user").value;
    var cpuNumber = Math.floor(Math.random() * 10);


    if (userNumber > cpuNumber) {

        alert("Vous avez gagné!");

    } else if (userNumber < cpuNumber) {

        alert("Vous avez perdu, c'est dommage hein? ");

    } else if (userNumber === cpuNumber) {

    alert("Egalité, mais vous avez quand-même perdu!");
    }

  }
