package com.revature.services;

import java.util.List;

import com.revature.model.PageLayout;

public interface PageLayoutService {
	public List<PageLayout> getLayouts();
	public PageLayout getLayoutById(int a0);
	public PageLayout addLayout(PageLayout a0);
	public void deleteLayout(PageLayout a0);
	public PageLayout updateLayout(PageLayout a0);
}
