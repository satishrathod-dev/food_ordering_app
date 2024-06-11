// Notice that we are destructuring useState from react as it is a named export.
import React, { useState } from "react";

import restList from "../utils/mockdata";
import RestaurantCard from "./RestaurantCard";

const Body = () => {
  const [listOfRestaurant, setListOfRestaurant] = useState(restList);

  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = listOfRestaurant.filter(
              (res) => res.info.avgRating > 4
            );
            setListOfRestaurant(filteredList);
          }}
        >
          Top Rated Restaurant
        </button>
      </div>
      <div className="search">Search</div>
      <div className="res-container">
        {listOfRestaurant.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

// const sortedRestList = restList.sort(
//   (a, b) => b.info.avgRating - a.info.avgRating
// );

export default Body;
