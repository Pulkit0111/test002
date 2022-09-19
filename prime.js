function checkPrime(num){
	let fact=0;
	for (let i=1;i<=num;i++){
		if(num%i){
			fact++;
		} 
	}
	if(fact==0){
		return true;
	} 
	return false;
}


let check=checkPrime(15);

if(check==true){
	console.log("prime");
} else {
	console.log(prime);
}
