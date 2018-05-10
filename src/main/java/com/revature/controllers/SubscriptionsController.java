package com.revature.controllers;

import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.revature.beans.Subscriptions;
import com.revature.services.SubscriptionsService;

@Controller
@RequestMapping("/subscriptions")
@CrossOrigin
public class SubscriptionsController {
	
	
	@Autowired
	SubscriptionsService subService;
	
	
	@RequestMapping(value="/new",method=RequestMethod.POST, produces=MediaType.APPLICATION_JSON_VALUE, consumes=MediaType.APPLICATION_JSON_VALUE)
	@ResponseBody
	public Subscriptions addSubscriptions(@Valid @RequestBody Subscriptions subscriptions) {
		return subService.addSubscriptions(subscriptions);
	}
	
	@RequestMapping(value="/byName",method=RequestMethod.GET, produces=MediaType.APPLICATION_JSON_VALUE, consumes=MediaType.APPLICATION_JSON_VALUE)
	@ResponseBody
	public List<Subscriptions> getSubscriptionsByName(@RequestBody Subscriptions subscriptions){
		return subService.getSubscriptionsByName(subscriptions);
	}
	
	@RequestMapping(value="/{id}",method=RequestMethod.GET, produces=MediaType.APPLICATION_JSON_VALUE)
	@ResponseBody
	public Subscriptions getViewSettingById(@PathVariable("id") Integer n){
		
		return subService.getSubscriptionById(n);
	}
	
	@RequestMapping(value="/update", method=RequestMethod.PUT,produces=MediaType.APPLICATION_JSON_VALUE, consumes=MediaType.APPLICATION_JSON_VALUE)
	@ResponseBody
	public Subscriptions updateSubscriptions(@RequestBody Subscriptions subscriptions) {
		return subService.updateSubscriptions(subscriptions);
	}
	
	@RequestMapping(value="/delete", method=RequestMethod.DELETE,produces=MediaType.APPLICATION_JSON_VALUE, consumes=MediaType.APPLICATION_JSON_VALUE)
	@ResponseBody
	public Subscriptions deleteViewSettings(@RequestBody Subscriptions subscriptions) {
		return subService.deleteSubscriptions(subscriptions);
	}
	
	
}
