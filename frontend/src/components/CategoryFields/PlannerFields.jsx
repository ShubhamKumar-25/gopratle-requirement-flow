import FormInput from "../FormInput";

export default function PlannerFields({ formData, onChange, errors, step }) {
  const handleNestedChange = (e) => {
    const { name, value } = e.target;
    onChange("plannerDetails", {
      ...formData.plannerDetails,
      [name]: value,
    });
  };

  if (step === 2) {
    return (
      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-gray-800 border-b pb-2">
          Planner Core Details
        </h3>
        <FormInput
          label="Estimated Budget Range"
          name="budget"
          value={formData.plannerDetails?.budget || ""}
          onChange={handleNestedChange}
          placeholder="e.g. ₹50,000 - ₹1,00,000"
          error={errors.budget}
          required
        />
        <FormInput
          label="Scope of Work"
          type="select"
          name="scopeOfWork"
          value={formData.plannerDetails?.scopeOfWork || ""}
          onChange={handleNestedChange}
          error={errors.scopeOfWork}
          required
          options={[
            { label: "Full Event Planning", value: "Full Event Planning" },
            { label: "Decor & Design Only", value: "Decor & Design" },
            { label: "Catering Management", value: "Catering Management" },
            { label: "Day-of Coordination", value: "Day-of Coordination" },
          ]}
        />
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold text-gray-800 border-b pb-2">
        Planner Additional Details
      </h3>
      <FormInput
        label="Expected Guest Count"
        type="number"
        name="expectedGuestCount"
        value={formData.plannerDetails?.expectedGuestCount || ""}
        onChange={handleNestedChange}
        placeholder="e.g. 250"
      />
    </div>
  );
}
