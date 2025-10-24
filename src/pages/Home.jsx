import MeetOurExperts from "../components/MeetOurExperts";
import PlantCareTips from "../components/PlantCareTips";
import PlantOfTheWeek from "../components/PlantOfTheWeek";
import SwiperSlider from "../components/SwiperSlider";
import TopRatedPlants from "../components/TopRatedPlants";

const Home = () => {
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
