var ko = document.querySelector(".ko");
var ca = document.querySelector(".ca");
var cu = document.querySelector(".cu");
var m = document.querySelector(".home");
var k = document.getElementById("korea");
var c = document.getElementById("canada");
var cc = document.getElementById("cuba");

ko.addEventListener("click", function() {
    if (k.style.display === "none") {
        k.style.display = "block";
    } else c.style.display = "none";
    cc.style.display = "none";
});
ca.addEventListener("click", function() {
    k.style.display = "none";
    cc.style.display = "none";
    c.style.display = "block";
});
cu.addEventListener("click", function() {
    k.style.display = "none";
    c.style.display = "none";
    cc.style.display = "block";
});
m.addEventListener("click", function() {
    k.style.display = "block";
    cc.style.display = "block";
    c.style.display = "block";
});

/*
function show() {
    document.getElementById("korea").style.display = "block";
    document.getElementById("canada").style.display = "block";
}

function hide() {
    document.getElementById("korea").style.display = "none";
    document.getElementById("canada").style.display = "block";
}
function behind() {
    document.getElementById("canada").style.display = "none";
    document.getElementById("korea").style.display = "block";
}
var nav = document.getElementsByClassName("nav-top");
*/
