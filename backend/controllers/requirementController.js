import Requirement from '../models/Requirement.js';
import { validateRequirementInput } from '../utils/validation.js';

// @desc    Create a new event requirement
// @route   POST /api/requirements
// @access  Public
export const createRequirement = async (req, res, next) => {
  try {
    const { isValid, errors } = validateRequirementInput(req.body);

    if (!isValid) {
      return res.status(400).json({
        success: false,
        message: 'Validation failed',
        errors,
      });
    }

    const {
      eventName,
      eventType,
      startDate,
      endDate,
      location,
      venue,
      category,
      plannerDetails,
      performerDetails,
      crewDetails,
    } = req.body;

    const newRequirement = new Requirement({
      eventName,
      eventType,
      startDate,
      endDate,
      location,
      venue,
      category,
      ...(category === 'planner' && { plannerDetails }),
      ...(category === 'performer' && { performerDetails }),
      ...(category === 'crew' && { crewDetails }),
    });

    const savedRequirement = await newRequirement.save();

    res.status(201).json({
      success: true,
      message: 'Requirement posted successfully!',
      data: savedRequirement,
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Get all requirements (Optional helper endpoint for testing)
// @route   GET /api/requirements
// @access  Public
export const getRequirements = async (req, res, next) => {
  try {
    const requirements = await Requirement.find().sort({ createdAt: -1 });
    res.status(200).json({
      success: true,
      count: requirements.length,
      data: requirements,
    });
  } catch (error) {
    next(error);
  }
};