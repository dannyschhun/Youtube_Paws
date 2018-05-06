package com.revature.services;

import java.util.List;

import com.revature.model.History;

public interface HistoryService {
	public History addHistory(History a0);
	public List<History> findByHistoryId(Integer a0);
	public void deleteHistory(History a0);
}
