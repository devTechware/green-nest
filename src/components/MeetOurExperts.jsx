const experts = [
  {
    id: 1,
    name: "John Doe",
    specialization: "Indoor Plant Care Specialist",
    image: "https://i.ibb.co.com/wZNFBFWW/Indoor-Plant-Care-Specialist.jpg",
  },
  {
    id: 2,
    name: "Tim Devlin",
    specialization: "Botanical Designer",
    image: "https://i.ibb.co.com/pBS8W8FZ/Botanical-Designer.jpg",
  },
  {
    id: 3,
    name: "Sophia Bloom",
    specialization: "Soil & Fertilizer Expert",
    image: "https://i.ibb.co.com/Gv3TBN79/Soil-Fertilizer-Expert.jpg",
  },
];

const MeetOurExperts = () => {
  return (
    <section className="py-16 bg-base-100 text-center">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-[#2D6A4F] mb-10">
          Meet Our Green Experts
        </h2>
        <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8">
          {experts.map((expert) => (
            <div
              key={expert.id}
              className="card bg-base-100 shadow-md hover:shadow-xl transition-transform duration-300 hover:-translate-y-2"
            >
              <figure>
                <img
                  src={expert.image}
                  alt={expert.name}
                  className="w-full h-64 object-cover rounded-t-2xl"
                />
              </figure>
              <div className="card-body items-center text-center">
                <h3 className="text-2xl font-semibold text-[#2D6A4F]">
                  {expert.name}
                </h3>
                <p className="text-gray-600">{expert.specialization}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MeetOurExperts;
