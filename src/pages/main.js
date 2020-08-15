import React from "react";
import Particles from "react-particles-js";
import {
  MuiPickersUtilsProvider,
  TimePicker,
  DatePicker,
} from "@material-ui/pickers";
import moment from "moment";
import DateFnsUtils from "@date-io/date-fns";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { API_URL } from "../config";
import "../styles/app.scss";
import { user_set } from "../store";

const Main = () => {
  const now = new Date();
  const history = useHistory();
  const [selectedDate, setSelectedDate] = React.useState(now);
  const [selectedTime, setSelectedTime] = React.useState(now);
  const [isLoading, setLoading] = React.useState(false);
  const handleDateChange = (date) => {
    setSelectedDate(date);
  };
  const dispatch = useDispatch();

  const handleTimeChange = (date) => {
    setSelectedTime(date);
  };

  const predict = async () => {
    try {
      setLoading(true);
      const date = {
        year: moment(selectedDate).format("YYYY"),
        month: moment(selectedDate).format("MM"),
        day: moment(selectedDate).format("DD"),
        time: moment(selectedTime).format("HH:ss"),
      };
      // const date = {
      //   year: "1942",
      //   month: "07",
      //   day: "18",
      //   time: "02:42",
      // };
      const {
        data: { data },
      } = await axios.post(`${API_URL}/calculate`, date);
      dispatch(
        user_set({
          good_element: data.result.goodElement,
          bad_element: data.result.badElement,
          element_name: data.advice.element_name, 
          occupation: data.advice.occupation,
          sleep_bed: data.advice.sleep_bed,
          work_desk: data.advice.work_desk,
          color: data.advice.color,
          activity: data.advice.activity,
        })
      );
      history.push("/prediction")
    } catch (error) {
      console.log("Main page | while call predict()", error);
    }
    setLoading(false);
  };

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
            <img className="logo" src="/logo.png" alt="logo" />
            <div className="title">คุณเกิดวันที่</div>
            <div className="form">
              <div>
                <div>วัน-เดือน-ปี</div>
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
            <button
              className="button button-large"
              onClick={predict}
              disabled={isLoading}
            >
              ทำนาย
            </button>
          </div>
        </div>
      </div>
    </MuiPickersUtilsProvider>
  );
};

export default Main;
