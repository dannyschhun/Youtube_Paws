package com.revature.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.revature.beans.History;

@Repository
public interface HistoryRepository extends JpaRepository<History, Integer>{}
