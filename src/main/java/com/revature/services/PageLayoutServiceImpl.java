package com.revature.services;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.revature.beans.PageLayout;
import com.revature.repositories.PageLayoutRepository;

@Service
@Transactional
public class PageLayoutServiceImpl implements PageLayoutService{

	@Autowired
	PageLayoutRepository s0;
	
	@Override
	public List<PageLayout> getLayouts() {
		return s0.findAll();
	}

	@Override
	public PageLayout getLayoutById(int a0) {
		List<PageLayout> t0 = s0.findAll();
		List<PageLayout> v0 = new ArrayList<PageLayout>();
		
		for(PageLayout t1 : t0) {
			if( t1.getId() == a0) {
				v0.add(t1);
				break;
			}
		}
		
		if(v0.size() > 0) {
			return v0.get(0);
		} else {
			return null;
		}
		
	}

	@Override
	public PageLayout addLayout(PageLayout a0) {
		return s0.save(a0);
	}

	@Override
	public void deleteLayout(PageLayout a0) {
		s0.delete(a0);
	}

	@Override
	public PageLayout updateLayout(PageLayout a0) {
		return s0.save(a0);
	}

}
