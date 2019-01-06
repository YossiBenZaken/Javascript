function mypic(){
	h=document.getElementById("h").value;
	w=document.getElementById("w").value;
	pic=document.getElementById("pic").value-1;
	x=Math.round(Math.random()*pic)+1;
	picu=document.getElementById("mypicu");
	picu.src = "pics/" + x + ".jpg";
	picu.style.height = h;
	picu.style.width = w;
}