import React from "react";
import { useSelector } from "react-redux";
import Layout from "../component/Layout";
import "../styles/app.scss";

const Prediction = () => {
  const user = useSelector((state) => state.user);
  return (
    <Layout>
      <div className="layout">
        <div className="content__container content__container--prediction">
          <h1 className="title">ผลทำนาย</h1>
          <div className="subtitle subtitle--center">{user.element_name}</div>
          <div className="">
            <div className="meta">
              <i className="fal fa-briefcase" /> อาชีพ
            </div>
            <div>{user.occupation}</div>
          </div>
          <div>
            <div className="meta">
              <i className="fal fa-bed" /> หันหัวนอน
            </div>
            <div>{user.sleep_bed}</div>
          </div>
          <div>
            <div className="meta">
              <i className="fal fa-desktop" /> โต๊ะทำงาน
            </div>
            <div>{user.work_desk}</div>
          </div>
          <div>
            <div className="meta">
              <i className="fal fa-palette" /> สีนำโชค
            </div>
            <div>{user.color}</div>
          </div>
          <div className="">
            <div className="meta">
              <i className="fal fa-hiking" /> กิจกรรมเสริมดวง
            </div>
            <div>{user.activity}</div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Prediction;
