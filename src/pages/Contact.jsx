import { useEffect, useState } from "react";
import { useLocation } from "react-router";
import Loading from "../components/Loading";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import contactImg from "../assets/contact.png"; // <-- Add your contact image (similar style as about.png)

const Contact = () => {
  const [showLoading, setShowLoading] = useState(true);
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
    const timer = setTimeout(() => setShowLoading(false), 500);
    return () => clearTimeout(timer);
  }, [pathname]);

  if (showLoading) return <Loading />;

  return (
    <section className="bg-[#F2F8F3] py-16">
      <div className="w-11/12 mx-auto flex flex-col md:flex-row items-center gap-14">
        {/* Left Content */}
        <div className="md:w-1/2 space-y-6">
          <h2 className="text-4xl font-bold text-[#1B4332] leading-tight">
            🌱 Get in Touch With{" "}
            <span className="text-[#38AD2D]">GreenNest</span>
          </h2>

          <p className="text-gray-600 text-lg leading-relaxed">
            We’d love to hear from you! Whether you have questions about plant
            care, need help choosing the right plant, or want to know more about
            our store, our team is always here to assist you.
          </p>

          {/* Contact Details */}
          <div className="space-y-4 mt-6">
            <div className="flex items-center gap-3 text-[#1B4332]">
              <FaPhoneAlt className="text-[#38AD2D] text-xl" />
              <p className="font-medium">+880 1700-000000</p>
            </div>

            <div className="flex items-center gap-3 text-[#1B4332]">
              <FaEnvelope className="text-[#38AD2D] text-xl" />
              <p className="font-medium">support@greennest.com</p>
            </div>

            <div className="flex items-center gap-3 text-[#1B4332]">
              <FaMapMarkerAlt className="text-[#38AD2D] text-xl" />
              <p className="font-medium">Dhaka, Bangladesh</p>
            </div>
          </div>

          {/* Contact Form */}
          <form className="mt-8 bg-white shadow-md rounded-xl p-6 space-y-4 border border-[#E5EDE7]">
            <div>
              <label className="font-semibold text-[#1B4332]">Name</label>
              <input
                type="text"
                placeholder="Your Name"
                className="input input-bordered w-full mt-1"
              />
            </div>

            <div>
              <label className="font-semibold text-[#1B4332]">Email</label>
              <input
                type="email"
                placeholder="Your Email"
                className="input input-bordered w-full mt-1"
              />
            </div>

            <div>
              <label className="font-semibold text-[#1B4332]">Message</label>
              <textarea
                placeholder="Write your message..."
                className="textarea textarea-bordered w-full mt-1 h-24"
              ></textarea>
            </div>

            <button className="btn bg-[#38AD2D] hover:bg-[#2F8F24] text-white rounded-lg w-full mt-2">
              Send Message
            </button>
          </form>
        </div>

        {/* Right Image */}
        <div className="md:w-1/2">
          <img
            src={contactImg}
            alt="Contact GreenNest"
            className="rounded-xl shadow-lg object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default Contact;
