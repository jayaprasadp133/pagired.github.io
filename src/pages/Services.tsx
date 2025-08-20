import React from 'react';
import { Users, BookOpen, Target, Award, Briefcase, MessageSquare, BarChart3, Zap } from 'lucide-react';

const Services: React.FC = () => {
  const services = [
    {
      icon: Users,
      title: 'Collaborative Learning Programs',
      description: 'Structured learning experiences that bring teams together to develop skills through shared projects and peer-to-peer learning.',
      features: [
        'Group-based skill development',
        'Peer learning circles',
        'Collaborative project assignments',
        'Cross-functional team building'
      ],
      price: 'From $299/month per team'
    },
    {
      icon: BookOpen,
      title: 'Custom Skill Development',
      description: 'Tailored learning paths designed specifically for your organization\'s unique needs and industry requirements.',
      features: [
        'Industry-specific curricula',
        'Custom learning modules',
        'Personalized assessment tools',
        'Adaptive learning paths'
      ],
      price: 'Custom pricing'
    },
    {
      icon: Target,
      title: 'Leadership Development',
      description: 'Comprehensive programs designed to develop effective leaders who can drive organizational success and team growth.',
      features: [
        'Executive coaching sessions',
        'Leadership skill workshops',
        'Strategic thinking modules',
        '360-degree feedback system'
      ],
      price: 'From $199/month per participant'
    },
    {
      icon: Award,
      title: 'Skills Assessment & Certification',
      description: 'Rigorous evaluation and certification programs that validate skills and provide recognized credentials.',
      features: [
        'Comprehensive skill assessments',
        'Industry-recognized certifications',
        'Progress tracking dashboards',
        'Digital badge system'
      ],
      price: 'From $99/assessment'
    },
    {
      icon: Briefcase,
      title: 'Corporate Training Solutions',
      description: 'End-to-end training solutions for enterprises looking to upskill their workforce at scale.',
      features: [
        'Enterprise-wide deployment',
        'Learning management system',
        'Advanced analytics & reporting',
        'White-label options available'
      ],
      price: 'Contact for enterprise pricing'
    },
    {
      icon: MessageSquare,
      title: 'Mentorship Programs',
      description: 'Connect learners with industry experts and experienced professionals for personalized guidance and support.',
      features: [
        '1-on-1 mentorship sessions',
        'Group mentoring circles',
        'Expert-led masterclasses',
        'Career guidance & planning'
      ],
      price: 'From $149/month per mentee'
    }
  ];

  const additionalServices = [
    {
      icon: BarChart3,
      title: 'Learning Analytics',
      description: 'Comprehensive insights into learning progress, engagement, and skill development outcomes.'
    },
    {
      icon: Zap,
      title: 'Rapid Skill Workshops',
      description: 'Intensive short-format learning sessions for quick skill acquisition and immediate application.'
    }
  ];

  const processSteps = [
    {
      step: '01',
      title: 'Consultation',
      description: 'We start by understanding your goals, challenges, and specific learning requirements.'
    },
    {
      step: '02',
      title: 'Customization',
      description: 'Our team designs a tailored learning solution that fits your organization\'s unique needs.'
    },
    {
      step: '03',
      title: 'Implementation',
      description: 'We deploy the learning program with full support and onboarding for all participants.'
    },
    {
      step: '04',
      title: 'Optimization',
      description: 'Continuous monitoring and improvement to ensure maximum learning outcomes and ROI.'
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-indigo-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h1>
          <p className="text-xl md:text-2xl text-blue-100 max-w-4xl mx-auto leading-relaxed">
            Comprehensive learning solutions designed to transform individuals and organizations through collaborative skill development.
          </p>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Transform Your Skills Today
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose from our comprehensive range of learning solutions designed to meet diverse needs and drive measurable results.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group hover:-translate-y-1 flex flex-col"
              >
                <div className="p-8 flex-grow">
                  <div className="text-blue-600 mb-6 group-hover:scale-110 transition-transform duration-200">
                    <service.icon size={48} />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-700">
                        <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="p-8 pt-0">
                  <div className="text-lg font-semibold text-blue-600 mb-4">
                    {service.price}
                  </div>
                  <button className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-medium hover:bg-blue-700 transition-colors duration-200">
                    Get Started
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Additional Services
            </h2>
            <p className="text-xl text-gray-600">
              Complementary offerings to enhance your learning experience.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {additionalServices.map((service, index) => (
              <div
                key={index}
                className="bg-gray-50 p-8 rounded-xl border hover:shadow-lg transition-all duration-300 group"
              >
                <div className="text-blue-600 mb-4 group-hover:scale-110 transition-transform duration-200">
                  <service.icon size={40} />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our Process
            </h2>
            <p className="text-xl text-blue-100">
              A proven approach to delivering successful learning outcomes.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="bg-white text-blue-600 w-16 h-16 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-6">
                  {step.step}
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">
                  {step.title}
                </h3>
                <p className="text-blue-100 leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Let's discuss how our services can help you achieve your learning and development goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200">
                Schedule Consultation
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-colors duration-200">
                View Pricing Details
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;