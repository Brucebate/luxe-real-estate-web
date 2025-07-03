
import Layout from "@/components/Layout";

const About = () => {
  const achievements = [
    { title: "LEED Gold Certification", description: "Sustainable construction practices" },
    { title: "Safety Excellence Award", description: "Zero accident construction sites" },
    { title: "Architectural Excellence", description: "Innovation in design and execution" },
    { title: "Customer Choice Award", description: "Highest customer satisfaction ratings" }
  ];

  const team = [
    {
      name: "John Stevens",
      role: "Chief Executive Officer",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
      bio: "20+ years in real estate development and urban planning"
    },
    {
      name: "Sarah Martinez",
      role: "Chief Technology Officer",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b647?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
      bio: "Expert in sustainable architecture and green building technologies"
    },
    {
      name: "David Kim",
      role: "Head of Operations",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
      bio: "Specializes in project management and quality assurance"
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative h-96 bg-gradient-to-r from-blue-600 to-blue-800">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative z-10 flex items-center justify-center h-full">
          <div className="text-center text-white">
            <h1 className="text-5xl font-bold mb-4">About LuxeRealty</h1>
            <p className="text-xl opacity-90">Building Tomorrow's Cities Today</p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
              <p className="text-lg text-gray-700 mb-6">
                To provide innovative, modern, and healthier spaces that enhance the way people live, 
                work, and connect with their communities. We are committed to creating sustainable 
                developments that contribute to vibrant, modern cities of tomorrow.
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-blue-600 rounded-full flex-shrink-0 mt-1"></div>
                  <p className="text-gray-700">Trust and transparency in every interaction</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-blue-600 rounded-full flex-shrink-0 mt-1"></div>
                  <p className="text-gray-700">Customer-centricity in design and service</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-blue-600 rounded-full flex-shrink-0 mt-1"></div>
                  <p className="text-gray-700">Sustainability and environmental responsibility</p>
                </div>
              </div>
            </div>
            <div>
              <img
                src="https://images.unsplash.com/photo-1439337153520-7082a56a81f4?ixlib=rb-4.0.3&auto=format&fit=crop&w=4000&q=80"
                alt="Modern Architecture"
                className="rounded-lg shadow-lg w-full h-96 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Awards & Certifications</h2>
            <p className="text-lg text-gray-600">
              Recognition for our commitment to excellence and innovation
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {achievements.map((achievement, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-yellow-500 rounded-full mx-auto mb-4"></div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{achievement.title}</h3>
                <p className="text-gray-600 text-sm">{achievement.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Leadership Team</h2>
            <p className="text-lg text-gray-600">
              Meet the visionaries driving our success
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div key={index} className="text-center">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-xl font-semibold text-gray-900 mb-1">{member.name}</h3>
                <p className="text-blue-600 font-medium mb-3">{member.role}</p>
                <p className="text-gray-600 text-sm">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology & Sustainability */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="https://images.unsplash.com/photo-1497604401993-f2e922e5cb0a?ixlib=rb-4.0.3&auto=format&fit=crop&w=3346&q=80"
                alt="Sustainable Construction"
                className="rounded-lg shadow-lg w-full h-96 object-cover"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Innovation & Sustainability</h2>
              <p className="text-lg text-gray-700 mb-6">
                We leverage cutting-edge precast technology and sustainable construction practices 
                to deliver projects that are not only beautiful but also environmentally responsible 
                and energy-efficient.
              </p>
              <div className="space-y-4">
                <div className="bg-white p-4 rounded-lg shadow">
                  <h4 className="font-semibold text-gray-900 mb-2">Precast Technology</h4>
                  <p className="text-gray-600 text-sm">Advanced construction methods for faster, more efficient building</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow">
                  <h4 className="font-semibold text-gray-900 mb-2">Green Building Standards</h4>
                  <p className="text-gray-600 text-sm">LEED certified projects with energy-efficient systems</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow">
                  <h4 className="font-semibold text-gray-900 mb-2">Smart Home Integration</h4>
                  <p className="text-gray-600 text-sm">IoT-enabled homes for modern, connected living</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
