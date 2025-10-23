import { useParams } from "react-router";
import usePlants from "../hooks/usePlants";
import { toast } from "react-toastify";

const PlantDetails = () => {
  const { id } = useParams();
  const { plants, loading } = usePlants();

  if (loading) {
    return <h1>Loading...</h1>;
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
    <div className="w-11/12 mx-auto py-5">
      <div className="flex flex-col md:flex-row gap-10">
        <figure className="rounded-xl border-0 shadow">
          <img className="rounded-xl p-2" src={image} alt={plantName} />
        </figure>
        <div>
          <h1 className="text-4xl font-semibold pb-5">{plantName}</h1>
          <p>{description}</p>
          <div className="flex gap-5 py-5 font-semibold text-center">
            <span className="bg-[#DCFCE7] text-[#15803D] text-center px-2 py-1 rounded-xl w-[120px]">
              Price: $ {price}
            </span>
            <span className="bg-[#FFF0E1] text-[#FF8811] px-2 py-1 rounded-xl w-[120px]">
              Rating: {rating}
            </span>
            <span className="bg-[#DCFCE7] text-[#15803D] px-2 py-1 rounded-xl w-[180px]">
              Available Stock: {availableStock}
            </span>
          </div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow">
            <div className="card-body">
              <h1 className="text-3xl font-bold">Book Consultation</h1>
              <form onSubmit={handleSubmit}>
                <fieldset className="fieldset">
                  <label className="label">Name</label>
                  <input
                    type="text"
                    name="name"
                    className="input"
                    placeholder="e.g. Abdullah"
                    required
                  />

                  <label className="label">Email</label>
                  <input
                    type="email"
                    name="email"
                    className="input"
                    placeholder="e.g. abdullah@example.com"
                    required
                  />

                  <button className="btn btn-neutral mt-4">Book Now</button>
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
