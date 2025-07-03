
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const AboutTeaser = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-4xl font-bold text-gray-900">
              Building Tomorrow's Cities Today
            </h2>
            <p className="text-lg text-gray-600">
              With over two decades of excellence in real estate development, we're committed to creating 
              innovative, modern, and healthier spaces that enhance the way people live and work.
            </p>
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600">50+</div>
                <div className="text-gray-600">Projects Delivered</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600">25+</div>
                <div className="text-gray-600">Awards Won</div>
              </div>
            </div>
            <div className="flex flex-wrap gap-4">
              <div className="bg-white px-4 py-2 rounded-lg border">
                <span className="text-sm font-medium text-gray-700">LEED Certified</span>
              </div>
              <div className="bg-white px-4 py-2 rounded-lg border">
                <span className="text-sm font-medium text-gray-700">ISO 9001:2015</span>
              </div>
              <div className="bg-white px-4 py-2 rounded-lg border">
                <span className="text-sm font-medium text-gray-700">Safety Excellence</span>
              </div>
            </div>
            <Button asChild>
              <Link to="/about">Learn More About Us</Link>
            </Button>
          </div>
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1431576901776-e539bd916ba2?ixlib=rb-4.0.3&auto=format&fit=crop&w=5657&q=80"
              alt="Modern Architecture"
              className="rounded-lg shadow-2xl w-full h-96 object-cover"
            />
            <div className="absolute -bottom-6 -left-6 bg-blue-600 text-white p-6 rounded-lg">
              <div className="text-2xl font-bold">20+</div>
              <div className="text-sm">Years of Excellence</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutTeaser;
