import { useEffect, useState } from "react";
import { useParams } from "react-router";
import Shimmer from "./Shimmer";
import { MENU_API } from "../utils/constants";

const RestaurantMenu = () => {
  const [resInfo, setresInfo] = useState(null);

  const { resID } = useParams();

  console.log(resID);

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(
      MENU_API + resID
    );

    const json = await data.json();

    console.log(json);
    setresInfo(json.data);
  };


  if (resInfo === null) return <Shimmer />;

  console.log(resInfo);

  const { name, avgRating, costForTwoMessage } =
    resInfo?.cards[2]?.card?.card?.info;

  const { itemCards } =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;

  return (
    <div className="menu">
      <h1>{name}</h1>
      <p>
        {avgRating} Stars - {costForTwoMessage}
      </p>

      <h2>Menu</h2>
      <ul>
        {itemCards?.map((item) => (
          <li key={item?.card?.info?.id}>
            <h4>{item?.card?.info?.name} </h4>{" "}
            <p>- Rs. {item?.card?.info?.price / 100} </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
