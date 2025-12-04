import { useEffect, useState } from "react";
import { useLocation } from "react-router";
import Loading from "../components/Loading";
import MeetOurExperts from "../components/MeetOurExperts";
import PlantCareTips from "../components/PlantCareTips";
import PlantOfTheWeek from "../components/PlantOfTheWeek";
import SwiperSlider from "../components/SwiperSlider";
import TopRatedPlants from "../components/TopRatedPlants";

const Home = () => {
  const [showLoading, setShowLoading] = useState(true);
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
    const timer = setTimeout(() => setShowLoading(false), 500);
    return () => clearTimeout(timer);
  }, [pathname]);

  if (showLoading) return <Loading />;

  return (
    <div className="bg-base-100">
      <SwiperSlider />
      <TopRatedPlants />
      <PlantCareTips />
      <MeetOurExperts />
      <PlantOfTheWeek />
    </div>
  );
};

export default Home;
