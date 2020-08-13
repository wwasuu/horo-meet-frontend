import React from "react"
import Layout from "../component/Layout";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import "../styles/app.scss";

const Calendar = () => {
  function renderEventContent(eventInfo) {
    return (
      <div>
        <i className="fas fa-star fa-lg fc-star" />
      </div>
    );
  }

  return (
    <Layout>
      <div className="layout">
        <div className=" content__container content__container--calender">
          <FullCalendar
            plugins={[dayGridPlugin]}
            initialView="dayGridMonth"
            themeSystem="Darkly"
            events={[
              { title: "event 1", date: "2020-08-15" },
              { title: "event 2", date: "2020-08-16" },
            ]}
            eventContent={renderEventContent}
          />
        </div>
      </div>
    </Layout>
  );
};

export default Calendar;
