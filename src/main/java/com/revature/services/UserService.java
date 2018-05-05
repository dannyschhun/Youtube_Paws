package com.revature.services;



import java.util.List;

import com.revature.beans.Users;

public interface UserService {
	public Users addUser(Users newUser);
	public Users findUsersById(Integer id);
//	public Users findUsersByUsername(String username);
	public Users loginUsers(Users user);
	public Users updateUsersById(Users u);
	public List<Users> findAllUsers();
	public void deleteUsers(Users user);
}
