package com.revature.services;

import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.revature.beans.Tags;
import com.revature.beans.Users;
import com.revature.beans.ViewSettings;
import com.revature.repositories.*;

@Service
@Transactional 
public class UserServiceImpl implements UserService{
	
	@Autowired
	UserRepository userRepo;
	
	@Autowired
	ViewSettingsRepository vsRepo;
	@Autowired
	ViewSettingsService vsService;

	@Override
	public Users addUser(Users newUser) {
		for(Users users: userRepo.findAll()) {
			if(users.getUsername().equals(newUser.getUsername())) {
				return null;
			}
		}
		
		return userRepo.save(newUser);
	}
	
	@Override
	public Users findUsersById(Integer id) {
//		System.out.println(id);
//		System.out.println(userRepo.getOne(id));
		return (Users) userRepo.getOne(id);
	}

//	@Override
//	public Users findUsersByUsername(String username) {
//		// TODO Auto-generated method stub
//		return userRepo.findUserByUsername(username);
//	}

//	@Override
//	public Users loginUsers(Users user) {
//		
//		return null;
//	}

	@Override
	public Users updateUsersById(Users u) {
		List<ViewSettings> myList = new ArrayList<ViewSettings>();
		for(ViewSettings vs: u.getUserViewSettings()) {
			if(!vsRepo.findViewSettingsById(vs.getId()).isEmpty()) {
				myList.add(vsService.updateViewSettings(vs));
			} else {
				myList.add(vsService.updateViewSettings(vs));
			}
		}
		u.setUserViewSettings(myList);
		return userRepo.save(u);
	}

	@Override
	public List<Users> findAllUsers() {
		List<Users> list = userRepo.findAll();
		return list;
	}

	@Override
	public void deleteUsers(Users usr) {
		userRepo.delete(usr);
	}

	@Override
	public Users loginUsers(Users user) {
		Users log = userRepo.findUsersByUsernameAndPassword(user.getUsername(), user.getPassword());
		return log;
	}

	@Override
	public List<ViewSettings> getUserViewSettings(Users user) {
		return user.getUserViewSettings();
	}

	

}
