import FormInput from "../FormInput";

export default function CrewFields({ formData, onChange, errors, step }) {
  const handleNestedChange = (e) => {
    const { name, value } = e.target;
    onChange("crewDetails", {
      ...formData.crewDetails,
      [name]: value,
    });
  };

  if (step === 2) {
    return (
      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-gray-800 border-b pb-2">
          Crew Skill Requirements
        </h3>
        <FormInput
          label="Skill Type"
          type="select"
          name="skillType"
          value={formData.crewDetails?.skillType || ""}
          onChange={handleNestedChange}
          error={errors.skillType}
          required
          options={[
            { label: "Sound Engineer", value: "Sound Engineer" },
            { label: "Lighting Technician", value: "Lighting Technician" },
            { label: "Videographer / Photographer", value: "Videographer" },
            { label: "Stage Management Crew", value: "Stage Crew" },
            { label: "Security Personnel", value: "Security" },
          ]}
        />
        <FormInput
          label="Team Size Needed"
          type="number"
          name="teamSize"
          value={formData.crewDetails?.teamSize || ""}
          onChange={handleNestedChange}
          placeholder="e.g. 5"
          error={errors.teamSize}
          required
        />
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold text-gray-800 border-b pb-2">
        Crew Budget & Certifications
      </h3>
      <FormInput
        label="Daily Budget per Person (₹)"
        type="number"
        name="dailyRate"
        value={formData.crewDetails?.dailyRate || ""}
        onChange={handleNestedChange}
        placeholder="e.g. 2500"
      />
      <FormInput
        label="Required Certifications / Gear"
        type="textarea"
        name="certificationsRequired"
        value={formData.crewDetails?.certificationsRequired || ""}
        onChange={handleNestedChange}
        placeholder="Mention required licences, equipment, etc."
      />
    </div>
  );
}
