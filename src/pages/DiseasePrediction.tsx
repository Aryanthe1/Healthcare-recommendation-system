import React, { useState } from 'react';
import { Brain, AlertCircle, CheckCircle, Activity } from 'lucide-react';

interface PredictionForm {
  age: string;
  bloodPressure: string;
  glucoseLevel: string;
  heartRate: string;
  cholesterol: string;
  weight: string;
  height: string;
  smokingStatus: string;
  exerciseFrequency: string;
  familyHistory: string[];
}

interface PredictionResult {
  disease: string;
  probability: number;
  riskLevel: 'Low' | 'Medium' | 'High';
  recommendations: string[];
  explanation: string;
}

export default function DiseasePrediction() {
  const [formData, setFormData] = useState<PredictionForm>({
    age: '',
    bloodPressure: '',
    glucoseLevel: '',
    heartRate: '',
    cholesterol: '',
    weight: '',
    height: '',
    smokingStatus: '',
    exerciseFrequency: '',
    familyHistory: []
  });

  const [prediction, setPrediction] = useState<PredictionResult | null>(null);
  const [loading, setLoading] = useState(false);

  const handleInputChange = (field: keyof PredictionForm, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleFamilyHistoryChange = (condition: string, checked: boolean) => {
    setFormData(prev => ({
      ...prev,
      familyHistory: checked
        ? [...prev.familyHistory, condition]
        : prev.familyHistory.filter(item => item !== condition)
    }));
  };

  const predictDisease = async () => {
    setLoading(true);
    
    // Mock ML prediction algorithm
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    const age = parseInt(formData.age);
    const bp = parseInt(formData.bloodPressure.split('/')[0]) || 0;
    const glucose = parseInt(formData.glucoseLevel);
    const heartRate = parseInt(formData.heartRate);
    const cholesterol = parseInt(formData.cholesterol);
    
    // Simple risk calculation based on input parameters
    let riskScore = 0;
    
    if (age > 65) riskScore += 3;
    else if (age > 50) riskScore += 2;
    else if (age > 35) riskScore += 1;
    
    if (bp > 140) riskScore += 3;
    else if (bp > 120) riskScore += 1;
    
    if (glucose > 140) riskScore += 3;
    else if (glucose > 100) riskScore += 1;
    
    if (heartRate > 100) riskScore += 2;
    if (cholesterol > 240) riskScore += 2;
    
    if (formData.smokingStatus === 'current') riskScore += 3;
    else if (formData.smokingStatus === 'former') riskScore += 1;
    
    if (formData.exerciseFrequency === 'none') riskScore += 2;
    
    riskScore += formData.familyHistory.length;
    
    const probability = Math.min(Math.max(riskScore * 8 + Math.random() * 20, 10), 85);
    
    let disease = 'General Health';
    let riskLevel: 'Low' | 'Medium' | 'High' = 'Low';
    let recommendations: string[] = [];
    
    if (riskScore >= 8) {
      disease = 'Cardiovascular Disease';
      riskLevel = 'High';
      recommendations = [
        'Consult with a cardiologist immediately',
        'Start a heart-healthy diet low in sodium and saturated fats',
        'Begin regular moderate exercise as approved by your doctor',
        'Monitor blood pressure daily',
        'Consider medication consultation for cholesterol management'
      ];
    } else if (riskScore >= 4) {
      disease = 'Pre-diabetes / Metabolic Syndrome';
      riskLevel = 'Medium';
      recommendations = [
        'Schedule regular check-ups with your primary care physician',
        'Adopt a balanced diet with reduced sugar intake',
        'Increase physical activity to 150 minutes per week',
        'Monitor blood glucose levels regularly',
        'Consider lifestyle counseling'
      ];
    } else {
      disease = 'General Wellness';
      riskLevel = 'Low';
      recommendations = [
        'Continue maintaining your healthy lifestyle',
        'Regular health screenings as per age recommendations',
        'Maintain a balanced diet and regular exercise',
        'Stay hydrated and get adequate sleep',
        'Continue avoiding smoking and excessive alcohol'
      ];
    }
    
    const explanation = `Based on your health parameters including age (${age}), blood pressure (${formData.bloodPressure}), glucose level (${glucose}mg/dL), and other factors, our AI model has analyzed your risk profile. The prediction considers multiple risk factors and their interactions to provide a comprehensive assessment.`;
    
    setPrediction({
      disease,
      probability,
      riskLevel,
      recommendations,
      explanation
    });
    
    setLoading(false);
  };

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 flex items-center">
          <Brain className="h-8 w-8 text-blue-600 mr-3" />
          Disease Prediction
        </h1>
        <p className="text-gray-600 mt-2">
          Enter your health parameters for AI-powered disease risk assessment.
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        {/* Input Form */}
        <div className="bg-white rounded-xl shadow-sm p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-6">Health Parameters</h2>
          
          <div className="space-y-6">
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Age *
                </label>
                <input
                  type="number"
                  value={formData.age}
                  onChange={(e) => handleInputChange('age', e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Enter your age"
                  required
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Blood Pressure (mmHg) *
                </label>
                <input
                  type="text"
                  value={formData.bloodPressure}
                  onChange={(e) => handleInputChange('bloodPressure', e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="e.g., 120/80"
                  required
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Glucose Level (mg/dL) *
                </label>
                <input
                  type="number"
                  value={formData.glucoseLevel}
                  onChange={(e) => handleInputChange('glucoseLevel', e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="e.g., 95"
                  required
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Heart Rate (BPM) *
                </label>
                <input
                  type="number"
                  value={formData.heartRate}
                  onChange={(e) => handleInputChange('heartRate', e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="e.g., 72"
                  required
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Cholesterol (mg/dL)
                </label>
                <input
                  type="number"
                  value={formData.cholesterol}
                  onChange={(e) => handleInputChange('cholesterol', e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="e.g., 200"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Weight (kg)
                </label>
                <input
                  type="number"
                  value={formData.weight}
                  onChange={(e) => handleInputChange('weight', e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="e.g., 70"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Smoking Status
                </label>
                <select
                  value={formData.smokingStatus}
                  onChange={(e) => handleInputChange('smokingStatus', e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="">Select status</option>
                  <option value="never">Never smoked</option>
                  <option value="former">Former smoker</option>
                  <option value="current">Current smoker</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Exercise Frequency
                </label>
                <select
                  value={formData.exerciseFrequency}
                  onChange={(e) => handleInputChange('exerciseFrequency', e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="">Select frequency</option>
                  <option value="daily">Daily</option>
                  <option value="weekly">3-5 times per week</option>
                  <option value="occasionally">1-2 times per week</option>
                  <option value="none">Rarely/Never</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-3">
                Family History (select all that apply)
              </label>
              <div className="grid md:grid-cols-2 gap-2">
                {['Heart Disease', 'Diabetes', 'High Blood Pressure', 'Stroke', 'Cancer', 'Obesity'].map((condition) => (
                  <label key={condition} className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      checked={formData.familyHistory.includes(condition)}
                      onChange={(e) => handleFamilyHistoryChange(condition, e.target.checked)}
                      className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                    />
                    <span className="text-sm text-gray-700">{condition}</span>
                  </label>
                ))}
              </div>
            </div>

            <button
              onClick={predictDisease}
              disabled={loading || !formData.age || !formData.bloodPressure || !formData.glucoseLevel || !formData.heartRate}
              className="w-full bg-blue-600 text-white py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? 'Analyzing...' : 'Predict Disease Risk'}
            </button>
          </div>
        </div>

        {/* Results */}
        <div className="space-y-6">
          {loading && (
            <div className="bg-white rounded-xl shadow-sm p-6">
              <div className="flex items-center justify-center space-x-3">
                <Activity className="h-8 w-8 text-blue-600 animate-spin" />
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">Analyzing Your Health Data</h3>
                  <p className="text-gray-600">Our AI is processing your information...</p>
                </div>
              </div>
            </div>
          )}

          {prediction && (
            <>
              <div className="bg-white rounded-xl shadow-sm p-6">
                <h2 className="text-xl font-semibold text-gray-900 mb-4">Prediction Results</h2>
                
                <div className="space-y-4">
                  <div className={`p-4 rounded-lg ${
                    prediction.riskLevel === 'High' ? 'bg-red-50 border border-red-200' :
                    prediction.riskLevel === 'Medium' ? 'bg-yellow-50 border border-yellow-200' :
                    'bg-green-50 border border-green-200'
                  }`}>
                    <div className="flex items-center space-x-3">
                      {prediction.riskLevel === 'High' ? (
                        <AlertCircle className="h-6 w-6 text-red-600" />
                      ) : prediction.riskLevel === 'Medium' ? (
                        <AlertCircle className="h-6 w-6 text-yellow-600" />
                      ) : (
                        <CheckCircle className="h-6 w-6 text-green-600" />
                      )}
                      <div>
                        <h3 className={`font-semibold ${
                          prediction.riskLevel === 'High' ? 'text-red-900' :
                          prediction.riskLevel === 'Medium' ? 'text-yellow-900' :
                          'text-green-900'
                        }`}>
                          {prediction.disease}
                        </h3>
                        <p className={`text-sm ${
                          prediction.riskLevel === 'High' ? 'text-red-700' :
                          prediction.riskLevel === 'Medium' ? 'text-yellow-700' :
                          'text-green-700'
                        }`}>
                          Risk Level: {prediction.riskLevel} ({prediction.probability.toFixed(1)}% probability)
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-medium text-gray-900 mb-2">Explanation</h4>
                    <p className="text-gray-700 text-sm">{prediction.explanation}</p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-sm p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Recommendations</h3>
                <ul className="space-y-3">
                  {prediction.recommendations.map((recommendation, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{recommendation}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </>
          )}

          {!prediction && !loading && (
            <div className="bg-white rounded-xl shadow-sm p-6 text-center">
              <Brain className="h-12 w-12 text-gray-400 mx-auto mb-4" />
              <h3 className="text-lg font-medium text-gray-900 mb-2">Ready for Prediction</h3>
              <p className="text-gray-600">Fill out the form on the left to get your personalized disease risk assessment.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}