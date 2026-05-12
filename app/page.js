'use client';

import { useState } from 'react';
import dynamic from 'next/dynamic';
import { itineraryData } from './data/itineraryData';
import { Map as MapIcon, CustomIcon, Navigation, ChevronDown } from 'lucide-react';

const DynamicMap = dynamic(() => import('./components/DynamicMap'), {
  ssr: false,
  loading: () => <div style={{ height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#e2e8f0' }}>Caricamento Mappa...</div>
});

// A component for the individual event card that handles expansion
function EventCard({ evt }) {
  const [isExpanded, setIsExpanded] = useState(true);

  return (
    <div className="event-card">
      <div
        className="event-card-header"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <div className="event-time-row">
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <span className="event-time">{evt.time}</span>
            {evt.optional && <span className="badge-optional">Opzionale</span>}
          </div>
          <ChevronDown size={20} className={`expand-icon ${isExpanded ? 'expanded' : ''}`} />
        </div>
        <h3 className="event-title">{evt.title}</h3>
      </div>

      {isExpanded && (
        <div className="event-expanded-content">
          {evt.image && (
            <div className="event-image-container">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={evt.image} alt={evt.title} className="event-image" />
            </div>
          )}
          <p className="event-desc">{evt.description}</p>

          {evt.optional && evt.optionalAlternative && (
            <div className="alternative-block">
              <p className="alternative-label">Alternativa consigliata</p>
              <strong className="alternative-title">{evt.optionalAlternative.title}</strong>
              <p className="alternative-desc">{evt.optionalAlternative.description}</p>
              <a
                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(evt.optionalAlternative.mapQuery)}`}
                target="_blank"
                rel="noreferrer"
                className="btn-gmaps"
              >
                <Navigation size={18} /> Apri in Navigatore
              </a>
            </div>
          )}

          {evt.foodOptions && evt.foodOptions.length > 0 && (
            <div className="food-options">
              <p className="food-options-label">Dove mangiare</p>
              {evt.foodOptions.map((opt, i) => (
                <div key={i} className="food-option-item">
                  <div className="food-option-info">
                    <strong>{opt.title}</strong>
                    <p>{opt.description}</p>
                  </div>
                  <a
                    href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(opt.mapQuery)}`}
                    target="_blank"
                    rel="noreferrer"
                    className="btn-gmaps-sm"
                  >
                    <Navigation size={16} />
                  </a>
                </div>
              ))}
            </div>
          )}

          <div className="event-actions">
            <a
              href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(evt.location.mapQuery || evt.title)}`}
              target="_blank"
              rel="noreferrer"
              className="btn-gmaps"
            >
              <Navigation size={18} /> Apri in Navigatore
            </a>
          </div>
        </div>
      )}
    </div>
  );
}

// A simple Icon for the list view since lucide List could be used, or MapPin
function ListClassicIcon(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <line x1="8" y1="6" x2="21" y2="6"></line>
      <line x1="8" y1="12" x2="21" y2="12"></line>
      <line x1="8" y1="18" x2="21" y2="18"></line>
      <line x1="3" y1="6" x2="3.01" y2="6"></line>
      <line x1="3" y1="12" x2="3.01" y2="12"></line>
      <line x1="3" y1="18" x2="3.01" y2="18"></line>
    </svg>
  );
}

export default function Home() {
  const [activeTab, setActiveTab] = useState('itinerary'); // 'itinerary' | 'map'
  const [activeDayIdx, setActiveDayIdx] = useState(0);
  const activeDay = itineraryData[activeDayIdx];

  return (
    <>
      <main style={{ paddingBottom: '80px' }}>
        <header className="app-header">
          <h1 className="app-title">Napoli Trip</h1>
          <p className="app-subtitle">14 - 17 Maggio • Powered by Fede</p>

          <div className="day-tabs">
            {itineraryData.map((day, idx) => (
              <button
                key={day.id}
                className={`day-tab ${idx === activeDayIdx ? 'active' : ''}`}
                onClick={() => setActiveDayIdx(idx)}
              >
                {day.shortDay}
              </button>
            ))}
          </div>
        </header>

        {activeTab === 'map' ? (
          <div className="map-fullscreen-container">
            <DynamicMap events={activeDay.events} />
          </div>
        ) : (
          <div className="timeline-container">
            <div className="timeline-header">
              <h2>{activeDay.day}</h2>
              <p style={{ color: 'var(--text-muted)' }}>{activeDay.title}</p>
            </div>

            <div className="timeline">
              {activeDay.events
                .filter(evt => evt.time !== '')
                .map((evt, idx) => (
                <div key={evt.id} className="timeline-event">
                  <span className={`event-dot tag-${evt.type}`}>{idx + 1}</span>
                  <EventCard evt={evt} />
                </div>
              ))}
            </div>
          </div>
        )}
      </main>

      <nav className="bottom-nav">
        <button
          className={`nav-item ${activeTab === 'itinerary' ? 'active' : ''}`}
          onClick={() => setActiveTab('itinerary')}
        >
          <ListClassicIcon />
          <span>Itinerario</span>
        </button>
        <button
          className={`nav-item ${activeTab === 'map' ? 'active' : ''}`}
          onClick={() => setActiveTab('map')}
        >
          <MapIcon />
          <span>Mappa</span>
        </button>
      </nav>
    </>
  );
}
