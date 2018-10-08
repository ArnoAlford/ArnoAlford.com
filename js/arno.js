function myFunction() {
    var x = document.getElementById("myDIV");
    var y = document.getElementById("myDIV2");
    if (x.style.display === "none") {
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
        y.style.display = "none";
        z.style.display = "none";
        x.style.display = "block";
    } else {
        x.style.display = "none";
        y.style.display = "block";
        z.style.display = "block";
    }
}