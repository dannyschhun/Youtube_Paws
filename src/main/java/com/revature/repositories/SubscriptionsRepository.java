package com.revature.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.revature.beans.Subscriptions;

public interface SubscriptionsRepository extends JpaRepository<Subscriptions, Integer> {
	public List<Subscriptions> findSubscriptionsByName(String name);
	public List<Subscriptions> findSubscriptionByIdAndName(Integer id, String name);
}
