package com.revature.services;

import java.util.*;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.revature.beans.Channels;
import com.revature.beans.Subscriptions;
import com.revature.repositories.*;

@Service
public class SubscriptionsServiceImpl implements SubscriptionsService {

	@Autowired
	SubscriptionsRepository subscriptionsRepo;
	
	@Autowired
	ChannelsRepository channelsRepo;
	
	@Override
	public Subscriptions addSubscriptions(Subscriptions subscriptions) {
		Set<Channels> channels = new HashSet<Channels>();
		for(Channels ch: subscriptions.getChannels()) {
			List<Channels> chList = channelsRepo.findChannelsByName(ch.getName());
			if(!chList.isEmpty()) {
				channels.add(chList.get(0));
			} else {
				channels.add(ch);
			}
		}
		subscriptions.setChannels(channels);
		return subscriptionsRepo.save(subscriptions);
	}

	@Override
	public Subscriptions deleteSubscriptions(Subscriptions subscriptions) {
		Subscriptions temp = subscriptionsRepo.getOne(subscriptions.getId());
		subscriptionsRepo.delete(subscriptions);
		temp = subscriptionsRepo.getOne(subscriptions.getId());
		return temp;
	}

	@Override
	public Subscriptions getSubscriptionById(Integer id) {
		return subscriptionsRepo.getOne(id);
	}

	@Override
	public List<Subscriptions> getSubscriptionsByName(Subscriptions subscriptions) {
		return subscriptionsRepo.findSubscriptionsByName(subscriptions.getName());
	}

	@Override
	public Subscriptions updateSubscriptions(Subscriptions subscriptions) {
		Set<Channels> channels = new HashSet<Channels>();
		for(Channels ch: subscriptions.getChannels()) {
			List<Channels> chList = channelsRepo.findChannelsByName(ch.getName());
			if(!chList.isEmpty()) {
				channels.add(chList.get(0));
			} else {
				channels.add(ch);
			}
		}
		subscriptions.setChannels(channels);
		return subscriptionsRepo.save(subscriptions);
	}
	

}
