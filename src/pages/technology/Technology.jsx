import axios from "axios";
import React, { useEffect, useState } from "react";
import Navbar from "../../components/navbar/Navbar";

import "./style.scss";
function Technology() {
  const [technology, setTechnology] = useState([]);

  const [filteredTech, setFilteredTech] = useState([]);
  const [isChecked, setIsChecked] = useState();
  useEffect(() => {
    axios
      .get("./data.json")
      .then((res) => setTechnology(res.data.technology))
      .catch((err) => console.log(err))
  }, []);
  useEffect(() => {
    technology.forEach((item, i) => {
      item.id = i + 1;
    });
    let arr = [];
    if (technology.length > 1) {
      arr.push(technology[0]);
      setFilteredTech(arr);
      setIsChecked(arr[0].id);
    }
  }, [technology]);
  const handleClick = (e, id) => {
    e.preventDefault();
    let filterArr = technology.filter((el) => el.id === id);
    setFilteredTech(filterArr);
    setIsChecked(id);
  };
  return (
    <div className="technology">
      <Navbar />
      <div className="top-bar">
        <h2>03 Space Launch 101</h2>
      </div>
      <div className="container">
        <div className="filter-tech-btns">
          {technology.map((el) => {
            return (
              <button
                key={el.id}
                className={isChecked === el.id ? "active" : ""}
                id={el.id}
                onClick={(e) => handleClick(e, el.id)}
              >
                {el.id}
              </button>
            );
          })}
        </div>
        {filteredTech &&
          filteredTech.map((el) => {
            return (
              <div className="filtered-item" key={el.id}>
                <div className="text-info">
                  <h2>The terminology...</h2>
                  <h1>{el.name}</h1>
                  <p>{el.description}</p>
                </div>
                <div className="img-container">
                  <img src={el.images.portrait} />
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default Technology;
