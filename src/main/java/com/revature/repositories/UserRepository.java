package com.revature.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.revature.beans.Users;

@Repository
public interface UserRepository extends JpaRepository<Users, Integer>  {
	
	public List<Users> findUsersByUsername(String username);
	public Users findUsersByUsernameAndPassword(String username, String password);
//	@Modifying
//	@Query("UPDATE Users u SET u = :upUsers WHERE u.id = :id")
//	public Integer updateUsersById(@Param("id")Integer id, @Param("upUsers")Users upUsers);
	
	//public User addUser(User user);

}
