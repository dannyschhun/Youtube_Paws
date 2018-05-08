package com.revature.services;

import java.util.*;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.revature.beans.*;
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
	@Autowired
	PageLayoutService plService;
	@Autowired
	PageLayoutRepository plRepo;

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


	@Override
	public Users updateUsersById(Users u) {
//		List<ViewSettings> myList = new ArrayList<ViewSettings>();
//		
//		System.out.println(u.getUserViewSettings().size());
//		if(u.getUserViewSettings()==null || 
//				!u.getUserViewSettings().isEmpty()) {
//		for(ViewSettings vs: u.getUserViewSettings()) {
//			List<ViewSettings> vsTemp = vsRepo.findViewSettingsById(vs.getId());
//			if(!vsTemp.isEmpty()) {
//				myList.add(vsService.updateViewSettings(vs));
//			} else {
//				myList.add(vsService.updateViewSettings(vs));
//			}
//			u.setUserViewSettings(myList);
//		}
//		}
//		if(u.getUserPageLayout()!=null||!u.getUserPageLayout().isEmpty()) {
//		List<PageLayout> myLayouts = new ArrayList<PageLayout>();
//		for(PageLayout pL: u.getUserPageLayout()) {
//			myLayouts.add(plService.updateLayout(pL));	
//		}
//		u.setUserPageLayout(myLayouts);	
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
		Users log = userRepo.findUsersByUsernameAndPassword(user.getUsername(), user.getPassword());
		return log;
	}

	@Override
	public List<ViewSettings> getUserViewSettings(Users user) {
		return user.getUserViewSettings();
	}

	

}
