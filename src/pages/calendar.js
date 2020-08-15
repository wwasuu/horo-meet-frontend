import React, { useState, useEffect } from "react";
import Layout from "../component/Layout";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import { useSelector } from "react-redux";
import axios from "axios";
import { API_URL } from "../config";
import "../styles/app.scss";

const Calendar = () => {
  const [calendarEvent, setCalendarEvent] = useState([]);
  const user = useSelector((state) => state.user);

  useEffect(() => {
    getCalendar();
  }, []);

  async function getCalendar() {
    try {
      const {
        data: { data: { calendar } },
      } = await axios.get(`${API_URL}/calculate/calendar`);
      const tmpData = [];
      for (const x of calendar) {
        for (const y of user.good_element) {          
          if (y.includes(x.element_code)) {
            tmpData.push({ title: x.element_code, date: x.date });
          }
        }
      }
      console.log("event", tmpData)
      setCalendarEvent(tmpData)
    } catch (error) {
      console.log("Calendar Page | Error while call getCalendar()", error);
    }
  }

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
            events={calendarEvent}
            eventContent={renderEventContent}
          />
        </div>
      </div>
    </Layout>
  );
};

export default Calendar;
