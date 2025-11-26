package com.eventgo.service.imple;

import java.util.List;

import org.springframework.stereotype.Service;

import com.eventgo.dto.EventRequest;
import com.eventgo.entity.Event;
import com.eventgo.repository.EventRepository;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class EventService {

	 private final EventRepository eventRepository;

	    public Event createEvent(EventRequest request) {
	        Event event = Event.builder()
	                .title(request.getTitle())
	                .description(request.getDescription())
	                .country(request.getCountry())
	                .city(request.getCity())
	                .organizerName(request.getOrganizerName())
	                .price(request.getPrice())
	                .imageUrl(request.getImageUrl())
	                .eventDate(request.getEventDate())
	                .build();

	        return eventRepository.save(event);
	    }

	    public List<Event> getAllEvents() {
	        return eventRepository.findAll();
	    }

	    public Event updateEvent(Long id, EventRequest request) {
	        Event event = eventRepository.findById(id)
	                .orElseThrow(() -> new RuntimeException("Event not found"));

	        event.setTitle(request.getTitle());
	        event.setDescription(request.getDescription());
	        event.setCountry(request.getCountry());
	        event.setCity(request.getCity());
	        event.setOrganizerName(request.getOrganizerName());
	        event.setPrice(request.getPrice());
	        event.setImageUrl(request.getImageUrl());
	        event.setEventDate(request.getEventDate());

	        return eventRepository.save(event);
	    }

	    public void deleteEvent(Long id) {
	        eventRepository.deleteById(id);
	    }
}
