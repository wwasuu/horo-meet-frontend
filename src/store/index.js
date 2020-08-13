import { createStore, compose, combineReducers } from "redux";

const user_set = (payload) => ({
  type: "USER/SET",
  payload,
});

const user_clear = () => ({
  type: "USER/CLEAR",
});

const initialUserState = {
  element: ["E2", "E1", "E7"],
  occupation: `งานศิลปะ งานฝีมือ ศิลปิน ครูอาจารย์ งานสอน
  และให้ค าปรึกษา งาน
  เชิงวิชาการ งานด้านศาสนา การตลาด
  การขาย การประชาสัมพันธ์
  งานด้านการออกแบบ
  งานด้านการสื่อสาร การเดินทาง การท่องเที่ยว ไกด์ กัปตัน แอร์โฮสเตส
  งานด้านเสน่ห์ความรัก การจัดงานแต่งงาน หาคู่ ขายไม้ทุกชนิด การเกษตรกรรม
  จัดสวน
  ขายดอกไม้
  ขายอุปกรณ์เครื่องเขียน หนังสือ กระดาษ
  งานเขียน
  ส านักพิมพ์ โรงพิมพ์ ขายยา สมุนไพร ขายใบชา
  งานสิ่งทอ
  ขาย
  เสื ้อ
  ผ้าทุกชนิด งานที่เกี่ยวข้องกับความสูง
  ผลิตภัณฑ์ความงาม เครื่อ
  งส าอาง อาหารเสริม
  แพทย์
  พยาบาล
  เภสัชกร`,
  sleep_bed: "ทิศตะวันออก",
  work_desk: "ทิศตะวันออก",
  color: "สีเขียว",
  activity: "ปลูกต้นไม้ ท่องเที่ยวธรรมชาติ ตีกอล์ฟ",
};

const user = (state = initialUserState, action) => {
  switch (action.type) {
    case "USER/SET":
      return action.payload;
    case "USER/CLEAR":
      return initialUserState;
    default:
      return { ...state };
  }
};

const rootReducer = combineReducers({
  user,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer, composeEnhancers());

export default store;

export { user_set, user_clear };
