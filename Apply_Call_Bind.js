//1. Apply

//2. Call

//3. Bind


//Problem Statement
/*
let userDetails={
	
	name:"Ajay Suneja",
	Age:28,
	Designation:"Software Engineer",
	printDetails:function(){
	console.log(this.name)		
	}			
}
userDetails.printDetails();
*/
/*
let userDetails={
	
	name:"Ajay Suneja",
	Age:28,
	Designation:"Software Engineer",
		
	}	
 let printDetails=function()
 {
	 
	console.log(this); 
 }
	

printDetails.call(userDetails);


let userDetails2={
	
	name:"Ajaaaaaay Suneja",
	Age:2855,
	Designation:"Software Engineerrrr",
		
	}	
//function borrowing

printDetails.call(userDetails2);
*/
let userDetails={
	
	name:"Ajay Suneja",
	Age:28,
	Designation:"Software Engineer",
		
	}	
 let printDetails=function(state,country)
 {
	 
	console.log(this.name+""+state+""+country); 
 }
	

printDetails.call(userDetails,"Delhi","India");


let userDetails2={
	
	name:"Ajaaaaaay Suneja",
	Age:2855,
	Designation:"Software Engineerrrr",
		
	}	
//function borrowing


//Call
printDetails.call(userDetails2,"Delhi","India");


//Apply
printDetails.apply(userDetails2,["Delhi","India"]);

//Bind
let newfn=printDetails.bind(userDetails2,"Delhi","India");
newfn();


