function calc(oper){
	var sum=0;
	num = document.getElementById("num").value;
	num2 = document.getElementById("num2").value;
	switch(oper){
		case '+':
			sum = num*1.0 + num2*1.0;
			document.getElementById("siman").innerHTML="+";
			break;
		case '-':
			sum = num - num2;
			document.getElementById("siman").innerHTML="-";
			break;
		case '*':
			sum = num * num2;
			document.getElementById("siman").innerHTML="*";
			break;
		case '/':
			sum = num / num2;
			document.getElementById("siman").innerHTML="/";
			break;
		case '^2':
			sum = num * num;
			document.getElementById("siman").innerHTML="x<sup>2</sup>";
			break;
		case '^y':
			sum=num;
			for(i=1;i<num2;sum*=num,i++);
			document.getElementById("siman").innerHTML="x<sup>y</sup>";
			break;
		case 'zugi':
			if(num%2 == 0) sum = "Zugi";
			else sum = "No Zugi";
			document.getElementById("siman").innerHTML="Zugi";
			break;
		case '!':
			sum=1;
			for(i=1;i<=num;sum*=i,i++);
			document.getElementById("siman").innerHTML="x!";
			break;
		case 'prime':
			var flag=1;
			for(i=2;i<num;i++)
				if(num%i == 0)
				{
					flag = 0;
					break;
				}
			if(flag) sum = "Yes";
			else sum = "No";
			document.getElementById("siman").innerHTML="prime number";
			break;
		case 'sumxtoy':
			for(i=num*1.0;i<=num2;sum+=i,i++);
			document.getElementById("siman").innerHTML="sum x to y";
			break;
	}
	document.getElementById("res").innerHTML=sum;
}