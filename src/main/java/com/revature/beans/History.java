package com.revature.beans;

import java.io.Serializable;

import javax.persistence.*;

import com.revature.composite.HistoryComposite;

@Entity
@Table(name="HISTORY")
@IdClass(value=HistoryComposite.class)
public class History implements Serializable{
	
	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	@Id
	private int historyId;
	
	@Id
	private String videoLink;
	
	@ManyToOne(fetch = FetchType.EAGER)
	@JoinColumn(name = "users_id",referencedColumnName="USERS_ID",nullable=true)
	private Users users;
	

	public int getHistoryId() {
		return historyId;
	}

	public void setHistoryId(int historyId) {
		this.historyId = historyId;
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
