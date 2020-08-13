import React from "react";
import Particles from "react-particles-js";
import {
  MuiPickersUtilsProvider,
  TimePicker,
  DatePicker,
} from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";
import { useHistory } from "react-router-dom";
import "../styles/app.scss";

const Main = () => {
  const now = new Date()
  const history = useHistory()
  const [selectedDate, setSelectedDate] = React.useState(now
  );
  const [selectedTime, setSelectedTime] = React.useState(
    now
  );
  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const handleTimeChange = (date) => {
    setSelectedTime(date);
  };

  const predict = async () => {
    try {
      history.push("/prediction")
    } catch (error) {
      console.log("Main page | while call predict()", error)
    }
  }

  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <div>
        <div className="layout">
          <Particles
            className="interactive-background"
            params={{
              particles: {
                number: {
                  value: 50,
                  density: {
                    enable: false,
                  },
                },
              },
            }}
          />
          <div className="content__container">
            <div className="title">คุณเกิดวันที่</div>
            <div className="form">
              <div>
                <div>ปี/เดือน/วัน</div>
                <DatePicker
                  format="dd-MM-yyyy"
                  value={selectedDate}
                  onChange={handleDateChange}
                />
              </div>
              <div>
                <div>เวลา</div>
                <TimePicker
                  id="time-picker"
                  value={selectedTime}
                  onChange={handleTimeChange}
                  KeyboardButtonProps={{
                    "aria-label": "change time",
                  }}
                  ampm={false}
                />
              </div>
            </div>
            <button className="button button-large" onClick={predict}>
              ทำนาย
            </button>
          </div>
        </div>
      </div>
    </MuiPickersUtilsProvider>
  );
};

export default Main;
