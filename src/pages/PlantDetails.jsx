import { useParams } from "react-router";
import usePlants from "../hooks/usePlants";
import { toast } from "react-toastify";
import PlantNotFoundError from "../components/PlantNotFoundError";

const PlantDetails = () => {
  const { id } = useParams();
  const { plants } = usePlants();

  const isValidRoute = plants && plants?.some((plant) => plant?.plantId == id);
  if (!isValidRoute) {
    return <PlantNotFoundError />;
  }

  const plant = plants?.find((plant) => plant?.plantId == id);

  const { image, plantName, description, price, rating, availableStock } =
    plant;

  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success("Book Consultation successfully");
    e.target.reset();
  };

  return (
    <div className="w-11/12 mx-auto py-10">
      <div className="flex flex-col md:flex-row gap-10 bg-[#F9FFF9] rounded-2xl shadow-md p-6 md:p-10 border border-[#E0F2E9]">
        <figure className="flex-1 bg-white rounded-2xl shadow-sm overflow-hidden border border-[#E5E5E5]">
          <img
            className="w-full h-full object-cover rounded-2xl hover:scale-105 transition-transform duration-300"
            src={image}
            alt={plantName}
          />
        </figure>

        <div className="flex-1 flex flex-col justify-start">
          <div>
            <h1 className="text-[#004008] text-4xl font-bold pb-4">
              {plantName}
            </h1>
            <p className="text-gray-700 leading-relaxed">{description}</p>

            <div className="flex flex-wrap gap-3 py-5 font-semibold">
              <span className="bg-[#E8F5E9] text-[#15803D] px-3 py-1.5 rounded-full shadow-sm text-sm">
                💲 Price: ${price}
              </span>
              <span className="bg-[#FFF0E1] text-[#FF8811] px-3 py-1.5 rounded-full shadow-sm text-sm">
                ⭐ Rating: {rating}
              </span>
              <span className="bg-[#E8F5E9] text-[#15803D] px-3 py-1.5 rounded-full shadow-sm text-sm">
                🌿 In Stock: {availableStock}
              </span>
            </div>
          </div>

          <div className="card bg-white border border-[#E0E0E0] rounded-2xl shadow-md mt-6">
            <div className="card-body">
              <h2 className="text-2xl font-bold text-[#004008]">
                Book Consultation
              </h2>
              <form onSubmit={handleSubmit}>
                <fieldset className="fieldset space-y-3">
                  <div>
                    <label className="label  font-medium">Name</label>
                    <br />
                    <input
                      type="text"
                      name="name"
                      className="input border border-[#C8E6C9] focus:border-[#15803D] focus:ring-2 focus:ring-[#9CCC65]"
                      placeholder="e.g. Abdullah"
                      required
                    />
                  </div>

                  <div>
                    <label className="label font-medium">Email</label>
                    <br />
                    <input
                      type="email"
                      name="email"
                      className="input border border-[#C8E6C9] focus:border-[#15803D] focus:ring-2 focus:ring-[#9CCC65]"
                      placeholder="e.g. abdullah@example.com"
                      required
                    />
                  </div>

                  <button className="btn bg-[#15803D] hover:bg-[#166534] text-white w-full mt-4 rounded-full shadow-md hover:shadow-lg transition-all duration-300">
                    Book Now
                  </button>
                </fieldset>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlantDetails;
