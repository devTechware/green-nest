import aboutImg from "../assets/about.png"; 

const About = () => {
  return (
    <section className="py-20 bg-[#F2F8F3]">
      <div className="w-11/12 mx-auto flex flex-col lg:flex-row items-center gap-12">
        {/* Left Image */}
        <div className="lg:w-1/2">
          <img
            src={aboutImg}
            alt="About GreenNest"
            className="rounded-2xl shadow-md hover:shadow-xl transition-all duration-300"
          />
        </div>

        {/* Right Text */}
        <div className="lg:w-1/2">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1B4332] mb-4">
            🌱 About <span className="text-primary">GreenNest</span>
          </h2>

          <p className="text-gray-600 leading-relaxed mb-6">
            GreenNest was created with a simple mission — to bring nature closer
            to every home. We believe plants are more than just decor; they
            purify air, elevate mood, and create a peaceful living environment.
          </p>

          <p className="text-gray-600 leading-relaxed mb-8">
            From indoor plant lovers to outdoor gardening enthusiasts, we help
            you choose the right plants and provide the guidance needed to keep
            them thriving. Our store is built around sustainability, quality,
            and a deep passion for green living.
          </p>

          {/* Highlights */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div className="bg-base-100 rounded-xl p-5 shadow hover:shadow-md transition-all">
              <h4 className="text-lg font-semibold text-[#2D6A4F] mb-1">
                🌿 Healthy Plants
              </h4>
              <p className="text-gray-600 text-sm">
                Carefully nurtured and handpicked to ensure quality.
              </p>
            </div>

            <div className="bg-base-100 rounded-xl p-5 shadow hover:shadow-md transition-all">
              <h4 className="text-lg font-semibold text-[#2D6A4F] mb-1">
                🚚 Fast Delivery
              </h4>
              <p className="text-gray-600 text-sm">
                Safe and eco-friendly packaging delivered to your door.
              </p>
            </div>

            <div className="bg-base-100 rounded-xl p-5 shadow hover:shadow-md transition-all">
              <h4 className="text-lg font-semibold text-[#2D6A4F] mb-1">
                📘 Expert Tips
              </h4>
              <p className="text-gray-600 text-sm">
                Learn plant care basics to keep your plants thriving.
              </p>
            </div>

            <div className="bg-base-100 rounded-xl p-5 shadow hover:shadow-md transition-all">
              <h4 className="text-lg font-semibold text-[#2D6A4F] mb-1">
                ♻ Eco-Friendly
              </h4>
              <p className="text-gray-600 text-sm">
                Sustainable choices that support a greener planet.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
