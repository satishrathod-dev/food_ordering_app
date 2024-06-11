import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { resData } = props;

  const {
    name,
    cuisines,
    avgRating,
    costForTwo,
    deliveryTime,
    cloudinaryImageId,
  } = resData?.info;

  return (
    <div className="res-card">
      <img
        className="res-logo"
        src={CDN_URL + cloudinaryImageId}
        alt="Restaurant Image"
      />
      <h3>{name}</h3>
      <h5>{cuisines.join(", ")}</h5>
      <h4>{avgRating} stars</h4>
      <h4>{costForTwo} </h4>
      <h4>{deliveryTime} minutes</h4>
    </div>
  );
};

export default RestaurantCard;
