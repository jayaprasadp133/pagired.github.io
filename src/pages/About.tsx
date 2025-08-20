import React from 'react';
import { Users, Target, Award, Globe, Heart, Lightbulb } from 'lucide-react';

const About: React.FC = () => {
  const values = [
    {
      icon: Heart,
      title: 'Collaboration',
      description: 'We believe in the power of shared knowledge and collective learning to achieve extraordinary results.'
    },
    {
      icon: Target,
      title: 'Excellence',
      description: 'We strive for excellence in everything we do, from our learning methodologies to customer service.'
    },
    {
      icon: Lightbulb,
      title: 'Innovation',
      description: 'We continuously evolve our approach to learning, embracing new technologies and methodologies.'
    },
    {
      icon: Globe,
      title: 'Accessibility',
      description: 'Quality education and skill development should be accessible to everyone, everywhere.'
    }
  ];

  const teamMembers = [
    {
      name: 'Alex Rivera',
      role: 'CEO & Founder',
      bio: 'Former EdTech executive with 15+ years of experience in digital learning platforms.',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      name: 'Sarah Chen',
      role: 'Chief Learning Officer',
      bio: 'Educational psychologist specializing in collaborative learning and skill development.',
      image: 'https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      name: 'Marcus Johnson',
      role: 'Head of Technology',
      bio: 'Full-stack developer and architect with expertise in scalable learning management systems.',
      image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      name: 'Elena Rodriguez',
      role: 'VP of Operations',
      bio: 'Operations leader with a track record of scaling educational platforms globally.',
      image: 'https://images.pexels.com/photos/3783725/pexels-photo-3783725.jpeg?auto=compress&cs=tinysrgb&w=400'
    }
  ];

  const stats = [
    { label: 'Years of Experience', value: '8+' },
    { label: 'Students Trained', value: '10K+' },
    { label: 'Corporate Partners', value: '50+' },
    { label: 'Skills Programs', value: '100+' }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-indigo-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">About PagirEd</h1>
          <p className="text-xl md:text-2xl text-blue-100 max-w-4xl mx-auto leading-relaxed">
            We're on a mission to democratize skill development through innovative collaborative learning experiences that turn shared ideas into valuable expertise.
          </p>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="space-y-12">
                <div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    To empower individuals and organizations worldwide by transforming shared ideas into practical skills through innovative, collaborative learning experiences. We believe that when knowledge is shared and applied collectively, it becomes a powerful catalyst for personal and professional growth.
                  </p>
                </div>
                
                <div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Vision</h2>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    To create a world where everyone has access to quality skill development opportunities, where learning is collaborative, engaging, and directly applicable to real-world challenges. We envision communities of learners who support each other's growth and success.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Team collaboration"
                className="rounded-lg shadow-xl w-full h-96 object-cover"
              />
              <div className="absolute -bottom-6 -right-6 bg-blue-600 text-white p-6 rounded-lg shadow-lg">
                <div className="text-2xl font-bold">Founded</div>
                <div className="text-lg">2016</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Core Values</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These principles guide everything we do and shape our approach to learning and development.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group hover:-translate-y-2"
              >
                <div className="text-blue-600 mb-6 group-hover:scale-110 transition-transform duration-200">
                  <value.icon size={48} />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                  {stat.value}
                </div>
                <div className="text-blue-100 text-lg">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Meet Our Team</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Passionate educators, technologists, and innovators dedicated to transforming how people learn and grow.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group hover:-translate-y-1"
              >
                <div className="aspect-w-1 aspect-h-1">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-1">{member.name}</h3>
                  <p className="text-blue-600 font-medium mb-3">{member.role}</p>
                  <p className="text-gray-600 text-sm leading-relaxed">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Story Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Story</h2>
            </div>
            
            <div className="prose prose-lg prose-blue mx-auto text-gray-700 leading-relaxed space-y-6">
              <p>
                PagirEd was born from a simple observation: traditional learning methods often fail to harness the collective intelligence of groups. Our founder, Alex Rivera, noticed this gap while working with various organizations struggling to develop their teams' capabilities effectively.
              </p>
              
              <p>
                In 2016, we started as a small team with a big vision - to create learning experiences that would leverage the power of shared knowledge and collaborative problem-solving. We believed that when people learn together, they not only acquire skills faster but also develop deeper understanding and stronger professional relationships.
              </p>
              
              <p>
                Today, PagirEd has evolved into a comprehensive platform that serves individuals, teams, and organizations worldwide. Our innovative approach combines cutting-edge educational technology with proven collaborative learning methodologies to deliver measurable results.
              </p>
              
              <p>
                As we continue to grow, our commitment remains the same: to turn shared ideas into valuable skills that drive personal success and organizational excellence. We're proud to be part of our learners' journeys and excited about the future of collaborative education.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;