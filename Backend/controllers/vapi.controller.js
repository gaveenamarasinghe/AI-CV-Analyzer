import { createVapiCall } from "../Services/vapi.service.js";

export const startInterview = async (req, res) => {
  try {
    const { cvSummary, role, experience } = req.body;

    const call = await createVapiCall({
      role,
      experience,
      cvSummary,
    });

    res.status(200).json(call);
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: "Failed to start AI interview",
    });
  }
};
