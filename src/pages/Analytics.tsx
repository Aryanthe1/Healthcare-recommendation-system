import React from 'react';
import { BarChart3, TrendingUp, Users, Activity, Brain, Pill, AlertTriangle } from 'lucide-react';

export default function Analytics() {
  const systemStats = [
    {
      icon: Users,
      label: 'Total Users',
      value: '2,543',
      change: '+12%',
      changeType: 'positive',
      color: 'blue'
    },
    {
      icon: Brain,
      label: 'Predictions Made',
      value: '8,921',
      change: '+23%',
      changeType: 'positive',
      color: 'purple'
    },
    {
      icon: Pill,
      label: 'Recommendations',
      value: '5,467',
      change: '+18%',
      changeType: 'positive',
      color: 'teal'
    },
    {
      icon: TrendingUp,
      label: 'Accuracy Rate',
      value: '94.2%',
      change: '+2.1%',
      changeType: 'positive',
      color: 'green'
    }
  ];

  const modelPerformance = [
    {
      model: 'Cardiovascular Disease Prediction',
      accuracy: '96.7%',
      samples: '15,432',
      lastUpdated: '2 hours ago',
      status: 'active'
    },
    {
      model: 'Diabetes Risk Assessment',
      accuracy: '94.3%',
      samples: '12,876',
      lastUpdated: '4 hours ago',
      status: 'active'
    },
    {
      model: 'Medicine Recommendation Engine',
      accuracy: '91.8%',
      samples: '8,543',
      lastUpdated: '6 hours ago',
      status: 'active'
    },
    {
      model: 'General Health Screening',
      accuracy: '89.2%',
      samples: '6,234',
      lastUpdated: '1 day ago',
      status: 'training'
    }
  ];

  const userActivity = [
    { date: '2024-01-20', predictions: 45, recommendations: 32 },
    { date: '2024-01-19', predictions: 52, recommendations: 38 },
    { date: '2024-01-18', predictions: 38, recommendations: 25 },
    { date: '2024-01-17', predictions: 41, recommendations: 29 },
    { date: '2024-01-16', predictions: 48, recommendations: 35 },
    { date: '2024-01-15', predictions: 55, recommendations: 42 },
    { date: '2024-01-14', predictions: 49, recommendations: 36 }
  ];

  const alerts = [
    {
      type: 'warning',
      message: 'Model accuracy dropped below threshold for Sleep Disorder Prediction',
      time: '30 minutes ago'
    },
    {
      type: 'info',
      message: 'New dataset available for training: Mental Health Screening',
      time: '2 hours ago'
    },
    {
      type: 'success',
      message: 'Successfully deployed updated Cardiovascular model v2.1',
      time: '4 hours ago'
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">System Analytics</h1>
        <p className="text-gray-600 mt-2">Monitor system performance, user activity, and model accuracy.</p>
      </div>

      {/* System Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {systemStats.map((stat, index) => (
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
                  <span className="text-sm text-gray-500 ml-1">vs last month</span>
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
        {/* Model Performance */}
        <div className="lg:col-span-2">
          <div className="bg-white rounded-xl shadow-sm p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-6">Model Performance</h2>
            <div className="space-y-4">
              {modelPerformance.map((model, index) => (
                <div key={index} className="border border-gray-200 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="font-semibold text-gray-900">{model.model}</h3>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      model.status === 'active' ? 'bg-green-100 text-green-800' :
                      model.status === 'training' ? 'bg-yellow-100 text-yellow-800' :
                      'bg-gray-100 text-gray-800'
                    }`}>
                      {model.status}
                    </span>
                  </div>
                  
                  <div className="grid grid-cols-3 gap-4">
                    <div>
                      <span className="text-sm text-gray-600">Accuracy</span>
                      <p className="text-lg font-semibold text-green-600">{model.accuracy}</p>
                    </div>
                    <div>
                      <span className="text-sm text-gray-600">Samples</span>
                      <p className="text-lg font-semibold text-gray-900">{model.samples}</p>
                    </div>
                    <div>
                      <span className="text-sm text-gray-600">Updated</span>
                      <p className="text-sm text-gray-700">{model.lastUpdated}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* User Activity Chart */}
          <div className="bg-white rounded-xl shadow-sm p-6 mt-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-6">Daily Activity</h2>
            <div className="space-y-4">
              {userActivity.map((day, index) => (
                <div key={index} className="flex items-center space-x-4">
                  <div className="w-24 text-sm text-gray-600">
                    {new Date(day.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
                  </div>
                  <div className="flex-1 grid grid-cols-2 gap-4">
                    <div>
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-gray-600">Predictions</span>
                        <span className="font-medium">{day.predictions}</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div 
                          className="bg-blue-600 h-2 rounded-full" 
                          style={{ width: `${(day.predictions / 60) * 100}%` }}
                        />
                      </div>
                    </div>
                    <div>
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-gray-600">Recommendations</span>
                        <span className="font-medium">{day.recommendations}</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div 
                          className="bg-teal-600 h-2 rounded-full" 
                          style={{ width: `${(day.recommendations / 45) * 100}%` }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Alerts & System Status */}
        <div className="space-y-6">
          <div className="bg-white rounded-xl shadow-sm p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">System Alerts</h2>
            <div className="space-y-3">
              {alerts.map((alert, index) => (
                <div key={index} className={`p-3 rounded-lg border-l-4 ${
                  alert.type === 'warning' ? 'bg-yellow-50 border-yellow-400' :
                  alert.type === 'success' ? 'bg-green-50 border-green-400' :
                  'bg-blue-50 border-blue-400'
                }`}>
                  <div className="flex items-start space-x-2">
                    {alert.type === 'warning' ? (
                      <AlertTriangle className="h-4 w-4 text-yellow-600 mt-0.5" />
                    ) : alert.type === 'success' ? (
                      <Activity className="h-4 w-4 text-green-600 mt-0.5" />
                    ) : (
                      <Brain className="h-4 w-4 text-blue-600 mt-0.5" />
                    )}
                    <div>
                      <p className={`text-sm font-medium ${
                        alert.type === 'warning' ? 'text-yellow-900' :
                        alert.type === 'success' ? 'text-green-900' :
                        'text-blue-900'
                      }`}>
                        {alert.message}
                      </p>
                      <p className="text-xs text-gray-500 mt-1">{alert.time}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">System Health</h2>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-gray-600">CPU Usage</span>
                <span className="font-semibold text-green-600">23%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-green-600 h-2 rounded-full" style={{ width: '23%' }} />
              </div>

              <div className="flex items-center justify-between">
                <span className="text-gray-600">Memory Usage</span>
                <span className="font-semibold text-yellow-600">67%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-yellow-600 h-2 rounded-full" style={{ width: '67%' }} />
              </div>

              <div className="flex items-center justify-between">
                <span className="text-gray-600">API Response Time</span>
                <span className="font-semibold text-green-600">142ms</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-green-600 h-2 rounded-full" style={{ width: '30%' }} />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Top Predictions</h2>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-gray-700">Cardiovascular Risk</span>
                <span className="bg-red-100 text-red-800 px-2 py-1 rounded-full text-xs font-medium">
                  35%
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-700">Diabetes Risk</span>
                <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full text-xs font-medium">
                  28%
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-700">General Wellness</span>
                <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs font-medium">
                  22%
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-700">Hypertension Risk</span>
                <span className="bg-orange-100 text-orange-800 px-2 py-1 rounded-full text-xs font-medium">
                  15%
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}