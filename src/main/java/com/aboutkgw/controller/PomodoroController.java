package com.aboutkgw.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class PomodoroController {
	
	@GetMapping(value = "/pomodoro.do")
	public String openIndexPage(Model model) {
		return "projects/pomodoro_timer/pomodoro_timer";
	}
}
