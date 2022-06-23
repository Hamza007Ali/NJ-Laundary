import React from "react";
import FullCalendar from "@fullcalendar/react";
import timeGridPlugin from "@fullcalendar/timegrid";

const HomeScheduler = () => {
  // const events = [{ title: "today's event", date: new Date() }];
  const events = {
    events: [
      {
        id: 0,
        title: "Check-Out",
        start: new Date("2022-03-31T10:00:00.000Z"),
        end: new Date("2022-03-31T10:00:00.000Z"),
        type: "Chapter Technical Training",
        url: "https://www.google.com/",
        color: "#C0BEFF",
      },
      {
        id: 1,
        title: "In Progress",
        start: new Date("2022-03-31T07:00:00.000Z"),
        end: new Date("2022-03-31T07:00:00.000Z"),
        url: "https://www.google.com/",
        type: "Chapter Technical Training",
        color: "#FFD66B",
      },
      {
        id: 2,
        title: "Check-In",
        start: new Date("2022-03-31T04:00:00.000Z"),
        end: new Date("2022-03-31T04:00:00.000Z"),
        url: "https://www.google.com/",
        type: "Chapter Technical Training",
        color: "#FF8F6B",
      },
    ],
  };
  console.log(new Date("2022-03-31T22:00:00.000Z"));
  return (
    <FullCalendar
      plugins={[timeGridPlugin]}
      initialView="timeGridDay"
      allDaySlot={false}
      events={events}
      dayHeaders={false}
      customButtons={false}
      selectable={"true"}
      editable={true}
      selectAllow={true}
      titleFormat={""}
      slotLabelFormat={{ hour: "numeric", minute: "2-digit" }}
    />
  );
};

export default HomeScheduler;
