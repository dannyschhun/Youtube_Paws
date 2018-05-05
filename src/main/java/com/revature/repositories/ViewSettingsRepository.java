package com.revature.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.revature.beans.ViewSettings;


@Repository
public interface ViewSettingsRepository extends JpaRepository<ViewSettings, Integer>{
	public List<ViewSettings> findViewSettingsByViewSettingsName(String name);
	public List<ViewSettings> findViewSettingsById(Integer id);
}
