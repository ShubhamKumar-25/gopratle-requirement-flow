export default function StepIndicator({ currentStep, totalSteps = 4 }) {
  const steps = [
    "Event Basics",
    "Category Specs",
    "Additional Info",
    "Review & Submit",
  ];

  return (
    <div className="w-full mb-8">
      <div className="flex justify-between items-center">
        {steps.map((label, index) => {
          const stepNum = index + 1;
          const isActive = stepNum === currentStep;
          const isCompleted = stepNum < currentStep;

          return (
            <div
              key={stepNum}
              className="flex flex-col items-center flex-1 relative"
            >
              <div
                className={`w-9 h-9 flex items-center justify-center rounded-full font-bold text-sm transition-all z-10 ${
                  isCompleted
                    ? "bg-green-600 text-white"
                    : isActive
                      ? "bg-blue-600 text-white ring-4 ring-blue-100"
                      : "bg-gray-200 text-gray-500"
                }`}
              >
                {isCompleted ? "✓" : stepNum}
              </div>
              <span
                className={`text-xs mt-2 text-center font-medium ${isActive ? "text-blue-600" : "text-gray-500"}`}
              >
                {label}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
