import { IMG_URL } from "../Constants";

const Card = ({ name, cuisines, cloudinaryImageId, avgRating }) => {
    // const { name, cuisines , cloudinaryImageId, avgRating } = restraunt.info;
    return (
      <div className="w-80 h-3/4 m-5 border-2 border-zinc-900-500 p-3 rounded-3xl shadow-md">
        <img
          src={
            IMG_URL +
            cloudinaryImageId
          }
          alt="img" className="rounded-2xl w-72 h-60 object-cover "
        />
        <h2 className="text-2xl font-medium my-2">{name}</h2>
        <h3>{cuisines.join(",")}</h3>
        <h4>{avgRating}</h4>
      </div>
    );
  };
export default Card;  