package com.revature.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.revature.beans.ViewSettings;
import com.revature.repositories.ViewSettingsRepository;

@Service
@Transactional
public class ViewSettingsServiceImpl implements ViewSettingsService{
	
	@Autowired
	ViewSettingsRepository vsRepo;

	@Override
	public ViewSettings addViewSettings(ViewSettings vs) {
		return vsRepo.save(vs);
	}

	@Override
	public List<ViewSettings> getViewSettingsByName(ViewSettings vs) {
		return vsRepo.findViewSettingsByViewSettingsName(vs.getViewSettingsName());
	}

	@Override
	public ViewSettings updateViewSettings(ViewSettings vs) {
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
