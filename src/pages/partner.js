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

const zodiacToElement = {
  Z1: "E0",
  Z2: "E6",
  Z3: "E1",
  Z4: "E2",
  Z5: "E5",
  Z6: "E3",
  Z7: "E4",
  Z8: "E6",
  Z9: "E7",
  Z10: "E8",
  Z11: "E5",
  Z12: "E9",
};

const Partner = () => {
  const now = new Date();
  const [selectedDate, setSelectedDate] = useState(now);
  const [element, setElement] = useState(null);
  const [text, setText] = useState("");
  const user = useSelector((state) => state.user);
  const [isLoading, setLoading] = React.useState(false);
  const handleDateChange = (date) => {
    setSelectedDate(date);
  };
  async function calculate() {
    try {
      setLoading(true);
      const date = {
        year: moment(selectedDate).format("YYYY"),
        month: moment(selectedDate).format("MM"),
        day: moment(selectedDate).format("DD"),
      };
      
      const {
        data: { data },
      } = await axios.post(`${API_URL}/calculate/date`, date)
      if (
        (user.good_element[0].includes(data.MS.code) ||
          user.good_element[1].includes(data.MS.code)) &&
        (user.good_element[0].includes(zodiacToElement[data.MS.zodiac_code]) ||
          user.good_element[1].includes(zodiacToElement[data.MS.zodiac_code]))
      ) {
        setText("Perfect Match");
      } else if (
        (
          !user.good_element[0].includes(data.MS.code) &&
          !user.good_element[1].includes(data.MS.code)
        ) &&
        (user.good_element[0].includes(zodiacToElement[data.MS.zodiac_code]) ||
          user.good_element[1].includes(zodiacToElement[data.MS.zodiac_code]))
      ) {
        setText("Good Match");
      } else {
        setText("ไม่ควรทำธุรกิจร่วมกัน");
      }
      setElement(data.DP.element_code);
    } catch (error) {
      console.log("Partner Page | Error while call calculate()", error);
    }
    setLoading(false);
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
              <div className="title title--center">{text}</div>
              <button
                className="button button-large"
                onClick={reset}
                disabled={isLoading}
              >
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
