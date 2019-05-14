package com.fib.Marco.trabalhoMarco.classes;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class HomeController {
	
	@RequestMapping("/login")
	public String login() {
		
		return "views/Login";
	}
	@RequestMapping("/paginaPrincipal")
	public String produtos() {
		
		return "views/paginaPrincipal";
	}
}
