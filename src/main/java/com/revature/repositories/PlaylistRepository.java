package com.revature.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.revature.model.Playlist;

public interface PlaylistRepository extends JpaRepository<Playlist, Integer>{}
