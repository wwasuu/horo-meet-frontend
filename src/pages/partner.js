import DateFnsUtils from "@date-io/date-fns";
import { MuiPickersUtilsProvider, DatePicker } from "@material-ui/pickers";
import axios from "axios";
import moment from "moment";
import React, { useState } from "react";
import Particles from "react-particles-js";
import { useSelector } from "react-redux";
import Typist from "react-typist";
import Layout from "../component/Layout";
import { API_URL } from "../config";
import "../styles/app.scss";

const Partner = () => {
  const now = new Date();
  const [selectedDate, setSelectedDate] = useState(now);
  const [element, setElement] = useState(null);
  const [text, setText] = useState("");
  const user = useSelector((state) => state.user);
  const handleDateChange = (date) => {
    setSelectedDate(date);
  };
  async function calculate() {
    try {
      const date = {
        year: moment(selectedDate).format("YYYY"),
        month: moment(selectedDate).format("MM"),
        day: moment(selectedDate).format("DD"),
      };
      const {
        data: { data },
      } = await axios.post(`${API_URL}/calculate/date`, date);
      console.log(user);
      const i = Math.floor(Math.random() * 3) + 1 - 1;
      const o = ["ไม่ควรทำธุรกิจร่วมกัน", "Perfect Match", "Good Match"];
      setText(o[i]);
      setElement(data.DP.element_code);
    } catch (error) {
      console.log("Partner Page | Error while call calculate()", error);
    }
  }

  function reset() {
    setElement(null);
  }

  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <Layout>
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
          {!element ? (
            <div className="content__container">
              <h1 className="title">คู่ธุรกิจของคุณเกิดวันที่</h1>
              <div className="form form--parter">
                <div>
                  <div>วัน-เดือน-ปี</div>
                  <DatePicker
                    id="date-picker-dialog"
                    format="dd-MM-yyyy"
                    value={selectedDate}
                    onChange={handleDateChange}
                    views={["year", "month", "date"]}
                    KeyboardButtonProps={{
                      "aria-label": "change date",
                    }}
                  />
                </div>
              </div>
              <button className="button button-large" onClick={calculate}>
                ทำนาย
              </button>
            </div>
          ) : (
            <div className="content__container">
              <h1 className="title">ดวงคู่ธุรกิจของคุณ</h1>
              <div className="title title--center">
                <Typist ms={1000}>{text}</Typist>
              </div>
              <button className="button button-large" onClick={reset}>
                ทำนายอีกครั้ง
              </button>
            </div>
          )}
        </div>
      </Layout>
    </MuiPickersUtilsProvider>
  );
};

export default Partner;
