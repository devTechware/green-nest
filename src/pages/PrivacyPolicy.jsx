const PrivacyPolicy = () => {
  return (
    <section className="bg-[#F2F8F3] py-16">
      <div className="w-11/12 mx-auto max-w-4xl bg-white p-10 rounded-2xl shadow-md border border-[#E5EDE7]">
        
        <h1 className="text-4xl font-bold text-[#1B4332] mb-6 text-center">
          🌱 Privacy Policy
        </h1>

        <p className="text-gray-600 leading-relaxed mb-6 text-center">
          Last updated: {new Date().getFullYear()}
        </p>

        <p className="text-gray-700 leading-relaxed mb-6">
          At <span className="text-[#38AD2D] font-semibold">GreenNest</span>, we value your privacy and are committed 
          to protecting your personal information. This Privacy Policy outlines how we collect, use, and safeguard 
          your data when you visit our website, purchase products, or interact with our services.
        </p>

        {/* Section 1 */}
        <h2 className="text-2xl text-[#2D6A4F] font-semibold mb-3">
          1. Information We Collect
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          We collect different types of information to provide and improve your experience:
        </p>
        <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6">
          <li><strong>Personal Information:</strong> Name, email address, phone number.</li>
          <li><strong>Account Data:</strong> Profile details if you sign up or log in.</li>
          <li><strong>Purchase Information:</strong> Order details, delivery address (if applicable).</li>
          <li><strong>Usage Data:</strong> Pages visited, browsing behavior, device information.</li>
        </ul>

        {/* Section 2 */}
        <h2 className="text-2xl text-[#2D6A4F] font-semibold mb-3">
          2. How We Use Your Information
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          GreenNest uses your information to:
        </p>
        <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6">
          <li>Provide and improve our plant-shop services.</li>
          <li>Process your orders and manage your account.</li>
          <li>Respond to inquiries and offer customer support.</li>
          <li>Send promotions, updates, and eco-friendly tips (only if you consent).</li>
          <li>Enhance website performance and user experience.</li>
        </ul>

        {/* Section 3 */}
        <h2 className="text-2xl text-[#2D6A4F] font-semibold mb-3">
          3. Sharing Your Information
        </h2>
        <p className="text-gray-700 leading-relaxed mb-6">
          We value your trust. Your information is <strong>never sold or traded</strong>.  
          However, we may share data with trusted third parties such as:
        </p>
        <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6">
          <li>Payment processors (e.g., for secure transactions)</li>
          <li>Delivery partners (if you place an order)</li>
          <li>Analytics services to improve website performance</li>
        </ul>

        {/* Section 4 */}
        <h2 className="text-2xl text-[#2D6A4F] font-semibold mb-3">
          4. Data Security
        </h2>
        <p className="text-gray-700 leading-relaxed mb-6">
          Your security is important to us. We use modern safeguards such as encryption, 
          secure servers, and limited data access to protect your information from unauthorized access.
        </p>

        {/* Section 5 */}
        <h2 className="text-2xl text-[#2D6A4F] font-semibold mb-3">
          5. Cookies & Tracking Technologies
        </h2>
        <p className="text-gray-700 leading-relaxed mb-6">
          GreenNest uses cookies to enhance your browsing experience — such as remembering 
          your preferences, analyzing traffic, and improving functionality.  
          You may disable cookies anytime from your browser settings.
        </p>

        {/* Section 6 */}
        <h2 className="text-2xl text-[#2D6A4F] font-semibold mb-3">
          6. Your Rights
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          You have the right to:
        </p>
        <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6">
          <li>Access, update, or delete your personal information</li>
          <li>Withdraw consent for marketing emails</li>
          <li>Request clarification about how your data is used</li>
        </ul>

        {/* Section 7 */}
        <h2 className="text-2xl text-[#2D6A4F] font-semibold mb-3">
          7. Contact Us
        </h2>
        <p className="text-gray-700 leading-relaxed mb-6">
          If you have any questions about our Privacy Policy, feel free to reach out:
        </p>

        <div className="bg-[#F2F8F3] p-5 rounded-xl border border-[#D7E9DB] text-[#1B4332]">
          <p><strong>Email:</strong> privacy@greennest.com</p>
          <p><strong>Phone:</strong> +880 1700-000000</p>
          <p><strong>Location:</strong> Dhaka, Bangladesh</p>
        </div>

      </div>
    </section>
  );
};

export default PrivacyPolicy;
