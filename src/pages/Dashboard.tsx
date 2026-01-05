import React from 'react';
import { BarChart3, TrendingUp, Users, Activity, Brain, Pill, Stethoscope, AlertTriangle } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';

export default function Dashboard() {
  const { user } = useAuth();

  const stats = [
    {
      icon: Activity,
      label: 'Health Score',
      value: '85%',
      change: '+5%',
      changeType: 'positive',
      color: 'blue'
    },
    {
      icon: Brain,
      label: 'Predictions Made',
      value: '12',
      change: '+3',
      changeType: 'positive',
      color: 'teal'
    },
    {
      icon: Pill,
      label: 'Recommendations',
      value: '8',
      change: '+2',
      changeType: 'positive',
      color: 'orange'
    },
    {
      icon: TrendingUp,
      label: 'Improvement Rate',
      value: '92%',
      change: '+7%',
      changeType: 'positive',
      color: 'green'
    }
  ];

  const recentActivity = [
    {
      type: 'prediction',
      title: 'Disease Prediction Completed',
      description: 'Cardiovascular risk assessment',
      time: '2 hours ago',
      status: 'success'
    },
    {
      type: 'recommendation',
      title: 'Medicine Recommendation Updated',
      description: 'Blood pressure medication adjusted',
      time: '1 day ago',
      status: 'info'
    },
    {
      type: 'alert',
      title: 'Health Alert',
      description: 'Schedule follow-up appointment',
      time: '2 days ago',
      status: 'warning'
    }
  ];

  const healthInsights = [
    {
      title: 'Blood Pressure Trend',
      value: 'Improving',
      description: 'Your BP has been stable for 2 weeks',
      color: 'green'
    },
    {
      title: 'Risk Assessment',
      value: 'Low Risk',
      description: 'Cardiovascular risk factors are minimal',
      color: 'blue'
    },
    {
      title: 'Medication Adherence',
      value: '95%',
      description: 'Excellent compliance with prescribed medications',
      color: 'teal'
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">
          Welcome back, {user?.name}
        </h1>
        <p className="text-gray-600 mt-2">
          Here's your personalized healthcare overview and recommendations.
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">{stat.label}</p>
                <p className="text-2xl font-bold text-gray-900 mt-1">{stat.value}</p>
                <div className="flex items-center mt-2">
                  <span className={`text-sm font-medium ${
                    stat.changeType === 'positive' ? 'text-green-600' : 'text-red-600'
                  }`}>
                    {stat.change}
                  </span>
                  <span className="text-sm text-gray-500 ml-1">from last month</span>
                </div>
              </div>
              <div className={`p-3 rounded-lg bg-${stat.color}-100`}>
                <stat.icon className={`h-6 w-6 text-${stat.color}-600`} />
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Recent Activity */}
        <div className="lg:col-span-2">
          <div className="bg-white rounded-xl shadow-sm p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-6">Recent Activity</h2>
            <div className="space-y-4">
              {recentActivity.map((activity, index) => (
                <div key={index} className="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg">
                  <div className={`p-2 rounded-lg ${
                    activity.status === 'success' ? 'bg-green-100' :
                    activity.status === 'warning' ? 'bg-yellow-100' : 'bg-blue-100'
                  }`}>
                    {activity.type === 'prediction' && <Brain className={`h-5 w-5 ${
                      activity.status === 'success' ? 'text-green-600' :
                      activity.status === 'warning' ? 'text-yellow-600' : 'text-blue-600'
                    }`} />}
                    {activity.type === 'recommendation' && <Pill className={`h-5 w-5 ${
                      activity.status === 'success' ? 'text-green-600' :
                      activity.status === 'warning' ? 'text-yellow-600' : 'text-blue-600'
                    }`} />}
                    {activity.type === 'alert' && <AlertTriangle className={`h-5 w-5 ${
                      activity.status === 'success' ? 'text-green-600' :
                      activity.status === 'warning' ? 'text-yellow-600' : 'text-blue-600'
                    }`} />}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900">{activity.title}</h3>
                    <p className="text-gray-600 text-sm">{activity.description}</p>
                    <p className="text-gray-500 text-xs mt-1">{activity.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Health Insights */}
        <div className="space-y-6">
          <div className="bg-white rounded-xl shadow-sm p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Health Insights</h2>
            <div className="space-y-4">
              {healthInsights.map((insight, index) => (
                <div key={index} className="border-l-4 border-blue-500 pl-4">
                  <h3 className="font-semibold text-gray-900">{insight.title}</h3>
                  <p className={`text-lg font-bold text-${insight.color}-600`}>{insight.value}</p>
                  <p className="text-sm text-gray-600">{insight.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Actions */}
          <div className="bg-white rounded-xl shadow-sm p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Quick Actions</h2>
            <div className="space-y-3">
              <button className="w-full text-left p-4 bg-blue-50 hover:bg-blue-100 rounded-lg transition-colors duration-200">
                <div className="flex items-center space-x-3">
                  <Stethoscope className="h-5 w-5 text-blue-600" />
                  <span className="font-medium text-blue-900">New Disease Prediction</span>
                </div>
              </button>
              <button className="w-full text-left p-4 bg-teal-50 hover:bg-teal-100 rounded-lg transition-colors duration-200">
                <div className="flex items-center space-x-3">
                  <Pill className="h-5 w-5 text-teal-600" />
                  <span className="font-medium text-teal-900">Medicine Recommendation</span>
                </div>
              </button>
              <button className="w-full text-left p-4 bg-orange-50 hover:bg-orange-100 rounded-lg transition-colors duration-200">
                <div className="flex items-center space-x-3">
                  <BarChart3 className="h-5 w-5 text-orange-600" />
                  <span className="font-medium text-orange-900">View Analytics</span>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}