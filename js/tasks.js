//task#1
var width = document.getElementById('widthLocation');
var height = document.getElementById('heightLocation');
function onresize(){
	var w = window.innerWidth;
	var h = window.innerHeight;
	this.width.innerHTML = w;
	this.height.innerHTML = h;
}

window.addEventListener("resize", onresize);


document.getElementById('re').onclick = function(event) {
    window.location.reload(true);
};

//task#2
document.getElementById('changeColor').onclick = function(event){
 	document.getElementById('pThree').style.color = "yellow";
};

document.getElementById('hello').onclick = function(event) {
	document.getElementById('greet').innerHTML = "Hello World!!";
};

document.getElementById('showAndHide').onclick = function myFunction() {
    var x = document.getElementById("pTwo");
    if (x.style.display == "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}