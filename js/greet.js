function greet()
{
	datenow = new Date(); 
	timenow = datenow.getTime(); 
	datenow.setTime(timenow); 
	hournow = datenow.getHours(); 
	if (hournow > 18)
	{ 
	   greeting = "Good Evening!"; 
	}
	else 
	if (hournow > 12) 
	{
	   greeting = "Good Afternoon!"; 
	}
	else 
	{
	   greeting = "Good Morning!"; 
	}

		var basicgreeting = document.getElementById('basicgreeting');
		basicgreeting.innerHTML = greeting;
		setTimeout("greet()", 1000);
}
greet();