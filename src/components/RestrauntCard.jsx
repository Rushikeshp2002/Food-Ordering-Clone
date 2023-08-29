import { IMG_URL } from "../Constants";

const Card = ({ name, cuisines, cloudinaryImageId, avgRating }) => {
    // const { name, cuisines , cloudinaryImageId, avgRating } = restraunt.info;
    return (
      <div className="w-96 h-1/2 m-10 border-2 border-zinc-900-500 p-4 rounded-3xl shadow-md">
        <img
          src={
            IMG_URL +
            cloudinaryImageId
          }
          alt="img" className="rounded-2xl w-96 h-96 object-cover "
        />
        <h2 className="text-2xl font-medium">{name}</h2>
        <h3>{cuisines.join(",")}</h3>
        <h4>{avgRating}</h4>
      </div>
    );
  };
export default Card;  