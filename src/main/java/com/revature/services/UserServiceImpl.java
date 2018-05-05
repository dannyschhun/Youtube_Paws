package com.revature.services;

import java.util.List;

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
//		Integer n = userRepo.updateUsersById(u.getId(), u);
//		if(n != 0) {
//			return userRepo.getOne(u.getId());
//		} else {
//			return null;
//		}
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
		// TODO Auto-generated method stub
		Users log = userRepo.findUsersByUsernameAndPassword(user.getUsername(), user.getPassword());
		return log;
	}

	

}
