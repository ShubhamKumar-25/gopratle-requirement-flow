import mongoose from 'mongoose';

const plannerSchema = new mongoose.Schema(
  {
    budget: { type: String, required: true },
    scopeOfWork: { type: String, required: true },
    expectedGuestCount: { type: Number, default: 0 },
    additionalServices: [{ type: String }],
  },
  { _id: false }
);

const performerSchema = new mongoose.Schema(
  {
    performanceType: { type: String, required: true },
    durationMinutes: { type: Number, required: true },
    soundEquipmentNeeded: { type: Boolean, default: false },
    specialRequests: { type: String, default: '' },
  },
  { _id: false }
);

const crewSchema = new mongoose.Schema(
  {
    skillType: { type: String, required: true },
    teamSize: { type: Number, required: true },
    dailyRate: { type: Number, default: 0 },
    certificationsRequired: { type: String, default: '' },
  },
  { _id: false }
);

const requirementSchema = new mongoose.Schema(
  {
    eventName: { type: String, required: true, trim: true },
    eventType: { type: String, required: true, trim: true },
    startDate: { type: Date, required: true },
    endDate: { type: Date, required: true },
    location: { type: String, required: true, trim: true },
    venue: { type: String, trim: true, default: '' },
    category: {
      type: String,
      required: true,
      enum: ['planner', 'performer', 'crew'],
    },
    plannerDetails: {
      type: plannerSchema,
      required: function () {
        return this.category === 'planner';
      },
    },
    performerDetails: {
      type: performerSchema,
      required: function () {
        return this.category === 'performer';
      },
    },
    crewDetails: {
      type: crewSchema,
      required: function () {
        return this.category === 'crew';
      },
    },
  },
  { timestamps: true }
);

const Requirement = mongoose.model('Requirement', requirementSchema);
export default Requirement;