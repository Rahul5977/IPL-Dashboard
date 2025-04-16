import { useState, useRef, useEffect } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin, { DateSelectArg, EventClickArg } from "@fullcalendar/interaction";
import PageMeta from "../components/common/PageMeta";

interface CalendarEvent {
  id: string;
  title: string;
  start: string;
  venue: string;
  matchType: string;
}

// Define match types
const MATCH_TYPES = {
  Primary: "Primary Match",
  Qualifier: "Qualifier Match",
  Playoff: "Playoff Match",
  Final: "Final Match"
} as const;

// Define initial events
const INITIAL_EVENTS: CalendarEvent[] = [
  {
    id: "1",
    title: "CSK vs MI",
    start: "2024-03-24T19:30:00",
    venue: "MA Chidambaram Stadium, Chennai",
    matchType: "Primary"
  },
  {
    id: "2",
    title: "RCB vs KKR",
    start: "2024-03-25T19:30:00",
    venue: "M.Chinnaswamy Stadium, Bangalore",
    matchType: "Primary"
  },
  {
    id: "3",
    title: "DC vs PBKS",
    start: "2024-03-26T19:30:00",
    venue: "Arun Jaitley Stadium, Delhi",
    matchType: "Primary"
  }
];

const Calendar: React.FC = () => {
  const [events, setEvents] = useState<CalendarEvent[]>([]);
  const [selectedEvent, setSelectedEvent] = useState<CalendarEvent | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    title: "",
    startDate: "",
    venue: "",
    matchType: "Primary"
  });

  const calendarRef = useRef<FullCalendar>(null);

  useEffect(() => {
    setEvents(INITIAL_EVENTS);
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleDateSelect = (selectInfo: DateSelectArg) => {
    resetForm();
    setFormData(prev => ({
      ...prev,
      startDate: selectInfo.startStr
    }));
    setIsModalOpen(true);
  };

  const handleEventClick = (clickInfo: EventClickArg) => {
    const event = clickInfo.event;
    setSelectedEvent(event as unknown as CalendarEvent);
    setFormData({
      title: event.title,
      startDate: event.start?.toISOString().slice(0, 16) || "",
      venue: event.extendedProps.venue,
      matchType: event.extendedProps.calendar
    });
    setIsModalOpen(true);
  };

  const handleSubmit = () => {
    const teams = formData.title.split(" vs ");
    const newEvent: CalendarEvent = {
      id: selectedEvent?.id || Date.now().toString(),
      title: formData.title,
      start: formData.startDate,
      venue: formData.venue,
      matchType: formData.matchType
    };

    setEvents(prev => 
      selectedEvent
        ? prev.map(event => event.id === selectedEvent.id ? newEvent : event)
        : [...prev, newEvent]
    );

    setIsModalOpen(false);
    resetForm();
  };

  const resetForm = () => {
    setFormData({
      title: "",
      startDate: "",
      venue: "",
      matchType: "Primary"
    });
    setSelectedEvent(null);
  };

  return (
    <>
      <PageMeta
        title="IPL 2024 Match Schedule | Match Calendar"
        description="View complete IPL 2024 match schedule with dates, times and venues"
      />
      <div className="rounded-2xl border border-gray-200 bg-white dark:border-gray-800 dark:bg-white/[0.03]">
        <div className="custom-calendar">
          <FullCalendar
            ref={calendarRef}
            plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
            initialView="dayGridMonth"
            headerToolbar={{
              left: "prev,next addEventButton",
              center: "title",
              right: "dayGridMonth,timeGridWeek,timeGridDay",
            }}
            events={events}
            selectable={true}
            select={handleDateSelect}
            eventClick={handleEventClick}
            eventContent={renderEventContent}
            customButtons={{
              addEventButton: {
                text: "Add Match",
                click: () => setIsModalOpen(true),
              },
            }}
          />
        </div>

        {/* Custom Modal Implementation */}
        {isModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
            <div className="max-w-[700px] rounded-lg bg-white p-6 dark:bg-gray-800 lg:p-10">
              <div className="flex flex-col px-2 overflow-y-auto custom-scrollbar">
                <div>
                  <h5 className="mb-2 font-semibold text-gray-800 modal-title text-theme-xl dark:text-white/90 lg:text-2xl">
                    {selectedEvent ? "Edit Match Details" : "Add New Match"}
                  </h5>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {selectedEvent ? "Update match information" : "Schedule a new match"}
                  </p>
                </div>
                <form onSubmit={(e) => { e.preventDefault(); handleSubmit(); }} className="mt-8 space-y-6">
                  <div>
                    <label className="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-400">
                      Match Title (e.g., CSK vs MI)
                    </label>
                    <input
                      type="text"
                      name="title"
                      value={formData.title}
                      onChange={handleInputChange}
                      className="dark:bg-dark-900 h-11 w-full rounded-lg border border-gray-300 bg-transparent px-4 py-2.5 text-sm text-gray-800 dark:text-white/90"
                      required
                    />
                  </div>

                  <div>
                    <label className="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-400">
                      Venue
                    </label>
                    <input
                      type="text"
                      name="venue"
                      value={formData.venue}
                      onChange={handleInputChange}
                      className="dark:bg-dark-900 h-11 w-full rounded-lg border border-gray-300 bg-transparent px-4 py-2.5 text-sm text-gray-800 dark:text-white/90"
                      required
                    />
                  </div>

                  <div>
                    <label className="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-400">
                      Match Type
                    </label>
                    <select
                      name="matchType"
                      value={formData.matchType}
                      onChange={handleInputChange}
                      className="dark:bg-dark-900 h-11 w-full rounded-lg border border-gray-300 bg-transparent px-4 py-2.5 text-sm text-gray-800 dark:text-white/90"
                    >
                      {Object.entries(MATCH_TYPES).map(([value, label]) => (
                        <option key={value} value={value}>{label}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-400">
                      Match Date & Time
                    </label>
                    <input
                      type="datetime-local"
                      name="startDate"
                      value={formData.startDate}
                      onChange={handleInputChange}
                      className="dark:bg-dark-900 h-11 w-full rounded-lg border border-gray-300 bg-transparent px-4 py-2.5 text-sm text-gray-800 dark:text-white/90"
                      required
                    />
                  </div>

                  <div className="flex items-center gap-3 pt-4 sm:justify-end">
                    <button
                      type="button"
                      onClick={() => setIsModalOpen(false)}
                      className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700"
                    >
                      {selectedEvent ? "Update Match" : "Add Match"}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

const renderEventContent = (eventInfo: any) => {
  const colorClass = `fc-bg-${eventInfo.event.extendedProps.calendar.toLowerCase()}`;
  return (
    <div className={`event-fc-color flex fc-event-main ${colorClass} p-2 rounded-lg`}>
      <div className="flex flex-col w-full">
        <div className="flex items-center justify-between">
          <div className="font-medium">{eventInfo.event.title}</div>
          <div className="text-xs">{eventInfo.timeText}</div>
        </div>
        <div className="text-xs mt-1">{eventInfo.event.extendedProps.venue}</div>
      </div>
    </div>
  );
};

export default Calendar;
