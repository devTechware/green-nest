import { Link } from "react-router";

const PlantCard = ({ plant }) => {
  const { image, plantName, price, rating, plantId, description } = plant;

  return (
    <div className="bg-gradient-to-b from-[#f6fff8] to-[#e9f5ec] rounded-2xl shadow-md hover:shadow-xl hover:scale-[1.02] transition-all duration-300 border border-green-100 overflow-hidden flex flex-col justify-between">
      <img
        className="w-full h-[220px] object-cover rounded-t-2xl"
        src={image}
        alt={plantName}
      />

      <div className="p-4 flex flex-col flex-grow justify-between">
        <h4 className="font-semibold text-lg text-[#004008]">{plantName}</h4>

        <p className="text-gray-600 text-sm mt-1 flex-grow">
          {description?.length > 60
            ? description.slice(0, 60) + "..."
            : description}
        </p>

        <div className="flex justify-between items-center mt-3">
          <span className="font-semibold text-sm bg-[#dcfce7] text-[#166534] px-3 py-1 rounded-xl">
            ${price}
          </span>
          <span className="flex items-center gap-1 text-[#facc15] font-medium">
            ⭐ {rating}
          </span>
        </div>

        <Link
          to={`/plant-details/${plantId}`}
          className="btn bg-[#004008] text-white text-sm rounded-3xl border-0 mt-4 hover:bg-[#066a2d] transition-colors duration-300"
        >
          View Details
        </Link>
      </div>
    </div>
  );
};

export default PlantCard;
