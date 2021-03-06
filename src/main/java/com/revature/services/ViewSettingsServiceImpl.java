package com.revature.services;

import java.util.HashSet;
import java.util.List;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.revature.beans.Category;
import com.revature.beans.Tags;
import com.revature.beans.ViewSettings;
import com.revature.repositories.TagsRepository;
import com.revature.repositories.ViewSettingsRepository;

@Service
@Transactional
public class ViewSettingsServiceImpl implements ViewSettingsService{
	
	@Autowired
	ViewSettingsRepository vsRepo;
	
	@Autowired
	TagsRepository tRepo;

	@Override
	public ViewSettings addViewSettings(ViewSettings vs) {
		/*Set<Tags> s = new HashSet<Tags>();
		for(Tags t: vs.getSettingTags()) {
			List<Tags> tags = tRepo.findTagsByName(t.getName());
			if(!tags.isEmpty()) {
				s.add(tags.get(0));
			} else {
				s.add(t);
			}
		}
		Set<Tags> s2 = new HashSet<Tags>();
		for(Tags t: vs.getExcludeTags()) {
			List<Tags> tags = tRepo.findTagsByName(t.getName());
			if(!tags.isEmpty()) {
				s2.add(tags.get(0));
			} else {
				s2.add(t);
			}
		}
		Set<Category> s3 = new HashSet<Category>();
		for(Tags t: vs.getExcludeTags()) {
			List<Tags> tags = tRepo.findTagsByName(t.getName());
			if(!tags.isEmpty()) {
				s2.add(tags.get(0));
			} else {
				return null; //incorrect category name
			}
		}
		vs.setCategories(s3);
		vs.setExcludeTags(s2);
		vs.setSettingTags(s); */
		return vsRepo.save(vs);
	}

	@Override
	public List<ViewSettings> getViewSettingsByName(ViewSettings vs) {
		return vsRepo.findViewSettingsByViewSettingsName(vs.getViewSettingsName());
	}

	@Override
	public ViewSettings updateViewSettings(ViewSettings vs) {
		/*Set<Tags> s = new HashSet<Tags>();
		for(Tags t: vs.getSettingTags()) {
			List<Tags> tags = tRepo.findTagsByName(t.getName());
			if(!tags.isEmpty()) {
				s.add(tags.get(0));
			} else {
				s.add(t);
			}
		}
		Set<Tags> s2 = new HashSet<Tags>();
		for(Tags t: vs.getExcludeTags()) {
			List<Tags> tags = tRepo.findTagsByName(t.getName());
			if(!tags.isEmpty()) {
				s2.add(tags.get(0));
			} else {
				s2.add(t);
			}
		}
		Set<Category> s3 = new HashSet<Category>();
		for(Tags t: vs.getExcludeTags()) {
			List<Tags> tags = tRepo.findTagsByName(t.getName());
			if(!tags.isEmpty()) {
				s2.add(tags.get(0));
			} else {
				return null; //incorrect category name
			}
		}
		vs.setCategories(s3);
		vs.setExcludeTags(s2);
		vs.setSettingTags(s);*/
		return vsRepo.save(vs);
	}

	@Override
	public ViewSettings getViewSettingsById(Integer id) {
		return vsRepo.getOne(id);
	}

	@Override
	public ViewSettings deleteViewSettingsById(ViewSettings vs) {
		ViewSettings temp = vsRepo.getOne(vs.getId());
		vsRepo.delete(vs);
		temp = vsRepo.getOne(vs.getId());
		return temp;
	}
	
}
