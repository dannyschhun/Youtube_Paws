package com.revature.beans;

import java.io.Serializable;
import java.util.*;

import javax.persistence.*;

import org.springframework.stereotype.Component;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;



@Component
@Entity
@Table(name="USERS")
@JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
public class Users implements Serializable{
	private static final long serialVersionUID = 1L;
	@Id	
	@GeneratedValue(strategy=GenerationType.AUTO)//, generator="userSequence") 
//	@SequenceGenerator(allocationSize=1,name="userSequence",sequenceName="SQ_USER_PK") AUTOMATIC
	@Column(name = "USERS_ID")
	private Integer id;
	
	@Column(name = "USER_USERNAME")
	//@NotNull  //table contraints
	private String username;
	
	@Column(name = "USER_PASSWORD")
	private String password;
	
	@Column(name = "USER_RANK")
	private Integer rank;

	@ManyToMany(cascade=CascadeType.ALL,fetch=FetchType.EAGER)
	@JoinTable(
			name="USERS_VS",
			joinColumns=@JoinColumn(name="USERS_ID"),
			inverseJoinColumns=@JoinColumn(name="VIEW_SETTINGS_ID")
	)
	List<ViewSettings> userViewSettings;
	
	@ManyToMany(cascade=CascadeType.ALL,fetch=FetchType.LAZY)
	@JoinTable(
			name="USERS_PAGELAYOUT",
			joinColumns=@JoinColumn(name="USERS_ID"),
			inverseJoinColumns=@JoinColumn(name="ID")
	)
	List<PageLayout> userPageLayout;
	
	@OneToMany(cascade=CascadeType.ALL,fetch=FetchType.EAGER,mappedBy="users")
	Set<History> history;
	
	@OneToMany(cascade=CascadeType.ALL,fetch=FetchType.EAGER,mappedBy="users")
	Set<History> playlist;
	
	public Users() {
	}
	
	//super constructor needs to be added
	public Users(Integer id, String username, String password, Integer rank) {
		super();
		this.id = id;
		this.username = username;
		this.password = password;
		this.rank = rank;
	}

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public Integer getRank() {
		return rank;
	}

	public void setRank(Integer rank) {
		this.rank = rank;
	}

	public List<ViewSettings> getUserViewSettings() {
		return userViewSettings;
	}

	public void setUserViewSettings(List<ViewSettings> userViewSettings) {
		this.userViewSettings = userViewSettings;
	}

	public Set<History> getHistory() {
		return history;
	}

	public void setHistory(Set<History> history) {
		this.history = history;
	}

	public List<PageLayout> getUserPageLayout() {
		return userPageLayout;
	}

	public void setUserPageLayout(List<PageLayout> userPageLayout) {
		this.userPageLayout = userPageLayout;
	}

	public Set<History> getPlaylist() {
		return playlist;
	}

	public void setPlaylist(Set<History> playlist) {
		this.playlist = playlist;
	}

	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + ((history == null) ? 0 : history.hashCode());
		result = prime * result + ((id == null) ? 0 : id.hashCode());
		result = prime * result + ((password == null) ? 0 : password.hashCode());
		result = prime * result + ((playlist == null) ? 0 : playlist.hashCode());
		result = prime * result + ((rank == null) ? 0 : rank.hashCode());
		result = prime * result + ((userPageLayout == null) ? 0 : userPageLayout.hashCode());
		result = prime * result + ((userViewSettings == null) ? 0 : userViewSettings.hashCode());
		result = prime * result + ((username == null) ? 0 : username.hashCode());
		return result;
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		Users other = (Users) obj;
		if (history == null) {
			if (other.history != null)
				return false;
		} else if (!history.equals(other.history))
			return false;
		if (id == null) {
			if (other.id != null)
				return false;
		} else if (!id.equals(other.id))
			return false;
		if (password == null) {
			if (other.password != null)
				return false;
		} else if (!password.equals(other.password))
			return false;
		if (playlist == null) {
			if (other.playlist != null)
				return false;
		} else if (!playlist.equals(other.playlist))
			return false;
		if (rank == null) {
			if (other.rank != null)
				return false;
		} else if (!rank.equals(other.rank))
			return false;
		if (userPageLayout == null) {
			if (other.userPageLayout != null)
				return false;
		} else if (!userPageLayout.equals(other.userPageLayout))
			return false;
		if (userViewSettings == null) {
			if (other.userViewSettings != null)
				return false;
		} else if (!userViewSettings.equals(other.userViewSettings))
			return false;
		if (username == null) {
			if (other.username != null)
				return false;
		} else if (!username.equals(other.username))
			return false;
		return true;
	}

	@Override
	public String toString() {
		return "Users [id=" + id + ", username=" + username + ", password=" + password + ", rank=" + rank
				+ ", userViewSettings=" + userViewSettings + ", userPageLayout=" + userPageLayout + ", history="
				+ history + ", playlist=" + playlist + "]";
	}

	
	
	
	
	
	
	
}
