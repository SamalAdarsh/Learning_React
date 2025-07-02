import RestaurentCard from "./RestaurentCard";
import resList from "../utils/MockData";
import { useState } from "react";

const Body = () => {
  //State Variable

  const [listofRestaurents, setlistofRestaurents] = useState(resList);

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
      <div className="res-conatiner">
        {listofRestaurents.map((restaurant) => (
          <RestaurentCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
