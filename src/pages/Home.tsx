import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Users, Target, Lightbulb, TrendingUp, Star } from 'lucide-react';

const Home: React.FC = () => {
  const features = [
    {
      icon: Users,
      title: 'Collaborative Learning',
      description: 'Connect with peers and learn together in a supportive environment.'
    },
    {
      icon: Target,
      title: 'Goal-Oriented',
      description: 'Set clear objectives and track your progress with measurable outcomes.'
    },
    {
      icon: Lightbulb,
      title: 'Innovative Methods',
      description: 'Experience cutting-edge learning techniques tailored to your needs.'
    },
    {
      icon: TrendingUp,
      title: 'Continuous Growth',
      description: 'Develop skills that evolve with industry demands and trends.'
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Product Manager',
      company: 'TechCorp',
      content: 'PagirEd transformed how our team collaborates and learns. The results speak for themselves.',
      rating: 5
    },
    {
      name: 'Michael Chen',
      role: 'Software Developer',
      company: 'StartupXYZ',
      content: 'The innovative approach to skill development helped me advance my career significantly.',
      rating: 5
    },
    {
      name: 'Emily Davis',
      role: 'Marketing Director',
      company: 'Global Solutions',
      content: 'Outstanding platform that genuinely turns ideas into actionable skills.',
      rating: 5
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 text-white py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-transparent"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                  Turning Shared Ideas into <span className="text-blue-200">Skills</span>
                </h1>
                <p className="text-xl md:text-2xl text-blue-100 leading-relaxed">
                  Learn, Build, and Showcase with PagirEd
                </p>
                <p className="text-lg text-blue-200 max-w-xl">
                  Transform your potential into expertise through our innovative learning platform that connects minds, builds capabilities, and showcases achievements.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:bg-blue-50 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl group"
                >
                  Get Started Today
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-200" size={20} />
                </Link>
                <Link
                  to="/about"
                  className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-blue-600 transition-all duration-200"
                >
                  Learn More
                </Link>
              </div>

              <div className="flex items-center space-x-8 pt-4">
                <div className="text-center">
                  <div className="text-3xl font-bold">500+</div>
                  <div className="text-blue-200 text-sm">Active Learners</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold">95%</div>
                  <div className="text-blue-200 text-sm">Success Rate</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold">50+</div>
                  <div className="text-blue-200 text-sm">Skills Available</div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <CheckCircle className="text-green-400" size={24} />
                    <span className="text-lg">Interactive Learning Modules</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <CheckCircle className="text-green-400" size={24} />
                    <span className="text-lg">Real-world Project Applications</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <CheckCircle className="text-green-400" size={24} />
                    <span className="text-lg">Expert Mentorship Program</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <CheckCircle className="text-green-400" size={24} />
                    <span className="text-lg">Skills Certification</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose PagirEd?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our unique approach combines collaborative learning with practical application to deliver measurable results.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 group hover:-translate-y-1"
              >
                <div className="text-blue-600 mb-6 group-hover:scale-110 transition-transform duration-200">
                  <feature.icon size={48} />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What Our Clients Say
            </h2>
            <p className="text-xl text-gray-600">
              Hear from professionals who have transformed their skills with PagirEd.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-gray-50 p-8 rounded-xl border hover:shadow-lg transition-shadow duration-300"
              >
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={20} className="text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 italic">
                  "{testimonial.content}"
                </p>
                <div className="border-t pt-4">
                  <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                  <p className="text-sm text-gray-600">
                    {testimonial.role} at {testimonial.company}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Skills?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Join hundreds of professionals who have already started their journey with PagirEd.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:bg-blue-50 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl group"
            >
              Start Your Journey
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-200" size={20} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;