
var str,x,pic;
function open1()
{
	if( document.getElementById("r1").checked)
	{
		src="www.google.co.il";
		pic="pics/1.jpg";
	}
	else if(document.getElementById("r2").checked)
	{
		src = "ynet.co.il";
		pic="pics/2.jpg";
	}
	else if(document.getElementById("r3").checked)
	{
		src = "walla.co.il";
		pic="pics/3.jpg";
	}
	else if(document.getElementById("r4").checked)
	{
		src = "facebook.com";
		pic="pics/4.png";
	}
	else if(document.getElementById("r5").checked)
	{
		src = "one.co.il";
		pic="pics/5.png";
	}
	document.getElementById("mypic").src=pic;
	x=window.open("http://"+src);
}
function myend(){
document.getElementById("mypic").src="";
x.close();
}