import React, { useState, useEffect, Fragment } from "react";
import Navbar from "../../components/navbar/Navbar";
import "./style.scss";
import axios from "axios";
import { generateRandomString } from "../../utils/generateString";
function Destination() {
  const [destinations, setDestinations] = useState([]);

  const [filteredDest, setFilteredDest] = useState([]);
  const [isChecked, setIsChecked] = useState();
  useEffect(() => {
    axios
      .get("./data.json")
      .then((res) =>
        res.data.destinations.map((obj) => ({
          ...obj,
          id: generateRandomString(7),
        }))
      )
      .then((data) => setDestinations(data))
      .catch((err) => console.log(err));
  }, []);
  useEffect(() => {
    let arr = [];
    if (destinations.length > 1) {
      arr.push(destinations[0]);
      setFilteredDest(arr);
      setIsChecked(arr[0].id);
    }
  }, [destinations]);

  const handleClick = (e, id) => {
    e.preventDefault();
    let filterArr = destinations.filter((el) => el.id === id);
    setFilteredDest(filterArr);
    setIsChecked(id);
  };
  return (
    <div className="destination">
      <Navbar />
      <div className="top-bar">
        <h2>01 Pick your destination</h2>
      </div>
      <div className="container">
        {filteredDest &&
          filteredDest.map((el) => {
            return (
              <div className="filtered-item" key={el.id}>
                <div className="img-container">
                  <img src={el.images.png} />
                </div>
                <div className="text-info">
                  <div className="filter-planet-btns">
                    {destinations.map((el) => {
                      return (
                        <button
                          key={el.id}
                          className={isChecked === el.id ? "active" : ""}
                          id={el.id}
                          onClick={(e) => handleClick(e, el.id)}
                        >
                          {el.name}
                        </button>
                      );
                    })}
                  </div>
                  <h1>{el.name}</h1>
                  <p>{el.description}</p>
                  <hr />
                  <div className="advanced-info">
                    <div className="distance">
                      <p>Avg. distance</p>
                      <span>{el.distance}</span>
                    </div>
                    <div className="travel-time">
                      <p>Est. travel time</p>
                      <span>{el.travel}</span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default Destination;
