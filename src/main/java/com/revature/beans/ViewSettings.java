package com.revature.beans;

import java.io.Serializable;
import java.util.Set;

import javax.persistence.*;
import javax.validation.constraints.NotNull;

import org.springframework.stereotype.Component;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@Component
@Entity
@Table(name = "View_Settings")
@JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
public class ViewSettings implements Serializable{ 
	private static final long serialVersionUID = 1L;
	
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	@Column(name="VIEW_SETTINGS_ID")
	private Integer id;
	
	@Column(name="VIEW_SETTINGS_NAME")
	@NotNull
	private String viewSettingsName;
	@Column(name="VIEW_SETTINGS_LENGTH_MIN")
	private Double lengthMin;
	@Column(name="VIEW_SETTINGS_LENGTH_MAX")
	private Double lengthMax;
	@Column(name="VIEW_SETTINGS_SUB_COUNT_MIN")
	private Long subscriberCountMin;
	@Column(name="VIEW_SETTINGS_SUB_COUNT_MAX")
	private Long subscriberCountMax;
	@Column(name="VIEW_SETTINGS_UPTIME_MIN")
	private String uploadTimeMin;
	@Column(name="VIEW_SETTINGS_UPTIME_MAX")
	private String uploadTimeMax;
	@Column(name="VIEW_SETTINGS_RATING_MIN")
	private Double ratingMin;
	@Column(name="VIEW_SETTINGS_RATING_MAX")
	private Double ratinMax;
	
	@ManyToMany(cascade=CascadeType.ALL, fetch=FetchType.EAGER)
	@JoinTable(
			name="VS_TAGS",
			joinColumns=@JoinColumn(name="View_Settings_ID"),
			inverseJoinColumns=@JoinColumn(name="TAG_ID"))
	private Set<Tags> settingTags; 
	
	@ManyToMany(cascade=CascadeType.ALL, fetch=FetchType.EAGER)
	@JoinTable(
			name="EX_TAGS",
			joinColumns=@JoinColumn(name="View_Settings_ID"),
			inverseJoinColumns=@JoinColumn(name="TAG_ID"))
	private Set<Tags> excludeTags; 

	
	
	public ViewSettings() {
	}



	public Integer getId() {
		return id;
	}


	public void setId(Integer id) {
		this.id = id;
	}



	public String getViewSettingsName() {
		return viewSettingsName;
	}



	public void setViewSettingsName(String viewSettingsName) {
		this.viewSettingsName = viewSettingsName;
	}



	public Double getLengthMin() {
		return lengthMin;
	}



	public void setLengthMin(Double lengthMin) {
		this.lengthMin = lengthMin;
	}



	public Double getLengthMax() {
		return lengthMax;
	}



	public void setLengthMax(Double lengthMax) {
		this.lengthMax = lengthMax;
	}



	public Long getSubscriberCountMin() {
		return subscriberCountMin;
	}



	public void setSubscriberCountMin(Long subscriberCountMin) {
		this.subscriberCountMin = subscriberCountMin;
	}



	public Long getSubscriberCountMax() {
		return subscriberCountMax;
	}



	public void setSubscriberCountMax(Long subscriberCountMax) {
		this.subscriberCountMax = subscriberCountMax;
	}



	public String getUploadTimeMin() {
		return uploadTimeMin;
	}



	public void setUploadTimeMin(String uploadTimeMin) {
		this.uploadTimeMin = uploadTimeMin;
	}



	public String getUploadTimeMax() {
		return uploadTimeMax;
	}



	public void setUploadTimeMax(String uploadTimeMax) {
		this.uploadTimeMax = uploadTimeMax;
	}



	public Double getRatingMin() {
		return ratingMin;
	}



	public void setRatingMin(Double ratingMin) {
		this.ratingMin = ratingMin;
	}



	public Double getRatinMax() {
		return ratinMax;
	}



	public void setRatinMax(Double ratinMax) {
		this.ratinMax = ratinMax;
	}



	public Set<Tags> getSettingTags() {
		return settingTags;
	}



