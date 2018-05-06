package com.revature.model;

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
	
	
}
