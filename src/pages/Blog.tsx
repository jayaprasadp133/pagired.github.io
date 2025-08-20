import React from 'react';
import { Calendar, User, ArrowRight, Tag, Clock } from 'lucide-react';

const Blog: React.FC = () => {
  const featuredPost = {
    id: 1,
    title: 'The Future of Collaborative Learning: Trends Shaping 2024',
    excerpt: 'Explore the emerging trends in collaborative learning that are revolutionizing how organizations approach skill development and team building.',
    author: 'Sarah Chen',
    date: '2024-01-15',
    readTime: '8 min read',
    category: 'Industry Insights',
    image: 'https://images.pexels.com/photos/3184317/pexels-photo-3184317.jpeg?auto=compress&cs=tinysrgb&w=800',
    featured: true
  };

  const blogPosts = [
    {
      id: 2,
      title: 'Building High-Performance Teams Through Shared Learning',
      excerpt: 'Discover proven strategies for creating teams that learn and grow together, leading to unprecedented performance improvements.',
      author: 'Marcus Johnson',
      date: '2024-01-12',
      readTime: '6 min read',
      category: 'Team Development',
      image: 'https://images.pexels.com/photos/3184436/pexels-photo-3184436.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      id: 3,
      title: 'ROI of Corporate Learning: Measuring What Matters',
      excerpt: 'Learn how to effectively measure the return on investment of your corporate learning initiatives with actionable metrics.',
      author: 'Elena Rodriguez',
      date: '2024-01-10',
      readTime: '7 min read',
      category: 'Business Strategy',
      image: 'https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      id: 4,
      title: 'Overcoming Remote Learning Challenges: A Practical Guide',
      excerpt: 'Practical solutions for the most common challenges faced by organizations implementing remote learning programs.',
      author: 'Alex Rivera',
      date: '2024-01-08',
      readTime: '5 min read',
      category: 'Remote Learning',
      image: 'https://images.pexels.com/photos/4050290/pexels-photo-4050290.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      id: 5,
      title: 'Gamification in Professional Development: Best Practices',
      excerpt: 'How to effectively incorporate gamification elements into your professional development programs for maximum engagement.',
      author: 'Sarah Chen',
      date: '2024-01-05',
      readTime: '6 min read',
      category: 'Learning Design',
      image: 'https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      id: 6,
      title: 'The Psychology of Skill Acquisition in Adults',
      excerpt: 'Understanding the cognitive processes behind adult learning to design more effective skill development programs.',
      author: 'Dr. Michael Park',
      date: '2024-01-03',
      readTime: '9 min read',
      category: 'Learning Science',
      image: 'https://images.pexels.com/photos/3184639/pexels-photo-3184639.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      id: 7,
      title: 'Creating a Culture of Continuous Learning',
      excerpt: 'Step-by-step approach to building organizational cultures that prioritize and support continuous learning and development.',
      author: 'Elena Rodriguez',
      date: '2024-01-01',
      readTime: '8 min read',
      category: 'Organizational Culture',
      image: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=600'
    }
  ];

  const categories = [
    'All Posts',
    'Industry Insights',
    'Team Development',
    'Business Strategy',
    'Remote Learning',
    'Learning Design',
    'Learning Science',
    'Organizational Culture'
  ];

  const caseStudies = [
    {
      title: 'How TechCorp Reduced Training Costs by 60%',
      company: 'TechCorp Global',
      industry: 'Technology',
      result: '60% cost reduction, 5000+ employees trained',
      image: 'https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      title: 'InnovateNow\'s Journey to Better Team Collaboration',
      company: 'InnovateNow Agency',
      industry: 'Marketing',
      result: '85% improvement in collaboration scores',
      image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      title: 'Future Finance\'s AI-Powered Skills Transformation',
      company: 'Future Finance Corp',
      industry: 'Financial Services',
      result: '78% certification rate, 25% promotion rate',
      image: 'https://images.pexels.com/photos/3184319/pexels-photo-3184319.jpeg?auto=compress&cs=tinysrgb&w=400'
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-indigo-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Blog & Resources</h1>
          <p className="text-xl md:text-2xl text-blue-100 max-w-4xl mx-auto leading-relaxed">
            Insights, best practices, and industry trends to help you maximize your learning and development initiatives.
          </p>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Featured Article</h2>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center space-x-4 mb-4">
                <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                  {featuredPost.category}
                </span>
                <span className="text-gray-500 text-sm">Featured</span>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                {featuredPost.title}
              </h3>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                {featuredPost.excerpt}
              </p>
              <div className="flex items-center space-x-6 mb-6">
                <div className="flex items-center space-x-2">
                  <User size={16} className="text-gray-500" />
                  <span className="text-sm text-gray-700">{featuredPost.author}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Calendar size={16} className="text-gray-500" />
                  <span className="text-sm text-gray-700">{featuredPost.date}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock size={16} className="text-gray-500" />
                  <span className="text-sm text-gray-700">{featuredPost.readTime}</span>
                </div>
              </div>
              <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors duration-200 inline-flex items-center">
                Read Article
                <ArrowRight size={16} className="ml-2" />
              </button>
            </div>
            <div>
              <img
                src={featuredPost.image}
                alt={featuredPost.title}
                className="rounded-lg shadow-xl w-full h-80 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-gray-50 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-3">
            {categories.map((category, index) => (
              <button
                key={index}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${
                  index === 0
                    ? 'bg-blue-600 text-white'
                    : 'bg-white text-gray-700 hover:bg-blue-50 hover:text-blue-600'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Latest Articles</h2>
            <p className="text-xl text-gray-600">
              Stay updated with the latest insights and trends in learning and development.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <article
                key={post.id}
                className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden group hover:-translate-y-1"
              >
                <div className="aspect-w-16 aspect-h-9">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs font-medium">
                      {post.category}
                    </span>
                    <span className="text-xs text-gray-500">{post.readTime}</span>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3 line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <User size={14} className="text-gray-500" />
                      <span className="text-xs text-gray-700">{post.author}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Calendar size={14} className="text-gray-500" />
                      <span className="text-xs text-gray-700">{post.date}</span>
                    </div>
                  </div>
                </div>
                <div className="px-6 pb-6">
                  <button className="text-blue-600 font-medium text-sm hover:text-blue-700 transition-colors duration-200 inline-flex items-center">
                    Read More
                    <ArrowRight size={14} className="ml-1" />
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Success Stories
            </h2>
            <p className="text-xl text-gray-600">
              Real results from organizations that have transformed their learning initiatives.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 group hover:-translate-y-1"
              >
                <img
                  src={study.image}
                  alt={study.company}
                  className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="p-6">
                  <div className="text-xs text-blue-600 font-medium mb-2 uppercase tracking-wide">
                    {study.industry}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    {study.title}
                  </h3>
                  <p className="text-sm text-gray-600 mb-3">{study.company}</p>
                  <p className="text-sm font-medium text-green-600 mb-4">
                    {study.result}
                  </p>
                  <button className="text-blue-600 font-medium text-sm hover:text-blue-700 transition-colors duration-200 inline-flex items-center">
                    Read Case Study
                    <ArrowRight size={14} className="ml-1" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Stay Informed
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Subscribe to our newsletter for the latest insights, trends, and best practices in learning and development.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg border-0 focus:ring-2 focus:ring-blue-300 focus:outline-none"
              />
              <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors duration-200 whitespace-nowrap">
                Subscribe
              </button>
            </div>
            <p className="text-xs text-blue-200 mt-3">
              No spam. Unsubscribe at any time.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;