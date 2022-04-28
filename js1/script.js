function functie() {
    document.getElementById("et").style.fontSize = "40px";
}
/*II*/
function functie1() {    document.getElementById("et1").innerHTML = ""; } 
    
function functie2() { document.getElementById("et2").innerHTML = "Надеюсь все поняли!!!???";}
/*III prompt*/

function vezi(){
	var text;
	var rezultat = prompt("2+2*2");
	if (rezultat==6) { text = "Молодец - правильно!"; } 
	else { text = "Внимательнее - неправильно!";    }
	document.getElementById("rez").innerHTML = text;
}
/* переменные*/
function name(params) {
    

    var nume = "Иванов";
    var prenume = "Иван";
    var varsta = 35;
    document.getElementById("et1").innerHTML = nume;
    document.getElementById("et2").innerHTML = prenume;
    document.getElementById("et3").innerHTML = varsta;
}
function compar() {
    var x = 5;
    document.getElementById("et6").innerHTML = (x === "5");

}