	public void setSettingTags(Set<Tags> settingTags) {
		this.settingTags = settingTags;
	}



	public Set<Tags> getExcludeTags() {
		return excludeTags;
	}



	public void setExcludeTags(Set<Tags> excludeTags) {
		this.excludeTags = excludeTags;
	}



	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + ((excludeTags == null) ? 0 : excludeTags.hashCode());
		result = prime * result + ((id == null) ? 0 : id.hashCode());
		result = prime * result + ((lengthMax == null) ? 0 : lengthMax.hashCode());
		result = prime * result + ((lengthMin == null) ? 0 : lengthMin.hashCode());
		result = prime * result + ((ratinMax == null) ? 0 : ratinMax.hashCode());
		result = prime * result + ((ratingMin == null) ? 0 : ratingMin.hashCode());
		result = prime * result + ((settingTags == null) ? 0 : settingTags.hashCode());
		result = prime * result + ((subscriberCountMax == null) ? 0 : subscriberCountMax.hashCode());
		result = prime * result + ((subscriberCountMin == null) ? 0 : subscriberCountMin.hashCode());
		result = prime * result + ((uploadTimeMax == null) ? 0 : uploadTimeMax.hashCode());
		result = prime * result + ((uploadTimeMin == null) ? 0 : uploadTimeMin.hashCode());
		result = prime * result + ((viewSettingsName == null) ? 0 : viewSettingsName.hashCode());
		return result;
	}



	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		ViewSettings other = (ViewSettings) obj;
		if (excludeTags == null) {
			if (other.excludeTags != null)
				return false;
		} else if (!excludeTags.equals(other.excludeTags))
			return false;
		if (id == null) {
			if (other.id != null)
				return false;
		} else if (!id.equals(other.id))
			return false;
		if (lengthMax == null) {
			if (other.lengthMax != null)
				return false;
		} else if (!lengthMax.equals(other.lengthMax))
			return false;
		if (lengthMin == null) {
			if (other.lengthMin != null)
				return false;
		} else if (!lengthMin.equals(other.lengthMin))
			return false;
		if (ratinMax == null) {
			if (other.ratinMax != null)
				return false;
		} else if (!ratinMax.equals(other.ratinMax))
			return false;
		if (ratingMin == null) {
			if (other.ratingMin != null)
				return false;
		} else if (!ratingMin.equals(other.ratingMin))
			return false;
		if (settingTags == null) {
			if (other.settingTags != null)
				return false;
		} else if (!settingTags.equals(other.settingTags))
			return false;
		if (subscriberCountMax == null) {
			if (other.subscriberCountMax != null)
				return false;
		} else if (!subscriberCountMax.equals(other.subscriberCountMax))
			return false;
		if (subscriberCountMin == null) {
			if (other.subscriberCountMin != null)
				return false;
		} else if (!subscriberCountMin.equals(other.subscriberCountMin))
			return false;
		if (uploadTimeMax == null) {
			if (other.uploadTimeMax != null)
				return false;
		} else if (!uploadTimeMax.equals(other.uploadTimeMax))
			return false;
		if (uploadTimeMin == null) {
			if (other.uploadTimeMin != null)
				return false;
		} else if (!uploadTimeMin.equals(other.uploadTimeMin))
			return false;
		if (viewSettingsName == null) {
			if (other.viewSettingsName != null)
				return false;
		} else if (!viewSettingsName.equals(other.viewSettingsName))
			return false;
		return true;
	}



	@Override
	public String toString() {
		return "ViewSettings [id=" + id + ", viewSettingsName=" + viewSettingsName + ", lengthMin=" + lengthMin
				+ ", lengthMax=" + lengthMax + ", subscriberCountMin=" + subscriberCountMin + ", subscriberCountMax="
				+ subscriberCountMax + ", uploadTimeMin=" + uploadTimeMin + ", uploadTimeMax=" + uploadTimeMax
				+ ", ratingMin=" + ratingMin + ", ratinMax=" + ratinMax + ", settingTags=" + settingTags
				+ ", excludeTags=" + excludeTags + "]";
	}

	

	
	
	
	
	
	
}
