package com.revature.services;

import java.util.List;

import com.revature.beans.ViewSettings;

public interface ViewSettingsService {
	public ViewSettings addViewSettings(ViewSettings vs);
	public List<ViewSettings> getViewSettingsByName(ViewSettings vs);
	public ViewSettings updateViewSettings(ViewSettings vs);
	public ViewSettings getViewSettingsById(Integer id);
	public ViewSettings deleteViewSettingsById(ViewSettings vs);
}
