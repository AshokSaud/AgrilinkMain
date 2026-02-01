// src/pages/About.jsx
import React from 'react';
import { assets} from "../assets/assets";
import {Link} from "react-router-dom"

const About = () => {
  const teamMembers = [
    { name: "Arjun Mahato", id: "PUR078BCT015", role: "Member" },
    { name: "Ashok Saud", id: "PUR078BCT018", role: "Member" },
    { name: "Bijesh Dhakal", id: "PUR078BCT023", role: "Member" },
    { name: "Kaniska Kafle", id: "PUR078BCT040", role: "Member" }
  ];

  const features = [
    {
      icon: '📦',
      title: "Product Listing Management",
      description: "Farmers can easily list their agricultural products, complete with images, descriptions, and prices.",
      source: null // No specific source for this general feature
    },
    {
      icon: '🌱',
      title: "Crop Recommendation System",
      description: "Our system provides personalized crop suggestions based on essential parameters like soil type, leveraging the Decision Tree Algorithm to help farmers select the most suitable crop.",
      source: [9, 117, 85, 86]
    },
    {
      icon: '🛒',
      title: "Direct Farmer-to-Consumer Marketplace",
      description: "A digital platform where consumers can directly purchase fresh, quality agricultural products from farmers, eliminating middlemen and improving farmer profits.",
      source: [9, 61, 68]
    },
    {
      icon: '🔑',
      title: "User Registration/Login",
      description: "Secure account creation and authentication for farmers and customers.",
      source: [115]
    },
    {
      icon: '📝',
      title: "Cart & Order Management",
      description: "Farmers can add products to a cart, and both farmers and customers can view and manage their orders efficiently.",
      source: [118, 119]
    },
    
    {
      icon: '📊',
      title: "Farmer Dashboard",
      description: "Administrators have robust tools to manage products and monitor all platform activities.",
      source: [121]
    }
  ];


  const ImagePlaceholder = ({ src, alt, className }) => (
    <div className={`w-full relative overflow-hidden rounded-lg ${className}`}>
      {src ? (
          <img src={src} alt={alt} className="w-full h-full object-cover object-top" />
      ) : (
        <div className='absolute inset-0 flex items-center justify-center bg-gray-200 text-gray-500 text-center'>
          <span className="text-xl px-4">{alt}</span>
        </div>
      )}
    </div>
  );

  return (
    <section className="bg-gradient-to-br from-green-50 to-emerald-100 min-h-screen py-16 font-sans">
      <div className="container mx-auto px-4 md:px-8 lg:px-16 xl:px-24">

        {/* Hero Section */}
        <div className="text-center mb-16 pt-10">
          <h1 className="text-5xl md:text-6xl font-extrabold text-green-800 mb-6 leading-tight drop-shadow-md">
            Cultivating the Future of Agriculture with <br className="hidden md:block"/> <span className="text-green-600">Agri-Link</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed opacity-90">
            At Agri-Link, we are driven mission: to empower farmers with innovative technology and invaluable insights. We believe in nurturing growth, from the smallest seed to a thriving, sustainable community.
          </p>
          <p className="text-lg text-gray-600 mt-4 max-w-3xl mx-auto">
            We are a team of undergraduate students from the "Department of Computer and Electronics Engineering" at the Institute of Engineering (IOE), Purwanchal Campus, Dharan, Nepal. We are passionate about leveraging technology to address educational and practical challenges in agriculture.
          </p>
        </div>
        {/* Placeholder for a relevant hero image, e.g., a modern farm landscape */}
        <ImagePlaceholder src={assets.heroAgriField} alt="Modern agricultural field" className="mb-16 h-80 md:h-96 lg:h-[500px] xl:h-[600px]"/>

        {/* Separator with a subtle icon */}
        <div className="flex justify-center my-16">
          <div className="relative w-24 h-1 bg-green-400 rounded">
            <span className="absolute -top-3 left-1/2 -translate-x-1/2 text-green-600 text-3xl">🌿</span>
          </div>
        </div>

        {/* Our Mission & Vision */}
        <div className="bg-gradient-to-br from-green-600 to-emerald-800 text-white p-8 md:p-16 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 ease-in-out max-w-5xl mx-auto mb-16 transform hover:scale-[1.01] flex flex-col items-center">
          <h2 className="text-4xl font-bold mb-6 pb-4 border-b-2 border-white border-opacity-30 text-center">Our Mission & Vision</h2>
          <p className="text-lg leading-relaxed text-white text-opacity-90 mb-8 text-center max-w-3xl">
            Our core mission is dual-faceted:
          </p>
          <ul className="list-none p-0 grid grid-cols-1 md:grid-cols-2 gap-8 text-white text-opacity-90 max-w-4xl">
            <li className="flex flex-col items-center text-center p-4 bg-white bg-opacity-10 rounded-lg shadow-md">
              <span className="text-5xl mb-3">💰</span>
              <h3 className="text-2xl font-semibold mb-2">Empowering Farmers Economically</h3>
              <p className="text-lg text-primary-dull">
                
                To develop an e-commerce platform that allows farmers to directly sell their agricultural products to consumers and distributors. 
                This eliminates middlemen, thereby improving farmers' profits.
              </p>
            </li>
            <li className="flex flex-col items-center text-center p-4 bg-white bg-opacity-10 rounded-lg shadow-md">
              <span className="text-5xl mb-3">💡</span>
              <h3 className="text-2xl font-semibold mb-2">Optimizing Agricultural Planning</h3>
              <p className="text-lg text-primary-dull">
                To provide Crop recommendations to optimize productivity and profitability. This system helps farmers make informed crop choices based on factors like soil quality, preventing low yields due to lack of data.
              </p>
            </li>
          </ul>
          <p className="text-lg leading-relaxed text-white text-opacity-90 mt-8 text-center max-w-3xl">
            We envision Agri-Link as a platform that enhances both the "economic well-being of farmers and the efficiency of agricultural planning".
          </p>
        </div>
        {/* Placeholder for an image depicting vision, e.g., a farmer using a tablet in a field */}
        <ImagePlaceholder src={assets.farmerWithTablet} alt="Farmer using a tablet in a field" className="mb-16 h-72 md:h-96 lg:h-[450px] xl:h-[550px]"/>

        {/* Separator */}
        <div className="flex justify-center my-16">
          <div className="relative w-24 h-1 bg-green-400 rounded-full">
            <span className="absolute -top-3 left-1/2 -translate-x-1/2 text-green-600 text-3xl">🌾</span>
          </div>
        </div>

        {/* What We Offer */}
        <div className="bg-white p-8 md:p-12 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 ease-in-out max-w-5xl mx-auto mb-16 transform hover:-translate-y-2 border border-green-200">
          <h2 className="text-4xl font-bold text-green-700 mb-8 pb-4 border-b-2 border-green-300 text-center">What We Offer</h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-10 text-center max-w-3xl mx-auto">
            Agri-Link provides a comprehensive set of features designed to support farmers and consumers:
          </p>
          <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 list-none p-0">
            {features.map((feature, index) => (
              <li key={index} className="flex flex-col items-center text-center bg-green-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200 group border border-green-100 h-full">
                <span className="text-green-600 text-5xl mb-4 group-hover:scale-110 transition-transform duration-200">
                  {feature.icon}
                </span>
                <h3 className="text-xl md:text-2xl font-semibold text-green-800 mb-2">{feature.title}</h3>
                <p className="text-base text-gray-700 leading-relaxed">{feature.description}
                  {feature.source && ``}
                </p>
              </li>
            ))}
          </ul>
        </div>

        {/* Separator */}
        <div className="flex justify-center my-16">
          <div className="relative w-24 h-1 bg-green-400 rounded-full">
            <span className="absolute -top-3 left-1/2 -translate-x-1/2 text-green-600 text-3xl">🧑‍💻</span>
          </div>
        </div>

        {/* Our Team */}
        <div className="bg-white p-8 md:p-12 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 ease-in-out max-w-5xl mx-auto mb-16 transform hover:-translate-y-2 border border-green-200">
          <h2 className="text-4xl font-bold text-green-700 mb-8 pb-4 border-b-2 border-green-300 text-center">Meet Our Dedicated Team</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-green-50 p-6 rounded-lg shadow-md hover:bg-green-100 transition-colors duration-200 text-center border border-green-100 flex flex-col items-center justify-center">
                <p className="text-xl font-bold text-green-800 mb-1">{member.name}</p>
                <p className="text-base text-gray-600 italic">{member.role}</p>
                <p className="text-sm text-gray-500 mt-1">Roll No: {member.id}</p>
              </div>
            ))}
          </div>
          <p className="text-lg text-gray-700 leading-relaxed text-center max-w-3xl mx-auto mt-10">
            Our project is developed under the invaluable guidance of Mr.Bikram Shah. His continuous support, insightful suggestions, and dedication have been instrumental in the preparation and refinement of this project.
          </p>
        </div>

        {/* Call to Action / Closing */}
        <div className="text-center bg-green-100 p-8 md:p-12 rounded-2xl shadow-inner max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-green-700 mb-6">Join the Agri-Link Movement!</h2>
          <p className="text-lg text-gray-700 mb-8">
            Be a part of a community that's growing smarter, together. Explore Agri-Link today and sow the seeds for a more prosperous tomorrow.
          </p>
          <Link to= "/products" // Link to your main products page or home
            className="inline-block bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-8 rounded-full text-lg transition-all duration-300 ease-in-out shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            Explore Agri-Link
          </Link>
        </div>

      </div>
    </section>
  );
};

export default About;