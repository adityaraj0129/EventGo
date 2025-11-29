package com.eventgo.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.eventgo.entity.Event;

public interface EventRepository  extends JpaRepository<Event, Long>{

}
