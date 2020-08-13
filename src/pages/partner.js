import React from "react"
import Particles from "react-particles-js";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";
import Layout from "../component/Layout";
import "../styles/app.scss";

const Partner = () => {
  const now = new Date();
  const [selectedDate, setSelectedDate] = React.useState(now);
  const handleDateChange = (date) => {
    setSelectedDate(date);
  };
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
          <div className="content__container">
            <h1 className="title">คู่ธุรกิจของคุณเกิดวันที่</h1>
            <div className="form form--parter">
            <div>
                <div>ปี/เดือน/วัน</div>
                <KeyboardDatePicker
                  id="date-picker-dialog"
                  format="dd-MM-yyyy"
                  value={selectedDate}
                  onChange={handleDateChange}
                  KeyboardButtonProps={{
                    "aria-label": "change date",
                  }}
                />
              </div>
            </div>
            <button className="button button-large">ทำนาย</button>
          </div>
        </div>
      </Layout>
    </MuiPickersUtilsProvider>
  );
};

export default Partner;
