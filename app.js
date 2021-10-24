const dino = document.getElementById("dino");
const cact = document.getElementById("cact");

// console.log(dino);
// console.log(cact);

document.addEventListener("keydown", function(event){
	jump();
});

function jump(){
	if(dino.classList != "jump"){
		dino.classList.add("jump");
	}
	setTimeout(function(){
		dino.classList.remove("jump");
	}, 500);
}

let isAlive = setInterval(function(){
	let dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue("top"));
	let cactLeft = parseInt(window.getComputedStyle(cact).getPropertyValue("left"));

	if(cactLeft < 50 && cactLeft > 0 && dinoTop >= 140){
		alert("GAME OVER");
	}
}, 10);