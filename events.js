console.log("events.js")
let outputTarget = document.getElementById("output-target");
let articleInfo = document.getElementsByClassName('article-section');

function clickShowArTarg (MouseEvent){
	console.log("Mouse Event", MouseEvent);
	let articleText = MouseEvent.target.innerHTML;
	outputTarget.innerHTML = "You clicked on the " + articleText + " section."
}

for (let i = 0; i < articleInfo.length; i++) {
	articleInfo.item(i).addEventListener("click", clickShowArTarg)
}

let h1Tag = document.getElementById("page-title");
h1Tag.addEventListener("mouseover", h1MouseOver);
h1Tag.addEventListener("mouseout", h1MouseOut);

function h1MouseOver(event){
	outputTarget.innerHTML = "You moved your mouse over the header";
}

function h1MouseOut(event){
	outputTarget.innerHTML = "You left me!!"
}

let typeStuff = document.getElementById("keypress-input");
typeStuff.addEventListener("keyup", function(event){
	outputTarget.innerHTML = event.target.value;
});

let rodentChange = document.getElementById("guinea-pig");

document.getElementById("add-color").addEventListener("click", function(){
	rodentChange.classList.toggle("colorChange");
});

document.getElementById("make-large").addEventListener("click", function(){
	rodentChange.classList.toggle("embiggen");
});

document.getElementById("add-border").addEventListener("click", function(){
	rodentChange.classList.toggle("borderIt");
});

document.getElementById("add-rounding").addEventListener("click", function(){
	rodentChange.classList.toggle("roundIt");
});

/*

*/