'use client';

import { useState } from 'react';
// Changed to relative imports
import StepIndicator from '../components/StepIndicator';
import Step1EventBasics from '../components/RequirementForm/Step1EventBasics';
import Step2CategoryDetails from '../components/RequirementForm/Step2CategoryDetails';
import Step3AdditionalDetails from '../components/RequirementForm/Step3AdditionalDetails';
import Step4Review from '../components/RequirementForm/Step4Review';
import Button from '../components/Button';
import { validateStep } from '../utils/validation';
import { submitRequirement } from '../services/requirementApi';

export default function Home() {
    
  const [currentStep, setCurrentStep] = useState(1);
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [submittedData, setSubmittedData] = useState(null);

  const [formData, setFormData] = useState({
    eventName: '',
    eventType: '',
    startDate: '',
    endDate: '',
    location: '',
    venue: '',
    category: '',
    plannerDetails: {},
    performerDetails: {},
    crewDetails: {},
  });

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: null }));
    }
  };

  const handleNext = () => {
    const stepErrors = validateStep(currentStep, formData);
    if (Object.keys(stepErrors).length > 0) {
      setErrors(stepErrors);
      return;
    }
    setErrors({});
    setCurrentStep((prev) => prev + 1);
  };

  const handleBack = () => {
    setErrors({});
    setCurrentStep((prev) => prev - 1);
  };

  const handleSubmit = async () => {
    setLoading(true);
    try {
      const result = await submitRequirement(formData);
      setSubmittedData(result.data);
    } catch (err) {
      alert(err.message || 'Error submitting form');
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-gray-100 py-10 px-4 flex justify-center items-center">
      <div className="max-w-2xl w-full bg-white rounded-xl shadow-lg p-6 md:p-8">
        <h1 className="text-2xl font-bold text-center text-gray-800 mb-6">
          Post Event Requirement
        </h1>

        {submittedData ? (
          <div className="text-center py-8 space-y-4">
            <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto text-3xl font-bold">
              ✓
            </div>
            <h2 className="text-2xl font-bold text-gray-800">Submitted Successfully!</h2>
            <p className="text-gray-600 text-sm">
              Your requirement has been saved to MongoDB under ID: <br />
              <code className="bg-gray-100 px-2 py-1 rounded text-blue-600 font-mono text-xs">{submittedData._id}</code>
            </p>
            <Button onClick={() => window.location.reload()} variant="primary">
              Post Another Requirement
            </Button>
          </div>
        ) : (
          <>
            <StepIndicator currentStep={currentStep} />

            <div className="mt-6">
              {currentStep === 1 && <Step1EventBasics formData={formData} onChange={handleInputChange} errors={errors} />}
              {currentStep === 2 && <Step2CategoryDetails formData={formData} onChange={handleInputChange} errors={errors} />}
              {currentStep === 3 && <Step3AdditionalDetails formData={formData} onChange={handleInputChange} errors={errors} />}
              {currentStep === 4 && <Step4Review formData={formData} />}
            </div>

            <div className="flex justify-between items-center mt-8 border-t pt-4">
              {currentStep > 1 ? (
                <Button onClick={handleBack} variant="secondary" disabled={loading}>
                  Back
                </Button>
              ) : <div />}

              {currentStep < 4 ? (
                <Button onClick={handleNext} variant="primary">
                  Next Step
                </Button>
              ) : (
                <Button onClick={handleSubmit} variant="success" disabled={loading}>
                  {loading ? 'Submitting...' : 'Confirm & Submit'}
                </Button>
              )}
            </div>
          </>
        )}
      </div>
    </main>
  );
}