package com.kgw012.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class IndexController {
	
	@GetMapping(value = "/")
	public String openIndexPage(Model model) {
		return "index";
	}

	@GetMapping(value = "/index.do")
	public String openIndexPage2(Model model) {
		return "index";
	}
}
