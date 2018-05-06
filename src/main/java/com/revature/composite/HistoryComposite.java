package com.revature.composite;

import java.io.Serializable;


public class HistoryComposite implements Serializable{

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	private int historyId;
	private String videoLink;
	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + historyId;
		result = prime * result + ((videoLink == null) ? 0 : videoLink.hashCode());
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
		HistoryComposite other = (HistoryComposite) obj;
		if (historyId != other.historyId)
			return false;
		if (videoLink == null) {
			if (other.videoLink != null)
				return false;
		} else if (!videoLink.equals(other.videoLink))
			return false;
		return true;
	}
	
	
}
