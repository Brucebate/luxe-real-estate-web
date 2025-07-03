
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const FeaturedProjects = () => {
  const projects = [
    {
      id: "the-pearl",
      name: "The Pearl",
      type: "Residential",
      location: "Downtown District",
      image: "https://images.unsplash.com/photo-1449157291145-7efd050a4d0e?ixlib=rb-4.0.3&auto=format&fit=crop&w=5760&q=80",
      description: "Luxury 4 BHK Sky Mansions with panoramic city views and world-class amenities.",
      features: ["4 BHK Apartments", "Sky Garden", "Infinity Pool", "Smart Home"]
    },
    {
      id: "the-regent",
      name: "The Regent",
      type: "Residential",
      location: "Tech Corridor",
      image: "https://images.unsplash.com/photo-1459767129954-1b1c1f9b9ace?ixlib=rb-4.0.3&auto=format&fit=crop&w=5760&q=80",
      description: "Premium 3 BHK apartments designed for modern living with sustainable features.",
      features: ["3 BHK Apartments", "Green Building", "Fitness Center", "Children's Play Area"]
    },
    {
      id: "galaxy-tower",
      name: "Galaxy Tower",
      type: "Commercial",
      location: "Business Hub",
      image: "https://images.unsplash.com/photo-1460574283810-2aab119d8511?ixlib=rb-4.0.3&auto=format&fit=crop&w=5512&q=80",
      description: "Grade A office spaces with LEED Gold certification and cutting-edge technology.",
      features: ["Grade A Offices", "LEED Gold", "High-Speed Elevators", "24/7 Security"]
    }
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Projects</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover our flagship developments that showcase our commitment to excellence, 
            innovation, and sustainable living.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="group bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {project.type}
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

        <div className="text-center mt-12">
          <Button variant="outline" size="lg" asChild>
            <Link to="/projects">View All Projects</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;
