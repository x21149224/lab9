function alter(choice){
	const finalNumber=choice;
	let userNumber=prompt("Enter the number of subjects taken");
	console.log(userNumber);
		for(i=0;i<=userNumber.length;i++){
			let finalNumber=prompt("What marks (0-100) did you get in subject number"+(i));
				console.log(finalNumber);
		
		}
		document.getElementById("message").innerHTML="";	
		
}



