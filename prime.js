function prime(number){
	let factor=0;
	for (let i=1;i<=number;i++){
		if(number%i){
			factor++;
		} 
	}
	if(factor==2){
		return true;
	} 
	return false;
}


let x=prime(15);

if(check==true){
	console.log("prime");
} else {
	console.log("not prime");
}


