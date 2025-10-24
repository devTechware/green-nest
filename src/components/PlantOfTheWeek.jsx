import { Link } from "react-router";

const PlantOfTheWeek = () => {
  const featuredPlant = {
    name: "Calathea",
    category: "Ornamental",
    price: 30,
    rating: 4.9,
    image: "https://i.ibb.co.com/yvrgZQC/Calathea.jpg",
    description:
      "Known for striking leaf patterns and movement; prefers high humidity, indirect light, and regular watering.",
  };

  return (
    <section className="py-16 bg-[#E9F5EE]">
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-10 items-center">
        {/* Image */}
        <div className="relative group">
          <img
            src={featuredPlant.image}
            alt={featuredPlant.name}
            className="w-full h-[380px] object-cover rounded-2xl shadow-md transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute top-4 left-4 bg-[#2D6A4F] text-white px-4 py-2 rounded-full text-sm font-semibold shadow">
            🌿 Plant of the Week
          </div>
        </div>

        {/* Content */}
        <div className="space-y-4 text-left">
          <h2 className="text-4xl font-bold text-[#2D6A4F]">
            {featuredPlant.name}
          </h2>
          <p className="text-gray-600 leading-relaxed">
            {featuredPlant.description}
          </p>
          <div className="flex items-center space-x-4 text-lg font-semibold text-[#2D6A4F]">
            <p>💰 ${featuredPlant.price}</p>
            <p>⭐ {featuredPlant.rating}</p>
          </div>
          <Link
            to="/plant-details/9"
            className="btn bg-[#2D6A4F] text-white hover:bg-[#40916C]"
          >
            Learn More
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PlantOfTheWeek;
