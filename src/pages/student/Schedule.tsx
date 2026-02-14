import { useState } from "react";
import StudentLayout from "@/components/layouts/StudentLayout";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Calendar } from "@/components/ui/calendar";
import { Badge } from "@/components/ui/badge";
import { 
  Briefcase, 
  Users, 
  MessageSquare, 
  FileText, 
  Clock,
  MapPin,
  ChevronLeft
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { format, isSameDay } from "date-fns";

type EventType = "interview" | "gd" | "aptitude" | "ppt";

interface ScheduleEvent {
  id: string;
  title: string;
  company: string;
  type: EventType;
  date: Date;
  time: string;
  location: string;
  status: "upcoming" | "completed" | "today";
}

const eventTypeConfig: Record<EventType, { label: string; icon: typeof Briefcase; colorClass: string; bgClass: string; dotClass: string }> = {
  interview: { 
    label: "Interview", 
    icon: MessageSquare, 
    colorClass: "text-primary", 
    bgClass: "bg-primary/15 border-primary/30 text-primary",
    dotClass: "bg-primary"
  },
  gd: { 
    label: "Group Discussion", 
    icon: Users, 
    colorClass: "text-accent", 
    bgClass: "bg-accent/15 border-accent/30 text-accent",
    dotClass: "bg-accent"
  },
  aptitude: { 
    label: "Aptitude Test", 
    icon: FileText, 
    colorClass: "text-[hsl(200_80%_50%)]", 
    bgClass: "bg-[hsl(200_80%_50%)]/15 border-[hsl(200_80%_50%)]/30 text-[hsl(200_80%_50%)]",
    dotClass: "bg-[hsl(200_80%_50%)]"
  },
  ppt: { 
    label: "Pre-Placement Talk", 
    icon: Briefcase, 
    colorClass: "text-[hsl(40_90%_55%)]", 
    bgClass: "bg-[hsl(40_90%_55%)]/15 border-[hsl(40_90%_55%)]/30 text-[hsl(40_90%_55%)]",
    dotClass: "bg-[hsl(40_90%_55%)]"
  },
};

const mockEvents: ScheduleEvent[] = [
  { id: "1", title: "Technical Interview - Round 1", company: "TCS", type: "interview", date: new Date(2026, 1, 16), time: "10:00 AM", location: "Seminar Hall A", status: "upcoming" },
  { id: "2", title: "Group Discussion", company: "Infosys", type: "gd", date: new Date(2026, 1, 16), time: "2:00 PM", location: "Room 204", status: "upcoming" },
  { id: "3", title: "Online Aptitude Test", company: "Wipro", type: "aptitude", date: new Date(2026, 1, 18), time: "9:00 AM", location: "Online", status: "upcoming" },
  { id: "4", title: "Pre-Placement Talk", company: "Google", type: "ppt", date: new Date(2026, 1, 20), time: "11:00 AM", location: "Auditorium", status: "upcoming" },
  { id: "5", title: "HR Interview", company: "TCS", type: "interview", date: new Date(2026, 1, 22), time: "3:00 PM", location: "Seminar Hall B", status: "upcoming" },
  { id: "6", title: "Technical Round 2", company: "Infosys", type: "interview", date: new Date(2026, 1, 25), time: "10:30 AM", location: "Room 301", status: "upcoming" },
  { id: "7", title: "Group Discussion", company: "Wipro", type: "gd", date: new Date(2026, 1, 14), time: "1:00 PM", location: "Room 105", status: "today" },
  { id: "8", title: "Aptitude Test", company: "Google", type: "aptitude", date: new Date(2026, 1, 12), time: "9:00 AM", location: "Online", status: "completed" },
];

const Schedule = () => {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date());

  const eventDates = mockEvents.map((e) => e.date);

  const selectedDateEvents = selectedDate
    ? mockEvents.filter((e) => isSameDay(e.date, selectedDate))
    : [];

  const upcomingEvents = mockEvents
    .filter((e) => e.status === "upcoming" || e.status === "today")
    .sort((a, b) => a.date.getTime() - b.date.getTime())
    .slice(0, 5);

  // Custom day content to show dots for event days
  const modifiers = {
    eventDay: eventDates,
    today: new Date(),
  };

  const modifiersClassNames = {
    eventDay: "relative after:absolute after:bottom-1 after:left-1/2 after:-translate-x-1/2 after:w-1.5 after:h-1.5 after:rounded-full after:bg-primary",
  };

  return (
    <StudentLayout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon" asChild>
            <Link to="/student/dashboard">
              <ChevronLeft className="w-5 h-5" />
            </Link>
          </Button>
          <div>
            <h1 className="text-2xl font-bold font-display">Schedule</h1>
            <p className="text-sm text-muted-foreground">
              Your interview & placement event calendar
            </p>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Calendar */}
          <Card variant="glass" className="lg:col-span-1">
            <CardContent className="p-4">
              <Calendar
                mode="single"
                selected={selectedDate}
                onSelect={setSelectedDate}
                modifiers={modifiers}
                modifiersClassNames={modifiersClassNames}
                className="p-3 pointer-events-auto w-full"
              />
              {/* Legend */}
              <div className="mt-4 flex flex-wrap gap-3 px-2">
                {Object.entries(eventTypeConfig).map(([key, config]) => (
                  <div key={key} className="flex items-center gap-1.5">
                    <div className={`w-2.5 h-2.5 rounded-full ${config.dotClass}`} />
                    <span className="text-xs text-muted-foreground">{config.label}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Right Panel */}
          <div className="lg:col-span-2 space-y-6">
            {/* Selected Date Events */}
            <Card variant="glass">
              <CardHeader>
                <CardTitle className="text-lg">
                  {selectedDate ? format(selectedDate, "EEEE, MMMM d, yyyy") : "Select a date"}
                </CardTitle>
                <CardDescription>
                  {selectedDateEvents.length
                    ? `${selectedDateEvents.length} event${selectedDateEvents.length > 1 ? "s" : ""} scheduled`
                    : "No events on this date"}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                {selectedDateEvents.length === 0 && (
                  <p className="text-sm text-muted-foreground text-center py-6">
                    No events scheduled for this day.
                  </p>
                )}
                {selectedDateEvents.map((event) => {
                  const config = eventTypeConfig[event.type];
                  const Icon = config.icon;
                  return (
                    <div
                      key={event.id}
                      className="flex items-start gap-4 p-4 rounded-xl bg-secondary/30 hover:bg-secondary/50 transition-colors"
                    >
                      <div className={`w-10 h-10 rounded-lg flex items-center justify-center shrink-0 ${config.bgClass.split(" ")[0]}`}>
                        <Icon className={`w-5 h-5 ${config.colorClass}`} />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-start justify-between gap-2">
                          <div>
                            <p className="font-medium">{event.title}</p>
                            <p className="text-sm text-muted-foreground flex items-center gap-1 mt-0.5">
                              <Briefcase className="w-3.5 h-3.5" />
                              {event.company}
                            </p>
                          </div>
                          <Badge variant="outline" className={config.bgClass}>
                            {config.label}
                          </Badge>
                        </div>
                        <div className="flex items-center gap-4 mt-2 text-xs text-muted-foreground">
                          <span className="flex items-center gap-1">
                            <Clock className="w-3.5 h-3.5" />
                            {event.time}
                          </span>
                          <span className="flex items-center gap-1">
                            <MapPin className="w-3.5 h-3.5" />
                            {event.location}
                          </span>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </CardContent>
            </Card>

            {/* Upcoming Events */}
            <Card variant="glass">
              <CardHeader>
                <CardTitle className="text-lg">Upcoming Events</CardTitle>
                <CardDescription>Your next scheduled placement activities</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                {upcomingEvents.map((event) => {
                  const config = eventTypeConfig[event.type];
                  const Icon = config.icon;
                  return (
                    <div
                      key={event.id}
                      className="flex items-center gap-4 p-3 rounded-xl bg-secondary/30 hover:bg-secondary/50 transition-colors cursor-pointer"
                      onClick={() => setSelectedDate(event.date)}
                    >
                      <div className={`w-9 h-9 rounded-lg flex items-center justify-center shrink-0 ${config.bgClass.split(" ")[0]}`}>
                        <Icon className={`w-4 h-4 ${config.colorClass}`} />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium truncate">{event.title}</p>
                        <p className="text-xs text-muted-foreground">{event.company} • {event.time}</p>
                      </div>
                      <span className="text-xs text-muted-foreground whitespace-nowrap">
                        {format(event.date, "MMM d")}
                      </span>
                    </div>
                  );
                })}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </StudentLayout>
  );
};

export default Schedule;
