
function myFunction1() {
    document.getElementById("myP").style.fontFamily = "myFirstFont";
}

function myFunction9() {
    document.getElementById("myP").style.fontFamily = "myFirstFont_1";
}


function myFunction6() {
    document.getElementById("myP").style.fontWeight = "900";
}



function myFunction7() {
    document.getElementById("myP").style.fontWeight = "normal";
}


function myFunction4() {
    document.getElementById("myP").style.fontFamily = "Comic Sans MS, cursive, sans-serif";
}



function myFunction5() {
    document.getElementById("myP").style.fontFamily = "Lucida Sans Unicode", "Lucida Grande, sans-serif";
}

//----------------------------------------------------

function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {

    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
} 


