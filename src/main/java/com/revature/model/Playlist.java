package com.revature.model;

import java.io.Serializable;

import javax.persistence.*;

import com.revature.composite.PlaylistComposite;

@Entity
@Table(name="PLAYLIST")
@IdClass(value=PlaylistComposite.class)
public class Playlist implements Serializable{

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	
	@Id
	private int playlistId;

	@Id
	private String videoLink;

	public int getPlaylistId() {
		return playlistId;
	}

	public void setPlaylistId(int playlistId) {
		this.playlistId = playlistId;
	}

	public String getVideoLink() {
		return videoLink;
	}

	public void setVideoLink(String videoLink) {
		this.videoLink = videoLink;
	}
	
	
}
