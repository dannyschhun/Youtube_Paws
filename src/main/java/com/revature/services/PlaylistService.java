package com.revature.services;

import java.util.List;

import com.revature.model.Playlist;

public interface PlaylistService {
	public Playlist addPlaylist(Playlist a0);
	public List<Playlist> findByPlaylistId(Integer a0);
	public void deletePlaylist(Playlist a0);
}
