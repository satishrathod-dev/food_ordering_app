// Notice that we are destructuring useState from react as it is a named export.
import React, { useEffect, useState } from "react";

import restList from "../utils/mockdata";
import RestaurantCard from "./RestaurantCard";

const Body = () => {
  const [listOfRestaurant, setListOfRestaurant] = useState([]);
  const [filteredRestarant, setFilteredRestaurant] = useState([]);

  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.61610&lng=73.72860&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();

    console.log(json);

    setListOfRestaurant(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants || []
    );
    setFilteredRestaurant(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants || []
    );
  };

  const handleFilter = () => {
    const filteredList = listOfRestaurant.filter(
      (res) => res.info.avgRating > 4
    );
    setListOfRestaurant(filteredList);
  };

  return (
    <div className="body">
      <div className="filter">
        <div className="searchBox">
          <input
            type="text"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            onClick={() => {
              console.log(searchText);

              const filteredRestarant = listOfRestaurant.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );

              setFilteredRestaurant(filteredRestarant);
            }}
          >
            Search
          </button>
        </div>
        <button
          className="filter-btn"
          // onClick={() => {
          //   const filteredList = listOfRestaurant.filter(
          //     (res) => res.info.avgRating > 4
          //   );
          //   setListOfRestaurant(filteredList);
          // }}
          onClick={handleFilter}
        >
          Top Rated Restaurant
        </button>
      </div>
      <div className="search">Search</div>
      <div className="res-container">
        {/* {listOfRestaurant.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant} />
        ))} */}
        {listOfRestaurant && listOfRestaurant.length > 0 ? (
          filteredRestarant.map((restaurant) => (
            <RestaurantCard key={restaurant.info.id} resData={restaurant} />
          ))
        ) : (
          <p>No restaurants found</p>
        )}
      </div>
    </div>
  );
};

// const sortedRestList = restList.sort(
//   (a, b) => b.info.avgRating - a.info.avgRating
// );

export default Body;
