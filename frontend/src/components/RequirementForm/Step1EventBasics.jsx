import FormInput from "../FormInput";

export default function Step1EventBasics({ formData, onChange, errors }) {
  const handleChange = (e) => {
    const { name, value } = e.target;
    onChange(name, value);
  };

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-bold text-gray-800 mb-4">
        Step 1: Event Basics
      </h2>

      <FormInput
        label="Event Name"
        name="eventName"
        value={formData.eventName}
        onChange={handleChange}
        placeholder="e.g. Annual Tech Symposium 2026"
        error={errors.eventName}
        required
      />

      <FormInput
        label="Event Type"
        type="select"
        name="eventType"
        value={formData.eventType}
        onChange={handleChange}
        error={errors.eventType}
        required
        options={[
          { label: "Wedding", value: "Wedding" },
          { label: "Corporate Event", value: "Corporate Event" },
          { label: "Concert / Festival", value: "Concert" },
          { label: "Private Party", value: "Private Party" },
        ]}
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <FormInput
          label="Start Date"
          type="date"
          name="startDate"
          value={formData.startDate}
          onChange={handleChange}
          error={errors.startDate}
          required
        />

        <FormInput
          label="End Date"
          type="date"
          name="endDate"
          value={formData.endDate}
          onChange={handleChange}
          error={errors.endDate}
          required
        />
      </div>

      <FormInput
        label="Location (City, State)"
        name="location"
        value={formData.location}
        onChange={handleChange}
        placeholder="e.g. New Delhi, Delhi"
        error={errors.location}
        required
      />

      <FormInput
        label="Venue Name (Optional)"
        name="venue"
        value={formData.venue}
        onChange={handleChange}
        placeholder="e.g. Pragati Maidan Hall 3"
      />

      <FormInput
        label="Category Selection"
        type="select"
        name="category"
        value={formData.category}
        onChange={handleChange}
        error={errors.category}
        required
        options={[
          { label: "Event Planner", value: "planner" },
          { label: "Performer", value: "performer" },
          { label: "Crew Member / Staff", value: "crew" },
        ]}
      />
    </div>
  );
}
