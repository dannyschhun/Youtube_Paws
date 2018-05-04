package com.revature.controllers;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Controller;
//import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.*;

import com.revature.beans.*;
import com.revature.services.UserService;

@Controller
@RequestMapping("/users")
public class UserController {
	
	@Autowired
	UserService userService;
	
	@RequestMapping(value="/new",method=RequestMethod.POST, produces=MediaType.APPLICATION_JSON_VALUE, consumes=MediaType.APPLICATION_JSON_VALUE)
	@ResponseBody
	public Users addUser(@Valid @RequestBody Users newUser) {
		return userService.addUser(newUser);
	}
	
//	@RequestMapping(value="/update",method=RequestMethod.PUT, produces=MediaType.APPLICATION_JSON_VALUE, consumes=MediaType.APPLICATION_JSON_VALUE)
//	@ResponseBody
//	public User updateUser(@RequestBody User u) {
//		return userService.updateUserById(u);
//	}
//	
//	//find all users
//	
//	@RequestMapping(value="/{id}",method=RequestMethod.GET, produces=MediaType.APPLICATION_JSON_VALUE, consumes=MediaType.APPLICATION_JSON_VALUE)
//	@ResponseBody
//	public User findUserById(@PathVariable("id") Integer id) {
//		return userService.findUserById(id);
//	}
//	
//	@RequestMapping(value="/login",method=RequestMethod.POST, produces=MediaType.APPLICATION_JSON_VALUE, consumes=MediaType.APPLICATION_JSON_VALUE)
//	@ResponseBody
//	public User loginUser(@RequestBody User user) {
//		return userService.loginUser(user.getUsername(), user.getPassword());
//	}
	

	
}
