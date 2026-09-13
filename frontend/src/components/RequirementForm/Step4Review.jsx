export default function Step4Review({ formData }) {
  const renderCategorySummary = () => {
    if (formData.category === "planner") {
      return (
        <div className="space-y-1 text-sm text-gray-700">
          <p>
            <strong>Budget Range:</strong> {formData.plannerDetails?.budget}
          </p>
          <p>
            <strong>Scope of Work:</strong>{" "}
            {formData.plannerDetails?.scopeOfWork}
          </p>
          <p>
            <strong>Guest Count:</strong>{" "}
            {formData.plannerDetails?.expectedGuestCount || "N/A"}
          </p>
        </div>
      );
    }
    if (formData.category === "performer") {
      return (
        <div className="space-y-1 text-sm text-gray-700">
          <p>
            <strong>Performance Type:</strong>{" "}
            {formData.performerDetails?.performanceType}
          </p>
          <p>
            <strong>Duration:</strong>{" "}
            {formData.performerDetails?.durationMinutes} Mins
          </p>
          <p>
            <strong>Sound System Needed:</strong>{" "}
            {formData.performerDetails?.soundEquipmentNeeded ? "Yes" : "No"}
          </p>
          <p>
            <strong>Special Requests:</strong>{" "}
            {formData.performerDetails?.specialRequests || "None"}
          </p>
        </div>
      );
    }
    if (formData.category === "crew") {
      return (
        <div className="space-y-1 text-sm text-gray-700">
          <p>
            <strong>Skill Type:</strong> {formData.crewDetails?.skillType}
          </p>
          <p>
            <strong>Team Size:</strong> {formData.crewDetails?.teamSize}
          </p>
          <p>
            <strong>Daily Rate:</strong> ₹
            {formData.crewDetails?.dailyRate || "N/A"}
          </p>
          <p>
            <strong>Certifications:</strong>{" "}
            {formData.crewDetails?.certificationsRequired || "None"}
          </p>
        </div>
      );
    }
  };

  return (
    <div className="space-y-6">
      <h2 className="text-xl font-bold text-gray-800">
        Step 4: Review & Submit
      </h2>

      <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
        <h3 className="font-semibold text-blue-600 border-b pb-1 mb-2">
          Event Basics
        </h3>
        <div className="grid grid-cols-2 gap-2 text-sm text-gray-700">
          <p>
            <strong>Event Name:</strong> {formData.eventName}
          </p>
          <p>
            <strong>Event Type:</strong> {formData.eventType}
          </p>
          <p>
            <strong>Dates:</strong> {formData.startDate} to {formData.endDate}
          </p>
          <p>
            <strong>Location:</strong> {formData.location}
          </p>
          <p>
            <strong>Venue:</strong> {formData.venue || "N/A"}
          </p>
          <p>
            <strong>Category:</strong>{" "}
            <span className="uppercase font-bold text-indigo-600">
              {formData.category}
            </span>
          </p>
        </div>
      </div>

      <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
        <h3 className="font-semibold text-blue-600 border-b pb-1 mb-2">
          Category Specifications
        </h3>
        {renderCategorySummary()}
      </div>
    </div>
  );
}
