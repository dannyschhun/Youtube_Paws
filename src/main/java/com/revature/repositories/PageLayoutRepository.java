package com.revature.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.revature.beans.PageLayout;

public interface PageLayoutRepository extends JpaRepository<PageLayout, String>{
	public List<PageLayout> findPageLayoutById(Integer id);
}
