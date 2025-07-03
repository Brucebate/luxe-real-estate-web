
import { useState } from "react";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Projects = () => {
  const [filter, setFilter] = useState("all");

  const projects = [
    {
      id: "the-pearl",
      name: "The Pearl",
      type: "residential",
      status: "completed",
      location: "Downtown District",
      image: "https://images.unsplash.com/photo-1449157291145-7efd050a4d0e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Luxury 4 BHK Sky Mansions with panoramic city views and world-class amenities.",
      price: "Starting from $850,000",
      features: ["4 BHK Apartments", "Sky Garden", "Infinity Pool", "Smart Home"]
    },
    {
      id: "the-regent",
      name: "The Regent",
      type: "residential",
      status: "ongoing",
      location: "Tech Corridor",
      image: "https://images.unsplash.com/photo-1459767129954-1b1c1f9b9ace?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Premium 3 BHK apartments designed for modern living with sustainable features.",
      price: "Starting from $650,000",
      features: ["3 BHK Apartments", "Green Building", "Fitness Center", "Children's Play Area"]
    },
    {
      id: "galaxy-tower",
      name: "Galaxy Tower",
      type: "commercial",
      status: "completed",
      location: "Business Hub",
      image: "https://images.unsplash.com/photo-1460574283810-2aab119d8511?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Grade A office spaces with LEED Gold certification and cutting-edge technology.",
      price: "From $45/sq ft",
      features: ["Grade A Offices", "LEED Gold", "High-Speed Elevators", "24/7 Security"]
    },
    {
      id: "emerald-gardens",
      name: "Emerald Gardens",
      type: "residential",
      status: "upcoming",
      location: "Green Valley",
      image: "https://images.unsplash.com/photo-1551038247-3d9af20df552?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Eco-friendly villas with private gardens and sustainable living features.",
      price: "Starting from $1,200,000",
      features: ["Private Villas", "Organic Gardens", "Solar Power", "Rain Water Harvesting"]
    },
    {
      id: "platinum-plaza",
      name: "Platinum Plaza",
      type: "commercial",
      status: "ongoing",
      location: "Financial District",
      image: "https://images.unsplash.com/photo-1524230572899-a752b3835840?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Mixed-use development with retail spaces and premium offices.",
      price: "From $55/sq ft",
      features: ["Retail Spaces", "Premium Offices", "Food Court", "Ample Parking"]
    },
    {
      id: "skyline-residences",
      name: "Skyline Residences",
      type: "residential",
      status: "completed",
      location: "City Center",
      image: "https://images.unsplash.com/photo-1493397212122-2b85dda8106b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "High-rise luxury apartments with stunning city skyline views.",
      price: "Starting from $750,000",
      features: ["2 & 3 BHK", "Skyline Views", "Rooftop Garden", "Concierge Service"]
    }
  ];

  const filteredProjects = projects.filter(project => {
    if (filter === "all") return true;
    return project.type === filter || project.status === filter;
  });

  const filterOptions = [
    { value: "all", label: "All Projects" },
    { value: "residential", label: "Residential" },
    { value: "commercial", label: "Commercial" },
    { value: "completed", label: "Completed" },
    { value: "ongoing", label: "Ongoing" },
    { value: "upcoming", label: "Upcoming" }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative h-64 bg-gradient-to-r from-blue-600 to-blue-800">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative z-10 flex items-center justify-center h-full">
          <div className="text-center text-white">
            <h1 className="text-4xl font-bold mb-4">Our Projects</h1>
            <p className="text-lg opacity-90">Discover our portfolio of exceptional developments</p>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 bg-gray-50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex flex-wrap gap-2 justify-center">
            {filterOptions.map((option) => (
              <Button
                key={option.value}
                variant={filter === option.value ? "default" : "outline"}
                onClick={() => setFilter(option.value)}
                className="mb-2"
              >
                {option.label}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-12">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <div key={project.id} className="group bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.name}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4 flex gap-2">
                    <span className={`px-3 py-1 rounded-full text-sm font-medium text-white ${
                      project.type === "residential" ? "bg-green-600" : "bg-blue-600"
                    }`}>
                      {project.type.charAt(0).toUpperCase() + project.type.slice(1)}
                    </span>
                    <span className={`px-3 py-1 rounded-full text-sm font-medium text-white ${
                      project.status === "completed" ? "bg-gray-600" : 
                      project.status === "ongoing" ? "bg-orange-600" : "bg-purple-600"
                    }`}>
                      {project.status.charAt(0).toUpperCase() + project.status.slice(1)}
                    </span>
                  </div>
                  <div className="absolute bottom-4 right-4">
                    <span className="bg-white/90 text-gray-900 px-3 py-1 rounded-full text-sm font-medium">
                      {project.price}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="mb-2">
                    <h3 className="text-xl font-bold text-gray-900">{project.name}</h3>
                    <p className="text-gray-600">{project.location}</p>
                  </div>
                  
                  <p className="text-gray-700 mb-4">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.features.map((feature) => (
                      <span key={feature} className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-sm">
                        {feature}
                      </span>
                    ))}
                  </div>
                  
                  <Button asChild className="w-full">
                    <Link to={`/projects/${project.id}`}>View Details</Link>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Projects;
