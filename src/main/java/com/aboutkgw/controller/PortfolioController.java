package com.aboutkgw.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class PortfolioController {
	

	@GetMapping(value = "/resume.do")
	public String openIndexPage(Model model) {
		return "resume/resume";
	}
}
