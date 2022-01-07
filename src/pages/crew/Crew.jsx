import React, { useState, useEffect } from "react";
import Navbar from "../../components/navbar/Navbar";
import "./style.scss";
import axios from "axios";
import { generateRandomString } from "../../utils/generateString";
import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";

import SwiperCore, { Pagination } from "swiper";

SwiperCore.use([Pagination]);
function Crew() {
  const [crew, setCrew] = useState([]);
  useEffect(() => {
    axios
      .get("./data.json")
      .then((res) =>
        res.data.crew.map((obj) => ({
          ...obj,
          id: generateRandomString(7),
        }))
      )
      .then((data) => setCrew(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="crew">
      <Navbar />
      <div className="top-bar">
        <h2>02 Meet your crew</h2>
      </div>
      <Swiper
        pagination={{
          dynamicBullets: true,
          clickable: true,
        }}
        className="mySwiper"
      >
        {crew.map((el) => {
          return (
            <SwiperSlide key={el.id}>
              <div className="crew-info">
                <h2>{el.role}</h2>
                <h1>{el.name}</h1>
                <p>{el.bio}</p>
              </div>
              <div className="img-container">
                <img src={el.images.png} />
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}

export default Crew;
