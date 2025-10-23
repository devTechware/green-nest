import { Link } from "react-router";

const PlantCard = ({ plant }) => {
  const { image, plantName, price, rating, plantId } = plant;

  return (
    <div className="bg-white p-3 rounded-lg flex flex-col justify-between gap-3 border-0 shadow">
      <img
        className="w-full h-[300px] sm:h-[200px] object-cover rounded-lg"
        src={image}
        alt={plantName}
      />
      <h4 className="font-semibold cursor-pointer">{plantName}</h4>

      <div className="flex justify-between">
        <span className="font-semibold text-sm bg-[#FFF0E1] text-[#FF8811] px-2 py-1 rounded-xl">
          Price: $<span>{price}</span>
        </span>
        <span className="text-sm bg-[#DCFCE7] text-[#15803D] px-2 py-1 rounded-xl">
          Rating: {rating}
        </span>
      </div>
      <Link to={`/plant-details/${plantId}`} className="btn bg-primary text-base-100 text-sm rounded-3xl border-0 shadow">
        View Details
      </Link>
    </div>
  );
};

export default PlantCard;
