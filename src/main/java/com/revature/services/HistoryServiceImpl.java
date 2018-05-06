package com.revature.services;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.revature.beans.History;
import com.revature.repositories.HistoryRepository;

@Service
@Transactional
public class HistoryServiceImpl implements HistoryService{
	
	@Autowired
	HistoryRepository historyRepo;

	@Override
	public History addHistory(History a0) {
		return historyRepo.save(a0);
	}

	@Override
	public List<History> findByHistoryId(Integer a0) {
		List<History> allHistoryVids= historyRepo.findAll();
		List<History> thisHistoryVids = new ArrayList<History>();
		
		for(History h : allHistoryVids) {
			if(h.getHistoryId() == a0) {
				thisHistoryVids.add(h);
			}
		}
		return thisHistoryVids;
	}

	@Override
	public void deleteHistory(History a0) {
		historyRepo.delete(a0);
	}

}
