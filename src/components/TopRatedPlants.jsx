import usePlants from "../hooks/usePlants";
import PlantCard from "./PlantCard";

const TopRatedPlants = () => {
  const { plants, loading } = usePlants();

  if (loading) {
    return <h1>Loading...</h1>;
  }

  const topPlants = plants?.sort((a, b) => b.rating - a.rating);
  const topSixPlants = topPlants?.slice(0, 8);

  return (
    <div className="w-11/12 mx-auto text-center py-12 space-y-4">
      <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold">
        Our Most Popular Plants
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {topSixPlants.map((plant) => (
          <PlantCard key={plant.plantId} plant={plant} />
        ))}
      </div>
    </div>
  );
};

export default TopRatedPlants;
