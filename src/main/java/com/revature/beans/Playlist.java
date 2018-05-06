package com.revature.beans;

import java.io.Serializable;

import javax.persistence.*;

import com.revature.composite.PlaylistComposite;

@Entity
@Table(name="PLAYLIST")
@IdClass(value=PlaylistComposite.class)
public class Playlist implements Serializable{

	/*
	
	 */
	private static final long serialVersionUID = 1L;
	
	@Id
	private int playlistId;

	@Id
	private String videoLink;
	
	@ManyToOne(fetch = FetchType.EAGER)
	@JoinColumn(name = "users_id",referencedColumnName="USERS_ID",nullable=true)
	private Users users;

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

	public Users getUsers() {
		return users;
	}

	public void setUsers(Users users) {
		this.users = users;
	}
	
	
}
