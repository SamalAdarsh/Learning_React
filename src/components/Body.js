import RestaurentCard from "./RestaurentCard";
// import resList from "../utils/dummyData";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router";

const Body = () => {
  const [listofRestaurents, setlistofRestaurents] = useState([]);

  const [filteredRestaurents, setfilteredRestaurents] = useState([]);

  const [searchText, setSearchText] = useState("");

  console.log("Body Rendered");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://cors-anywhere.com/https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.5246091&lng=73.8786239&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();

    console.log(json);

    setlistofRestaurents(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );

    setfilteredRestaurents(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  return listofRestaurents.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="search-box"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />

          <button
            className="search-btn"
            onClick={() => {
              console.log(searchText);

              const filteredRestaurent = listofRestaurents.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );

            
              setfilteredRestaurents(filteredRestaurent);
              console.log(filteredRestaurent);
            }}
          >
            Search
          </button>
        </div>

        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = listofRestaurents.filter(
              (res) => res.info.avgRating > 4.5
            );

            // setlistofRestaurents(filteredList);
            setfilteredRestaurents(filteredList);
            console.log(filteredList);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>

      <div className="res-conatiner">
        {filteredRestaurents.map((restaurant) => (
          <Link className="link-items"
            key={restaurant.info.id}
            to={"/restaurants/" + restaurant.info.id}
          >
            {" "}
            <RestaurentCard resData={restaurant} />{" "}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
