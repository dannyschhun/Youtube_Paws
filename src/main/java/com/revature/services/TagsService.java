package com.revature.services;

import java.util.List;

import com.revature.beans.Tags;
 
public interface TagsService {
	public Tags getTagsById(Tags t);
	public List<Tags> getTagsByName(Tags t);
	public Tags addTag(Tags t);
	public Tags deleteTag(Tags t);
}
