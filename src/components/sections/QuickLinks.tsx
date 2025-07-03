
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const QuickLinks = () => {
  const links = [
    {
      title: "Residential Properties",
      description: "Discover luxury apartments, villas, and gated communities",
      icon: "🏠",
      link: "/projects?type=residential"
    },
    {
      title: "Commercial Spaces",
      description: "Find premium office spaces and retail properties",
      icon: "🏢",
      link: "/projects?type=commercial"
    },
    {
      title: "Investment Opportunities",
      description: "Explore high-ROI real estate investment options",
      icon: "💼",
      link: "/contact"
    },
    {
      title: "Schedule a Visit",
      description: "Book a personalized tour of our properties",
      icon: "📅",
      link: "/contact"
    }
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">How Can We Help You?</h2>
          <p className="text-lg text-gray-600">
            Choose from our range of services to find your perfect property solution
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {links.map((item, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow group">
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">
                {item.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.title}</h3>
              <p className="text-gray-600 mb-4 text-sm">{item.description}</p>
              <Button asChild className="w-full">
                <Link to={item.link}>Learn More</Link>
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default QuickLinks;
