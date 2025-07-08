import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

const RestaurantMenu = () => {
  const [resInfo, setresInfo] = useState(null);

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(
      "https://cors-anywhere.com/https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=18.5246091&lng=73.8786239&restaurantId=33722&catalog_qa=undefined&submitAction=ENTER"
    );

    const json = await data.json();

    console.log(json);
    setresInfo(json.data);
  };

  if (resInfo === null) return <Shimmer />;



  const {name,avgRating,costForTwoMessage} = resInfo?.cards[2]?.card?.card?.info;

//   console.log(resInfo);


//   console.log(name);

  return (
    <div className="menu">
      <h1>{name}</h1>
      <p>{avgRating} Stars - {costForTwoMessage}</p>

      <h2>Menu</h2>
      <ul>
        <li>Burger</li>
        <li>Biryani</li>
        <li>Pizza</li>
      </ul>
    </div>
  );
};

export default RestaurantMenu;
