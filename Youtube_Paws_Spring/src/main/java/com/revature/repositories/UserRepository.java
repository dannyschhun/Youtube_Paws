package com.revature.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.revature.beans.Users;

@Repository
public interface UserRepository extends JpaRepository<Users, Integer>  {
	
//	public int checkUser(User user);
//	public User loginUser(User user);
//	public User findUserByUsername(String username);
//	public User findUserByUsernameAndPassword(String username, String password);
//	
//	@Modifying
//	@Query("UPDATE User u SET u = :user WHERE u.id = :id")
//	public User updateUserById(Integer id, User user);
	
	//public User addUser(User user);

}
