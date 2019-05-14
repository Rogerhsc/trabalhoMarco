/**
 * 
 */
const IsEmail = (email) => {
	
	var er = new RegExp(/^[A-Za-z0-9_\-\.]+@[A-Za-z0-9_\-\.]{2,}\.[A-Za-z0-9]{2,}(\.[A-Za-z0-9])?/);
	
	if(typeof(email) == "string")
	{		
		if(er.test(email)){
			console.log("is Email");
			document.getElementById('loginButton').disabled = false
			}
		else{
			console.log("is not Email");
			document.getElementById('loginButton').disabled = true
		}
	}
	else if(typeof(email) == "object"){		
		if(er.test(email.value)){ 				
			console.log("is not Email"); 				
			}	
	}else{		
		console.log("is not Email");
	}
}

const passWordValidation = (pass) => {
	
	if(pass.length < 7){
		document.getElementById('loginButton').disabled = true
		console.log('Senha Incorreta')
	}else{
		console.log('Senha correta')
		document.getElementById('loginButton').disabled = false
	}
}

