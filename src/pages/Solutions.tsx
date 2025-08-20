import React from 'react';
import { CheckCircle, ArrowRight, Users, Building, GraduationCap, Briefcase, TrendingUp, Target } from 'lucide-react';

const Solutions: React.FC = () => {
  const solutions = [
    {
      icon: Building,
      title: 'Enterprise Learning Platform',
      description: 'Comprehensive learning management system designed for large organizations with complex training needs.',
      features: [
        'Scalable multi-tenant architecture',
        'Advanced analytics and reporting',
        'Integration with existing HR systems',
        'Custom branding and white-labeling',
        'Multi-language support',
        'Mobile-first responsive design'
      ],
      benefits: [
        'Reduce training costs by up to 60%',
        'Improve employee retention by 40%',
        'Accelerate onboarding by 50%',
        'Increase skill competency by 75%'
      ],
      caseStudy: {
        client: 'TechCorp Global',
        challenge: 'Need to train 5,000+ employees across 20 countries on new technologies',
        solution: 'Deployed PagirEd Enterprise with localized content and adaptive learning paths',
        results: '95% completion rate, 40% reduction in training time, $2M cost savings'
      }
    },
    {
      icon: Users,
      title: 'Team Collaboration Hub',
      description: 'Innovative platform that transforms team dynamics through shared learning experiences and collaborative skill building.',
      features: [
        'Real-time collaboration tools',
        'Peer-to-peer learning networks',
        'Project-based learning modules',
        'Team performance dashboards',
        'Knowledge sharing repositories',
        'Gamification and social learning'
      ],
      benefits: [
        'Boost team productivity by 35%',
        'Enhance cross-functional collaboration',
        'Accelerate knowledge transfer',
        'Build stronger team relationships'
      ],
      caseStudy: {
        client: 'InnovateNow Agency',
        challenge: 'Remote teams struggling with collaboration and skill gaps',
        solution: 'Implemented Team Collaboration Hub with virtual workshops and peer learning',
        results: '85% increase in team collaboration scores, 30% faster project delivery'
      }
    },
    {
      icon: GraduationCap,
      title: 'Skills Transformation Engine',
      description: 'AI-powered learning system that identifies skill gaps and creates personalized development pathways.',
      features: [
        'AI-driven skill gap analysis',
        'Personalized learning recommendations',
        'Adaptive content delivery',
        'Real-time progress tracking',
        'Industry benchmark comparisons',
        'Predictive career planning'
      ],
      benefits: [
        'Identify skill gaps with 90% accuracy',
        'Reduce learning time by 45%',
        'Improve skill relevance by 80%',
        'Increase career advancement opportunities'
      ],
      caseStudy: {
        client: 'Future Finance Corp',
        challenge: 'Rapidly evolving financial technology requiring continuous upskilling',
        solution: 'Deployed Skills Transformation Engine with AI-powered personalization',
        results: '78% of employees achieved skill certifications, 25% internal promotion rate'
      }
    }
  ];

  const industries = [
    {
      name: 'Technology',
      icon: '💻',
      description: 'Software development, DevOps, cybersecurity, and emerging tech skills.'
    },
    {
      name: 'Healthcare',
      icon: '🏥',
      description: 'Medical training, compliance, patient care, and healthcare technology.'
    },
    {
      name: 'Finance',
      icon: '💼',
      description: 'FinTech, regulatory compliance, risk management, and financial analysis.'
    },
    {
      name: 'Manufacturing',
      icon: '🏭',
      description: 'Operational efficiency, safety protocols, and Industry 4.0 technologies.'
    },
    {
      name: 'Education',
      icon: '🎓',
      description: 'Teaching methodologies, educational technology, and curriculum development.'
    },
    {
      name: 'Consulting',
      icon: '📊',
      description: 'Client management, analytical thinking, and specialized domain expertise.'
    }
  ];

  const roi = [
    { metric: 'Training Cost Reduction', value: '60%', description: 'Average cost savings compared to traditional training methods' },
    { metric: 'Learning Efficiency', value: '45%', description: 'Faster skill acquisition through collaborative learning' },
    { metric: 'Employee Retention', value: '40%', description: 'Improvement in employee retention rates' },
    { metric: 'Skill Application', value: '85%', description: 'Of learners apply new skills within 30 days' }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-indigo-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Solutions That Drive Results
              </h1>
              <p className="text-xl text-blue-100 mb-8 leading-relaxed">
                Discover our comprehensive suite of learning solutions designed to transform how organizations develop talent and build capabilities.
              </p>
              <button className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors duration-200">
                Explore Solutions
              </button>
            </div>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Solutions overview"
                className="rounded-lg shadow-xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Core Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Three powerful platforms designed to address different aspects of organizational learning and development.
            </p>
          </div>

          <div className="space-y-20">
            {solutions.map((solution, index) => (
              <div
                key={index}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
                }`}
              >
                <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                  <div className="bg-blue-600 text-white p-4 rounded-lg inline-block mb-6">
                    <solution.icon size={32} />
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                    {solution.title}
                  </h3>
                  <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                    {solution.description}
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">Key Features:</h4>
                      <ul className="space-y-2">
                        {solution.features.slice(0, 3).map((feature, idx) => (
                          <li key={idx} className="flex items-center text-sm text-gray-700">
                            <CheckCircle size={16} className="text-blue-600 mr-2 flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">Benefits:</h4>
                      <ul className="space-y-2">
                        {solution.benefits.slice(0, 3).map((benefit, idx) => (
                          <li key={idx} className="flex items-center text-sm text-gray-700">
                            <TrendingUp size={16} className="text-green-600 mr-2 flex-shrink-0" />
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors duration-200 inline-flex items-center">
                    Learn More
                    <ArrowRight size={16} className="ml-2" />
                  </button>
                </div>

                <div className={index % 2 === 1 ? 'lg:col-start-1' : ''}>
                  <div className="bg-gray-50 p-8 rounded-xl">
                    <h4 className="text-lg font-semibold text-gray-900 mb-4">Case Study</h4>
                    <div className="space-y-4">
                      <div>
                        <span className="font-medium text-blue-600">{solution.caseStudy.client}</span>
                      </div>
                      <div>
                        <span className="font-medium">Challenge:</span>
                        <p className="text-gray-700 text-sm mt-1">{solution.caseStudy.challenge}</p>
                      </div>
                      <div>
                        <span className="font-medium">Solution:</span>
                        <p className="text-gray-700 text-sm mt-1">{solution.caseStudy.solution}</p>
                      </div>
                      <div>
                        <span className="font-medium text-green-600">Results:</span>
                        <p className="text-gray-700 text-sm mt-1 font-medium">{solution.caseStudy.results}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Industries We Serve
            </h2>
            <p className="text-xl text-gray-600">
              Tailored solutions for diverse industry needs and challenges.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 group hover:-translate-y-1"
              >
                <div className="text-4xl mb-4">{industry.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {industry.name}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {industry.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ROI Section */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Proven Return on Investment
            </h2>
            <p className="text-xl text-blue-100">
              Measurable outcomes that justify your learning and development investment.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {roi.map((item, index) => (
              <div key={index} className="text-center">
                <div className="bg-white text-blue-600 p-6 rounded-xl shadow-lg mb-4">
                  <div className="text-3xl md:text-4xl font-bold mb-2">
                    {item.value}
                  </div>
                  <div className="text-sm font-semibold text-gray-900">
                    {item.metric}
                  </div>
                </div>
                <p className="text-blue-100 text-sm">
                  {item.description}
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
              Ready to Transform Your Organization?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Let's discuss which solution best fits your unique needs and goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200">
                Request Demo
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-colors duration-200">
                Download Case Studies
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Solutions;