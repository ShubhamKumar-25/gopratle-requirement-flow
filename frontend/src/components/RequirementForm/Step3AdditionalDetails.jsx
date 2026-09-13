import PlannerFields from "../CategoryFields/PlannerFields";
import PerformerFields from "../CategoryFields/PerformerFields";
import CrewFields from "../CategoryFields/CrewFields";

export default function Step3AdditionalDetails({ formData, onChange, errors }) {
  return (
    <div>
      <h2 className="text-xl font-bold text-gray-800 mb-4">
        Step 3: Additional Logistics
      </h2>
      {formData.category === "planner" && (
        <PlannerFields
          formData={formData}
          onChange={onChange}
          errors={errors}
          step={3}
        />
      )}
      {formData.category === "performer" && (
        <PerformerFields
          formData={formData}
          onChange={onChange}
          errors={errors}
          step={3}
        />
      )}
      {formData.category === "crew" && (
        <CrewFields
          formData={formData}
          onChange={onChange}
          errors={errors}
          step={3}
        />
      )}
    </div>
  );
}
