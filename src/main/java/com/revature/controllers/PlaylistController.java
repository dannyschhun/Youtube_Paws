package com.revature.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import com.revature.beans.Playlist;
import com.revature.services.PlaylistService;

@Controller
@RequestMapping("/playlist")
@CrossOrigin
public class PlaylistController {

	@Autowired
	PlaylistService s0;
	
	@RequestMapping(value="/new", method=RequestMethod.POST, produces=MediaType.APPLICATION_JSON_VALUE, consumes=MediaType.APPLICATION_JSON_VALUE)
	@ResponseBody
	public Playlist addPlaylist(@RequestBody Playlist a0) {
		return s0.addPlaylist(a0);
	}
	
	@RequestMapping(value="/remove", method=RequestMethod.DELETE, consumes=MediaType.APPLICATION_JSON_VALUE)
	@ResponseBody
	public void deleteHistory(@RequestBody Playlist a0) {
		s0.deletePlaylist(a0);
	}
	
	
	/**
	 * 
	 * @param a0 -> an integer parameter
	 * @return -> a list of Playlist objects
	 */
	@RequestMapping(value="/{id}", method=RequestMethod.GET, produces=MediaType.APPLICATION_JSON_VALUE)
	@ResponseBody
	public List<Playlist> findByPlaylistId(@PathVariable("id") Integer a0) {
		return s0.findByPlaylistId(a0);
	}
}
