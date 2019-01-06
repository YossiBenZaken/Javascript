function start(){
	num1=Math.round(Math.random()*10);
	num2=Math.round(Math.random()*10);
	document.getElementById("num1").value = num1;
	document.getElementById("num2").value = num2;
	document.getElementById("solution").value = "";
	document.getElementById('myImage').src = "";
	document.getElementById('correct').innerHTML = "";
}
function check(){
	n1=document.getElementById("num1").value;
	n2=document.getElementById("num2").value;
	solution=document.getElementById("solution").value;
	if(solution == n1*1.0 + n2*1.0)
	{
		document.getElementById('myImage').src = "ok.png";
	}
	else
	{
		document.getElementById('myImage').src = "no.png";
		document.getElementById('correct').innerHTML = "The correct solution is:" + (n1*1.0 + n2*1.0);
	}
}