import RestaurentCard from "./RestaurentCard";
import resList from "../utils/MockData";


const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="res-conatiner">
        {resList.map((restaurant) => (
          <RestaurentCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};


export default Body;