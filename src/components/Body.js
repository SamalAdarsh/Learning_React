import RestaurentCard from "./RestaurentCard";
import resList from "../utils/dummyData";
import { useState, useEffect } from "react";

function filterData(searchText, restaurants) {
  const filterData = restaurants.filter((restaurant) =>
    restaurant?.info?.name.toLowerCase().includes(searchText.toLowerCase())
  );
  return filterData;
}

const Body = () => {
  const [searchText, setSearchText] = useState("");

  const [listofRestaurents, setlistofRestaurents] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.5246091&lng=73.8786239&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();

    console.log(json);

    setlistofRestaurents(json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants);
  };

  return (
    <div className="body">
      <button
        className="filter-btn"
        onClick={() => {
          const filteredList = listofRestaurents.filter(
            (res) => res.info.avgRating > 4
          );

          setlistofRestaurents(filteredList);
          console.log(filteredList);
        }}
      >
        Top Rated Restaurants
      </button>

      <span className="search-container">
        <input
          type="text"
          className="search-input"
          placeholder="Search a restaurant you want..."
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        ></input>
        <button
          className="search-btn"
          onClick={() => {
            const data = filterData(searchText, listofRestaurents);

            setlistofRestaurents(data);
          }}
        >
          Search
        </button>
      </span>

      <div className="res-conatiner">
        {listofRestaurents.map((restaurant) => (
          <RestaurentCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
