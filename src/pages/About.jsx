import React from 'react';


const About = () => {
  return (
    <>

      {/* About Us Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-semibold mb-6">About Us</h2>
          <p className="text-xl text-gray-700 mb-6">
            At SHOP-ME, we are passionate about providing top-quality products at affordable prices, with a focus on excellent customer service and a seamless shopping experience.
          </p>
          <p className="text-lg text-gray-600 mb-6">
            Founded in 2020, our goal is to make online shopping easy, fun, and accessible to everyone. We offer a wide variety of products, ranging from electronics and fashion to home goods and personal care items.
          </p>
          <div className="flex justify-center gap-8">
            {/* Our Mission */}
            <div className="w-1/3">
              <img
                src="https://plus.unsplash.com/premium_photo-1682090260563-191f8160ca48?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZGVsaXZlcnl8ZW58MHx8MHx8fDA%3D"
                alt="Our Mission"
                className="rounded-lg mb-4 mx-auto"
              />
              <h3 className="text-xl font-bold">Our Mission</h3>
              <p className="text-gray-600">To deliver high-quality products while ensuring a great customer experience.</p>
            </div>
            {/* Our Vision */}
            <div className="w-1/3">
              <img
                src="https://media.istockphoto.com/id/1146418656/photo/network-of-business-concept.jpg?s=612x612&w=0&k=20&c=fIsEH8taD6-jx7dWsyK74OegraAVqsXLjrOesig0af0="
                alt="Our Vision"
                className="rounded-lg mb-4 mx-auto"
              />
              <h3 className="text-xl font-bold">Our Vision</h3>
              <p className="text-gray-600">To become the most trusted online store that serves customers worldwide.</p>
            </div>
            {/* Our Values */}
            <div className="w-1/3">
              <img
                src="https://plus.unsplash.com/premium_photo-1682146662576-900a71864a11?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Our Values"
                className="rounded-lg mb-4 mx-auto"
              />
              <h3 className="text-xl font-bold">Our Values</h3>
              <p className="text-gray-600">Customer satisfaction, transparency, sustainability, and integrity are at the core of everything we do.</p>
            </div>
          </div>
        </div>
      </section>

      
         
     
    </>
  );
};

export default About;
