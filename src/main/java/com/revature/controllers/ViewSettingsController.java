package com.revature.controllers;

import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import com.revature.beans.ViewSettings;
import com.revature.services.ViewSettingsService;

@Controller
@RequestMapping("/viewSettings")
@CrossOrigin
public class ViewSettingsController {
	
	@Autowired
	ViewSettingsService vsService;

	@RequestMapping(value="/new",method=RequestMethod.POST, produces=MediaType.APPLICATION_JSON_VALUE, consumes=MediaType.APPLICATION_JSON_VALUE)
	@ResponseBody
	public ViewSettings addViewSettings(@Valid @RequestBody ViewSettings vs) {
		return vsService.addViewSettings(vs);
	}
	
	@RequestMapping(value="/byName",method=RequestMethod.GET, produces=MediaType.APPLICATION_JSON_VALUE, consumes=MediaType.APPLICATION_JSON_VALUE)
	@ResponseBody
	public List<ViewSettings> getViewSettingByName(@RequestBody ViewSettings vs){
		return vsService.getViewSettingsByName(vs);
	}
	
	@RequestMapping(value="/{id}",method=RequestMethod.GET, produces=MediaType.APPLICATION_JSON_VALUE)
	@ResponseBody
	public ViewSettings getViewSettingById(@PathVariable("id") Integer n){
		ViewSettings vs = new ViewSettings();
		vs.setId(n);
		return vsService.getViewSettingsById(n);
	}
	
	@RequestMapping(value="/update", method=RequestMethod.PUT,produces=MediaType.APPLICATION_JSON_VALUE, consumes=MediaType.APPLICATION_JSON_VALUE)
	@ResponseBody
	public ViewSettings updateViewSettings(@RequestBody ViewSettings vs) {
		return vsService.updateViewSettings(vs);
	}
	
	@RequestMapping(value="/delete", method=RequestMethod.DELETE,produces=MediaType.APPLICATION_JSON_VALUE, consumes=MediaType.APPLICATION_JSON_VALUE)
	@ResponseBody
	public ViewSettings deleteViewSettings(@RequestBody ViewSettings vs) {
		return vsService.deleteViewSettingsById(vs);
	}


}
