let a=new Date();
	let res=a.getMonth(); 
	if(res>=0 && res<=3)
	{
		console.log("summer");
	}
	else if(res>=4 && res<=7)
	{
		console.log("winnter");
	}
	
	else
	{
		console.log("fall");
	}