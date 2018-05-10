package com.revature.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.revature.beans.PageLayout;
import com.revature.services.PageLayoutService;

@Controller
@RequestMapping("/pagelayout")
@CrossOrigin
public class PageLayoutController {
	
	@Autowired
	PageLayoutService s0;

	@RequestMapping(value="/all", method=RequestMethod.GET, produces=MediaType.APPLICATION_JSON_VALUE)
	@ResponseBody
	public List<PageLayout> getLayouts(){
		return s0.getLayouts();
	}
	
	@RequestMapping(value="/{name}", method=RequestMethod.GET, produces=MediaType.APPLICATION_JSON_VALUE)
	@ResponseBody
	public PageLayout getLayoutByName(@PathVariable("name") int a0){
		return s0.getLayoutById(a0);
	}
	
	@RequestMapping(value="/new", method=RequestMethod.POST, produces=MediaType.APPLICATION_JSON_VALUE, consumes=MediaType.APPLICATION_JSON_VALUE)
	@ResponseBody
	public PageLayout addLayout(@RequestBody PageLayout a0){
		return s0.addLayout(a0);
	}
	
	@RequestMapping(value="/remove", method=RequestMethod.DELETE, consumes=MediaType.APPLICATION_JSON_VALUE)
	@ResponseBody
	public void deleteLayout(@RequestBody PageLayout a0){
		s0.deleteLayout(a0);
	}
	
	@RequestMapping(value="/update", method=RequestMethod.POST, produces=MediaType.APPLICATION_JSON_VALUE, consumes=MediaType.APPLICATION_JSON_VALUE)
	@ResponseBody
	public PageLayout updateLayout(@RequestBody PageLayout a0){
		return s0.updateLayout(a0);
	}
}
