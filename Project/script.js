function calc()
{
	n1v1 = document.getElementById("n1v1").value;
	n2v1 = document.getElementById("n2v1").value;
	n3v1 = document.getElementById("n3v1").value;
	n1v2 = document.getElementById("n1v2").value;
	n2v2 = document.getElementById("n2v2").value;
	n3v2 = document.getElementById("n3v2").value;
	n1v3 = document.getElementById("n1v3").value;
	n2v3 = document.getElementById("n2v3").value;
	n3v3 = document.getElementById("n3v3").value;
	if(document.getElementById("1").checked)
		document.getElementById("res").innerHTML = "|" + (n1v1*1.0 + n1v2*1.0 + n1v3*1.0) + "|<br>|" + (n2v1*1.0 + n2v2*1.0 + n2v3*1.0) + "|<br>|"+(n3v1*1.0 + n3v2*1.0+n3v3*1.0)+"|";
	else if(document.getElementById("2").checked)
		document.getElementById("res").innerHTML = "|" + (n1v1 - n1v2 - n1v3) + "|<br>|" + (n2v1 - n2v2 - n2v3) + "|<br>|"+(n3v1 - n3v2 - n3v3) + "|";
	else if(document.getElementById("3").checked)
		document.getElementById("res").innerHTML = n1v1*n2v2-n2v1*n1v2;
	else if(document.getElementById("4").checked)
		document.getElementById("res").innerHTML = n1v1*n2v2*n3v3+n2v1*n3v2*n1v3+n3v1*n1v2*n2v3-n3v1*n2v2*n1v3-n2v1*n1v2*n3v3-n1v1*n3v2*n2v3;
	else if(document.getElementById("5").checked)
	{
		vec1 = [n1v1,n2v1,n3v1,1];
		vec2 = [n1v2,n2v2,n3v3,1];
		vec3 = [n1v3,n2v3,n3v3,1];
		vec2_1 = (-vec1[3]*vec2[0]);
		vec2 = [0,vec1[0]*vec2[1]-vec1[1]*vec2[0],vec1[0]*vec2[2]-vec1[2]*vec2[0],vec1[0]*vec2[3]];
		vec3_1 = (-vec1[0]*vec3[0]);//-3v1
		vec3 = [0,vec1[0]*vec3[1]-vec1[1]*vec3[0],vec1[0]*vec3[2]-vec1[2]*vec3[0],vec1[0]*vec3[3]];
		vec3[2] = vec2[1]*vec3[2] - vec2[2]*vec3[1];
		vec3_v1 = vec2[1]*vec3_1-vec2_1*vec3[1];
		vec3_v2= -vec3[1]*vec2[3];
		vec3_v3 = vec2[1]*vec3[3];
		vec3_v1 /= vec3_v3;
		vec3_v2 /= vec3_v3;
		if((-vec3_v2)>0)
			document.getElementById("res").innerHTML = "v<sub>3</sub>="+ (-vec3_v1) + "v<sub>1</sub>+"+ (-vec3_v2)+"v<sub>2</sub>";
		else
			document.getElementById("res").innerHTML = "v<sub>3</sub>="+(-vec3_v1) + "v<sub>1</sub>"+ (-vec3_v2)+"v<sub>2</sub>";
	}
	else if(document.getElementById("6").checked)
	{
		var vec1 = [n1v1 , n2v1, n3v1,1,0,0];
		var vec2 = [n1v2,n2v2,n3v2,0,1,0];
		var vec3 = [n1v3, n2v3, n3v3, 0, 0 ,1];
		var pr="|";
		vec2 = [0,vec1[0]*vec2[1]-vec1[1]*vec2[0],vec1[0]*vec2[2]-vec1[2]*vec2[0],vec1[0]*vec2[3]-vec1[3]*vec2[0],vec1[0]*vec2[4]-vec1[4]*vec2[0],vec1[0]*vec2[5]-vec1[5]*vec2[0]];
		vec3 = [0,vec1[0]*vec3[1]-vec1[1]*vec3[0],vec1[0]*vec3[2]-vec1[2]*vec3[0],vec1[0]*vec3[3]-vec1[3]*vec3[0],vec1[0]*vec3[4]-vec1[4]*vec3[0],vec1[0]*vec3[5]-vec1[5]*vec3[0]];
		vec1 = [vec2[1]*vec1[0],0,vec2[1]*vec1[2]-vec1[1]*vec2[2],vec2[1]*vec1[3]-vec1[1]*vec2[3],vec2[1]*vec1[4]-vec1[1]*vec2[4],vec2[1]*vec1[5]-vec1[1]*vec2[5]];
		vec3 = [0,0,vec2[1]*vec3[2]-vec3[1]*vec2[2],vec2[1]*vec3[3]-vec3[1]*vec2[3],vec2[1]*vec3[4]-vec3[1]*vec2[4],vec2[1]*vec3[5]-vec3[1]*vec2[5]];
		vec1 = [vec3[2]*vec1[0],0,0,vec3[2]*vec1[3]-vec1[2]*vec3[3],vec3[2]*vec1[4]-vec1[2]*vec3[4],vec3[2]*vec1[5]-vec1[2]*vec3[5]];
		vec2 = [0,vec3[2]*vec2[1],0,vec3[2]*vec2[3]-vec2[2]*vec3[3],vec3[2]*vec2[4]-vec2[2]*vec3[4],vec3[2]*vec2[5]-vec2[2]*vec3[5]];
		vec1 = [1,0,0,vec1[3]/vec1[0],vec1[4]/vec1[0],vec1[5]/vec1[0]];
		vec2 = [0,1,0,vec2[3]/vec2[1],vec2[4]/vec2[1],vec2[5]/vec2[1]];
		vec3 = [0,0,1,vec3[3]/vec3[2],vec3[4]/vec3[2],vec3[5]/vec3[2]];
		for(i=3;i<vec1.length;i++)
			pr += vec1[i] + " ";
		pr += "|<br>|";
		for(i=3;i<vec2.length;i++)
			pr += vec2[i] + " ";
		pr += "|<br>|";
		for(i=3;i<vec3.length;i++)
			pr += vec3[i] + " ";
		pr +="|";
		document.getElementById("res").innerHTML = pr;
	}
}
function styles()
{
	var res = document.getElementById("res").style;
	var color = document.getElementById("ColorSelect").value;
	var transform = document.getElementById("TransformSelect").value;
	var size = document.getElementsByName("Size");
	if(size[0].checked) res.fontSize = "15px";
	else if(size[1].checked) res.fontSize = "30px";
	else res.fontSize = "50px";
	if(document.getElementById("Bold").checked) res.fontWeight = "bold";
	else res.fontWeight = "normal";
	if(document.getElementById("Underline").checked) res.textDecoration = "underline";
	else res.textDecoration = "none";
	if(document.getElementById("Italic").checked) res.fontStyle = "italic";
	else res.fontStyle = "normal";
	switch (transform){
		case "Normal":
			res.textTransform = "none";
			break;
		case "Capitalize":
			res.textTransform = "capitalize";
			break;
		case "Uppercase":
			res.textTransform = "uppercase";
			break;
		case "Lowercase":
			res.textTransform = "lowercase";
			break;
	}
	switch (color){
		case "Red":
			res.color = "red";
			break;
		case "Yellow":
			res.color = "yellow";
			break;
		case "Green":
			res.color = "green";
			break;
		case "Blue":
			res.color = "blue";
			break;
		case "Black":
			res.color = "black";
			break;
	}

}