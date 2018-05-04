package com.revature.beans;

import java.io.Serializable;

import javax.persistence.*;

import org.springframework.stereotype.Component;

//import javax.persistence.*;


@Component
@Entity
@Table(name="USERS")
public class Users implements Serializable{
	private static final long serialVersionUID = 1L;
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)//, generator="userSequence") 
//	@SequenceGenerator(allocationSize=1,name="userSequence",sequenceName="SQ_USER_PK") AUTOMATIC
	@Column(name = "id")
	private Integer id;
	
	@Column(name = "USER_USERNAME")
	//@NotNull  //table contraints
	private String username;
	
	@Column(name = "USER_PASSWORD")
	private String password;
	
	@Column(name = "USER_RANK")
	private Integer rank;
	//add the setting below, above is for 5-4 mvp
//	@ManyToMany(fetch=FetchType.EAGER)
//	@JoinTable(
//			name="VIEW_SETTINGS",
//			joinColumns=@JoinColumn(name=),
//			inverseJoinColumns=@JoinColumn(name=)
//	)
	//@JsonIgnore //ignores object to json
	
	public Users() {
	}
	
	//super constructor needs to be added
	
	public int getId() {
		return id;
	}
	public void setId(int id) {
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
	public int getRank() {
		return rank;
	}
	public void setRank(int rank) {
		this.rank = rank;
	}

	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + ((id == null) ? 0 : id.hashCode());
		result = prime * result + ((password == null) ? 0 : password.hashCode());
		result = prime * result + ((rank == null) ? 0 : rank.hashCode());
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
		if (rank == null) {
			if (other.rank != null)
				return false;
		} else if (!rank.equals(other.rank))
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
		return "User [id=" + id + ", username=" + username + ", password=" + password + ", rank=" + rank + "]";
	}
	
	
	
	
}
