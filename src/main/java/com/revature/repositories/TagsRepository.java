package com.revature.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.revature.beans.Tags;

@Repository
public interface TagsRepository extends JpaRepository<Tags, Integer>{
	public List<Tags> findTagsByName(String name);
}
