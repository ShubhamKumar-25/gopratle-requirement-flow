export const validateRequirementInput = (data) => {
  const errors = [];

  // Step 1: Event Basics Validation
  if (!data.eventName || data.eventName.trim() === '') {
    errors.push('Event Name is required.');
  }
  if (!data.eventType || data.eventType.trim() === '') {
    errors.push('Event Type is required.');
  }
  if (!data.startDate) {
    errors.push('Start Date is required.');
  }
  if (!data.endDate) {
    errors.push('End Date is required.');
  }
  if (data.startDate && data.endDate && new Date(data.startDate) > new Date(data.endDate)) {
    errors.push('End Date cannot be before Start Date.');
  }
  if (!data.location || data.location.trim() === '') {
    errors.push('Location is required.');
  }
  if (!['planner', 'performer', 'crew'].includes(data.category)) {
    errors.push('Invalid category. Must be planner, performer, or crew.');
  }

  // Step 2 & 3: Category-Specific Validation
  if (data.category === 'planner') {
    if (!data.plannerDetails?.budget) errors.push('Budget range is required for Event Planner.');
    if (!data.plannerDetails?.scopeOfWork) errors.push('Scope of work is required for Event Planner.');
  }

  if (data.category === 'performer') {
    if (!data.performerDetails?.performanceType) errors.push('Performance Type is required for Performer.');
    if (!data.performerDetails?.durationMinutes) errors.push('Performance Duration is required for Performer.');
  }

  if (data.category === 'crew') {
    if (!data.crewDetails?.skillType) errors.push('Skill Type is required for Crew.');
    if (!data.crewDetails?.teamSize) errors.push('Team Size is required for Crew.');
  }

  return {
    isValid: errors.length === 0,
    errors,
  };
};