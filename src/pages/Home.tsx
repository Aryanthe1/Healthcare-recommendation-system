import React from 'react';
import { Link } from 'react-router-dom';
import { Brain, Shield, TrendingUp, Users, CheckCircle, ArrowRight } from 'lucide-react';

export default function Home() {
  const features = [
    {
      icon: Brain,
      title: 'AI-Powered Predictions',
      description: 'Advanced machine learning algorithms analyze your health data to predict potential diseases and recommend preventive measures.',
    },
    {
      icon: Shield,
      title: 'Personalized Medicine',
      description: 'Get tailored medicine recommendations based on your medical history, current symptoms, and individual health profile.',
    },
    {
      icon: TrendingUp,
      title: 'Real-time Analytics',
      description: 'Monitor your health trends with comprehensive dashboards and insights powered by advanced data analytics.',
    },
    {
      icon: Users,
      title: 'Collaborative Care',
      description: 'Connect with healthcare professionals and benefit from collective medical knowledge and expertise.',
    },
  ];

  const benefits = [
    'Early disease detection and prevention',
    'Personalized treatment recommendations',
    'Reduced healthcare costs',
    'Improved patient outcomes',
    'Evidence-based medical decisions',
    '24/7 health monitoring'
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-600 via-blue-700 to-teal-600 text-white">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="relative max-w-7xl mx-auto px-4 py-24 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
              AI-Powered Healthcare
              <span className="block text-teal-300">Recommendations</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto">
              Leverage advanced machine learning to predict diseases, recommend personalized treatments, 
              and improve your health outcomes with data-driven insights.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/login"
                className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Get Started
              </Link>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Advanced Healthcare Intelligence
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our platform combines cutting-edge AI technology with medical expertise to provide 
              personalized healthcare recommendations that adapt to your unique needs.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-blue-50 to-teal-50 p-8 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
              >
                <feature.icon className="h-12 w-12 text-blue-600 mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Transform Your Healthcare Experience
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Experience the future of personalized healthcare with AI-driven insights that help you 
                make informed decisions about your health and well-being.
              </p>
              
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700 font-medium">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-xl">
              <div className="mb-6">
                <h3 className="text-2xl font-semibold text-gray-900 mb-2">Ready to Get Started?</h3>
                <p className="text-gray-600">
                  Join thousands of users who are already benefiting from personalized healthcare recommendations.
                </p>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-blue-50 rounded-lg">
                  <span className="font-medium text-blue-900">Disease Prediction</span>
                  <ArrowRight className="h-5 w-5 text-blue-600" />
                </div>
                <div className="flex items-center justify-between p-4 bg-teal-50 rounded-lg">
                  <span className="font-medium text-teal-900">Medicine Recommendations</span>
                  <ArrowRight className="h-5 w-5 text-teal-600" />
                </div>
                <div className="flex items-center justify-between p-4 bg-orange-50 rounded-lg">
                  <span className="font-medium text-orange-900">Health Analytics</span>
                  <ArrowRight className="h-5 w-5 text-orange-600" />
                </div>
              </div>
              
              <Link
                to="/login"
                className="block w-full bg-blue-600 text-white text-center py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-300 mt-6"
              >
                Start Your Journey
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}