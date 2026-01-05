import React, { useState } from 'react';
import { Pill, Clock, AlertTriangle, CheckCircle, Info } from 'lucide-react';

interface SymptomForm {
  primarySymptom: string;
  severity: string;
  duration: string;
  additionalSymptoms: string[];
  medicalConditions: string[];
  currentMedications: string;
  allergies: string;
  age: string;
  weight: string;
}

interface MedicineRecommendation {
  name: string;
  genericName: string;
  dosage: string;
  frequency: string;
  duration: string;
  sideEffects: string[];
  precautions: string[];
  confidence: number;
  reasoning: string;
}

export default function MedicineRecommendation() {
  const [formData, setFormData] = useState<SymptomForm>({
    primarySymptom: '',
    severity: '',
    duration: '',
    additionalSymptoms: [],
    medicalConditions: [],
    currentMedications: '',
    allergies: '',
    age: '',
    weight: ''
  });

  const [recommendations, setRecommendations] = useState<MedicineRecommendation[]>([]);
  const [loading, setLoading] = useState(false);

  const symptoms = [
    'Headache', 'Fever', 'Cough', 'Sore Throat', 'Nausea', 'Stomach Pain',
    'Back Pain', 'Muscle Pain', 'Fatigue', 'Dizziness', 'Insomnia', 'Anxiety'
  ];

  const medicalConditions = [
    'Diabetes', 'Hypertension', 'Heart Disease', 'Asthma', 'Kidney Disease',
    'Liver Disease', 'Depression', 'Anxiety Disorder', 'Arthritis', 'Allergies'
  ];

  const handleInputChange = (field: keyof SymptomForm, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleMultiSelect = (field: 'additionalSymptoms' | 'medicalConditions', item: string, checked: boolean) => {
    setFormData(prev => ({
      ...prev,
      [field]: checked
        ? [...prev[field], item]
        : prev[field].filter(existing => existing !== item)
    }));
  };

  const getMedicineRecommendations = async () => {
    setLoading(true);
    
    // Mock AI medicine recommendation algorithm
    await new Promise(resolve => setTimeout(resolve, 2500));
    
    const mockRecommendations: MedicineRecommendation[] = [];
    
    // Primary symptom-based recommendations
    switch (formData.primarySymptom.toLowerCase()) {
      case 'headache':
        mockRecommendations.push({
          name: 'Ibuprofen',
          genericName: 'Ibuprofen',
          dosage: '400mg',
          frequency: 'Every 6-8 hours',
          duration: '3-5 days',
          sideEffects: ['Stomach upset', 'Dizziness', 'Heartburn'],
          precautions: ['Take with food', 'Avoid alcohol', 'Monitor kidney function'],
          confidence: 92,
          reasoning: 'First-line treatment for tension headaches with anti-inflammatory properties.'
        });
        break;
        
      case 'fever':
        mockRecommendations.push({
          name: 'Acetaminophen',
          genericName: 'Paracetamol',
          dosage: '500-1000mg',
          frequency: 'Every 4-6 hours',
          duration: '3-7 days',
          sideEffects: ['Rare allergic reactions', 'Liver toxicity (high doses)'],
          precautions: ['Do not exceed 4g per day', 'Avoid alcohol', 'Check liver function'],
          confidence: 95,
          reasoning: 'Effective antipyretic with excellent safety profile for fever reduction.'
        });
        break;
        
      case 'cough':
        mockRecommendations.push({
          name: 'Dextromethorphan',
          genericName: 'Dextromethorphan HBr',
          dosage: '15-30mg',
          frequency: 'Every 4 hours',
          duration: '7-14 days',
          sideEffects: ['Drowsiness', 'Dizziness', 'Nausea'],
          precautions: ['Avoid driving', 'Do not combine with alcohol', 'Monitor for breathing issues'],
          confidence: 88,
          reasoning: 'Effective cough suppressant for dry, non-productive coughs.'
        });
        break;
        
      case 'stomach pain':
        mockRecommendations.push({
          name: 'Omeprazole',
          genericName: 'Omeprazole',
          dosage: '20mg',
          frequency: 'Once daily before breakfast',
          duration: '14 days',
          sideEffects: ['Headache', 'Diarrhea', 'Stomach pain'],
          precautions: ['Take before meals', 'Monitor magnesium levels', 'Gradual discontinuation'],
          confidence: 85,
          reasoning: 'Proton pump inhibitor effective for acid-related stomach pain and heartburn.'
        });
        break;
        
      default:
        mockRecommendations.push({
          name: 'Acetaminophen',
          genericName: 'Paracetamol',
          dosage: '500mg',
          frequency: 'Every 6 hours as needed',
          duration: '5-7 days',
          sideEffects: ['Rare allergic reactions'],
          precautions: ['Do not exceed recommended dose', 'Avoid alcohol'],
          confidence: 75,
          reasoning: 'General pain and fever relief medication with good safety profile.'
        });
    }
    
    // Add supportive care recommendation
    mockRecommendations.push({
      name: 'Multivitamin Complex',
      genericName: 'Vitamin B-Complex + Vitamin C',
      dosage: '1 tablet',
      frequency: 'Once daily with meals',
      duration: '30 days',
      sideEffects: ['Mild stomach upset', 'Yellow urine (normal)'],
      precautions: ['Take with food', 'Store in cool, dry place'],
      confidence: 70,
      reasoning: 'Supportive therapy to boost immune system and aid recovery.'
    });
    
    setRecommendations(mockRecommendations);
    setLoading(false);
  };

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 flex items-center">
          <Pill className="h-8 w-8 text-teal-600 mr-3" />
          Medicine Recommendation
        </h1>
        <p className="text-gray-600 mt-2">
          Get personalized medicine recommendations based on your symptoms and medical history.
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        {/* Input Form */}
        <div className="bg-white rounded-xl shadow-sm p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-6">Symptom Assessment</h2>
          
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Primary Symptom *
              </label>
              <select
                value={formData.primarySymptom}
                onChange={(e) => handleInputChange('primarySymptom', e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                required
              >
                <option value="">Select primary symptom</option>
                {symptoms.map((symptom) => (
                  <option key={symptom} value={symptom}>{symptom}</option>
                ))}
              </select>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Severity *
                </label>
                <select
                  value={formData.severity}
                  onChange={(e) => handleInputChange('severity', e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                  required
                >
                  <option value="">Select severity</option>
                  <option value="mild">Mild (1-3)</option>
                  <option value="moderate">Moderate (4-6)</option>
                  <option value="severe">Severe (7-10)</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Duration *
                </label>
                <select
                  value={formData.duration}
                  onChange={(e) => handleInputChange('duration', e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                  required
                >
                  <option value="">Select duration</option>
                  <option value="hours">Few hours</option>
                  <option value="1day">1 day</option>
                  <option value="2-3days">2-3 days</option>
                  <option value="1week">1 week</option>
                  <option value="2weeks">2+ weeks</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-3">
                Additional Symptoms (select all that apply)
              </label>
              <div className="grid md:grid-cols-2 gap-2 max-h-32 overflow-y-auto border border-gray-200 p-3 rounded-lg">
                {symptoms.filter(s => s !== formData.primarySymptom).map((symptom) => (
                  <label key={symptom} className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      checked={formData.additionalSymptoms.includes(symptom)}
                      onChange={(e) => handleMultiSelect('additionalSymptoms', symptom, e.target.checked)}
                      className="rounded border-gray-300 text-teal-600 focus:ring-teal-500"
                    />
                    <span className="text-sm text-gray-700">{symptom}</span>
                  </label>
                ))}
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Age *
                </label>
                <input
                  type="number"
                  value={formData.age}
                  onChange={(e) => handleInputChange('age', e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                  placeholder="Enter your age"
                  required
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
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                  placeholder="Enter your weight"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-3">
                Existing Medical Conditions
              </label>
              <div className="grid md:grid-cols-2 gap-2 max-h-32 overflow-y-auto border border-gray-200 p-3 rounded-lg">
                {medicalConditions.map((condition) => (
                  <label key={condition} className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      checked={formData.medicalConditions.includes(condition)}
                      onChange={(e) => handleMultiSelect('medicalConditions', condition, e.target.checked)}
                      className="rounded border-gray-300 text-teal-600 focus:ring-teal-500"
                    />
                    <span className="text-sm text-gray-700">{condition}</span>
                  </label>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Current Medications
              </label>
              <textarea
                value={formData.currentMedications}
                onChange={(e) => handleInputChange('currentMedications', e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                rows={3}
                placeholder="List any medications you're currently taking"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Known Allergies
              </label>
              <input
                type="text"
                value={formData.allergies}
                onChange={(e) => handleInputChange('allergies', e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                placeholder="e.g., Penicillin, Aspirin, etc."
              />
            </div>

            <button
              onClick={getMedicineRecommendations}
              disabled={loading || !formData.primarySymptom || !formData.severity || !formData.duration || !formData.age}
              className="w-full bg-teal-600 text-white py-4 rounded-lg font-semibold hover:bg-teal-700 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? 'Analyzing Symptoms...' : 'Get Medicine Recommendations'}
            </button>
          </div>
        </div>

        {/* Results */}
        <div className="space-y-6">
          {loading && (
            <div className="bg-white rounded-xl shadow-sm p-6">
              <div className="flex items-center justify-center space-x-3">
                <Pill className="h-8 w-8 text-teal-600 animate-spin" />
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">Analyzing Your Symptoms</h3>
                  <p className="text-gray-600">Our AI is finding the best medicine recommendations...</p>
                </div>
              </div>
            </div>
          )}

          {recommendations.length > 0 && (
            <>
              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                <div className="flex items-start space-x-3">
                  <AlertTriangle className="h-6 w-6 text-yellow-600 mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-yellow-900">Medical Disclaimer</h3>
                    <p className="text-sm text-yellow-800 mt-1">
                      These recommendations are for informational purposes only. Always consult with a healthcare 
                      professional before starting any medication.
                    </p>
                  </div>
                </div>
              </div>

              {recommendations.map((medicine, index) => (
                <div key={index} className="bg-white rounded-xl shadow-sm p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900">{medicine.name}</h3>
                      <p className="text-gray-600">{medicine.genericName}</p>
                    </div>
                    <div className="bg-teal-100 px-3 py-1 rounded-full">
                      <span className="text-sm font-medium text-teal-800">
                        {medicine.confidence}% match
                      </span>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h4 className="font-medium text-gray-900 mb-2 flex items-center">
                        <Info className="h-4 w-4 mr-2" />
                        Dosage & Usage
                      </h4>
                      <div className="grid md:grid-cols-3 gap-3 text-sm">
                        <div>
                          <span className="font-medium text-gray-700">Dosage:</span>
                          <p className="text-gray-600">{medicine.dosage}</p>
                        </div>
                        <div>
                          <span className="font-medium text-gray-700">Frequency:</span>
                          <p className="text-gray-600">{medicine.frequency}</p>
                        </div>
                        <div>
                          <span className="font-medium text-gray-700">Duration:</span>
                          <p className="text-gray-600">{medicine.duration}</p>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h4 className="font-medium text-gray-900 mb-2">Why this medication?</h4>
                      <p className="text-gray-700 text-sm">{medicine.reasoning}</p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <h4 className="font-medium text-gray-900 mb-2">Possible Side Effects</h4>
                        <ul className="space-y-1 text-sm text-gray-600">
                          {medicine.sideEffects.map((effect, idx) => (
                            <li key={idx} className="flex items-center space-x-2">
                              <div className="w-1.5 h-1.5 bg-orange-400 rounded-full"></div>
                              <span>{effect}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div>
                        <h4 className="font-medium text-gray-900 mb-2">Precautions</h4>
                        <ul className="space-y-1 text-sm text-gray-600">
                          {medicine.precautions.map((precaution, idx) => (
                            <li key={idx} className="flex items-center space-x-2">
                              <CheckCircle className="w-3 h-3 text-green-500" />
                              <span>{precaution}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </>
          )}

          {!recommendations.length && !loading && (
            <div className="bg-white rounded-xl shadow-sm p-6 text-center">
              <Pill className="h-12 w-12 text-gray-400 mx-auto mb-4" />
              <h3 className="text-lg font-medium text-gray-900 mb-2">Ready for Assessment</h3>
              <p className="text-gray-600">Complete the symptom form to receive personalized medicine recommendations.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}