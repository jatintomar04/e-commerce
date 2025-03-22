import React from 'react'


const Contact = () => {
  return (
<>

    <section className=" py-16 ">
    <div className="container mx-auto text-center">
      <h2 className="text-3xl font-semibold mb-6">Get In Touch</h2>
      <p className="text-lg text-gray-700 mb-6">
        We'd love to hear from you! Whether you have questions, feedback, or suggestions, feel free to reach out.
      </p>
      <div className="flex justify-center gap-8">
        <div className="w-1/3 bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-2xl font-semibold mb-4">Contact Information</h3>
          <p className="text-gray-600">Email: <a href="mailto:support@shopmaster.com" className="text-blue-600">support@shopme.com</a></p>
          <p className="text-gray-600">Phone: +1 (123) 456-7890</p>
        </div>
      </div>
    </div>
  </section>
  </>
  )
}

export default Contact