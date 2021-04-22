package com.kgw012.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class PortfolioController {

	@GetMapping(value = "/portfolio.do")
	public String openPortfolio(Model model) {
		return "portfolio/portfolio";
	}

}
