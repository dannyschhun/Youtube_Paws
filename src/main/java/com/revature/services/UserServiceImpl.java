package com.revature.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.revature.beans.Users;
import com.revature.repositories.UserRepository;

@Service
@Transactional 
public class UserServiceImpl implements UserService{
	
	@Autowired
	UserRepository userRepo;

	@Override
	public Users addUser(Users newUser) {
		// TODO Auto-generated method stub
		for(Users users: userRepo.findAll()) {
			if(users.getUsername().equals(newUser.getUsername())) {
				return null;
			}
		}
		
		return userRepo.save(newUser);
	}

//	@Override
//	public User findUserByUsername(String username) {
//		// TODO Auto-generated method stub
//		return userRepo.findUserByUsername(username);
//	}
//
//	@Override
//	public User loginUser(String username, String password) {
//		// TODO Auto-generated method stub
//		return userRepo.findUserByUsernameAndPassword(username, password);
//	}
//
//	@Override
//	public User updateUserById(User u) {
//		// TODO Auto-generated method stub
//		User temp = userRepo.updateUserById(u.getId(), u);
//		if(temp != null) {
//			return temp;
//		} else {
//			return null;
//		}
//	}
//
//	@Override
//	public User findUserById(Integer id) {
//		// TODO Auto-generated method stub
//		return userRepo.getOne(id);
//	}

}
