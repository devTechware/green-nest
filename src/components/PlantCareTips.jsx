import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const PlantCareSlider = () => {
  const tips = [
    {
      id: 1,
      title: "Proper Watering",
      icon: "💧",
      description:
        "Water your plants only when the top 2 inches of soil are dry. Avoid overwatering to prevent root rot.",
    },
    {
      id: 2,
      title: "Right Sunlight",
      icon: "☀️",
      description:
        "Most indoor plants prefer bright, indirect sunlight. Avoid harsh rays to prevent leaf burn.",
    },
    {
      id: 3,
      title: "Regular Fertilizing",
      icon: "🌿",
      description:
        "Feed your plants every 2–4 weeks during growing season for lush, green growth.",
    },
    {
      id: 4,
      title: "Clean Leaves",
      icon: "🧽",
      description:
        "Wipe leaves with a damp cloth to remove dust and help them absorb more light.",
    },
    {
      id: 5,
      title: "Check Humidity",
      icon: "💨",
      description:
        "Keep tropical plants happy by misting leaves or using a humidifier.",
    },
  ];

  return (
    <section className="py-16 bg-[#F2F8F3]">
      <div className="w-11/12 mx-auto text-center">
        <h2 className="text-3xl font-bold text-[#1B4332] mb-4">
          🌿 Plant Care Tips
        </h2>
        <p className="text-gray-500 max-w-xl mx-auto mb-10">
          Learn how to keep your plants thriving with these essential indoor
          care tips.
        </p>

        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={30}
          slidesPerView={1}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          pagination={{ clickable: true }}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="max-w-11/12"
        >
          {tips.map((tip) => (
            <SwiperSlide key={tip.id} className="flex">
              <div className="card bg-base-100 shadow-md hover:shadow-lg rounded-2xl m-2 p-6 flex flex-col justify-between w-full min-h-[280px] transition-transform duration-300 hover:-translate-y-2">
                <div className="text-5xl mb-4 text-center">{tip.icon}</div>
                <h3 className="text-xl font-semibold text-[#2D6A4F] mb-2 text-center">
                  {tip.title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-center">
                  {tip.description}
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default PlantCareSlider;
