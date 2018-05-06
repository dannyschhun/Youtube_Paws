package com.revature.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.revature.beans.Playlist;

public interface PlaylistRepository extends JpaRepository<Playlist, Integer>{}
