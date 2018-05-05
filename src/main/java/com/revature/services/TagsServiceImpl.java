package com.revature.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.revature.beans.Tags;
import com.revature.repositories.TagsRepository;

@Service
@Transactional
public class TagsServiceImpl implements TagsService{

	@Autowired
	TagsRepository tRepo;
	
	@Override
	public Tags getTagsById(Tags t) {
		return tRepo.getOne(t.getId());
	}

	@Override
	public List<Tags> getTagsByName(Tags t) {
		return tRepo.findTagsByName(t.getName());
	}

	@Override
	public Tags addTag(Tags t) {
		for(Tags temp: tRepo.findAll()) {
			if (temp.getName().equals(t.getName())){
				return null;
			}
		}
		return tRepo.save(t);
	}

	@Override
	public Tags deleteTag(Tags t) {
		Tags temp = tRepo.getOne(t.getId());
		tRepo.delete(temp);
		return tRepo.getOne(temp.getId());
	}

}
