import axios from "axios";
import React, { useEffect, useState } from "react";
import PopupBox from "./PopupBox";

const EventCard = ({ search, EventType }) => {
  const [Events, setEvents] = useState([]);
  const [openCard, setOpenCard] = useState(null);

  const fetchEvents = async () => {
    try {
      const res = await axios.get(
        "https://openlibrary.org/search.json?title=harry+potter"
      );

      const EventWithExtras = res.data.docs.slice(0, 15).map((book) => ({
        id: book.key,
        title: book.title,
        organiser: book.author_name ? book.author_name[0] : "Unknown",
        image: book.cover_i
          ? `https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`
          : "https://via.placeholder.com/150",
        price: (Math.random() * 500 + 100).toFixed(0),
        rating: (Math.random() * 2 + 3).toFixed(1),
        startDate: "2025-02-10",
        endDate: "2025-02-20",
      }));

      setEvents(EventWithExtras);
    } catch (error) {
      console.error("Error fetching events", error);
    }
  };

  useEffect(() => {
    fetchEvents();
  }, []);

  const filteredEvent = Events.filter((Event) => {
    const s = (search || "").toLowerCase();

    const matchesSearch =
      Event.title.toLowerCase().includes(s) ||
      Event.organiser.toLowerCase().includes(s);

    const now = new Date();
    const start = new Date(Event.startDate);
    const end = new Date(Event.endDate);

    let matchesEventType = true;

    if (EventType === "Upcoming") matchesEventType = start > now;
    if (EventType === "Current") matchesEventType = start <= now && end >= now;
    if (EventType === "Past") matchesEventType = end < now;

    return matchesSearch && matchesEventType;
  });

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-10 ml-10">
        {filteredEvent.map((Event) => (
          <div key={Event.id} className="hover:shadow-lg p-4 border rounded">
            <img
              src={Event.image}
              className="w-full h-64 object-cover rounded"
              alt=""
            />

            <h3 className="mt-3 text-xl font-bold">{Event.title}</h3>
            <p>{Event.organiser}</p>

            <button
              onClick={() => setOpenCard(Event)}
              className="mt-3 bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700"
            >
              Read More
            </button>
          </div>
        ))}
      </div>

      {/* Popup */}
      {openCard && (
        <PopupBox event={openCard} onClose={() => setOpenCard(null)} />
      )}
    </>
  );
};

export default EventCard;
