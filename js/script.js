function functie() {
    document.getElementById("et").style.fontSize = "60px";
}
function functie1() {   
    document.getElementById("et1").innerHTML = ""; 
    
} 

function functie2() { 
        document.getElementById("et2").innerHTML = "Надеюсь все поняли!!!???";
}
function ravno(){
	var text;
	var rezultat = prompt("2+2*2");
	if (rezultat==6) { text = "Молодец - правильно!"; } 
	else { text = "Внимательнее - неправильно!";    }
	document.getElementById("rez").innerHTML = text;
}
