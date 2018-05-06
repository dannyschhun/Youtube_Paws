package com.revature.model;

import java.io.Serializable;

import javax.persistence.*;

@Entity
@Table(name="PAGE_LAYOUT")
public class PageLayout implements Serializable{

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	
	@Id
	@Column(name="id")
	@GeneratedValue(strategy=GenerationType.AUTO)
	private int id;
	
	@Column(name="LAYOUT_NAME")
	private String layoutName;
	
	@Column(name="SEARCH_BAR_LOC")
	private String searchBarLoc;
	
	@Column(name="VIDEO1_LOC")
	private String video1Loc;
	
	@Column(name="VIDEO2_LOC")
	private String video2Loc;
	
	@Column(name="BACKGROUND")
	private String background;

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getLayoutName() {
		return layoutName;
	}

	public void setLayoutName(String layoutName) {
		this.layoutName = layoutName;
	}

	public String getSearchBarLoc() {
		return searchBarLoc;
	}

	public void setSearchBarLoc(String searchBarLoc) {
		this.searchBarLoc = searchBarLoc;
	}

	public String getVideo1Loc() {
		return video1Loc;
	}

	public void setVideo1Loc(String video1Loc) {
		this.video1Loc = video1Loc;
	}

	public String getVideo2Loc() {
		return video2Loc;
	}

	public void setVideo2Loc(String video2Loc) {
		this.video2Loc = video2Loc;
	}

	public String getBackground() {
		return background;
	}

	public void setBackground(String background) {
		this.background = background;
	}
	
	
}
