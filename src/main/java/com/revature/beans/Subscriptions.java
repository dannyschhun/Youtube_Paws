package com.revature.beans;

import java.io.Serializable;
import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.Table;

import org.springframework.stereotype.Component;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;


@Component
@Entity
@Table(name="Subscriptions")
@JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
public class Subscriptions implements Serializable{
	private static final long serialVersionUID = 1L;
	
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	@Column(name="SUBSCRIPTIONS_ID")
	private Integer id;
	
	@Column(name="SUBSCRIPTIONS_NAME")
	private String name;
	
	@ManyToMany(cascade=CascadeType.ALL, fetch=FetchType.EAGER)
	@JoinTable(
			name="SUB_CHANNELS",
			joinColumns=@JoinColumn(name="SUBSCRIPTIONS_ID"),
			inverseJoinColumns=@JoinColumn(name="CHANNEL_ID"))
	private Set<Channels> channels;
	
}
