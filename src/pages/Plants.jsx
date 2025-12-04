import usePlants from "../hooks/usePlants";
import PlantCard from "../components/PlantCard";
import Loading from "../components/Loading";
import { useEffect, useState } from "react";
import { useLocation } from "react-router";

const Plants = () => {
  const { plants, loading } = usePlants();
  const [showLoading, setShowLoading] = useState(true);
  const { pathname } = useLocation();

  // Sorting & Filtering
  const [filteredPlants, setFilteredPlants] = useState([]);
  const [sortOption, setSortOption] = useState("");
  const [priceFilter, setPriceFilter] = useState("all");

  useEffect(() => {
    window.scrollTo(0, 0);
    const timer = setTimeout(() => setShowLoading(false), 500);
    return () => clearTimeout(timer);
  }, [pathname, loading]);

  useEffect(() => {
    if (plants.length) {
      let updated = [...plants];

      // Filter by price
      if (priceFilter !== "all") {
        updated = updated.filter((p) => {
          if (priceFilter === "low") return p.price < 20;
          if (priceFilter === "mid") return p.price >= 20 && p.price <= 50;
          if (priceFilter === "high") return p.price > 50;
          return true;
        });
      }

      // Sorting logic
      if (sortOption === "price-asc") {
        updated.sort((a, b) => a.price - b.price);
      } else if (sortOption === "price-desc") {
        updated.sort((a, b) => b.price - a.price);
      } else if (sortOption === "rating-desc") {
        updated.sort((a, b) => b.rating - a.rating);
      }

      setFilteredPlants(updated);
    }
  }, [plants, sortOption, priceFilter]);

  if (loading || showLoading) return <Loading />;

  return (
    <div className="w-11/12 mx-auto py-12 space-y-14">
      <section className="text-center space-y-3">
        <h1 className="text-4xl md:text-5xl font-bold text-[#1B4332]">
          🌿 Discover Our Beautiful Plants
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Explore our curated collection of indoor plants — handpicked to bring
          fresh air, natural beauty, and a soothing aesthetic into your home.
        </p>
      </section>

      <div className="bg-[#F2F8F3] p-5 rounded-2xl shadow-sm border border-green-100 flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Sort */}
        <select
          value={sortOption}
          onChange={(e) => setSortOption(e.target.value)}
          className="select select-bordered bg-white text-[#004008] w-full md:w-fit rounded-xl"
        >
          <option value="">Sort by</option>
          <option value="price-asc">Price: Low → High</option>
          <option value="price-desc">Price: High → Low</option>
          <option value="rating-desc">Top Rated</option>
        </select>

        <select
          value={priceFilter}
          onChange={(e) => setPriceFilter(e.target.value)}
          className="select select-bordered bg-white text-[#004008] w-full md:w-fit rounded-xl"
        >
          <option value="all">All Prices</option>
          <option value="low">Below $20</option>
          <option value="mid">$20 — $50</option>
          <option value="high">Above $50</option>
        </select>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {filteredPlants.length > 0 ? (
          filteredPlants.map((plant) => (
            <PlantCard key={plant.plantId} plant={plant} />
          ))
        ) : (
          <p className="text-gray-600 text-lg col-span-full text-center">
            No plants match your filters.
          </p>
        )}
      </div>
    </div>
  );
};

export default Plants;
