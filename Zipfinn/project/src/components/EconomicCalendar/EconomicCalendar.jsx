import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import "./EconomicCalendar.css";

const events = [
  {
    country: "RU",
    time: "16:00",
    title: "Summary of the Key Rate Discussion",
    actual: "—",
    forecast: "—",
    prior: "—",
  },
  {
    country: "BR",
    time: "16:30",
    title: "FGV Consumer Confidence",
    actual: "—",
    forecast: "—",
    prior: "86.2",
  },
  {
    country: "US",
    time: "16:30",
    title: "MBA 30-Year Mortgage Rate",
    actual: "—",
    forecast: "—",
    prior: "6.39%",
  },
  {
    country: "US",
    time: "16:30",
    title: "MBA Mortgage Applications",
    actual: "—",
    forecast: "—",
    prior: "29.7%",
  },
  {
    country: "US",
    time: "16:30",
    title: "MBA Mortgage Market Index",
    actual: "—",
    forecast: "—",
    prior: "386.1",
  },
];

export default function EconomicCalendar() {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: direction === "left" ? -300 : 300,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="economic-calendar">
      {/* Header */}
      <div className="calendar-header">
        <h3 className="calendar-title">
          Economic Calendar
          <ChevronRight size={16} />
        </h3>
      </div>

      {/* Filmstrip */}
      <div className="filmstrip-container">
        {/* Left Button */}
        <button
          onClick={() => scroll("left")}
          className="nav-button left"
          aria-label="Scroll left"
        >
          <ChevronLeft size={18} />
        </button>

        {/* Scrollable container */}
        <div
          ref={scrollRef}
          className="events-container"
        >
          {events.map((event, i) => (
            <div
              key={i}
              className="event-card"
            >
              <div className="event-time">
                Today • {event.time}
              </div>
              <div className="event-header">
                <img
                  src={`https://s3-symbol-logo.tradingview.com/country/${event.country}.svg`}
                  alt={event.country}
                  className="country-flag"
                />
                <h4 className="event-title">{event.title}</h4>
              </div>
              <div className="stats-grid">
                <div className="stat-item">
                  <p className="stat-label">Actual</p>
                  <p className="stat-value actual">{event.actual}</p>
                </div>
                <div className="stat-item">
                  <p className="stat-label">Forecast</p>
                  <p className="stat-value forecast">{event.forecast}</p>
                </div>
                <div className="stat-item">
                  <p className="stat-label">Prior</p>
                  <p className="stat-value prior">{event.prior}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Right Button */}
        <button
          onClick={() => scroll("right")}
          className="nav-button right"
          aria-label="Scroll right"
        >
          <ChevronRight size={18} />
        </button>
      </div>

      {/* Bottom Link - Container के नीचे */}
      <div className="bottom-link-container">
        <a
          href="/economic-calendar"
          className="bottom-link"
        >
          See all market events →
        </a>
      </div>
    </section>
  );
}