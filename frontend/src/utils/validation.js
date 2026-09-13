export const validateStep = (step, formData) => {
  const errors = {};

  if (step === 1) {
    if (!formData.eventName?.trim()) errors.eventName = 'Event name is required.';
    if (!formData.eventType?.trim()) errors.eventType = 'Event type is required.';
    if (!formData.startDate) errors.startDate = 'Start date is required.';
    if (!formData.endDate) errors.endDate = 'End date is required.';
    if (formData.startDate && formData.endDate && new Date(formData.startDate) > new Date(formData.endDate)) {
      errors.endDate = 'End date cannot be earlier than start date.';
    }
    if (!formData.location?.trim()) errors.location = 'Location is required.';
    if (!formData.category) errors.category = 'Please select a category.';
  }

  if (step === 2 || step === 3) {
    const { category, plannerDetails, performerDetails, crewDetails } = formData;

    if (category === 'planner') {
      if (!plannerDetails?.budget) errors.budget = 'Budget range is required.';
      if (!plannerDetails?.scopeOfWork) errors.scopeOfWork = 'Scope of work is required.';
    }

    if (category === 'performer') {
      if (!performerDetails?.performanceType) errors.performanceType = 'Performance type is required.';
      if (!performerDetails?.durationMinutes) errors.durationMinutes = 'Duration is required.';
    }

    if (category === 'crew') {
      if (!crewDetails?.skillType) errors.skillType = 'Skill type is required.';
      if (!crewDetails?.teamSize) errors.teamSize = 'Team size is required.';
    }
  }

  return errors;
};