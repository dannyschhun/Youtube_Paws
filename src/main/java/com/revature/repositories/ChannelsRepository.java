package com.revature.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.revature.beans.Channels;

public interface ChannelsRepository extends JpaRepository<Channels, Integer> {
	public List<Channels> findChannelsByName(String name);
}
