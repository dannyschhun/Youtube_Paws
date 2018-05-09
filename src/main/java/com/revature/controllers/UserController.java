package com.revature.controllers;

import java.util.List;

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
@CrossOrigin
public class UserController {
	
	@Autowired
	UserService userService;
	
	@RequestMapping(value="/new",method=RequestMethod.POST, produces=MediaType.APPLICATION_JSON_VALUE, consumes=MediaType.APPLICATION_JSON_VALUE)
	@ResponseBody
	public Users addUser(@Valid @RequestBody Users newUser) {
		return userService.addUser(newUser);
	}
	
	@RequestMapping(value="/update",method=RequestMethod.PUT, produces=MediaType.APPLICATION_JSON_VALUE, consumes=MediaType.APPLICATION_JSON_VALUE)
	@ResponseBody
	public Users updateUser(@RequestBody Users u) {
		return userService.updateUsersById(u);
	}
	
	//find all users
	
	@RequestMapping(value="/{id}",method=RequestMethod.GET, produces=MediaType.APPLICATION_JSON_VALUE)
	@ResponseBody
	public Users findUserById(@PathVariable("id") Integer id) {
		//System.out.println("This is my id:" +id);
		return userService.findUsersById(id);
	}
	
	@RequestMapping(value="/everybody",method=RequestMethod.GET, produces=MediaType.APPLICATION_JSON_VALUE)
	@ResponseBody
	public List<Users> findUsers() {
		List<Users> list = userService.findAllUsers();
		return list;
	}
	
	@RequestMapping(value="/delete",method=RequestMethod.DELETE, consumes=MediaType.APPLICATION_JSON_VALUE)
	@ResponseBody
	public void deleteUser(@RequestBody Users badUser) {
		userService.deleteUsers(badUser);
	}
	
	@RequestMapping(value="/login",method=RequestMethod.POST, produces=MediaType.APPLICATION_JSON_VALUE, consumes=MediaType.APPLICATION_JSON_VALUE)
	@ResponseBody
	public Users loginUser(@RequestBody Users user) {
		return userService.loginUsers(user);
	}
	
	@RequestMapping(value="/viewSettings",method=RequestMethod.GET, produces=MediaType.APPLICATION_JSON_VALUE)
	@ResponseBody
	public List<ViewSettings> userViewSettings(@RequestBody Users user) {
		List<ViewSettings> list = userService.getUserViewSettings(user);
		return list;
	}

	
}
