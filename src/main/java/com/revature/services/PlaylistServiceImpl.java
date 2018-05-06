package com.revature.services;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.revature.beans.Playlist;
import com.revature.repositories.PlaylistRepository;

@Service
@Transactional
public class PlaylistServiceImpl implements PlaylistService{

	@Autowired
	PlaylistRepository s0;

	@Override
	public Playlist addPlaylist(Playlist a0) {
		return s0.save(a0);
	}

	@Override
	public List<Playlist> findByPlaylistId(Integer a0) {
		List<Playlist> t0 = s0.findAll();
		List<Playlist> v0 = new ArrayList<Playlist>();
		
		for(Playlist t1 : t0) {
			if(t1.getPlaylistId() == a0) {
				v0.add(t1);
			}
		}
		
		return v0;
	}

	@Override
	public void deletePlaylist(Playlist a0) {
		s0.delete(a0);
	}
	
	
}
