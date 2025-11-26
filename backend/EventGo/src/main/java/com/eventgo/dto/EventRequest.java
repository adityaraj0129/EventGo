package com.eventgo.dto;

import java.time.LocalDateTime;

import lombok.Data;

@Data
public class EventRequest {

	    private String title;
	    private String description;
	    private String country;
	    private String city;
	    private String organizerName;
	    private Double price;
	    private String imageUrl;
	    private LocalDateTime eventDate;
}
