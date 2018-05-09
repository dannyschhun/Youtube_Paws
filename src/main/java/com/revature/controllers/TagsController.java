package com.revature.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.revature.beans.*;
import com.revature.services.TagsService;

@Controller
@RequestMapping("/tags")
@CrossOrigin(origins = {"https://localhost:4200"})
public class TagsController{
	
	
	@Autowired
	TagsService tagsService;
	
	@RequestMapping(value="/new",method=RequestMethod.POST, produces=MediaType.APPLICATION_JSON_VALUE, consumes=MediaType.APPLICATION_JSON_VALUE)
	@ResponseBody
	public Tags addTag(@RequestBody Tags t) {
		return tagsService.addTag(t);
	}
	
	@RequestMapping(value="/byName",method=RequestMethod.GET, produces=MediaType.APPLICATION_JSON_VALUE, consumes=MediaType.APPLICATION_JSON_VALUE)
	@ResponseBody
	public List<Tags> getTagByName(@RequestBody Tags tag){
		return tagsService.getTagsByName(tag);
	}
	
	@RequestMapping(value="/delete", method=RequestMethod.DELETE,produces=MediaType.APPLICATION_JSON_VALUE, consumes=MediaType.APPLICATION_JSON_VALUE)
	@ResponseBody
	public Tags deleteViewSettings(@RequestBody Tags t) {
		return tagsService.deleteTag(t);
	}
	
}
