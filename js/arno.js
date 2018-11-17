function myFunction() {
    var x = document.getElementById("myDIV");
    var y = document.getElementById("myDIV2");
    if (x.style.display === "none") {
    	x.className += ' animated fadeIn';
        y.style.display = "none";
        x.style.display = "block";
    } else {
        x.style.display = "none";
        y.style.display = "block";
    }
}

function myFunction2() {
    var x = document.getElementById("myDIV2");
    var y = document.getElementById("myDIV3");
    var z = document.getElementById("myDIV5");
    if (x.style.display === "none") {
    	z.classList.remove("d-none")
    	z.classList.remove("d-sm-block")
        y.style.display = "none";
        z.style.display = "none";
        x.style.display = "block";
    } else {
        x.style.display = "none";
        z.className += ' d-none d-sm-block';
        y.style.display = "block";
        z.style.display = "block";
    }
}

function myFunction11() {
	var w = document.getElementById("myBUTTON3");
    var x = document.getElementById("myBUTTON2");
    var y = document.getElementById("myDIV3");
    var z = document.getElementById("myDIV5");
    	y.style.display = "none";
    	z.classList.remove("d-none");
    	z.classList.remove("d-sm-block");
    	w.style.display = "block";
    }

function myFunction3() {
	var v = document.getElementById("flareBUTTON");
	var w = document.getElementById("myDIV900");
    var x = document.getElementById("myDIV2");
    var y = document.getElementById("myDIV6");
    var z = document.getElementById("myDIV12");
    if (x.style.display === "none") {
    	y.classList.remove("d-none")
    	y.classList.remove("d-sm-block")
    	v.classList.remove("d-block")
    	v.classList.remove("d-sm-block")
    	w.className += ' overflow-y';
    	v.style.display = "none";
        y.style.display = "none";
        z.style.display = "none";
        x.style.display = "block";
    } else {
        x.style.display = "none";
        y.className += ' d-none d-sm-block';
        v.className += ' d-block d-sm-block';
        w.classList.remove("overflow-y")
        v.style.display = "block";
        y.style.display = "block";
        z.style.display = "block";
    }
}


function myFunction5() {
    var x = document.getElementById("myDIV2");
    var y = document.getElementById("myDIV6");
    if (x.style.display === "none") {
        y.style.display = "none";
        x.style.display = "block";
    } else {
        x.style.display = "none";
        y.style.display = "block";
    }
}

function myFunction6() {
    var x = document.getElementById("myDIV2");
    var y = document.getElementById("myDIV8");
    var z = document.getElementById("myDIV9");
    if (x.style.display === "none") {
        y.style.display = "none";
        z.style.display = "none";
        x.style.display = "block";
    } else {
        x.style.display = "none";
        y.style.display = "block";
        z.style.display = "block";
    }
}

function myFunction10() {
    var x = document.getElementById("myDIV");
    var y = document.getElementById("myDIV10");
    if (x.style.display === "none") {
    	x.className += ' animated fadeIn';
        y.style.display = "none";
        x.style.display = "block";
    } else {
        x.style.display = "none";
        y.style.display = "block";
    }
}

