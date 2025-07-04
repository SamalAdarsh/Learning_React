import RestaurentCard from "./RestaurentCard";
import resList from "../utils/dummyData";
import { useState } from "react";


function filterData(searchText, restaurants) {
  const filterData = restaurants.filter((restaurant) =>
    restaurant?.info?.name.toLowerCase().includes(searchText.toLowerCase())
  );
  return filterData;
}




const Body = () => {


const [searchText, setSearchText] = useState("");
// const [restaurants, setRestaurants] = useState(resList);





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
            // filter the data
            const data = filterData(searchText, listofRestaurents);
            // update the state of restaurants list
            setlistofRestaurents(data);
            // console.log(data);
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
