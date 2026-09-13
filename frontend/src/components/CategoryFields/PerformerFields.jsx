import FormInput from "../FormInput";

export default function PerformerFields({ formData, onChange, errors, step }) {
  const handleNestedChange = (e) => {
    const { name, value, type, checked } = e.target;
    onChange("performerDetails", {
      ...formData.performerDetails,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  if (step === 2) {
    return (
      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-gray-800 border-b pb-2">
          Performer Core Details
        </h3>
        <FormInput
          label="Performance Type"
          type="select"
          name="performanceType"
          value={formData.performerDetails?.performanceType || ""}
          onChange={handleNestedChange}
          error={errors.performanceType}
          required
          options={[
            { label: "Singer / Vocalist", value: "Singer" },
            { label: "Live Band", value: "Live Band" },
            { label: "DJ", value: "DJ" },
            { label: "Anchor / Host", value: "Anchor" },
            { label: "Dancer / Troupe", value: "Dancer" },
          ]}
        />
        <FormInput
          label="Performance Duration (in Minutes)"
          type="number"
          name="durationMinutes"
          value={formData.performerDetails?.durationMinutes || ""}
          onChange={handleNestedChange}
          placeholder="e.g. 120"
          error={errors.durationMinutes}
          required
        />
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold text-gray-800 border-b pb-2">
        Performer Logistics & Requirements
      </h3>
      <div className="flex items-center gap-2 mb-4">
        <input
          type="checkbox"
          id="soundEquipmentNeeded"
          name="soundEquipmentNeeded"
          checked={formData.performerDetails?.soundEquipmentNeeded || false}
          onChange={handleNestedChange}
          className="w-4 h-4 text-blue-600 rounded"
        />
        <label
          htmlFor="soundEquipmentNeeded"
          className="text-sm font-medium text-gray-700"
        >
          Sound / PA System Required from Event Organiser
        </label>
      </div>
      <FormInput
        label="Special Requests / Song Preferences"
        type="textarea"
        name="specialRequests"
        value={formData.performerDetails?.specialRequests || ""}
        onChange={handleNestedChange}
        placeholder="Mention any specific setup requirements..."
      />
    </div>
  );
}
