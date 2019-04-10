var pi = document.getElementById("input");
var s = document.getElementById("suggest");
var list = document.querySelector("ul");

var lia = document.getElementsByTagName("li");

function addKillTag(li){
	li.classList.add("killed");
	li.classList.toggle("killed");
}

function toggleKillTag(li){
	li.addEventListener("click", function(){
		li.classList.toggle("killed");
	});
}

function addDeleteButton(li){
	li.appendChild(document.createElement("button"));
	let button = li.children[0];
	button.appendChild(document.createTextNode("Delete"));
	button.addEventListener("click", function(){
		li.parentNode.removeChild(li);
	});
}


function writeToList(){
	let li;
	if(pi.value.length !== 0){
		li = document.createElement("li");
		li.appendChild(document.createTextNode(pi.value));
		list.appendChild(li);
		pi.value = "";
	}
	return li;
}

function addToList(){
	let li = writeToList();
	addDeleteButton(li);
}

for(i=0;i<lia.length;++i){
	let li = lia[i];
	addKillTag(li);
	toggleKillTag(li);
	addDeleteButton(li);
}

s.addEventListener("click", function(){
	addToList();
});

pi.addEventListener("keypress", function(){
	if(event.keyCode === 13){
		addToList();
	}
});