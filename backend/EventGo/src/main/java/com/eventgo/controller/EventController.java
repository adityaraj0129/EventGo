package com.eventgo.controller;


@RestController
@RequiredArgsConstructor
public class EventController {


    private final EventService eventService;

    // PUBLIC: anyone can see events
    @GetMapping("/api/events")
    public ResponseEntity<List<Event>> getAllEvents() {
        return ResponseEntity.ok(eventService.getAllEvents());
    }

    // ADMIN: add event
    @PostMapping("/api/admin/events")
    public ResponseEntity<Event> createEvent(@RequestBody EventRequest request) {
        return ResponseEntity.ok(eventService.createEvent(request));
    }

    // ADMIN: update event
    @PutMapping("/api/admin/events/{id}")
    public ResponseEntity<Event> updateEvent(@PathVariable Long id,
                                             @RequestBody EventRequest request) {
        return ResponseEntity.ok(eventService.updateEvent(id, request));
    }

    // ADMIN: delete event
    @DeleteMapping("/api/admin/events/{id}")
    public ResponseEntity<Void> deleteEvent(@PathVariable Long id) {
        eventService.deleteEvent(id);
        return ResponseEntity.noContent().build();
    }
}
