package com.revature.services;

import java.util.List;

import com.revature.beans.Subscriptions;

public interface SubscriptionsService {
	public Subscriptions addSubscriptions(Subscriptions subscriptions);
	public Subscriptions deleteSubscriptions(Subscriptions subscriptions);
	public Subscriptions getSubscriptionById(Integer id);
	public List<Subscriptions> getSubscriptionsByName(Subscriptions subscriptions);
	public Subscriptions updateSubscriptions(Subscriptions subscription);
	
}
