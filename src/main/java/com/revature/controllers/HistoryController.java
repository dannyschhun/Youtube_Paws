package com.revature.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import com.revature.beans.History;
import com.revature.services.HistoryService;

@Controller
@RequestMapping("/history")
@CrossOrigin
public class HistoryController {

	@Autowired
	HistoryService historyService;
	
	@RequestMapping(value="/new", method=RequestMethod.POST, produces=MediaType.APPLICATION_JSON_VALUE, consumes=MediaType.APPLICATION_JSON_VALUE)
	@ResponseBody
	public History addHistory(@RequestBody History a0) {
		return historyService.addHistory(a0);
	}
	
	@RequestMapping(value="/remove", method=RequestMethod.DELETE, consumes=MediaType.APPLICATION_JSON_VALUE)
	@ResponseBody
	public void deleteHistory(@RequestBody History a0) {
		historyService.deleteHistory(a0);
	}
	
	@RequestMapping(value="/{id}", method=RequestMethod.GET, produces=MediaType.APPLICATION_JSON_VALUE)
	@ResponseBody
	public List<History> findByHistoryId(@PathVariable("id") Integer id) {
		return historyService.findByHistoryId(id);
	}
}
